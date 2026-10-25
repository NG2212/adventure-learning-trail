import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ADVENTURES } from "@/content/adventures";
import { useStoreState } from "@/store";
import { pickWhatsNext } from "@/lib/whatsNext";
import { AdventureIcon } from "./AdventureIcon";

/** "What's next" panel, chosen by rule from the person's itinerary and completions. */
export function WhatsNextPanel({ currentSlug, onNavigate }: { currentSlug: string; onNavigate?: () => void }) {
  const { itinerary, completions, person } = useStoreState();
  const next = pickWhatsNext(currentSlug, itinerary, completions.map((c) => c.slug), ADVENTURES, person.role, person.onboardingAnswers);
  return (
    <section aria-label="What's next" className="rounded-3xl bg-primary-soft p-5 text-left">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">What's next</p>
      {next ? (
        <Link to="/adventures/$slug" params={{ slug: next.adventure.slug }} onClick={onNavigate} className="mt-3 flex items-center gap-4 rounded-2xl bg-background p-4 hover:shadow-md">
          <AdventureIcon adventure={next.adventure} />
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">{next.reason === "itinerary" ? "Next in your itinerary" : "Suggested for you"}</p>
            <p className="font-semibold">{next.adventure.title}</p>
            <p className="text-sm text-muted-foreground">{next.adventure.walkaway}</p>
          </div>
          <ArrowRight className="size-5 shrink-0 text-primary" />
        </Link>
      ) : (
        <Link to="/adventures" onClick={onNavigate} className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary">
          Browse all adventures <ArrowRight className="size-4" />
        </Link>
      )}
    </section>
  );
}
