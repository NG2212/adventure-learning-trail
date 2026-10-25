import { Check, Plus } from "lucide-react";
import { store, useStoreState } from "@/store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** "Add to my journey" / "In my journey" toggle. `highlight` draws attention in build-my-own mode. */
export function ItineraryToggle({ slug, highlight = false, className }: { slug: string; highlight?: boolean; className?: string }) {
  const { itinerary } = useStoreState();
  const inItinerary = itinerary.includes(slug);
  return (
    <Button variant="ghost"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (inItinerary) store.removeFromItinerary(slug);
        else store.addToItinerary(slug);
      }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
        inItinerary
          ? "bg-primary-soft text-primary"
          : highlight
            ? "bg-primary text-primary-foreground ring-4 ring-lime"
            : "border border-primary text-primary hover:bg-primary-soft",
        className,
      )}
    >
      {inItinerary ? <Check className="size-4" /> : <Plus className="size-4" />}
      {inItinerary ? "In my journey" : "Add to my journey"}
    </Button>
  );
}
