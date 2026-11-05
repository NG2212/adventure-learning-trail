import { Link } from "@tanstack/react-router";
import { ADVENTURES, CATEGORIES, WAVES } from "@/content/adventures";
import { useStoreState } from "@/store";
import { ICONS, badgeStateFor } from "./AdventureIcon";
import { LabelHint } from "./LabelHint";
import { cn } from "@/lib/utils";

export function BadgeGrid({ title = "Badges" }: { title?: string }) {
  const { completions } = useStoreState();
  const earned = new Set(completions.map((c) => c.slug));
  return <section aria-label={title} className="mt-12"><p className="eyebrow mb-2">AI Adventure · Badges</p><h2 className="text-2xl">{title}</h2>{CATEGORIES.map((category) => <section key={category} className="ui-card mt-7 p-5 pb-7"><h3 className="mb-5 text-sm font-semibold">{category}</h3><div className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5 lg:grid-cols-6">{ADVENTURES.filter((a) => a.category === category).map((a) => {
    const has = earned.has(a.slug);
    const state = badgeStateFor(a, earned);
    const Icon = ICONS[a.icon];
    const content = <Link to="/adventures/$slug" params={{ slug: a.slug }} data-badge-state={state} className={cn("flex max-w-36 flex-col items-center gap-2 text-center", state === "later" && "opacity-45")}><span className={cn("flex size-14 shrink-0 items-center justify-center rounded-full", state === "earned" ? "bg-primary text-primary-foreground" : state === "open" ? "bg-card text-primary ring-1 ring-primary/40" : "bg-card text-muted-foreground ring-1 ring-stone")}><Icon className="size-8" strokeWidth={1.75} /></span><span className={cn("text-xs", state === "later" && "text-muted-foreground")}>{a.title}</span></Link>;
    return !a.isOpen && !has ? <LabelHint key={a.slug} text={WAVES[a.wave]?.label ?? "Opens later"}>{content}</LabelHint> : <div key={a.slug}>{content}</div>;
  })}</div></section>)}</section>;
}
