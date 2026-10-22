import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, X } from "lucide-react";
import { getAdventure, WAVES, type Adventure } from "@/content/adventures";
import { store, useStoreState } from "@/store";
import { AdventureIcon } from "@/components/AdventureIcon";
import { Chip, LabelChips } from "@/components/LabelChips";
import { FootprintPair, FootprintShape } from "@/components/Footprints";
import { PageHeading } from "@/components/AppShell";
import { WelcomeChoices } from "@/components/WelcomeChoices";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/itinerary")({
  head: () => ({
    meta: [
      { title: "My itinerary · AI Adventure" },
      { name: "description", content: "Your chosen AI Adventure destinations, in order." },
      { property: "og:title", content: "My itinerary · AI Adventure" },
      { property: "og:description", content: "Your chosen destinations, in order." },
    ],
  }),
  component: Itinerary,
});

type StopStatus = "done" | "next" | "later";

function Itinerary() {
  const { itinerary, completions } = useStoreState();
  const done = new Set(completions.map((c) => c.slug));
  const stops = itinerary.map(getAdventure).filter((a): a is Adventure => !!a);
  // "Next up" = first undone stop that is open now.
  const nextSlug = stops.find((a) => !done.has(a.slug) && a.isOpen)?.slug;

  if (stops.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-col items-center text-center">
          <FootprintPair className="size-32" />
          <h1 className="mt-4 text-3xl">Your itinerary is empty</h1>
          <p className="mt-2 text-muted-foreground">Every trip starts with a first step. Choose how you'd like to begin.</p>
        </div>
        <div className="mt-10"><WelcomeChoices /></div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <PageHeading title="My itinerary" subtitle="Your destinations, top to bottom. Reorder them any time.">
        <Link to="/adventures" className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary">Find more destinations</Link>
      </PageHeading>
      <ol>
        {stops.map((a, i) => {
          const status: StopStatus = done.has(a.slug) ? "done" : a.slug === nextSlug ? "next" : "later";
          return (
            <li key={a.slug}>
              {i > 0 && <TrailConnector flip={i % 2 === 0} />}
              <Stop adventure={a} status={status} index={i} total={stops.length} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Winding dotted line with footprints between two stops. */
function TrailConnector({ flip }: { flip: boolean }) {
  return (
    <svg viewBox="0 0 200 80" className={cn("mx-auto h-20 w-48", flip && "-scale-x-100")} aria-hidden>
      <path d="M100 0 C 40 25, 160 55, 100 80" fill="none" stroke="var(--color-stone)" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
      <FootprintShape x={78} y={28} angle={-30} scale={0.6} fill="var(--color-primary)" />
      <FootprintShape x={122} y={52} angle={-10} scale={0.6} fill="var(--color-primary)" flip />
    </svg>
  );
}

function Stop({ adventure, status, index, total }: { adventure: Adventure; status: StopStatus; index: number; total: number }) {
  const card = cn(
    "flex flex-col gap-4 rounded-3xl border bg-card p-5 shadow-soft sm:flex-row sm:items-center",
    status === "next" && "border-lime bg-lime/25 ring-4 ring-lime",
  );
  const navigate = useNavigate();
  const open = () => navigate({ to: "/adventures/$slug", params: { slug: adventure.slug } });
  return (
    <div
      className={cn(card, "cursor-pointer transition hover:border-primary/40")}
      role="link"
      tabIndex={0}
      aria-label={`Open ${adventure.title}`}
      onClick={open}
      onKeyDown={(e) => { if (e.key === "Enter") open(); }}
    >
      <AdventureIcon adventure={adventure} />
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap gap-2">
          {status === "done" && <Chip tone="success">Done</Chip>}
          {status === "next" && <Chip tone="lime">Next up</Chip>}
          {status === "later" && <Chip tone="neutral">{adventure.isOpen ? "Later" : WAVES[adventure.wave]?.label}</Chip>}
        </div>
        <p className="text-lg font-bold">{adventure.title}</p>
        <LabelChips adventure={adventure} className="mt-2" />
      </div>
      <div className="flex gap-1 sm:flex-col">
        <IconBtn label="Move up" disabled={index === 0} onClick={() => store.reorderItinerary(adventure.slug, "up")}><ArrowUp className="size-4" /></IconBtn>
        <IconBtn label="Move down" disabled={index === total - 1} onClick={() => store.reorderItinerary(adventure.slug, "down")}><ArrowDown className="size-4" /></IconBtn>
        <IconBtn label="Remove" onClick={() => store.removeFromItinerary(adventure.slug)}><X className="size-4" /></IconBtn>
      </div>
    </div>
  );
}

function IconBtn({ label, onClick, disabled, children }: { label: string; onClick: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button aria-label={label} title={label} disabled={disabled} onClick={(e) => { e.stopPropagation(); onClick(); }} onKeyDown={(e) => e.stopPropagation()} className="rounded-full border bg-background p-2 hover:border-primary disabled:opacity-30">
      {children}
    </button>
  );
}
