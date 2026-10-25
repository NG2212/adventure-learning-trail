import {
  BarChart3, BookOpen, Bot, Brain, Briefcase, CalendarCheck, Check, Clock, Compass, Drama, Eraser, FileText, Gauge,
  IdCard, Layers, MapPin, MessageSquare, Network, Newspaper, Palette, Repeat, Scale, Search, ShieldCheck, Terminal,
  Users, Wrench, type LucideIcon,
} from "lucide-react";
import { ADVENTURES, type Adventure, type IconName } from "@/content/adventures";
import { useStoreState } from "@/store";
import { cn } from "@/lib/utils";

/** One Lucide icon per `icon:` name in adventure frontmatter. Unknown names fall back to the category glyph upstream. */
export const ICONS: Record<IconName, LucideIcon> = {
  sponge: Eraser, masks: Drama, robot: Bot, scale: Scale, compass: Compass, book: BookOpen, toolbox: Wrench,
  magnifier: Search, document: FileText, chat: MessageSquare, palette: Palette, calendar: CalendarCheck,
  "id-card": IdCard, "map-pin": MapPin, brain: Brain, briefcase: Briefcase, gauge: Gauge, layers: Layers,
  shield: ShieldCheck, clock: Clock, terminal: Terminal, newspaper: Newspaper, chart: BarChart3, loop: Repeat,
  network: Network, people: Users, balance: Scale,
};

/**
 * Disc state, one meaning per colour everywhere:
 * open = white disc, purple icon, thin purple ring · itinerary = solid purple, white icon
 * done = solid purple + lime check badge · later = faded stone, muted icon (opens in a later wave)
 */
export type DiscState = "open" | "itinerary" | "done" | "later";

/** Badge rewards ignore journey membership and demo access; earned takes precedence over schedule. */
export function badgeStateFor(a: Pick<Adventure, "slug" | "isOpen">, earned: Set<string>): "earned" | "open" | "later" {
  return earned.has(a.slug) ? "earned" : a.isOpen ? "open" : "later";
}

export function discStateFor(a: Pick<Adventure, "slug" | "isOpen">, itinerary: string[], doneSlugs: Set<string>): DiscState {
  if (doneSlugs.has(a.slug)) return "done";
  if (itinerary.includes(a.slug)) return "itinerary";
  return a.isOpen ? "open" : "later";
}

export function useDiscState(a: Pick<Adventure, "slug" | "isOpen">): DiscState {
  const { itinerary, completions } = useStoreState();
  return discStateFor(a, itinerary, new Set(completions.map((c) => c.slug)));
}

const BOX = { xs: "size-5", sm: "size-10", md: "size-16", lg: "size-20", xl: "size-24" } as const;

export function Disc({ name, art, state, size = "md", className }: { name: IconName; art?: string | undefined; state: DiscState; size?: keyof typeof BOX; className?: string | undefined }) {
  const Icon = ICONS[name] ?? MapPin;
  const check = state === "done" && (
    <span className="absolute -right-0.5 -bottom-0.5 flex size-[34%] min-h-3 min-w-3 items-center justify-center rounded-full bg-lime text-foreground ring-2 ring-card">
      <Check className="size-[70%]" strokeWidth={3} aria-hidden />
    </span>
  );
  if (art) {
    // Badge art is purple by design. itinerary/done = art as-is; later = desaturated at ~45% opacity;
    // open = the #disc-open SVG filter (DiscFilters) swaps purple<->white, plus a thin purple ring.
    return (
      <div className={cn("relative shrink-0 rounded-full", BOX[size], state === "open" && "ring-[1.5px] ring-primary ring-inset", className)}>
        <img
          src={art}
          alt=""
          aria-hidden
          draggable={false}
          className={cn("size-full select-none", state === "later" && "opacity-45 grayscale", state === "open" && "[filter:url(#disc-open)]")}
        />
        {check}
      </div>
    );
  }
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full",
        BOX[size],
        state === "open" && "bg-card text-primary ring-[1.5px] ring-primary ring-inset",
        (state === "itinerary" || state === "done") && "bg-primary text-primary-foreground",
        state === "later" && "bg-stone/60 text-foreground/35",
        className,
      )}
    >
      <Icon className="size-[58%]" strokeWidth={1.75} aria-hidden />
      {check}
    </div>
  );
}

/** Adventure disc whose state is derived from itinerary + completions + wave. */
export function AdventureIcon({ adventure, size = "md", className }: { adventure: Adventure; size?: keyof typeof BOX; className?: string | undefined }) {
  const state = useDiscState(adventure);
  return <Disc name={adventure.icon} art={adventure.iconAsset} state={state} size={size} className={className} />;
}

const LEGEND_ART = ADVENTURES.find((a) => a.iconAsset)?.iconAsset;

export function DiscLegend({ className }: { className?: string }) {
  const items: [DiscState, string][] = [["open", "Open"], ["itinerary", "In my journey"], ["done", "Completed"], ["later", "Opens later"]];
  return (
    <div className={cn("flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-muted-foreground", className)}>
      {items.map(([s, label], i) => (
        <span key={s} className="inline-flex items-center gap-1.5">
          {i > 0 && <span aria-hidden className="mr-1">·</span>}
          <Disc name="compass" art={LEGEND_ART} state={s} size="xs" />
          {label}
        </span>
      ))}
    </div>
  );
}

/**
 * Mount once (AppShell). Maps luminance so the badge's purple disc becomes white and its white glyph
 * becomes brand purple (#9450FD); the lime accent, being light, also turns purple. Alpha is untouched.
 */
export function DiscFilters() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <filter id="disc-open" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="-0.154 -0.518 -0.052 0 1.304  -0.252 -0.846 -0.085 0 1.497  -0.003 -0.010 -0.001 0 1.006  0 0 0 1 0"
        />
      </filter>
    </svg>
  );
}
