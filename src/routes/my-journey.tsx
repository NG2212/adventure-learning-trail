import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, X } from "lucide-react";
import { getAdventure, WAVES, type Adventure } from "@/content/adventures";
import { store, useStoreState } from "@/store";
import { AdventureIcon } from "@/components/AdventureIcon";
import { AdventureRating } from "@/components/AdventureRating";
import { Chip, LabelChips } from "@/components/LabelChips";
import { FootprintPair, FootprintShape } from "@/components/Footprints";
import { PageHeading } from "@/components/AppShell";
import { CompletedStamp } from "@/components/CompletedStamp";
import { Button } from "@/components/ui/button";
import { titleFor } from "@/lib/titles";
import { pageHead } from "@/lib/pageHead";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/my-journey")({ head: () => pageHead("My journey", "Your AI Adventure journey: added destinations in order and completed adventures."), component: Journey });
function Journey() {
  const { itinerary, completions } = useStoreState();
  const done = new Set(completions.map((c) => c.slug));
  const stops = itinerary.map(getAdventure).filter((a): a is Adventure => Boolean(a));
  const nextSlug = stops.find((a) => !done.has(a.slug) && a.isOpen)?.slug;
  return <div className="mx-auto max-w-6xl px-5 py-12"><PageHeading title="My journey" subtitle={`${completions.length} of 30 adventures completed · ${titleFor(completions.length) ?? "Ready to set off"}`}><Button variant="outline" asChild><Link to="/adventures">Find more destinations</Link></Button></PageHeading>
    <section aria-label="In progress"><h2 className="mb-5 text-2xl">In progress</h2><ol className="max-w-3xl">{stops.map((a, i) => <li key={a.slug}>{i > 0 && <TrailConnector flip={i % 2 === 0} />}<Stop adventure={a} status={done.has(a.slug) ? "done" : a.slug === nextSlug ? "next" : "later"} index={i} total={stops.length} /></li>)}</ol>{!stops.length && <div className="flex items-center gap-4"><FootprintPair className="size-20" /><Link to="/adventures" className="text-primary">Add destinations from All adventures</Link></div>}</section>
    <section aria-label="Completed" className="mt-12"><h2 className="mb-5 text-2xl">Completed</h2><div className="grid gap-4 md:grid-cols-2">{completions.map((c) => {
      const a = getAdventure(c.slug); if (!a) return null;
      return <Link key={c.slug} to="/adventures/$slug" params={{ slug: c.slug }} className="flex items-center gap-4 rounded-lg border bg-card p-5"><AdventureIcon adventure={a} /><div className="min-w-0 flex-1"><h3 className="text-base">{a.title}</h3><time className="mt-2 block text-xs text-muted-foreground">{new Date(c.completedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}</time></div><CompletedStamp /></Link>;
    })}</div>{!completions.length && <p className="text-muted-foreground">Your completed destinations will appear here.</p>}</section>
  </div>;
}
function TrailConnector({ flip }: { flip: boolean }) {
  return <svg viewBox="0 0 200 60" className={cn("mx-auto h-16 w-48", flip && "-scale-x-100")} aria-hidden><path d="M100 0 C40 20,160 40,100 60" fill="none" stroke="var(--color-stone)" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" /><FootprintShape x={80} y={22} angle={160} scale={0.6} fill="var(--color-primary)" /><FootprintShape x={120} y={42} angle={190} scale={0.6} fill="var(--color-primary)" flip /></svg>;
}
function Stop({ adventure, status, index, total }: { adventure: Adventure; status: "done" | "next" | "later"; index: number; total: number }) {
  const navigate = useNavigate();
  const open = () => navigate({ to: "/adventures/$slug", params: { slug: adventure.slug } });
  const scheduled = !adventure.isOpen && status !== "done";
  return <div role="link" tabIndex={0} aria-label={`Open ${adventure.title}`} onClick={open} onKeyDown={(e) => { if (e.key === "Enter") void open(); }} className={cn("flex cursor-pointer flex-col gap-4 rounded-lg border bg-card p-5 sm:flex-row sm:items-center", status === "next" && "border-lime ring-2 ring-lime", scheduled && "opacity-45")}><AdventureIcon adventure={adventure} className={scheduled ? "grayscale" : undefined} /><div className="min-w-0 flex-1"><div className="mb-2">{status === "done" ? <Chip>Completed</Chip> : status === "next" ? <Chip>Next up</Chip> : <Chip>{adventure.isOpen ? "Later" : WAVES[adventure.wave]?.label}</Chip>}</div><h3 className="text-lg">{adventure.title}</h3><LabelChips adventure={adventure} className="mt-2" effortAccessory={<AdventureRating slug={adventure.slug} />} /></div><div className="flex gap-1 sm:flex-col">{[{ label: "Move up", disabled: index === 0, icon: ArrowUp, action: () => store.reorderItinerary(adventure.slug, "up") }, { label: "Move down", disabled: index === total - 1, icon: ArrowDown, action: () => store.reorderItinerary(adventure.slug, "down") }, { label: "Remove", disabled: false, icon: X, action: () => store.removeFromItinerary(adventure.slug) }].map(({ label, disabled, icon: Icon, action }) => <Button key={label} variant="outline" size="icon" title={label} aria-label={label} disabled={disabled} onClick={(e) => { e.stopPropagation(); action(); }} onKeyDown={(e) => e.stopPropagation()}><Icon /></Button>)}</div></div>;
}
