import { describe, expect, it } from "vitest";
import { ADVENTURES, toAdventure } from "@/content/adventures";
import { normaliseAnswers, scoreAdventure, type OnboardingAnswers } from "@/lib/recommend";
import { journeyNextUp } from "@/components/JourneyPanel";
import { embedUrl, posterFor } from "@/components/PreviewVideo";

const base: OnboardingAnswers = { role: "Other", aiUseToday: "nothing", weeklyTools: [], goal: [], learningStyle: [], comfort: "new" };

describe("second L&D review rules", () => {
  it("migrates a saved single value to a one-item array", () => {
    const old = { ...base, weeklyTools: "claude", goal: "creating", learningStyle: "quick" } as unknown as OnboardingAnswers;
    expect(normaliseAnswers(old)).toMatchObject({ weeklyTools: ["claude"], goal: ["creating"], learningStyle: ["quick"] });
  });
  it("sums goal matches across selected values", () => {
    const a = ADVENTURES.find((x) => x.category === "Create with AI")!;
    const one = scoreAdventure(a, { ...base, goal: ["creating"] }).score;
    const none = scoreAdventure(a, { ...base, goal: ["leading"] }).score;
    expect(one - none).toBe(3);
    expect(scoreAdventure(a, { ...base, goal: ["creating", "leading"] }).score).toBe(one);
  });
  it("parses the optional video field and leaves it undefined when absent", () => {
    const raw = (extra: string) => `---\nslug: x\ntitle: X\n${extra}---\nBody`;
    expect(toAdventure(raw('video: "https://example.com/a.mp4"\n')).video).toBe("https://example.com/a.mp4");
    expect(toAdventure(raw("")).video).toBeUndefined();
    expect(ADVENTURES.filter((a) => a.video).map((a) => [a.slug, a.video])).toEqual([["ai-as-your-tutor", "/videos/ai-as-your-tutor.mp4"]]);
    expect(posterFor("/videos/ai-as-your-tutor.mp4")).toBe("/videos/ai-as-your-tutor.jpg");
  });
  it("embeds hosted video pages and plays files natively", () => {
    expect(embedUrl("https://youtu.be/abcdefg")).toBe("https://www.youtube-nocookie.com/embed/abcdefg");
    expect(embedUrl("https://example.com/a.mp4")).toBeNull();
  });
  it("marks the three named manager adventures", () => {
    const managers = ADVENTURES.filter((a) => a.audience.includes("Managers")).map((a) => a.title);
    expect(managers).toEqual(expect.arrayContaining(["Managing with AI", "Your Team's AI Blueprint", "Hard Conversations"]));
  });
  it("Next up skips completed stops and is empty for an empty journey", () => {
    const [first, second] = ADVENTURES.filter((a) => a.isOpen);
    expect(journeyNextUp([first!.slug, second!.slug], new Set([first!.slug]))?.slug).toBe(second!.slug);
    expect(journeyNextUp([], new Set())).toBeUndefined();
  });
});
