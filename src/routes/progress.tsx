import { createFileRoute, Link } from "@tanstack/react-router";
import { ADVENTURES, TOTAL_ADVENTURES } from "@/content/adventures";
import { useStoreState } from "@/store";
import { nextTitle, titleFor, TITLES } from "@/lib/titles";
import { AdventureIcon, Disc } from "@/components/AdventureIcon";
import { Footprint } from "@/components/Footprints";
import { ShareCard } from "@/components/ShareCard";
import { PageHeading } from "@/components/AppShell";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Progress · AI Adventure" },
      { name: "description", content: "Your adventures completed, titles and badges." },
      { property: "og:title", content: "Progress · AI Adventure" },
      { property: "og:description", content: "Adventures completed, titles and badges." },
    ],
  }),
  component: Progress,
});

function Progress() {
  const { completions, person } = useStoreState();
  const count = completions.length;
  const current = titleFor(count);
  const next = nextTitle(count);
  const earned = new Set(completions.map((c) => c.slug));
  const placeholders = Math.max(0, TOTAL_ADVENTURES - ADVENTURES.length);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <PageHeading title={`Adventures completed: ${count} of ${TOTAL_ADVENTURES}`} subtitle="Titles show how far you've travelled. That's all they measure." />

      <section className="rounded-3xl bg-muted p-6 sm:p-8">
        <ol className="relative grid grid-cols-4 gap-2">
          <span className="absolute top-5 right-[12.5%] left-[12.5%] h-0.5 bg-stone" aria-hidden />
          {TITLES.map((t) => {
            const reached = count >= t.threshold;
            const isCurrent = t.name === current;
            return (
              <li key={t.name} className="relative flex flex-col items-center text-center">
                <span className={cn("flex size-10 items-center justify-center rounded-full", isCurrent ? "bg-sunny ring-4 ring-primary" : reached ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground")}>
                  <Footprint className="h-5 w-3.5" />
                </span>
                <span className={cn("mt-3 text-sm font-semibold sm:text-base", isCurrent && "text-primary")}>{t.name}</span>
                <span className="text-xs text-muted-foreground">{t.threshold} completed</span>
              </li>
            );
          })}
        </ol>
        {next && (
          <p className="mt-6 text-center text-sm">
            Next title: <strong>{next.name}</strong> at {next.threshold} completed ({next.threshold - count} to go).
          </p>
        )}
      </section>

      <section className="mt-12">
        <h2 className="mb-5 text-2xl">Badges</h2>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-5 lg:grid-cols-6">
          {ADVENTURES.map((a) => {
            const has = earned.has(a.slug);
            const content = (
              <>
                <AdventureIcon adventure={a} size="lg" />
                <span className={cn("text-xs font-medium", !has && "text-muted-foreground")}>{a.title}</span>
              </>
            );
            return a.isOpen ? (
              <Link key={a.slug} to="/adventures/$slug" params={{ slug: a.slug }} className="flex flex-col items-center gap-2 text-center">{content}</Link>
            ) : (
              <div key={a.slug} className="flex flex-col items-center gap-2 text-center">{content}</div>
            );
          })}
          {Array.from({ length: placeholders }, (_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <Disc name="map-pin" state="later" size="lg" />
              <span className="text-xs text-muted-foreground">To be announced</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-xl">
        <h2 className="mb-5 text-2xl">Your share card</h2>
        <ShareCard name={person.name} title={current} count={count} />
      </section>
    </div>
  );
}
