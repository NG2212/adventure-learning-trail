import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ADVENTURES, CATEGORIES, EFFORTS, LEVELS, PROFESSIONS, TOOLS, matchesProfession, type Adventure, type Profession } from "@/content/adventures";
import { AdventureCard } from "@/components/AdventureCard";
import { DiscLegend } from "@/components/AdventureIcon";
import { JourneyPanel } from "@/components/JourneyPanel";
import { PageHeading } from "@/components/AppShell";
import { FootprintPair } from "@/components/Footprints";
import { Button } from "@/components/ui/button";
import { CATEGORY_TONES, CategoryDot, LABEL_HINTS } from "@/components/LabelChips";
import { LabelHint } from "@/components/LabelHint";
import { pageHead } from "@/lib/pageHead";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/adventures/")({ validateSearch: (s: Record<string, unknown>): { build?: boolean | undefined } => ({ build: s["build"] === true || s["build"] === "true" ? true : undefined }), head: () => pageHead("All adventures", "Explore all thirty AI Adventure destinations by category, effort and outcome."), component: AllAdventures });
type FilterKey = "level" | "profession" | "tool" | "effort" | "outcome";
type Filters = Record<FilterKey, string[]>;
const EMPTY: Filters = { level: [], profession: [], tool: [], effort: [], outcome: [] };
const GROUPS: { key: Exclude<FilterKey, "category">; label: string; options: readonly string[] }[] = [
  { key: "level", label: "Level", options: LEVELS }, { key: "profession", label: "Profession", options: PROFESSIONS }, { key: "tool", label: "Works with", options: TOOLS }, { key: "effort", label: "Effort", options: EFFORTS }, { key: "outcome", label: "Outcome", options: [...new Set(ADVENTURES.map((a) => a.outcome))] },
];
export function matchesFilters(a: Adventure, f: Filters) {
  const any = (sel: string[], vals: string[]) => !sel.length || sel.some((s) => vals.includes(s));
  return any(f.level, a.levels) && (!f.profession.length || f.profession.some((p) => matchesProfession(a, p as Profession))) && any(f.tool, [a.tool]) && any(f.effort, [a.effort]) && any(f.outcome, [a.outcome]);
}
function AllAdventures() {
  const { build } = Route.useSearch();
  const [filters, setFilters] = useState<Filters>(EMPTY);
  const [panel, setPanel] = useState(false);
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(CATEGORIES[0]);
  const visible = ADVENTURES.filter((a) => matchesFilters(a, filters));
  const toggle = (key: FilterKey, value: string) => setFilters((f) => ({ ...f, [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value] }));
  useEffect(() => {
    const update = () => {
      const headerHeight = document.querySelector('[data-app-header]')?.getBoundingClientRect().height ?? 0;
      const barHeight = document.querySelector('[data-catalogue-bar]')?.getBoundingClientRect().height ?? 0;
      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-category-section]'));
      const active = sections.filter((section) => section.getBoundingClientRect().top <= headerHeight + barHeight + 50).at(-1) ?? sections[0];
      if (active?.dataset['categorySection']) setCurrentCategory(active.dataset['categorySection']);
    };
    window.addEventListener('scroll', update, { passive: true }); update();
    return () => window.removeEventListener('scroll', update);
  }, [filters, collapsed]);
  const jump = (category: string) => {
    setCollapsed((old) => old.filter((c) => c !== category)); setCurrentCategory(category);
    requestAnimationFrame(() => {
      const target = document.getElementById(`category-${CATEGORIES.indexOf(category as typeof CATEGORIES[number])}`);
      const headerHeight = document.querySelector('[data-app-header]')?.getBoundingClientRect().height ?? 0;
      const barHeight = document.querySelector('[data-catalogue-bar]')?.getBoundingClientRect().height ?? 0;
      if (target) window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - headerHeight - barHeight - 12, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    });
  };
  return <div className="mx-auto max-w-[90rem] px-5 py-12"><div className="xl:grid xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start xl:gap-8"><div className="min-w-0"><PageHeading title="All adventures" subtitle={build ? "Build your own journey: choose the destinations that fit your work." : "Every destination, grouped by category."} /><p className="mt-3 mb-6 max-w-2xl text-sm text-muted-foreground">Every adventure works best on a strong model, for example Opus, with extended thinking on.</p><JourneyPanel className="mb-6 xl:hidden" />
    <div data-catalogue-bar className="catalogue-sticky sticky z-30 -mx-5 border-y bg-surface px-5 py-3">
      <div className="flex items-center gap-3"><nav aria-label="Category sections" className="flex min-w-0 flex-1 gap-2 overflow-x-auto py-1">{CATEGORIES.map((cat) => <Button key={cat} variant="ghost" size="sm" aria-current={currentCategory === cat ? "location" : undefined} aria-pressed={currentCategory === cat} onClick={() => jump(cat)} className={cn("category-chip shrink-0 rounded-full px-2.5 text-xs", CATEGORY_TONES[cat], currentCategory === cat && "ring-2 ring-primary ring-inset")}><CategoryDot />{cat}</Button>)}</nav></div>
      <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2"><Button variant="outline" size="sm" className="shrink-0" aria-expanded={panel} aria-controls="filter-panel" onClick={() => setPanel(!panel)}><SlidersHorizontal />More filters</Button><DiscLegend /></div>
      {GROUPS.some((g) => filters[g.key].length) && <div aria-label="Active filters" className="mt-3 flex flex-wrap gap-2">{GROUPS.flatMap((g) => filters[g.key].map((value) => <Button key={`${g.key}-${value}`} size="sm" variant="secondary" onClick={() => toggle(g.key, value)} aria-label={`Remove ${g.label}: ${value}`} className="h-auto whitespace-normal rounded-full py-1 text-xs">{g.label}: {value}<X /></Button>))}<Button variant="link" size="sm" onClick={() => setFilters(EMPTY)}>Clear filters</Button></div>}
      {panel && <div id="filter-panel" className="mt-3 max-h-[45dvh] space-y-4 overflow-y-auto border-t py-4">{GROUPS.map((g) => <div key={g.key} className="flex flex-wrap items-center gap-2"><span className="w-24 text-xs font-semibold text-muted-foreground">{g.label}</span>{g.options.map((value) => <LabelHint key={value} text={LABEL_HINTS[g.key]}><Button variant="outline" size="sm" aria-pressed={filters[g.key].includes(value)} onClick={() => toggle(g.key, value)} className={cn("h-auto whitespace-normal rounded-full py-1 text-xs", filters[g.key].includes(value) && "border-primary bg-primary-soft text-primary")}>{value}</Button></LabelHint>)}</div>)}<Button size="sm" onClick={() => setPanel(false)}>Apply filters</Button></div>}
    </div>
    {!visible.length ? <div className="mt-16 flex flex-col items-center"><FootprintPair className="size-28" /><p className="mt-4">No destinations match these filters.</p><Button variant="link" onClick={() => setFilters(EMPTY)}>Clear filters</Button></div> : CATEGORIES.map((cat, i) => {
      const items = visible.filter((a) => a.category === cat); if (!items.length) return null;
      const closed = collapsed.includes(cat);
      return <section key={cat} id={`category-${i}`} data-category-section={cat} className="catalogue-section mt-10"><div className="mb-5 flex items-center justify-between gap-3"><h2 className={cn("category-heading flex items-center gap-2 pb-2 text-2xl", CATEGORY_TONES[cat])}><CategoryDot /><span>{cat} <span className="text-sm font-normal text-muted-foreground">{items.length}</span></span></h2><Button variant="ghost" size="icon" aria-label={`${closed ? "Expand" : "Collapse"} ${cat}`} aria-expanded={!closed} onClick={() => setCollapsed((old) => closed ? old.filter((c) => c !== cat) : [...old, cat])}><ChevronDown className={cn("transition-transform", !closed && "rotate-180")} /></Button></div>{!closed && <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">{items.map((a) => <AdventureCard key={a.slug} adventure={a} highlightAdd={Boolean(build)} />)}</div>}</section>;
    })}
  </div><JourneyPanel className="journey-panel-sticky sticky hidden xl:block" /></div></div>;
}
