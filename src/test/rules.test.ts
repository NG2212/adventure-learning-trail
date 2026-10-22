import { describe, expect, it } from "vitest";
import { titleFor } from "@/lib/titles";
import { recommend } from "@/lib/recommend";
import { ADVENTURES, CATEGORIES, getAdventure, matchesProfession, toAdventure } from "@/content/adventures";
import { toSteps } from "@/lib/adventureSteps";
import { createLocalStore } from "@/store/localStore";

describe("titles", () => {
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
    expect(matchesProfession(deSlop, "Managers")).toBe(true);
    expect(matchesProfession(getAdventure("the-loop")!, "Finance")).toBe(false);
  });
});

describe("adventure steps", () => {
  it("drops design notes, splits Core task by ### Step, links Where to next", () => {
    const steps = toSteps(getAdventure("de-slop")!.body, ADVENTURES);
    const titles = steps.map((s) => s.title);
    expect(steps.some((s) => s.body.includes("DESIGN NOTES"))).toBe(false);
    expect(titles).toContain("Step 1: Spot the slop");
    expect(titles).toContain("Step 4: Compare the two versions");
    expect(titles.some((t) => t.startsWith("Prompt"))).toBe(false);
    expect(steps.at(-1)?.body).toContain("(/adventures/board-of-advisors)");
  });
});

describe("recommendations", () => {
  it("returns 3 or 4 adventures", () => {
    const r = recommend(ADVENTURES, { role: "Product", aiUseToday: "writing", weeklyTools: "claude", goal: "creating", learningStyle: "steady", comfort: "some" });
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
