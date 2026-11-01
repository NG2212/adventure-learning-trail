import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { ADVENTURES, adventureBody, canOpenAdventure, getAdventure, WAVES } from "@/content/adventures";
import { store, useStoreState } from "@/store";
import type { CompletionResult } from "@/store/types";
import { AdventureIcon } from "@/components/AdventureIcon";
import { AdventureRating } from "@/components/AdventureRating";
import { AdventureTrail } from "@/components/AdventureTrail";
import { PreviewVideo } from "@/components/PreviewVideo";
import { ReviewStamp } from "@/components/ReviewStamp";
import { Chip, LabelChips } from "@/components/LabelChips";
import { ItineraryToggle } from "@/components/ItineraryToggle";
import { PromptWindow } from "@/components/PromptWindow";
import { Celebration } from "@/components/Celebration";
import { cn } from "@/lib/utils";
import { parseAdventure, splitDetails, splitGoFurther, splitPromptWindows } from "@/lib/adventureSteps";
import { WhatsNextPanel } from "@/components/WhatsNext";
import { Button } from "@/components/ui/button";
import { ProofOfWorkDialog } from "@/components/ProofOfWorkDialog";
import { FootprintRating } from "@/components/FootprintRating";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Route = createFileRoute("/adventures/$slug")({
  validateSearch: (search: Record<string, unknown>): { preview?: boolean } =>
    [true, "1", "true"].includes(search["preview"] as never) ? { preview: true } : {},
  loader: ({ params }) => {
    const adventure = getAdventure(params.slug);
    if (!adventure) throw notFound();
    // Canonicalise mis-cased links (e.g. /adventures/De-Slop) instead of 404ing.
    if (adventure.slug !== params.slug) throw redirect({ to: "/adventures/$slug", params: { slug: adventure.slug }, replace: true });
    return { slug: adventure.slug };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-20 text-center">
      <h1 className="text-3xl">We couldn't find that adventure</h1>
      <p className="mt-2 text-muted-foreground">The link may be mistyped, or the adventure may have a new name.</p>
      <Link to="/adventures" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">See all adventures</Link>
    </div>
  ),
  head: ({ loaderData }) => {
    const a = loaderData ? getAdventure(loaderData.slug) : undefined;
    const title = a ? `${a.title} · AI Adventure` : "Adventure · AI Adventure";
    const description = a?.walkaway ?? "An AI Adventure destination.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: AdventurePage,
});

/** Plain text of a hast node (for detecting "In Claude:" callouts). */
type HastLike = { type: string; value?: string; children?: HastLike[] };
function hastText(n: HastLike | undefined): string {
  if (!n) return "";
  if (n.type === "text") return n.value ?? "";
  return (n.children ?? []).map(hastText).join("");
}

/** "In Claude:", "In Claude Cowork:", "In monday agents:" etc. render as small tool callouts. */
function isToolCallout(text: string): boolean {
  return /^In (Claude|Claude Cowork|Claude Code|monday agents|other AI tools)\s*:/i.test(text.trim());
}

/** Markdown renderers: fenced code -> Prompt window; tables -> clean tables. */
const MD: Components = {
  pre: ({ node }) => {
    const code = node?.children[0];
    const text = code && "children" in code ? code.children.map((c) => ("value" in c ? c.value : "")).join("") : "";
    return <PromptWindow text={text.replace(/\n$/, "")} />;
  },
  code: ({ children }) => <code className="rounded bg-muted px-1.5 py-0.5 text-[0.9em]">{children}</code>,
  h3: ({ children }) => <h3 className="mt-8 mb-2 text-xl">{children}</h3>,
  p: ({ node, children }) =>
    isToolCallout(hastText(node as HastLike)) ? (
      <aside className="my-4 rounded-2xl border-l-4 border-primary bg-primary-soft px-4 py-3 text-sm leading-relaxed">{children}</aside>
    ) : (
      <p className="my-3 leading-relaxed">{children}</p>
    ),
  ul: ({ children }) => <ul className="my-3 list-disc space-y-1.5 pl-6">{children}</ul>,
  ol: ({ children }) => <ol className="my-3 list-decimal space-y-1.5 pl-6">{children}</ol>,
  a: ({ children, href }) => {
    const cls = "font-semibold text-primary underline underline-offset-4";
    const internal = href?.match(/^\/adventures\/([\w-]+)$/);
    if (internal?.[1]) return <Link to="/adventures/$slug" params={{ slug: internal[1] }} className={cls}>{children}</Link>;
    return <a href={href} className={cls}>{children}</a>;
  },
  blockquote: ({ node, children }) => {
    const isClaudeTip = isToolCallout(hastText(node as HastLike));
    return isClaudeTip ? (
      <aside className="my-4 rounded-2xl border-l-4 border-primary bg-primary-soft px-4 py-1 text-sm">{children}</aside>
    ) : (
      <blockquote className="my-5 rounded-2xl bg-muted px-5 py-2">{children}</blockquote>
    );
  },
  table: ({ children }) => (
    <div className="my-5 overflow-x-auto rounded-2xl border">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
  th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
  td: ({ children }) => <td className="border-t px-4 py-3">{children}</td>,
};

function Md({ text }: { text: string }) {
  return (
    <>
      {splitDetails(text).map((seg, i) =>
        seg.kind === "md" ? (
          <div key={i}>
             {splitPromptWindows(seg.text).map((part, j) => part.kind === "prompt"
               ? <PromptWindow key={j} title={part.title} text={part.text} />
               : <ReactMarkdown key={j} remarkPlugins={[remarkGfm]} components={MD}>{part.text}</ReactMarkdown>)}
           </div>
        ) : (
          <Collapsible key={i} title={seg.summary}><Md text={seg.text} /></Collapsible>
        ),
      )}
    </>
  );
}

function Collapsible({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group my-4 rounded-2xl border bg-background">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-semibold">
        {title}
        <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-t px-5 pb-3">{children}</div>
    </details>
  );
}

function StepBody({ body, goFurther }: { body: string; goFurther?: boolean }) {
  if (!goFurther) return <Md text={body} />;
  const { intro, cards } = splitGoFurther(body);
  return (
    <>
      {intro && <Md text={intro} />}
      {cards.map((c, i) => <Collapsible key={i} title={c.title}><Md text={c.body} /></Collapsible>)}
    </>
  );
}

function AdventurePage() {
  const { slug } = Route.useLoaderData();
  const adventure = getAdventure(slug);
  if (!adventure) throw notFound();
  return <AdventureContent key={slug} adventure={adventure} />;
}

function AdventureContent({ adventure }: { adventure: NonNullable<ReturnType<typeof getAdventure>> }) {
  const slug = adventure.slug;
  const { completions, person } = useStoreState();
  const { preview: previewRequested } = Route.useSearch();
  const { demoOpenAll } = store.getDemoSettings();
  const open = canOpenAdventure(adventure, demoOpenAll);
  // Keep scheduled admin previews read-only, including while demo access is enabled.
  const preview = !adventure.isOpen && !!previewRequested && person.isAdmin;
  const parsed = useMemo(() => parseAdventure(adventureBody(adventure, preview, demoOpenAll), ADVENTURES), [adventure, preview, demoOpenAll]);
  const { steps, introduction, proof, related, lastCoreStep, hasNumberedSteps } = parsed;
  const [current, setCurrent] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const shouldScroll = useRef(false);
  const selectStep = (index: number) => {
    if (index === current) return;
    shouldScroll.current = true;
    setCurrent(index);
  };
  const [celebration, setCelebration] = useState<CompletionResult | null>(null);
  const [proofDialog, setProofDialog] = useState(false);
  const entry = store.getProofOfWork(slug);
  const done = completions.some((c) => c.slug === slug);
  const step = steps[current] ?? steps[0];
  const showProof = current === lastCoreStep;

  useEffect(() => {
    // Initial loads retain the page head; only reader-initiated step changes scroll.
    if (!shouldScroll.current) return;
    shouldScroll.current = false;
    const frame = requestAnimationFrame(() => {
      const heading = headingRef.current;
      if (!heading) return;
      const headerHeight = document.querySelector("[data-app-header]")?.getBoundingClientRect().height ?? 0;
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const railHeight = mobile ? railRef.current?.getBoundingClientRect().height ?? 0 : 0;
      const top = window.scrollY + heading.getBoundingClientRect().top - headerHeight - railHeight - 16;
      window.scrollTo({ top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      if (mobile) {
        const active = railRef.current?.querySelector<HTMLElement>('[aria-current="step"]');
        const strip = active?.closest("ol");
        if (active && strip) {
          const itemBounds = active.getBoundingClientRect();
          const stripBounds = strip.getBoundingClientRect();
          if (itemBounds.left < stripBounds.left || itemBounds.right > stripBounds.right) {
            strip.scrollTo({ left: active.offsetLeft - strip.offsetLeft, behavior: "smooth" });
          }
        }
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [current]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <header className="relative flex flex-col gap-5 rounded-3xl bg-primary-soft p-6 sm:flex-row sm:items-center sm:p-8">
        <ReviewStamp adventure={adventure} />
        <AdventureIcon adventure={adventure} size="xl" />
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex gap-2">
            {done && <Chip>Completed</Chip>}
            {!adventure.isOpen && <Chip tone="neutral">{WAVES[adventure.wave]?.label}</Chip>}
            {preview && <Chip tone="primary">Admin preview</Chip>}
          </div>
          <h1 className="text-3xl sm:text-4xl">{adventure.title}</h1>
          <AdventureRating slug={slug} className="mt-2" />
          <p className="mt-2 text-lg">{adventure.walkaway}</p>
          <LabelChips adventure={adventure} className="mt-4" />
          {!introduction.some((section) => /^the trail$/i.test(section.heading)) && <div className="mt-5"><PreviewVideo url={adventure.video} title={adventure.title} /></div>}
        </div>
        <ItineraryToggle slug={slug} className="self-start bg-background" />
      </header>

      {introduction.length > 0 && (
        <div aria-label="Adventure introduction" className="mt-8 space-y-6 bg-card px-6 py-6 sm:px-8">
          {introduction.map((section) => (
            /^the trail$/i.test(section.heading) ? (adventure.video ? <div key={section.heading} className="flex flex-col gap-6 lg:flex-row lg:items-start"><div className="min-w-0 flex-1"><AdventureTrail heading={section.heading} body={section.body} /></div><PreviewVideo url={adventure.video} title={adventure.title} /></div> : <AdventureTrail key={section.heading} heading={section.heading} body={section.body} />) :
            <section key={section.heading} className="max-w-3xl">
              <h2 className="mb-2 text-xl">{section.heading}</h2>
              <Md text={section.body} />
            </section>
          ))}
        </div>
      )}

      <div className={cn("mt-8 grid grid-cols-[minmax(0,1fr)] gap-8", hasNumberedSteps && "md:grid-cols-[240px_minmax(0,1fr)]")}>
        {hasNumberedSteps && (
          <nav ref={railRef} aria-label="Steps" className="adventure-step-rail sticky z-30 -mx-5 flex min-w-0 items-center gap-2 self-start border-b bg-surface px-5 py-2 md:mx-0 md:block md:border-b-0 md:bg-transparent md:p-0">
            <ol className="relative flex min-w-0 flex-1 gap-2 overflow-x-auto md:flex-col md:gap-1 md:border-l-2 md:border-stone">
              {steps.map((s, i) => (
                <li key={`${i}-${s.title}`}>
                  <Button variant="ghost" onClick={() => selectStep(i)} aria-label={s.title} aria-current={i === current ? "step" : undefined}
                    className={cn("h-auto w-full justify-start whitespace-nowrap rounded-full px-3 py-2 text-left text-sm md:-ml-0.5 md:whitespace-normal md:rounded-none md:border-l-2 md:pl-4",
                      i === current ? "bg-primary-soft font-semibold text-primary md:border-primary md:bg-transparent" : "text-muted-foreground hover:text-foreground md:border-transparent")}>
                    <span className="md:hidden">{s.title.match(/^Step\s+\d+/i)?.[0] ?? s.title}</span>
                    <span className="hidden md:inline">{s.title}</span>
                  </Button>
                </li>
              ))}
            </ol>
            <div className="shrink-0 border-l border-stone pl-2 md:mt-4 md:border-t md:border-l-0 md:pt-4 md:pl-0">
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex md:w-full" tabIndex={preview ? 0 : undefined}>
                      <Button variant="outline" size="sm" disabled={preview || !open} onClick={() => setProofDialog(true)}
                        className="text-primary shadow-none md:w-full">
                        {done && <Check className="rounded-full bg-lime p-0.5 text-foreground" />}
                        <span className="hidden md:inline">{done ? "Completed" : "Complete this adventure"}</span>
                        <span className={done ? "sr-only md:hidden" : "md:hidden"}>{done ? "Completed" : "Complete"}</span>
                      </Button>
                    </span>
                  </TooltipTrigger>
                  {preview && <TooltipContent>Preview</TooltipContent>}
                </Tooltip>
              </TooltipProvider>
              {done && !preview && open && <Button variant="link" size="sm" onClick={() => setProofDialog(true)}
                className="mt-1 hidden h-auto w-full whitespace-normal px-0 md:inline-flex">Edit your proof of work</Button>}
            </div>
          </nav>
        )}
        <div className="min-w-0">
          <article aria-label="Adventure section" className="adventure-step-content bg-card p-6 sm:p-8">
            {step?.title && <h2 ref={headingRef} className="mb-4 text-2xl sm:text-3xl">{step.title}</h2>}
            <div className="max-w-3xl">
              <StepBody body={step?.body ?? ""} goFurther={step?.goFurther ?? false} />
            </div>

            {showProof && (
              <div className="mt-8">
                {proof && <section aria-label="Proof of work" className="rounded-2xl border-l-4 border-primary bg-primary-soft p-5">
                  <h2 className="text-xl">Proof of work</h2>
                  <Md text={proof.body} />
                </section>}
                {done && entry && !preview && <section aria-label="Your proof of work" className="mt-4 rounded-lg border p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg">Your proof of work</h3>
                    <Button variant="link" size="sm" onClick={() => setProofDialog(true)}>Edit</Button>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3"><time className="text-xs text-muted-foreground">{entry.completed_at.slice(0, 10)}</time><FootprintRating value={entry.rating} /></div>
                  <p className="mt-4 text-xs font-semibold text-muted-foreground">What you built</p>
                  <p className="mt-1 whitespace-pre-wrap break-words text-sm">{entry.built}</p>
                  {entry.learned && <><p className="mt-4 text-xs font-semibold text-muted-foreground">What you learned</p><p className="mt-1 whitespace-pre-wrap break-words text-sm">{entry.learned}</p></>}
                </section>}
                {open && !preview && !entry && <Button className="mt-4 h-auto max-w-full whitespace-normal rounded-full px-6 py-3 font-semibold"
                  onClick={() => setProofDialog(true)}>
                  {done && <Check className="size-4" />}
                  Mark this adventure complete
                </Button>}
                {done && open && !preview && <p className="mt-2 flex items-center gap-2 text-sm text-success"><Check className="size-4" />You completed this adventure. Badge earned.</p>}
              </div>
            )}

            <div className="mt-8 flex justify-between gap-3 border-t pt-6">
              {current > 0 ? <Button variant="outline" onClick={() => selectStep(current - 1)} className="rounded-full px-5"><ArrowLeft />Back</Button>
                : <Button variant="ghost" asChild><Link to="/adventures"><ArrowLeft />All adventures</Link></Button>}
              {current < steps.length - 1 && <Button onClick={() => selectStep(current + 1)} className="rounded-full px-5">Next<ArrowRight /></Button>}
            </div>
          </article>
          <footer aria-label="Adventure next destinations" className="mt-8 bg-card p-6 sm:p-8">
            <WhatsNextPanel currentSlug={slug} />
            {related && <section className="mt-6 max-w-3xl border-t pt-5 text-sm">
              <h2 className="text-lg">{related.heading}</h2>
              <Md text={related.body} />
            </section>}
          </footer>
        </div>
      </div>
      <Celebration result={celebration} adventureTitle={adventure.title} slug={slug} onClose={() => setCelebration(null)} />
      {proofDialog && <ProofOfWorkDialog title={adventure.title} body={proof?.body ?? ""} entry={entry} onClose={() => setProofDialog(false)} onSave={(input) => {
        const result = store.saveProofOfWork(slug, input);
        setProofDialog(false);
        if (!result.alreadyDone) setCelebration(result);
      }} />}
    </div>
  );
}
