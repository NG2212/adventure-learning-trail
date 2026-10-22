import { Link } from "@tanstack/react-router";
import { WAVES, type Adventure } from "@/content/adventures";
import { useStoreState } from "@/store";
import { AdventureIcon } from "./AdventureIcon";
import { Chip, LabelChips } from "./LabelChips";
import { ItineraryToggle } from "./ItineraryToggle";

export function AdventureCard({ adventure, highlightAdd = false }: { adventure: Adventure; highlightAdd?: boolean }) {
  const { completions } = useStoreState();
  const done = completions.some((c) => c.slug === adventure.slug);

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <AdventureIcon name={adventure.icon} active={adventure.isOpen} />
        {done ? (
          <Chip tone="success">Done</Chip>
        ) : adventure.isOpen ? (
          <Chip tone="primary">Open</Chip>
        ) : (
          <Chip tone="neutral">{WAVES[adventure.wave]?.label}</Chip>
        )}
      </div>
      <h3 className="mt-4 text-lg">{adventure.title}</h3>
      <p className="mt-1 flex-1 text-sm text-muted-foreground">{adventure.walkaway}</p>
      <LabelChips adventure={adventure} className="mt-4" />
    </>
  );

  if (!adventure.isOpen) {
    return (
      <div className="flex flex-col rounded-3xl border bg-muted/50 p-6 opacity-80" aria-disabled>
        {content}
        <div className="mt-5"><ItineraryToggle slug={adventure.slug} highlight={highlightAdd} /></div>
      </div>
    );
  }

  return (
    <Link
      to="/adventures/$slug"
      params={{ slug: adventure.slug }}
      className="flex flex-col rounded-3xl border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40"
    >
      {content}
      <div className="mt-5"><ItineraryToggle slug={adventure.slug} highlight={highlightAdd} /></div>
    </Link>
  );
}
