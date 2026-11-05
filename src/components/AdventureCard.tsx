import { Link } from "@tanstack/react-router";
import { canOpenAdventure, WAVES, type Adventure } from "@/content/adventures";
import { store, useStoreState } from "@/store";
import { AdventureIcon } from "./AdventureIcon";
import { Chip, LabelChips } from "./LabelChips";
import { ItineraryToggle } from "./ItineraryToggle";
import { ReviewStamp } from "./ReviewStamp";
import { AdventureRating } from "./AdventureRating";
import { CompletedStamp } from "./CompletedStamp";
import { LabelHint } from "./LabelHint";
import { cardClass } from "./ui/card";
import { CATEGORY_TONES } from "./LabelChips";
import { cn } from "@/lib/utils";

export function AdventureCard({ adventure, highlightAdd = false }: { adventure: Adventure; highlightAdd?: boolean }) {
  const { completions } = useStoreState();
  const done = completions.some((c) => c.slug === adventure.slug);

  const content = (
    <>
      <ReviewStamp adventure={adventure} />
      <div className="flex justify-end">
        {done ? (
          <span className="h-6" />
        ) : adventure.isOpen && adventure.body ? (
          <Chip tone="primary">Ready</Chip>
        ) : adventure.isOpen ? (
          <Chip tone="neutral">Content coming</Chip>
        ) : (
          <LabelHint text={WAVES[adventure.wave]?.label ?? "Opens later"}><span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{WAVES[adventure.wave]?.label}</span></LabelHint>
        )}
      </div>
      <AdventureIcon adventure={adventure} size="lg" className="mx-auto -mt-2" />
      <h3 className="mt-4 text-center text-lg font-semibold">{adventure.title}</h3>
      <p className="mt-1 flex-1 text-center text-sm text-muted-foreground">{adventure.walkaway}</p>
      <div className="relative mt-4 pt-14">{done && <CompletedStamp className="completed-stamp-card pointer-events-none absolute top-0 right-0 z-10" />}<LabelChips adventure={adventure} className="justify-center" effortAccessory={<AdventureRating slug={adventure.slug} />} /></div>
    </>
  );

  if (!canOpenAdventure(adventure, store.getDemoSettings().demoOpenAll)) {
    return (
      <div className={cn(cardClass(done ? "lime" : "category"), CATEGORY_TONES[adventure.category], "flex flex-col p-5 opacity-80")} aria-disabled>
        {content}
        <div className="mt-4"><ItineraryToggle slug={adventure.slug} highlight={highlightAdd} /></div>
      </div>
    );
  }

  return (
    <Link
      to="/adventures/$slug"
      params={{ slug: adventure.slug }}
      className={cn(cardClass(done ? "lime" : "category", true), CATEGORY_TONES[adventure.category], "flex flex-col p-5 pb-6", !adventure.isOpen && "opacity-80")}
    >
      {content}
      <div className="mt-4"><ItineraryToggle slug={adventure.slug} highlight={highlightAdd} /></div>
    </Link>
  );
}
