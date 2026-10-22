/** Parse authored Markdown into page-head sections, core steps, optional extras and footer. */
export interface AdventureStep {
  title: string;
  body: string;
  isSubstep: boolean;
  goFurther?: boolean;
}
export interface AdventureSection { heading: string; body: string }
export interface ParsedAdventure {
  steps: AdventureStep[];
  trail: string[];
  introduction: AdventureSection[];
  proof: AdventureSection | null;
  related: AdventureSection | null;
  lastCoreStep: number;
  hasNumberedSteps: boolean;
}
export function stripComments(md: string): string {
  return md.replace(/<!--[\s\S]*?-->/g, "");
}

/** Split only headings outside fenced blocks; headings inside prompts are literal text. */
function sections(md: string, level: number): { preamble: string; sections: AdventureSection[] } {
  const out: AdventureSection[] = [];
  let preamble = "";
  let fence: string | undefined;
  const heading = new RegExp(`^${"#".repeat(level)} (.+)$`);
  for (const line of md.split("\n")) {
    const marker = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (marker?.[1]) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = undefined;
    }
    const hit = !fence && line.match(heading);
    if (hit?.[1]) out.push({ heading: hit[1].trim(), body: "" });
    else {
      const section = out.at(-1);
      if (section) section.body += `${line}\n`;
      else preamble += `${line}\n`;
    }
  }
  return { preamble: preamble.trim(), sections: out.map((s) => ({ ...s, body: s.body.trim() })) };
}

export function parseAdventure(markdown: string, titles: { title: string; slug: string }[] = []): ParsedAdventure {
  const clean = stripComments(markdown.replace(/\r\n?/g, "\n"));
  const parsed = sections(clean, 2);
  const introduction: AdventureSection[] = [];
  const core: AdventureStep[] = [];
  const extras: AdventureStep[] = [];
  const fallback: AdventureSection[] = [];
  let trail: string[] = [];
  let proof: AdventureSection | null = null;
  let related: AdventureSection | null = null;
  for (const section of parsed.sections) {
    const { heading, body } = section;
    if (/^(why this adventure|the trail|before you start)$/i.test(heading)) {
      introduction.push(section);
      if (/^the trail$/i.test(heading)) trail = body.split("\n").flatMap((l) => {
        const text = l.match(/^\s*\d+[.)]\s+(.*)$/)?.[1];
        return text ? [text.trim()] : [];
      });
    } else if (/^proof of work$/i.test(heading)) proof = section;
    else if (/^(related adventures|where to next)$/i.test(heading)) related = { heading, body: linkAdventureTitles(body, titles) };
    else if (/^go further$/i.test(heading)) extras.push({ title: heading, body, isSubstep: false, goFurther: true });
    else if (/^step\s+\d+\b/i.test(heading)) core.push({ title: heading, body, isSubstep: false });
    else if (/^core task$/i.test(heading)) {
      const nested = sections(body, 3);
      const numbered = nested.sections.filter((s) => /^step\s+\d+\b/i.test(s.heading));
      if (numbered.length) {
        for (const s of nested.sections) {
          if (/^step\s+\d+\b/i.test(s.heading)) core.push({ title: s.heading, body: s.body, isSubstep: false });
          else {
            const last = core.at(-1);
            if (last) last.body += `\n\n### ${s.heading}\n\n${s.body}`;
          }
        }
        const first = core[0];
        if (first && nested.preamble) first.body = `${nested.preamble}\n\n${first.body}`;
      } else fallback.push(section);
    } else fallback.push(section);
  }
  const hasNumberedSteps = core.length > 0;
  // Older bodies without steps remain a single reading page, rather than a rail of arbitrary headings.
  if (!hasNumberedSteps) {
    const body = parsed.sections.length
      ? [...fallback, ...extras.map((s) => ({ heading: s.title, body: s.body }))].map((s) => `## ${s.heading}\n\n${s.body}`).join("\n\n")
      : clean.replace(/^# .*(?:\n|$)/, "").trim();
    core.push({ title: fallback.length === 1 ? fallback[0]?.heading ?? "" : "", body: fallback.length === 1 && !extras.length ? fallback[0]?.body ?? "" : body, isSubstep: false });
  }
  return { steps: hasNumberedSteps ? [...core, ...extras] : core, introduction, trail, proof, related, lastCoreStep: core.length - 1, hasNumberedSteps };
}
export function toSteps(markdown: string, titles: { title: string; slug: string }[] = []): AdventureStep[] {
  return parseAdventure(markdown, titles).steps;
}
export function linkAdventureTitles(md: string, titles: { title: string; slug: string }[]): string {
  return md.replace(/\*\*([^*]+?)(:?)\*\*/g, (whole, name: string, colon: string) => {
    const hit = titles.find((t) => t.title.toLowerCase() === name.trim().toLowerCase());
    return hit ? `**[${name}](/adventures/${hit.slug})${colon}**` : whole;
  });
}
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
export type PromptSegment = { kind: "md"; text: string } | { kind: "prompt"; text: string; title: string };
/** A prompt heading names the next fence; explanatory paragraphs stay before the window. */
export function splitPromptWindows(md: string): PromptSegment[] {
  const out: PromptSegment[] = [];
  const lines = md.split("\n");
  let text = "";
  let title = "Prompt";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? "";
    const heading = line.match(/^### Prompt(?:\s+\d+)?\s*:\s*(.+)$/i);
    if (heading?.[1]) { title = heading[1].trim(); continue; }
    const fence = line.match(/^\s{0,3}(`{3,}|~{3,})[^`~]*$/)?.[1];
    if (!fence) { text += `${line}\n`; continue; }
    let end = i + 1;
    const close = new RegExp(`^\\s{0,3}${fence[0]}{${fence.length},}\\s*$`);
    while (end < lines.length && !close.test(lines[end] ?? "")) end++;
    if (text.trim()) out.push({ kind: "md", text: text.trim() });
    out.push({ kind: "prompt", title, text: lines.slice(i + 1, end).join("\n") });
    text = "";
    title = "Prompt";
    i = end;
  }
  if (text.trim()) out.push({ kind: "md", text: text.trim() });
  return out;
}
export function splitGoFurther(md: string): { intro: string; cards: { title: string; body: string }[] } {
  let intro = "";
  const cards: { title: string; body: string }[] = [];
  let fence: string | undefined;
  let inDetails = false;
  for (const line of md.split("\n")) {
    const marker = line.match(/^\s{0,3}(`{3,}|~{3,})/)?.[1];
    const heading = !fence && !inDetails ? line.match(/^###\s+(?!Prompt(?:\s+\d+)?\s*:)(.+)$/i) : null;
    const bold = !fence && !inDetails ? line.match(/^\*\*([^*]*?[^:*])\*\*\s*(.*)$/) : null;
    if (heading?.[1] || bold?.[1]) cards.push({ title: (heading?.[1] ?? bold?.[1] ?? "").replace(/[:.]$/, "").trim(), body: bold?.[2] ?? "" });
    else {
      const last = cards.at(-1);
      if (last) last.body += `\n${line}`;
      else intro += `${line}\n`;
    }
    if (marker) {
      if (!fence) fence = marker;
      else if (marker[0] === fence[0] && marker.length >= fence.length) fence = undefined;
    }
    if (!fence && /<details>/i.test(line)) inDetails = true;
    if (!fence && /<\/details>/i.test(line)) inDetails = false;
  }
  return { intro: intro.trim(), cards: cards.map((c) => ({ ...c, body: c.body.trim() })) };
}
