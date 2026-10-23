import { useState } from "react";
import { Footprint } from "./Footprints";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function FootprintRating({ value, onChange }: { value: number; onChange?: (rating: number) => void }) {
  const [hover, setHover] = useState(0);
  if (!onChange) return <span className="inline-flex items-center gap-1 text-primary" aria-label={`${value} out of 5`}>
    {[1, 2, 3, 4, 5].map((n) => <Footprint key={n} className={cn("h-5 w-3", n > value && "text-muted-foreground/30")} />)}
    <span className="ml-1 text-xs tabular-nums">{value}/5</span>
  </span>;
  return <div role="radiogroup" aria-label="How was this adventure?" className="flex gap-1" onMouseLeave={() => setHover(0)}>
    {[1, 2, 3, 4, 5].map((n) => <Button key={n} type="button" variant="ghost" size="icon" role="radio" aria-checked={value === n} aria-label={`${n} out of 5`} title={`${n} out of 5`} onMouseEnter={() => setHover(n)} onFocus={() => setHover(n)} onBlur={() => setHover(0)} onClick={() => onChange(n)} onKeyDown={(e) => {
      if (["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        const next = Math.max(1, Math.min(5, n + (["ArrowRight", "ArrowUp"].includes(e.key) ? 1 : -1)));
        onChange(next);
        const target = e.currentTarget.parentElement?.querySelector<HTMLElement>(`[aria-label="${next} out of 5"]`);
        target?.focus();
      }
    }} className={cn("size-10 rounded-md hover:bg-primary-soft hover:text-primary", n <= (hover || value) ? "text-primary" : "text-muted-foreground/35")}><Footprint className="h-7! w-4!" /></Button>)}
  </div>;
}