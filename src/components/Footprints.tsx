import { cn } from "@/lib/utils";

/** One flat footprint (sole + heel), pointing up. Colour comes from `fill`. */
export function FootprintShape({ x = 0, y = 0, angle = 0, scale = 1, fill = "currentColor", flip = false }: {
  x?: number; y?: number; angle?: number; scale?: number; fill?: string; flip?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${flip ? -scale : scale} ${scale})`}>
      <path d="M0 -14c5 0 7 5 6.5 10S4 4 0 4s-6.5-3-6.5-8S-5 -14 0 -14z" fill={fill} />
      <path d="M0 7c3 0 4.5 1.5 4.5 4S2.8 15 0 15s-4.5-1.5-4.5-4S-3 7 0 7z" fill={fill} />
    </g>
  );
}

export function Footprint({ className, angle = 0 }: { className?: string; angle?: number }) {
  return (
    <svg viewBox="-10 -16 20 33" className={cn("inline-block", className)} aria-hidden>
      <FootprintShape angle={angle} />
    </svg>
  );
}

/**
 * Footprints along a straight-ish path: alternating left/right offsets.
 * `heading` is in degrees, 0 = up.
 */
export function trail(startX: number, startY: number, heading: number, count: number, step = 60, bend = 0) {
  const prints: { x: number; y: number; angle: number; flip: boolean }[] = [];
  let x = startX, y = startY, h = heading;
  for (let i = 0; i < count; i++) {
    const rad = (h * Math.PI) / 180;
    const side = i % 2 === 0 ? -1 : 1;
    prints.push({ x: x + Math.cos(rad) * 10 * side, y: y + Math.sin(rad) * 10 * side, angle: h, flip: side > 0 });
    x += Math.sin(rad) * step;
    y -= Math.cos(rad) * step;
    h += bend;
  }
  return prints;
}

/** A small decorative pair of steps used in empty states. */
export function FootprintPair({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={cn("text-primary", className)} aria-hidden>
      {trail(40, 105, 20, 4, 28, 5).map((p, i) => (
        <FootprintShape key={i} {...p} scale={0.9} fill={["var(--color-primary)", "var(--color-pink)", "var(--color-lime)", "var(--color-sunny)"][i]} />
      ))}
    </svg>
  );
}
