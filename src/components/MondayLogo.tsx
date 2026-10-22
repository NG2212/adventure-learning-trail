import { cn } from "@/lib/utils";

/**
 * monday.com logo slot.
 * logo: replace this text wordmark with the official SVG when it arrives (one change, here only).
 */
export function MondayLogo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <span
      aria-label="monday.com"
      className={cn("font-sans font-semibold tracking-tight", inverted ? "text-primary-foreground" : "text-foreground", className)}
    >
      monday.com
    </span>
  );
}
