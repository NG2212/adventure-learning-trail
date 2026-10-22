import { useRef, useState } from "react";
import { FileUp, Pencil, Plus, Save } from "lucide-react";
import { parse as parseYaml } from "yaml";
import { toast } from "sonner";
import { store, useStoreState } from "@/store";
import {
  CATEGORIES,
  LEVELS,
  PROFESSIONS,
  TOOLS,
  EFFORTS,
  ICON_NAMES,
  toAdventure,
} from "@/content/adventures";
import type { AdminAdventure, AdminStatus } from "@/store/adminTypes";
import { Disc } from "@/components/AdventureIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { SelectField, tableClass, percent } from "./AdminCommon";
const TEMPLATE = `## Why this adventure\n\nTurn a real work challenge into something useful with AI.\n\n## The trail\n\n1. Choose your challenge\n2. Build a first version\n3. Make it your own\n\n## Before you start\n\nBring one real example from your work.\nOpen your preferred AI tool.\n\n## Step 1: Choose your challenge\n\n### Prompt: Find the right starting point\n\n**What this does:** Clarifies the result you want.\n\n\`\`\`\nHelp me frame this challenge. Ask me what you need to know before suggesting a plan.\n\`\`\`\n\n## Step 2: Build a first version\n\nWork with AI to create your first version.\n\n## Step 3: Make it your own\n\nReview and improve the result.\n\n## Go further\n\n**Try another example.** Apply the same approach to a different challenge.\n\n## Proof of work\n\nKeep the before and after versions.\n\n## Related adventures\n\n- [Your AI Identity](/adventures/your-ai-identity)\n`;
function newAdventure(): AdminAdventure {
  return {
    slug: "",
    title: "",
    walkaway: "",
    icon: "compass",
    category: CATEGORIES[0],
    levels: ["Foundations"],
    professions: ["Everyone"],
    audience: [],
    tool: TOOLS[0],
    effort: "Moderate",
    outcome: "Build something",
    wave: 1,
    slot: 31,
    next: [],
    body: TEMPLATE,
    isOpen: false,
    status: "Draft",
  };
}
function Choices({
  label,
  values,
  options,
  onChange,
}: {
  label: string;
  values: string[];
  options: readonly string[];
  onChange: (v: string[]) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-xs font-semibold text-muted-foreground">{label}</legend>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        {options.map((o) => (
          <label key={o} className="flex items-center gap-1.5 text-xs">
            <input
              type="checkbox"
              checked={values.includes(o)}
              onChange={(e) =>
                onChange(e.target.checked ? [...values, o] : values.filter((v) => v !== o))
              }
            />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
export function AdminAdventures() {
  useStoreState();
  const adventures = store.listAdminAdventures(),
    metrics = store.getAggregates().adventures,
    waves = store.getAdminWaves();
  const [draft, setDraft] = useState<AdminAdventure | null>(null);
  const [originalSlug, setOriginalSlug] = useState<string | null>(null);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const update = (patch: Partial<AdminAdventure>) => setDraft((d) => (d ? { ...d, ...patch } : d));
  const openEditor = (a?: AdminAdventure) => {
    setError("");
    setOriginalSlug(a?.slug ?? null);
    setDraft(a ? { ...a } : newAdventure());
  };
  const upload = async (file: File) => {
    try {
      const raw = await file.text();
      const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!match) throw new Error("Add YAML frontmatter to the Markdown file.");
      const fm = parseYaml(match[1] ?? "");
      if (!fm?.slug || !fm?.title) throw new Error("Frontmatter needs a slug and title.");
      const a = toAdventure(raw);
      if (
        !CATEGORIES.includes(a.category) ||
        !TOOLS.includes(a.tool) ||
        !EFFORTS.includes(a.effort) ||
        !a.levels.every((v) => LEVELS.includes(v))
      )
        throw new Error("Choose labels from the fixed lists.");
      setOriginalSlug(null);
      setDraft({ ...a, status: "Draft", isOpen: false });
      setError("");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not read this file.");
    }
  };
  const save = () => {
    if (!draft) return;
    const slug = draft.slug.trim().toLowerCase().replace(/\s+/g, "-");
    if (!draft.title.trim() || !draft.walkaway.trim() || !slug) {
      setError("Add a title, slug and promise line.");
      return;
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      setError("Use lowercase words separated by hyphens for the slug.");
      return;
    }
    if (slug !== originalSlug && adventures.some((a) => a.slug === slug)) {
      setError("That slug already belongs to another adventure.");
      return;
    }
    store.saveAdminAdventure({
      ...draft,
      slug,
      status: originalSlug ? draft.status : "Draft",
      isOpen: originalSlug ? draft.status === "Open" : false,
    });
    setDraft(null);
    toast.success(originalSlug ? "Adventure saved" : "Draft adventure added");
  };
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {adventures.length} destinations · {adventures.filter((a) => a.status === "Draft").length}{" "}
          drafts
        </p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => fileRef.current?.click()}>
            <FileUp className="size-4" />
            Upload Markdown file
          </Button>
          <Button onClick={() => openEditor()}>
            <Plus className="size-4" />
            Add adventure
          </Button>
        </div>
      </div>
      <input
        ref={fileRef}
        type="file"
        accept=".md,text/markdown"
        className="hidden"
        aria-label="Upload Markdown file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void upload(file);
          e.target.value = "";
        }}
      />
      <div className="overflow-x-auto border bg-card">
        <table className={tableClass}>
          <thead>
            <tr>
              {[
                "Adventure",
                "Category",
                "Levels",
                "Professions",
                "Audience",
                "Works with",
                "Effort",
                "Wave",
                "Status",
                "Opens",
                "Completions",
                "Completion rate",
                "Actions",
              ].map((x) => (
                <th key={x}>{x}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {adventures.map((a) => {
              const m = metrics.find((x) => x.slug === a.slug);
              return (
                <tr key={a.slug}>
                  <td>
                    <div className="flex min-w-52 items-center gap-3">
                      <Disc
                        name={a.icon}
                        art={a.iconAsset}
                        state={a.status === "Open" ? "open" : "later"}
                        size="sm"
                      />
                      <span className="font-semibold">{a.title}</span>
                    </div>
                  </td>
                  <td>{a.category}</td>
                  <td>{a.levels.join(", ")}</td>
                  <td>{a.professions.join(", ")}</td>
                  <td>{a.audience.join(", ") || "—"}</td>
                  <td>{a.tool}</td>
                  <td>{a.effort}</td>
                  <td>
                    <select
                      aria-label={`Change wave for ${a.title}`}
                      className="rounded border bg-background p-1"
                      value={a.wave}
                      onChange={(e) => store.setAdventureWave(a.slug, Number(e.target.value))}
                    >
                      {waves.map((w) => (
                        <option key={w.number} value={w.number}>
                          W{w.number}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select
                      aria-label={`Set status for ${a.title}`}
                      className="rounded border bg-background p-1"
                      value={a.status}
                      onChange={(e) =>
                        store.setAdventureStatus(a.slug, e.target.value as AdminStatus)
                      }
                    >
                      {["Open", "Scheduled", "Draft"].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    {a.status === "Scheduled" && (
                      <span className="mt-1 block whitespace-nowrap text-muted-foreground">
                        {waves.find((w) => w.number === a.wave)?.date}
                      </span>
                    )}
                  </td>
                  <td>{m?.opens ?? 0}</td>
                  <td>{m?.completions ?? 0}</td>
                  <td>{percent(m?.rate ?? 0)}</td>
                  <td>
                    <Button variant="ghost" size="sm" onClick={() => openEditor(a)}>
                      <Pencil className="size-3" />
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Sheet
        open={Boolean(draft)}
        onOpenChange={(open) => {
          if (!open) setDraft(null);
        }}
      >
        <SheetContent className="w-full overflow-y-auto sm:max-w-6xl">
          <SheetHeader>
            <SheetTitle>{originalSlug ? "Edit adventure" : "Add adventure"}</SheetTitle>
            <SheetDescription>{originalSlug ? "Adventure directory" : "Draft"}</SheetDescription>
          </SheetHeader>
          {draft && (
            <>
              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <label htmlFor="adventure-markdown" className="text-sm font-semibold">
                      Markdown
                    </label>
                    <Button size="sm" variant="outline" onClick={() => fileRef.current?.click()}>
                      <FileUp className="size-4" />
                      Upload Markdown file
                    </Button>
                  </div>
                  <Textarea
                    id="adventure-markdown"
                    aria-label="Adventure Markdown"
                    className="min-h-[680px] font-mono text-xs leading-relaxed"
                    value={draft.body}
                    onChange={(e) => update({ body: e.target.value })}
                  />
                </div>
                <div className="space-y-5">
                  <label className="block text-xs font-medium">
                    Title
                    <Input
                      className="mt-1"
                      aria-label="Adventure title"
                      value={draft.title}
                      onChange={(e) =>
                        update({
                          title: e.target.value,
                          ...(!originalSlug
                            ? {
                                slug: e.target.value
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]+/g, "-")
                                  .replace(/^-|-$/g, ""),
                              }
                            : {}),
                        })
                      }
                    />
                  </label>
                  <label className="block text-xs font-medium">
                    Slug
                    <Input
                      aria-label="Adventure slug"
                      className="mt-1"
                      readOnly={Boolean(originalSlug)}
                      value={draft.slug}
                      onChange={(e) => update({ slug: e.target.value })}
                    />
                  </label>
                  <label className="block text-xs font-medium">
                    Promise line
                    <Input
                      aria-label="Promise line"
                      className="mt-1"
                      value={draft.walkaway}
                      onChange={(e) => update({ walkaway: e.target.value })}
                    />
                  </label>
                  <SelectField
                    label="Category"
                    value={draft.category}
                    onChange={(v) => update({ category: v as AdminAdventure["category"] })}
                    options={[...CATEGORIES]}
                    all={null}
                  />
                  <Choices
                    label="Levels"
                    values={draft.levels}
                    options={LEVELS}
                    onChange={(v) => update({ levels: v as AdminAdventure["levels"] })}
                  />
                  <Choices
                    label="Professions"
                    values={draft.professions}
                    options={["Everyone", ...PROFESSIONS.filter((p) => p !== "Managers")]}
                    onChange={(v) => update({ professions: v })}
                  />
                  <Choices
                    label="Audience"
                    values={draft.audience}
                    options={["Managers"]}
                    onChange={(v) => update({ audience: v })}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <SelectField
                      label="Works with"
                      value={draft.tool}
                      options={[...TOOLS]}
                      all={null}
                      onChange={(v) => update({ tool: v as AdminAdventure["tool"] })}
                    />
                    <SelectField
                      label="Effort"
                      value={draft.effort}
                      options={[...EFFORTS]}
                      all={null}
                      onChange={(v) => update({ effort: v as AdminAdventure["effort"] })}
                    />
                    <SelectField
                      label="Outcome"
                      value={draft.outcome}
                      options={["Build something", "Learn something", "Work differently"]}
                      all={null}
                      onChange={(v) => update({ outcome: v })}
                    />
                    <SelectField
                      label="Wave"
                      value={String(draft.wave)}
                      options={waves.map((w) => ({
                        value: String(w.number),
                        label: `W${w.number}`,
                      }))}
                      all={null}
                      onChange={(v) => update({ wave: Number(v) })}
                    />
                    <SelectField
                      label="Icon"
                      value={draft.icon}
                      options={[...ICON_NAMES]}
                      all={null}
                      onChange={(v) =>
                        update({ icon: v as AdminAdventure["icon"], iconAsset: undefined })
                      }
                    />
                  </div>
                  <div className="border-t pt-4">
                    <p className="mb-3 text-xs font-semibold text-muted-foreground">Card preview</p>
                    <div className="max-w-sm rounded-lg border bg-card p-5 text-center">
                      <div className="flex justify-center">
                        <Disc name={draft.icon} art={draft.iconAsset} state="later" size="lg" />
                      </div>
                      <span className="mt-3 inline-block text-xs text-muted-foreground">
                        {originalSlug ? draft.status : "Draft"}
                      </span>
                      <h3 className="mt-2 text-lg">{draft.title || "Untitled adventure"}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {draft.walkaway || "Promise line"}
                      </p>
                      <p className="mt-3 text-xs text-primary">
                        {draft.category} · {draft.effort}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {error && (
                <p role="alert" className="mt-4 text-sm text-destructive">
                  {error}
                </p>
              )}
              <div className="sticky bottom-0 mt-6 flex justify-end gap-3 border-t bg-background py-4">
                <Button variant="outline" onClick={() => setDraft(null)}>
                  Cancel
                </Button>
                <Button onClick={save}>
                  <Save className="size-4" />
                  {originalSlug ? "Save changes" : "Save draft"}
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
