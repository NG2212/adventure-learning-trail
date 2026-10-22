import logoSvg from "@/assets/monday-logo.svg?raw";
import { cn } from "@/lib/utils";

/**
 * monday.com logo (src/assets/monday-logo.svg). The three marks keep their colours;
 * the wordmark uses currentColor: #333 on light surfaces, white when `inverted` (purple sign-in).
 */
export function MondayLogo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <span
      role="img"
      aria-label="monday.com"
      className={cn("inline-block h-[22px] [&>svg]:h-full [&>svg]:w-auto", inverted ? "text-primary-foreground" : "text-[#333]", className)}
      dangerouslySetInnerHTML={{ __html: logoSvg }}
    />
  );
}
