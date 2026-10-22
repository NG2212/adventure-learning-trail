import type { IconName } from "@/content/adventures";
import { cn } from "@/lib/utils";

/**
 * The adventure glyph set: simple flat shapes on a 24x24 grid,
 * drawn in currentColor plus one lime accent. No emoji.
 */
const A = "var(--color-lime)";
const C = "currentColor";

const GLYPHS: Record<IconName, React.ReactNode> = {
  sponge: (<><rect x="4" y="6" width="16" height="12" rx="3" fill={C} /><circle cx="9" cy="10" r="1.3" fill={A} /><circle cx="14" cy="13" r="1.3" fill={A} /><circle cx="16.5" cy="9.5" r="1" fill={A} /></>),
  masks: (<><path d="M3 5h10v6a5 5 0 0 1-10 0z" fill={C} /><path d="M11 10h10v5a5 5 0 0 1-10 0z" fill={A} /></>),
  robot: (<><rect x="5" y="7" width="14" height="12" rx="3" fill={C} /><circle cx="9.5" cy="12.5" r="1.6" fill={A} /><circle cx="14.5" cy="12.5" r="1.6" fill={A} /><rect x="11" y="3" width="2" height="4" fill={C} /></>),
  scale: (<><rect x="11" y="4" width="2" height="15" fill={C} /><rect x="4" y="6" width="16" height="2" rx="1" fill={C} /><path d="M2.5 14h6L5.5 9z" fill={A} /><path d="M15.5 14h6l-3-5z" fill={A} /><rect x="7" y="19" width="10" height="2" rx="1" fill={C} /></>),
  compass: (<><circle cx="12" cy="12" r="9" fill={C} /><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" fill={A} /></>),
  book: (<><path d="M3 5c3-1 6-1 8.5 1v14C9 18 6 18 3 19z" fill={C} /><path d="M21 5c-3-1-6-1-8.5 1v14c2.5-2 5.5-2 8.5-1z" fill={A} /></>),
  toolbox: (<><path d="M9 7V5h6v2" stroke={C} strokeWidth="2" fill="none" /><rect x="3" y="7" width="18" height="12" rx="2.5" fill={C} /><rect x="10" y="11" width="4" height="3" rx="1" fill={A} /></>),
  magnifier: (<><circle cx="10" cy="10" r="6.5" fill={C} /><circle cx="10" cy="10" r="3.5" fill={A} /><rect x="14.5" y="13" width="3" height="8" rx="1.5" transform="rotate(-45 16 17)" fill={C} /></>),
  document: (<><path d="M6 3h8l4 4v14H6z" fill={C} /><rect x="9" y="11" width="6" height="1.8" rx=".9" fill={A} /><rect x="9" y="15" width="6" height="1.8" rx=".9" fill={A} /></>),
  chat: (<><path d="M4 5h16v10H10l-4 4v-4H4z" fill={C} /><rect x="7" y="9" width="10" height="2" rx="1" fill={A} /></>),
  palette: (<><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2s0-2 1.5-2H18a3 3 0 0 0 3-3c0-6-4-11-9-11z" fill={C} /><circle cx="8" cy="10" r="1.5" fill={A} /><circle cx="12" cy="7" r="1.5" fill={A} /><circle cx="16" cy="10" r="1.5" fill={A} /></>),
  calendar: (<><rect x="4" y="5" width="16" height="15" rx="2.5" fill={C} /><rect x="4" y="5" width="16" height="4" rx="2" fill={A} /></>),
  "id-card": (<><rect x="2" y="5" width="20" height="14" rx="2.5" fill={C} /><circle cx="8" cy="11" r="2.2" fill={A} /><rect x="4.5" y="14.5" width="7" height="2" rx="1" fill={A} /><rect x="13" y="9" width="6" height="1.8" rx=".9" fill={A} /><rect x="13" y="13" width="4" height="1.8" rx=".9" fill={A} /></>),
  "map-pin": (<><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" fill={C} /><circle cx="12" cy="9" r="2.5" fill={A} /></>),
  brain: (<><path d="M11 4a4 4 0 0 0-7 3 4 4 0 0 0 0 7 4 4 0 0 0 7 5z" fill={C} /><path d="M13 4a4 4 0 0 1 7 3 4 4 0 0 1 0 7 4 4 0 0 1-7 5z" fill={A} /></>),
  briefcase: (<><path d="M9 7V5h6v2" stroke={C} strokeWidth="2" fill="none" /><rect x="3" y="7" width="18" height="12" rx="2.5" fill={C} /><rect x="3" y="11" width="18" height="2" fill={A} /></>),
  gauge: (<><path d="M3 16a9 9 0 0 1 18 0z" fill={C} /><path d="M12 16l4-6" stroke={A} strokeWidth="2.2" strokeLinecap="round" /><circle cx="12" cy="16" r="2" fill={A} /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5z" fill={C} /><path d="M3 12l9 5 9-5v3l-9 5-9-5z" fill={A} /></>),
  shield: (<><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" fill={C} /><path d="m9 12 2 2 4-4" stroke={A} strokeWidth="2" fill="none" /></>),
  clock: (<><circle cx="12" cy="12" r="9" fill={C} /><path d="M12 7v5l3 2" stroke={A} strokeWidth="2.2" strokeLinecap="round" fill="none" /></>),
  terminal: (<><rect x="3" y="4" width="18" height="16" rx="2.5" fill={C} /><path d="m7 9 3 3-3 3" stroke={A} strokeWidth="2" fill="none" strokeLinecap="round" /><rect x="12" y="14" width="5" height="2" rx="1" fill={A} /></>),
  newspaper: (<><rect x="3" y="4" width="18" height="16" rx="2" fill={C} /><rect x="6" y="7" width="12" height="3" rx="1" fill={A} /><rect x="6" y="12" width="5" height="5" rx="1" fill={A} /><rect x="13" y="12" width="5" height="1.6" rx=".8" fill={A} /><rect x="13" y="15" width="5" height="1.6" rx=".8" fill={A} /></>),
  chart: (<><rect x="4" y="12" width="4" height="8" rx="1" fill={C} /><rect x="10" y="7" width="4" height="13" rx="1" fill={A} /><rect x="16" y="4" width="4" height="16" rx="1" fill={C} /></>),
  loop: (<><path d="M12 4a8 8 0 1 0 8 8" stroke={C} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M16 4h5v5z" fill={A} /></>),
  network: (<><path d="M12 6 6 17M12 6l6 11M6 17h12" stroke={C} strokeWidth="2" /><circle cx="12" cy="6" r="3" fill={A} /><circle cx="6" cy="17" r="3" fill={C} /><circle cx="18" cy="17" r="3" fill={C} /></>),
  people: (<><circle cx="9" cy="8" r="3.2" fill={C} /><path d="M3 20a6 6 0 0 1 12 0z" fill={C} /><circle cx="17" cy="9" r="2.6" fill={A} /><path d="M14 20a5 5 0 0 1 8 0z" fill={A} /></>),
  balance: (<><circle cx="12" cy="12" r="9" fill={C} /><path d="M12 3a9 9 0 0 1 0 18z" fill={A} /></>),
};

interface Props {
  name: IconName;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  className?: string;
}

/** Icon on a circular disc: purple when earned/active, stone when not, dashed outline when unearned. */
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
        {GLYPHS[name] ?? GLYPHS.compass}
      </svg>
    </div>
  );
}
