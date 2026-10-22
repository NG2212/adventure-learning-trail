import type { IconName } from "@/content/adventures";
import { cn } from "@/lib/utils";

/** Simple flat glyphs, drawn on a 24x24 grid in currentColor plus one accent. */
const GLYPHS: Record<IconName, React.ReactNode> = {
  sponge: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="3" fill="currentColor" />
      <circle cx="9" cy="10" r="1.3" fill="var(--color-lime)" />
      <circle cx="14" cy="13" r="1.3" fill="var(--color-lime)" />
      <circle cx="16.5" cy="9.5" r="1" fill="var(--color-lime)" />
    </>
  ),
  masks: (
    <>
      <path d="M3 5h10v6a5 5 0 0 1-10 0z" fill="currentColor" />
      <path d="M11 10h10v5a5 5 0 0 1-10 0z" fill="var(--color-lime)" />
    </>
  ),
  toolbox: (
    <>
      <path d="M9 7V5h6v2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="3" y="7" width="18" height="12" rx="2.5" fill="currentColor" />
      <rect x="10" y="11" width="4" height="3" rx="1" fill="var(--color-lime)" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" fill="var(--color-lime)" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v10H10l-4 4v-4H4z" fill="currentColor" />
      <rect x="7" y="9" width="10" height="2" rx="1" fill="var(--color-lime)" />
    </>
  ),
  chart: (
    <>
      <rect x="4" y="12" width="4" height="8" rx="1" fill="currentColor" />
      <rect x="10" y="7" width="4" height="13" rx="1" fill="var(--color-lime)" />
      <rect x="16" y="4" width="4" height="16" rx="1" fill="currentColor" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6z" fill="currentColor" />
      <rect x="9" y="11" width="6" height="1.8" rx=".9" fill="var(--color-lime)" />
      <rect x="9" y="15" width="6" height="1.8" rx=".9" fill="var(--color-lime)" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2.5" fill="currentColor" />
      <rect x="4" y="5" width="16" height="4" rx="2" fill="var(--color-lime)" />
    </>
  ),
  robot: (
    <>
      <rect x="5" y="7" width="14" height="12" rx="3" fill="currentColor" />
      <circle cx="9.5" cy="12.5" r="1.6" fill="var(--color-lime)" />
      <circle cx="14.5" cy="12.5" r="1.6" fill="var(--color-lime)" />
      <rect x="11" y="3" width="2" height="4" fill="currentColor" />
    </>
  ),
  pin: (
    <>
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" fill="currentColor" />
      <circle cx="12" cy="9" r="2.5" fill="var(--color-lime)" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M12 3a6 6 0 0 1 3.5 10.9V16h-7v-2.1A6 6 0 0 1 12 3z" fill="currentColor" />
      <rect x="9" y="17.5" width="6" height="2.5" rx="1" fill="var(--color-lime)" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" fill="currentColor" />
      <path d="m9 12 2 2 4-4" stroke="var(--color-lime)" strokeWidth="2" fill="none" />
    </>
  ),
};

interface Props {
  name: IconName;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  className?: string;
}

/** Icon on a circular disc: purple when earned/active, stone when not. */
export function AdventureIcon({ name, active = true, size = "md", outline = false, className }: Props) {
  const box = { sm: "size-10", md: "size-14", lg: "size-20" }[size];
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full",
        box,
        outline
          ? "border-2 border-dashed border-stone bg-background text-stone"
          : active
            ? "bg-primary text-primary-foreground"
            : "bg-stone text-foreground/70",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-1/2" aria-hidden style={outline ? { opacity: 0.6 } : undefined}>
        {GLYPHS[name]}
      </svg>
    </div>
  );
}
