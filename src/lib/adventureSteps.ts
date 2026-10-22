/**
 * Turns an adventure's Markdown body into rail steps.
 * Rules:
 * - HTML comments (design notes) are removed and never rendered.
 * - Text before the first `## ` (the `# ` title and tagline) is dropped; the page header covers it.
 * - Each `## ` heading is a step.
 * - Inside "Core task", each `### Step N` is its own step (shown indented in the rail);
 *   `### Prompt N:` headings stay inside the step they belong to.
 * - `## The trail` is not a step: its numbered items show in a stone panel at the top of the
 *   first step, and name `Step N:` rail items when the heading matches the Nth trail item.
 * - `## Related adventures` (older files: `## Where to next`) is not a step: it renders as a small
 *   link list below the "What's next" panel. Bold names matching an adventure title become links.
 * - `## Go further` is marked so the page renders its parts as collapsible cards.
 */
export interface AdventureStep {
  title: string;
  body: string;
  isSubstep: boolean;
  goFurther?: boolean;
}

export interface ParsedAdventure {
  steps: AdventureStep[];
  trail: string[];
  related: { heading: string; body: string } | null;
}

export function stripComments(md: string): string {
  return md.replace(/<!--[\s\S]*?-->/g, "");
}

const norm = (s: string) => s.toLowerCase().replace(/[*_`]/g, "").replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();

/** If `Step N: X` matches trail item N (X equal to, or contained in, the item or vice versa), use the trail item. */
function trailName(title: string, trail: string[]): string {
  const m = title.match(/^Step\s+(\d+)\s*:?\s*(.*)$/i);
  if (!m) return title;
  const item = trail[Number(m[1]) - 1];
  if (!item) return title;
  const a = norm(m[2] ?? ""), b = norm(item);
  return a && (a === b || a.includes(b) || b.includes(a)) ? item.replace(/\*\*/g, "") : title;
}

export function parseAdventure(markdown: string, titles: { title: string; slug: string }[] = []): ParsedAdventure {
  const steps: AdventureStep[] = [];
  let trail: string[] = [];
  let related: ParsedAdventure["related"] = null;
  const chunks = stripComments(markdown).split(/^## /m).slice(1);

  // First pass: the trail.
  for (const chunk of chunks) {
    const [rawTitle = "", ...rest] = chunk.split("\n");
    if (/^the trail$/i.test(rawTitle.trim())) {
      trail = rest.join("\n").split("\n").map((l) => l.match(/^\s*\d+[.)]\s+(.*)$/)?.[1]?.trim()).filter((x): x is string => !!x);
    }
  }

  for (const chunk of chunks) {
    const [rawTitle = "", ...rest] = chunk.split("\n");
    const title = rawTitle.trim();
    const body = rest.join("\n").trim();

    if (/^the trail$/i.test(title)) continue;
    if (/^(related adventures|where to next)$/i.test(title)) {
      related = { heading: title, body: linkAdventureTitles(body, titles) };
      continue;
    }
    if (/^core task$/i.test(title)) {
      const [preamble = "", ...parts] = body.split(/^### (?=Step\s+\d)/m);
      if (preamble.trim()) steps.push({ title, body: preamble.trim(), isSubstep: false });
      for (const part of parts) {
        const [stepTitle = "", ...stepBody] = part.split("\n");
        steps.push({ title: trailName(stepTitle.trim(), trail), body: stepBody.join("\n").trim(), isSubstep: true });
      }
      continue;
    }
    steps.push({ title: trailName(title, trail), body, isSubstep: false, goFurther: /^go further$/i.test(title) });
  }
  return { steps, trail, related };
}

export function toSteps(markdown: string, titles: { title: string; slug: string }[] = []): AdventureStep[] {
  return parseAdventure(markdown, titles).steps;
}

/** `**Title**` or `**Title:**` -> a link to that adventure when the title matches (case-insensitive). */
export function linkAdventureTitles(md: string, titles: { title: string; slug: string }[]): string {
  return md.replace(/\*\*([^*]+?)(:?)\*\*/g, (whole, name: string, colon: string) => {
    const hit = titles.find((t) => t.title.toLowerCase() === name.trim().toLowerCase());
    return hit ? `**[${name}](/adventures/${hit.slug})${colon}**` : whole;
  });
}

/** Split a body into Markdown text and `<details><summary>…</summary>…</details>` blocks. */
export type BodySegment = { kind: "md"; text: string } | { kind: "details"; summary: string; text: string };
export function splitDetails(md: string): BodySegment[] {
  const out: BodySegment[] = [];
  const re = /<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi;
  let last = 0;
  for (let m = re.exec(md); m; m = re.exec(md)) {
    if (m.index > last) out.push({ kind: "md", text: md.slice(last, m.index) });
    out.push({ kind: "details", summary: (m[1] ?? "").replace(/<[^>]+>/g, "").trim(), text: (m[2] ?? "").trim() });
    last = m.index + m[0].length;
  }
  if (last < md.length) out.push({ kind: "md", text: md.slice(last) });
  return out.filter((s) => s.kind === "details" || s.text.trim());
}

/** "Go further": split into cards at each `### ` heading or bold-led paragraph. Text before the first card stays as intro. */
export function splitGoFurther(md: string): { intro: string; cards: { title: string; body: string }[] } {
  const paras = md.split(/\n\s*\n/);
  let intro = "";
  const cards: { title: string; body: string }[] = [];
  for (const p of paras) {
    const h = p.match(/^###\s+(.+?)\s*(?:\n([\s\S]*))?$/);
    const b = p.match(/^\*\*([^*]+?)\*\*:?\s*([\s\S]*)$/);
    if (h) cards.push({ title: (h[1] ?? "").trim(), body: (h[2] ?? "").trim() });
    else if (b) cards.push({ title: (b[1] ?? "").replace(/[:.]$/, "").trim(), body: (b[2] ?? "").trim() });
    else if (cards.length) cards[cards.length - 1]!.body += `\n\n${p}`;
    else intro += `${p}\n\n`;
  }
  return { intro: intro.trim(), cards };
}
