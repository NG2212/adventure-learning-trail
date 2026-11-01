import { Link } from "@tanstack/react-router";
import { ADVENTURES, TOTAL_ADVENTURES, getAdventure, type Adventure } from "@/content/adventures";
import { useStoreState } from "@/store";
import { titleFor } from "@/lib/titles";
import { Button } from "@/components/ui/button";
import { AdventureIcon, ICONS } from "./AdventureIcon";
import { cn } from "@/lib/utils";

/** Next up: first unfinished open stop on the journey, else the first unfinished stop. */
export function journeyNextUp(itinerary: string[], doneSlugs: Set<string>): Adventure | undefined {
  const stops = itinerary.map(getAdventure).filter((a): a is Adventure => Boolean(a) && !doneSlugs.has(a!.slug));
  return stops.find((a) => a.isOpen) ?? stops[0];
}

/** Compact "Your journey" summary shown on Home and All adventures. Reads only existing store data. */
export function JourneyPanel({ className }: { className?: string }) {
  const { itinerary, completions } = useStoreState();
  const done = new Set(completions.map((c) => c.slug));
  const title = titleFor(completions.length);
  const next = journeyNextUp(itinerary, done);
  const last = [...completions].sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0];
  const lastAdventure = last ? ADVENTURES.find((a) => a.slug === last.slug) : undefined;
  const LastIcon = lastAdventure ? ICONS[lastAdventure.icon] : null;
  return (
    <aside aria-label="Your journey" className={cn("rounded-lg border bg-card p-5 shadow-soft", className)}>
      <h2 className="text-lg">Your journey</h2>
      <p className="mt-1 text-sm font-semibold text-primary">{title ?? "Ready to set off"}</p>
      <p className="text-xs text-muted-foreground">{completions.length} of {TOTAL_ADVENTURES} completed</p>
      <div className="mt-4 border-t pt-4">
        <p className="text-xs font-semibold text-muted-foreground">Next up</p>
        {next ? (
          <div className="mt-2 flex items-center gap-3">
            <AdventureIcon adventure={next} size="sm" />
            <p className="min-w-0 flex-1 text-sm font-semibold">{next.title}</p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">Your journey has no open stops yet.</p>
        )}
        <Button size="sm" className="mt-3 w-full" asChild>
          {next ? <Link to="/adventures/$slug" params={{ slug: next.slug }}>Continue</Link> : <Link to="/adventures" search={{ build: true }}>Add destinations</Link>}
        </Button>
      </div>
      {last && lastAdventure && LastIcon && (
        <div className="mt-4 border-t pt-4">
          <p className="text-xs font-semibold text-muted-foreground">Last badge earned</p>
          <Link to="/adventures/$slug" params={{ slug: lastAdventure.slug }} className="mt-2 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><LastIcon className="size-6" strokeWidth={1.75} /></span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold">{lastAdventure.title}</span>
              <time className="block text-xs text-muted-foreground">{new Date(last.completedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
            </span>
          </Link>
        </div>
      )}
    </aside>
  );
}
