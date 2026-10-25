import { Footprint } from "./Footprints";
import { cn } from "@/lib/utils";

export function CompletedStamp({ className }: { className?: string }) {
  return <span aria-label="Completed" className={cn("completed-stamp", className)}>
    <span>COMPLETED</span><Footprint className="h-5 w-3" />
  </span>;
}