import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ADVENTURES, CATEGORIES, EFFORTS, LEVELS, PROFESSIONS, TOOLS, type Adventure,
} from "@/content/adventures";
import { useStoreState } from "@/store";
import { AdventureCard } from "@/components/AdventureCard";
import { PageHeading } from "@/components/AppShell";
import { FootprintPair } from "@/components/Footprints";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/adventures/")({
  validateSearch: (s: Record<string, unknown>): { build?: boolean | undefined } => ({
    build: s["build"] === true || s["build"] === "true" ? true : undefined,
  }),
  head: () => ({
    meta: [
      { title: "All adventures · AI Adventure" },
      { name: "description", content: "Every AI Adventure destination, grouped by category." },
      { property: "og:title", content: "All adventures · AI Adventure" },
      { property: "og:description", content: "Every AI Adventure destination." },
    ],
  }),
  component: AllAdventures,
});

const STATUSES = ["Open", "Coming soon", "Done"] as const;
type FilterKey = "category" | "level" | "profession" | "tool" | "effort" | "status";
const FILTER_GROUPS: { key: FilterKey; label: string; options: readonly string[] }[] = [
  { key: "category", label: "Category", options: CATEGORIES },
  { key: "level", label: "Level", options: LEVELS },
  { key: "profession", label: "Profession", options: PROFESSIONS },
  { key: "tool", label: "Works with", options: TOOLS },
  { key: "effort", label: "Effort", options: EFFORTS },
  { key: "status", label: "Status", options: STATUSES },
];

type Filters = Record<FilterKey, string[]>;
const EMPTY: Filters = { category: [], level: [], profession: [], tool: [], effort: [], status: [] };

/** Within a group chips are OR; across groups they are AND. */
function matches(a: Adventure, f: Filters, doneSlugs: string[]) {
  const status = doneSlugs.includes(a.slug) ? "Done" : a.isOpen ? "Open" : "Coming soon";
  const any = (sel: string[], vals: string[]) => sel.length === 0 || sel.some((s) => vals.includes(s));
  return (
    any(f.category, [a.category]) && any(f.level, a.levels) && any(f.profession, a.professions) &&
    any(f.tool, [a.tool]) && any(f.effort, [a.effort]) && any(f.status, [status])
  );
}

function AllAdventures() {
  const { build } = Route.useSearch();
  const { completions } = useStoreState();
  const [filters, setFilters] = useState<Filters>(EMPTY);
  const done = completions.map((c) => c.slug);
  const visible = ADVENTURES.filter((a) => matches(a, filters, done));
  const active = Object.values(filters).some((v) => v.length);

  const toggle = (key: FilterKey, value: string) =>
    setFilters((f) => ({ ...f, [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value] }));

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <PageHeading
        title="All adventures"
        subtitle={build ? "Build your own itinerary: add the destinations that fit your work. You can reorder them later." : "Every destination, grouped by category."}
      />
      <div className="space-y-3 rounded-3xl bg-muted p-5">
        {FILTER_GROUPS.map((g) => (
          <div key={g.key} className="flex flex-wrap items-center gap-2">
            <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{g.label}</span>
            {g.options.map((o) => {
              const on = filters[g.key].includes(o);
              return (
                <button
                  key={o}
                  aria-pressed={on}
                  onClick={() => toggle(g.key, o)}
                  className={cn("rounded-full border px-3 py-1 text-sm transition", on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary")}
                >
                  {o}
                </button>
              );
            })}
          </div>
        ))}
        {active && (
          <button onClick={() => setFilters(EMPTY)} className="text-sm font-semibold text-primary">Clear filters</button>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <FootprintPair className="size-28" />
          <p className="mt-4 font-semibold">No destinations match these filters.</p>
          <button onClick={() => setFilters(EMPTY)} className="mt-2 text-sm font-semibold text-primary">Clear filters</button>
        </div>
      ) : (
        CATEGORIES.map((cat) => {
          const items = visible.filter((a) => a.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat} className="mt-12">
              <h2 className="mb-5 text-2xl">{cat}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((a) => <AdventureCard key={a.slug} adventure={a} highlightAdd={!!build} />)}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
