import { useState } from "react";
import { store, useStoreState } from "@/store";
import { CATEGORIES } from "@/content/adventures";
import { EMPLOYEE_PROFESSIONS, type ProofFilters } from "@/store/adminTypes";
import { FootprintRating } from "@/components/FootprintRating";
import { Input } from "@/components/ui/input";
import { CsvButton, downloadCsv, number, Section, SelectField, tableClass, useAdminView } from "./AdminCommon";

export function MostLovedAdventures() {
  useStoreState();
  const [filters, setFilters] = useState<ProofFilters>({});
  const ratings = store.getRatingSummaries(filters).filter((r) => r.ratingCount > 0);
  return <Section title="Most loved adventures">
    <div className="mb-4 grid grid-cols-2 gap-3">
      <SelectField label="Rating category" value={filters.category ?? ""} options={[...CATEGORIES]} onChange={(category) => setFilters({ ...filters, category })} />
      <SelectField label="Rating profession" value={filters.profession ?? ""} options={EMPLOYEE_PROFESSIONS} onChange={(profession) => setFilters({ ...filters, profession })} />
    </div>
    <div className="max-h-96 overflow-y-auto">
      <table className={tableClass}><thead><tr><th>Adventure</th><th>Average rating</th><th>Ratings</th></tr></thead><tbody>
        {ratings.map((r) => <tr key={r.slug}><td className="font-medium">{r.title}</td><td className="whitespace-nowrap text-primary">{number(r.averageRating)} / 5</td><td>{r.ratingCount}</td></tr>)}
      </tbody></table>
      {!ratings.length && <p className="py-6 text-sm text-muted-foreground">No ratings match these filters.</p>}
    </div>
  </Section>;
}

export function AdminProofOfWork() {
  useStoreState();
  const { managerView } = useAdminView();
  const [filters, setFilters] = useState<ProofFilters>({});
  if (managerView) return null;
  const entries = store.listProofEntries(filters);
  return <Section title="Proof of work" action={<CsvButton onClick={() => downloadCsv("proof-of-work.csv", ["Adventure", "Person", "Date", "Rating", "What they built", "What they learned"], entries.map((p) => [p.adventureTitle, p.personName, p.completed_at, p.rating, p.built, p.learned]))} />}>
    <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <label className="text-xs font-medium text-muted-foreground">Search entries<Input aria-label="Search proof of work" placeholder="Person, adventure or text" className="mt-1" value={filters.search ?? ""} onChange={(e) => setFilters({ ...filters, search: e.target.value })} /></label>
      <SelectField label="Proof adventure" value={filters.slug ?? ""} options={store.listAdminAdventures().map((a) => ({ value: a.slug, label: a.title }))} onChange={(slug) => setFilters({ ...filters, slug })} />
      <SelectField label="Proof category" value={filters.category ?? ""} options={[...CATEGORIES]} onChange={(category) => setFilters({ ...filters, category })} />
      <SelectField label="Proof profession" value={filters.profession ?? ""} options={EMPLOYEE_PROFESSIONS} onChange={(profession) => setFilters({ ...filters, profession })} />
    </div>
    <p className="mb-3 text-xs text-muted-foreground">{entries.length} entries · Latest first · Visible to the person and L&D admins only.</p>
    <div className="max-h-[640px] overflow-auto border bg-card">
      <table className={tableClass}><thead><tr><th>Adventure</th><th>Person</th><th>Date</th><th>Rating</th><th>What they built</th><th>What they learned</th></tr></thead><tbody>
        {entries.map((p) => <tr key={`${p.personId}/${p.slug}`}><td className="min-w-40 font-medium">{p.adventureTitle}</td><td className="whitespace-nowrap">{p.personName}</td><td className="whitespace-nowrap">{p.completed_at.slice(0, 10)}</td><td><FootprintRating value={p.rating} /></td><td className="min-w-64 whitespace-pre-wrap break-words">{p.built}</td><td className="min-w-48 whitespace-pre-wrap break-words">{p.learned || "—"}</td></tr>)}
      </tbody></table>
      {!entries.length && <p className="p-6 text-center text-sm text-muted-foreground">No proof-of-work entries match these filters.</p>}
    </div>
  </Section>;
}