import { describe, expect, it } from "vitest";
import { nextTitle, titleFor } from "@/lib/titles";
import { recommend } from "@/lib/recommend";
import { ADVENTURES, CATEGORIES, getAdventure, matchesProfession, toAdventure } from "@/content/adventures";
import { parseAdventure, splitPromptWindows, splitGoFurther } from "@/lib/adventureSteps";
import { pickWhatsNext } from "@/lib/whatsNext";
import { createLocalStore } from "@/store/localStore";

describe("titles", () => {
  it("shows the next title at each threshold and none after Globetrotter", () => {
    expect(nextTitle(0)).toEqual({ name: "First Steps", threshold: 1 });
    expect(nextTitle(1)).toEqual({ name: "Day Tripper", threshold: 3 });
    expect(nextTitle(3)).toEqual({ name: "Frequent Flyer", threshold: 11 });
    expect(nextTitle(11)).toEqual({ name: "Globetrotter", threshold: 20 });
    expect(nextTitle(20)).toBeNull();
  });
  it("uses the thresholds 1 / 3 / 11 / 20", () => {
    expect(titleFor(0)).toBeNull();
    expect(titleFor(1)).toBe("First Steps");
    expect(titleFor(3)).toBe("Day Tripper");
    expect(titleFor(11)).toBe("Frequent Flyer");
    expect(titleFor(20)).toBe("Globetrotter");
  });
});

describe("content", () => {
  it("has 30 adventures across the five categories", () => {
    expect(ADVENTURES).toHaveLength(30);
    expect(new Set(ADVENTURES.map((a) => a.category))).toEqual(new Set(CATEGORIES));
  });
  it("W1 is open, W2 is not", () => {
    expect(getAdventure("de-slop")?.isOpen).toBe(true);
    expect(getAdventure("making-decisions-with-ai")?.isOpen).toBe(false);
  });
  it("unknown icon falls back to the category glyph", () => {
    const a = toAdventure("---\nslug: x\ntitle: X\ncategory: Lead with AI\nicon: unicorn\n---\n");
    expect(a.icon).toBe("people");
  });
  it("Everyone matches any profession chip; Managers matches audience", () => {
    const deSlop = getAdventure("de-slop")!;
    expect(matchesProfession(deSlop, "Finance")).toBe(true);
    expect(matchesProfession(deSlop, "Managers")).toBe(false); // audience is empty
    expect(matchesProfession(getAdventure("board-of-advisors")!, "Managers")).toBe(true);
    expect(matchesProfession(getAdventure("personalising-claude-code")!, "Finance")).toBe(true); // professions: [Everyone]
  });
});

describe("adventure steps", () => {
  // Expected core steps come from each Markdown file, not a slug-specific count.
  it.each(ADVENTURES)("$slug follows its authored core steps plus Go further, excluding head/proof/footer", (adventure) => {
    const authoredNumbers = Array.from(adventure.body.matchAll(/^## Step (\d+):/gm), (match) => Number(match[1]));
    const coreSteps = authoredNumbers.length;
    expect(coreSteps).toBeGreaterThanOrEqual(3);
    expect(coreSteps).toBeLessThanOrEqual(5);
    expect(authoredNumbers).toEqual(Array.from({ length: coreSteps }, (_, i) => i + 1));
    const parsed = parseAdventure(adventure.body, ADVENTURES);
    expect(parsed.steps).toHaveLength(coreSteps + 1);
    expect(parsed.steps.slice(0, coreSteps).map((s) => Number(s.title.match(/^Step (\d+):/)?.[1]))).toEqual(
      authoredNumbers,
    );
    expect(parsed.steps[coreSteps]?.goFurther).toBe(true);
    expect(parsed.lastCoreStep).toBe(coreSteps - 1);
    expect(parsed.introduction.map((s) => s.heading)).toEqual(["Why this adventure", "The trail", "Before you start"]);
    expect(parsed.trail).toHaveLength(coreSteps);
    expect(parsed.proof?.body.length).toBeGreaterThan(0);
    expect(parsed.related?.body).toContain("(/adventures/");
    expect(parsed.steps.every((s) => !/## (The trail|Proof of work|Related adventures)|DESIGN NOTES/.test(s.body))).toBe(true);
  });
  it("keeps proof at the last core step when Go further follows", () => {
    const parsed = parseAdventure("## Step 1: One\nFirst\n## Step 2: Two\nSecond\n## Go further\nExtra\n## Proof of work\nEvidence");
    expect(parsed.lastCoreStep).toBe(1);
    expect(parsed.steps[parsed.lastCoreStep]?.title).toBe("Step 2: Two");
    expect(parsed.proof?.body).toBe("Evidence");
  });
  it("uses named prompt windows and keeps explanatory lines above them", () => {
    const parts = splitPromptWindows("### Prompt: My name\n\n**What this does:** explains\n\n```\n## Literal heading\n### Prompt: Not a title\n```\n");
    expect(parts).toEqual([{ kind: "md", text: "**What this does:** explains" }, { kind: "prompt", title: "My name", text: "## Literal heading\n### Prompt: Not a title" }]);
  });
  it("keeps old numbered prompt names without the number", () => {
    expect(splitPromptWindows("### Prompt 2: Legacy\n```\nText\n```")[0]).toEqual({ kind: "prompt", title: "Legacy", text: "Text" });
  });
  it("ignores section headings inside prompt fences", () => {
    const parsed = parseAdventure("## Step 1: Actual\n```\n## Step 9: Literal\n```\n## Proof of work\nDone");
    expect(parsed.steps).toHaveLength(1);
    expect(parsed.steps[0]?.body).toContain("## Step 9: Literal");
  });
  it("shows no-step placeholder bodies on a single page with proof and footer separated", () => {
    const parsed = parseAdventure("## Content coming\nSoon\n## Proof of work\nEvidence\n## Related adventures\nLinks");
    expect(parsed.hasNumberedSteps).toBe(false);
    expect(parsed.steps).toHaveLength(1);
    expect(parsed.steps[0]?.body).toBe("Soon");
    expect(parsed.proof?.body).toBe("Evidence");
    expect(parsed.related?.body).toBe("Links");
  });
  it("supports legacy Core task nested steps without promoting prompt headings", () => {
    const parsed = parseAdventure("## Core task\nIntro\n### Step 1: First\n### Prompt 1: Name\n```\nLiteral\n```\n### Step 2: Second\nWork");
    expect(parsed.steps.map((s) => s.title)).toEqual(["Step 1: First", "Step 2: Second"]);
    expect(parsed.steps[0]?.body).toContain("### Prompt 1: Name");
  });
  it("does not split Go further at bold text or headings inside fences/details", () => {
    const parsed = splitGoFurther("**One.** Intro\n\n<details>\n<summary>More</summary>\n```\n**Not a card**\n### Not a heading\n```\n</details>\n\n**Two.** Body");
    expect(parsed.cards.map((c) => c.title)).toEqual(["One", "Two"]);
    expect(parsed.cards[0]?.body).toContain("</details>");
  });
});

describe("what's next", () => {
  const all = ["board-of-advisors", "your-ai-identity", "skills-when-how-and-how-well"];
  it("picks the next undone itinerary adventure", () => {
    expect(pickWhatsNext("board-of-advisors", all, ["de-slop"], ADVENTURES, "Product Manager")?.adventure.slug).toBe("your-ai-identity");
  });
  it("falls back to an open, undone adventure when the itinerary is used up", () => {
    const r = pickWhatsNext("board-of-advisors", [], ["de-slop"], ADVENTURES, "Product Manager");
    expect(r?.reason).toBe("suggested");
    expect(r?.adventure.isOpen).toBe(true);
    expect(["de-slop", "board-of-advisors"]).not.toContain(r?.adventure.slug);
  });
  it("returns null when nothing open is left", () => {
    const open = ADVENTURES.filter((a) => a.isOpen).map((a) => a.slug);
    expect(pickWhatsNext("x", [], open, ADVENTURES, "Product Manager")).toBeNull();
  });
});

describe("recommendations", () => {
  it("returns 3 or 4 adventures", () => {
    const r = recommend(ADVENTURES, { role: "Product", aiUseToday: "writing", weeklyTools: ["claude"], goal: ["creating"], learningStyle: ["steady"], comfort: "some" });
    expect(r.length).toBeGreaterThanOrEqual(3);
    expect(r.length).toBeLessThanOrEqual(4);
  });
});

describe("store seed", () => {
  it("Noa has completed de-slop and her itinerary is board-of-advisors, your-ai-identity, skills", () => {
    const s = createLocalStore();
    expect(s.getCompletions().map((c) => c.slug)).toEqual(["de-slop"]);
    expect(s.getItinerary()).toEqual(["board-of-advisors", "your-ai-identity", "skills-when-how-and-how-well"]);
    expect(s.getTitle()).toBe("First Steps");
    expect(s.markComplete("board-of-advisors").newTitle).toBeNull();
    expect(s.markComplete("your-ai-identity").newTitle).toBe("Day Tripper");
  });
});
