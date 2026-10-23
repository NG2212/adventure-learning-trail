import { useHydrated } from "@tanstack/react-router";
import { store, useStoreState } from "@/store";
import { cn } from "@/lib/utils";
import { Footprint } from "./Footprints";

/** Aggregate feedback only; the store suppresses counts below the display minimum. */
export function AdventureRating({ slug, className }: { slug: string; className?: string }) {
  useStoreState();
  const hydrated = useHydrated();
  const rating = hydrated ? store.getAdventureRating(slug) : undefined;
  if (!rating) return null;
  return (
    <span data-adventure-rating={slug} className={cn("inline-flex items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground", className)}>
      <Footprint className="h-3.5 w-2.5 shrink-0" />
      {rating.averageRating.toFixed(1)} · {rating.ratingCount} {rating.ratingCount === 1 ? "rating" : "ratings"}
    </span>
  );
}