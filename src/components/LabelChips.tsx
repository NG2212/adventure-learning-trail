import type { Adventure } from "@/content/adventures";
import { cn } from "@/lib/utils";

/** Compact label row: category, levels, tool, effort. Uses supporting colours sparingly. */
export function LabelChips({ adventure, className }: { adventure: Adventure; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      <Chip tone="primary">{adventure.category}</Chip>
      {adventure.levels.map((l) => (
        <Chip key={l} tone="info">{l}</Chip>
      ))}
      <Chip tone="neutral">{adventure.tool}</Chip>
      <Chip tone="neutral">{adventure.effort}</Chip>
    </div>
  );
}

export function Chip({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "primary" | "info" | "success" | "coral" | "neutral" | "lime" }) {
  const tones = {
    primary: "bg-primary-soft text-primary",
    info: "bg-info/10 text-info",
    success: "bg-success/10 text-success",
    coral: "bg-coral/10 text-coral",
    neutral: "bg-muted text-muted-foreground",
    lime: "bg-lime text-foreground",
  };
  return <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium", tones[tone])}>{children}</span>;
}
