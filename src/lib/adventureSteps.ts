/**
 * Turns an adventure's Markdown body into rail steps.
 * Rules:
 * - HTML comments (design notes) are removed and never rendered.
 * - Text before the first `## ` (the `# ` title and tagline) is dropped; the page header covers it.
 * - Each `## ` heading is a step.
 * - Inside "Core task", each `### Step N` is its own step (shown indented in the rail);
 *   `### Prompt N:` headings stay inside the step they belong to.
 * - In "Where to next", bold names that match an adventure title become links.
 */
export interface AdventureStep {
  title: string;
  body: string;
  isSubstep: boolean;
}

export function stripComments(md: string): string {
  return md.replace(/<!--[\s\S]*?-->/g, "");
}

export function toSteps(markdown: string, titles: { title: string; slug: string }[] = []): AdventureStep[] {
  const steps: AdventureStep[] = [];
  const chunks = stripComments(markdown).split(/^## /m).slice(1);
  for (const chunk of chunks) {
    const [rawTitle = "", ...rest] = chunk.split("\n");
    const title = rawTitle.trim();
    let body = rest.join("\n").trim();

    if (/^core task$/i.test(title)) {
      const [preamble = "", ...parts] = body.split(/^### (?=Step\s+\d)/m);
      if (preamble.trim()) steps.push({ title, body: preamble.trim(), isSubstep: false });
      for (const part of parts) {
        const [stepTitle = "", ...stepBody] = part.split("\n");
        steps.push({ title: stepTitle.trim(), body: stepBody.join("\n").trim(), isSubstep: true });
      }
      continue;
    }

    if (/^where to next$/i.test(title)) body = linkAdventureTitles(body, titles);
    steps.push({ title, body, isSubstep: false });
  }
  return steps;
}

/** `**Title**` or `**Title:**` -> a link to that adventure when the title matches (case-insensitive). */
export function linkAdventureTitles(md: string, titles: { title: string; slug: string }[]): string {
  return md.replace(/\*\*([^*]+?)(:?)\*\*/g, (whole, name: string, colon: string) => {
    const hit = titles.find((t) => t.title.toLowerCase() === name.trim().toLowerCase());
    return hit ? `**[${name}](/adventures/${hit.slug})${colon}**` : whole;
  });
}
