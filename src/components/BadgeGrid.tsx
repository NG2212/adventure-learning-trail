import { Link } from "@tanstack/react-router";
import { ADVENTURES, CATEGORIES, WAVES } from "@/content/adventures";
import { useStoreState } from "@/store";
import { ICONS } from "./AdventureIcon";
import { LabelHint } from "./LabelHint";
import { cn } from "@/lib/utils";

export function BadgeGrid() {
  const { completions } = useStoreState();
  const earned = new Set(completions.map((c) => c.slug));
  return <section aria-label="Badges" className="mt-12"><h2 className="text-2xl">Badges</h2>{CATEGORIES.map((category) => <section key={category} className="mt-7"><h3 className="mb-5 text-sm font-semibold">{category}</h3><div className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5 lg:grid-cols-6">{ADVENTURES.filter((a) => a.category === category).map((a) => {
    const has = earned.has(a.slug);
    const Icon = ICONS[a.icon];
    const content = <Link to="/adventures/$slug" params={{ slug: a.slug }} className="flex max-w-36 flex-col items-center gap-2 text-center"><span className={cn("flex size-14 shrink-0 items-center justify-center rounded-full", has ? "bg-primary text-primary-foreground" : "bg-card text-primary/35 ring-1 ring-primary/20")}><Icon className="size-8" strokeWidth={1.75} /></span><span className={cn("text-xs", !has && "text-muted-foreground")}>{a.title}</span></Link>;
    return !a.isOpen && !has ? <LabelHint key={a.slug} text={WAVES[a.wave]?.label ?? "Opens later"}>{content}</LabelHint> : <div key={a.slug}>{content}</div>;
  })}</div></section>)}</section>;
}
