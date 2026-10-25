import { useState, type ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

/** Hover, focus, or touch exposes the same short label explanation. */
export function LabelHint({ text, children }: { text: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <TooltipProvider delayDuration={180}><Tooltip open={open} onOpenChange={setOpen}>
    <TooltipTrigger asChild><span tabIndex={0} className="inline-flex max-w-full" onClick={(event) => {
      if (window.matchMedia("(hover: none)").matches) { event.preventDefault(); event.stopPropagation(); setOpen((value) => !value); }
    }}>{children}</span></TooltipTrigger>
    <TooltipContent className="max-w-[min(360px,90vw)]">{text}</TooltipContent>
  </Tooltip></TooltipProvider>;
}