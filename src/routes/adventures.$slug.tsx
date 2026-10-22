import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { ADVENTURES, adventureBody, getAdventure, WAVES } from "@/content/adventures";
import { store, useStoreState } from "@/store";
import type { CompletionResult } from "@/store/types";
import { AdventureIcon } from "@/components/AdventureIcon";
import { Chip, LabelChips } from "@/components/LabelChips";
import { ItineraryToggle } from "@/components/ItineraryToggle";
import { PromptWindow } from "@/components/PromptWindow";
import { Celebration } from "@/components/Celebration";
import { cn } from "@/lib/utils";
import { parseAdventure, splitDetails, splitGoFurther } from "@/lib/adventureSteps";
import { WhatsNextPanel } from "@/components/WhatsNext";

export const Route = createFileRoute("/adventures/$slug")({
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
          <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} components={MD}>{seg.text}</ReactMarkdown>
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
  const adventure = getAdventure(slug)!;
  const { completions } = useStoreState();
  const { steps, trail } = useMemo(() => parseAdventure(adventureBody(adventure), ADVENTURES), [adventure]);
  const [current, setCurrent] = useState(0);
  const [celebration, setCelebration] = useState<CompletionResult | null>(null);
  const done = completions.some((c) => c.slug === slug);
  const step = steps[current] ?? steps[0] ?? { title: "", body: "", isSubstep: false };
  const isLast = current === steps.length - 1;

  // Block bodies: effects must return nothing (newer browsers make scrollTo return a Promise,
  // which React would then try to call as a cleanup -> "destroy is not a function").
  useEffect(() => {
    setCurrent(0);
  }, [slug]);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [current]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <header className="flex flex-col gap-5 rounded-3xl bg-primary-soft p-6 sm:flex-row sm:items-center sm:p-8">
        <AdventureIcon adventure={adventure} size="xl" />
        <div className="flex-1">
          <div className="mb-2 flex gap-2">
            {done && <Chip tone="success">Done</Chip>}
            {!adventure.isOpen && <Chip tone="neutral">{WAVES[adventure.wave]?.label}</Chip>}
          </div>
          <h1 className="text-3xl sm:text-4xl">{adventure.title}</h1>
          <p className="mt-2 text-lg">{adventure.walkaway}</p>
          <LabelChips adventure={adventure} className="mt-4" />
        </div>
        <ItineraryToggle slug={adventure.slug} className="self-start bg-background" />
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[240px_1fr]">
        <nav aria-label="Steps" className="md:sticky md:top-6 md:self-start">
          <ol className="flex gap-2 overflow-x-auto md:flex-col md:gap-1 md:border-l-2 md:border-stone">
            {steps.map((s, i) => (
              <li key={`${i}-${s.title}`}>
                <button
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "w-full whitespace-nowrap rounded-full px-3 py-2 text-left text-sm md:-ml-0.5 md:whitespace-normal md:rounded-none md:border-l-2 md:pl-4",
                    s.isSubstep && "md:pl-8",
                    i === current ? "bg-primary-soft font-semibold text-primary md:border-primary md:bg-transparent" : "text-muted-foreground hover:text-foreground md:border-transparent",
                  )}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <article className="min-w-0 rounded-3xl bg-card p-6 shadow-soft sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">Step {current + 1} of {steps.length}</p>
          <h2 className="mt-1 mb-4 text-2xl sm:text-3xl">{step.title}</h2>
          <div className="max-w-3xl">
            {/^step 1\b/i.test(step.title) && trail.length > 0 && (
              <div className="mb-6 rounded-2xl bg-stone p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">The trail</p>
                <ol className="list-decimal space-y-1 pl-5 text-sm">
                  {trail.map((t, i) => <li key={i}><ReactMarkdown components={{ p: ({ children }) => <>{children}</> }}>{t}</ReactMarkdown></li>)}
                </ol>
              </div>
            )}
            <StepBody body={step.body} goFurther={step.goFurther ?? false} />
          </div>

          {isLast && adventure.isOpen && (
            <div className="mt-10 rounded-3xl bg-muted p-6">
              {done ? (
                <p className="flex items-center gap-2 font-semibold text-success"><Check className="size-5" /> You completed this adventure. Badge earned.</p>
              ) : (
                <>
                  <p className="font-semibold">Done the proof of work?</p>
                  <button
                    onClick={() => setCelebration(store.markComplete(slug))}
                    className="mt-3 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
                  >
                    Mark this adventure complete
                  </button>
                </>
              )}
            </div>
          )}

          {isLast && (
            <div className="mt-10 max-w-3xl">
              <WhatsNextPanel currentSlug={slug} />
            </div>
          )}

          <div className="mt-10 flex justify-between border-t pt-6">
            {current > 0 ? (
              <button onClick={() => setCurrent(current - 1)} className="inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 font-semibold">
                <ArrowLeft className="size-4" /> Back
              </button>
            ) : <Link to="/adventures" className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-semibold text-muted-foreground"><ArrowLeft className="size-4" /> All adventures</Link>}
            {!isLast && (
              <button onClick={() => setCurrent(current + 1)} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">
                Next <ArrowRight className="size-4" />
              </button>
            )}
          </div>
        </article>
      </div>

      <Celebration result={celebration} adventureTitle={adventure.title} slug={slug} onClose={() => setCelebration(null)} />
    </div>
  );
}
