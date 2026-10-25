import { effortLabel, type Adventure, type Category } from "@/content/adventures";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LabelHint } from "./LabelHint";

export const CATEGORY_TONES: Record<Category, string> = {
  "Work smarter with AI": "bg-category-work text-category-work-foreground",
  "Create with AI": "bg-category-create text-category-create-foreground",
  "Set up your AI": "bg-category-setup text-category-setup-foreground",
  "Automate and delegate": "bg-category-automate text-category-automate-foreground",
  "Lead with AI": "bg-category-lead text-category-lead-foreground",
};
export const LABEL_HINTS = {
  category: "Category: the kind of work this adventure helps with",
  level: "Level: how much AI experience the adventure assumes",
  profession: "Profession: the roles this adventure is designed for",
  tool: "Works with: the AI tools you can use for this adventure",
  effort: "Effort: the size of the task and its estimated duration",
  outcome: "Outcome: what you will take away from this adventure",
};

/** Compact label row: category, levels, tool, effort. Uses supporting colours sparingly. */
export function LabelChips({ adventure, className, effortAccessory }: { adventure: Adventure; className?: string; effortAccessory?: ReactNode }) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      <LabelHint text={LABEL_HINTS.category}><span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium", CATEGORY_TONES[adventure.category])}>{adventure.category}</span></LabelHint>
      {adventure.levels.map((l) => (
        <Chip key={l} hint={LABEL_HINTS.level}>{l}</Chip>
      ))}
      <Chip hint={LABEL_HINTS.tool}>{adventure.tool}</Chip>
      <span className="inline-flex flex-wrap items-center gap-1.5">
        <Chip hint={LABEL_HINTS.effort}>{effortLabel(adventure)}</Chip>
        {effortAccessory}
      </span>
    </div>
  );
}

export function Chip({ children, tone = "neutral", hint = "Status: where this adventure is in your journey" }: { children: React.ReactNode; hint?: string; tone?: "primary" | "info" | "success" | "coral" | "neutral" | "lime" }) {
  const tones = {
    primary: "bg-primary-soft text-primary",
    info: "bg-info/10 text-info",
    success: "bg-success/10 text-success",
    coral: "bg-coral/10 text-coral",
    neutral: "bg-muted text-muted-foreground",
    lime: "bg-lime text-foreground",
  };
  return <LabelHint text={hint}><span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium", tones[tone])}>{children}</span></LabelHint>;
}
