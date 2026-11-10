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
    expect(ADVENTURES.filter((a) => a.video).map((a) => [a.slug, a.video])).toEqual([
      ["your-ai-identity", "/videos/your-ai-identity.mp4"],
      ["understanding-ai-agents", "/videos/understanding-ai-agents.mp4"],
      ["de-slop", "/videos/de-slop.mp4"],
      ["use-case-discovery", "/videos/use-case-discovery.mp4"],
      ["board-of-advisors", "/videos/board-of-advisors.mp4"],
      ["hard-conversations", "/videos/hard-conversations.mp4"],
      ["claude-in-your-docs-sheets-and-slides", "/videos/claude-in-your-docs-sheets-and-slides.mp4"],
      ["skills-when-how-and-how-well", "/videos/skills-when-how-and-how-well.mp4"],
      ["your-own-chief-of-staff", "/videos/your-own-chief-of-staff.mp4"],
      ["managing-with-ai", "/videos/managing-with-ai.mp4"],
      ["creating-apps-with-ai-done-right", "/videos/creating-apps-with-ai-done-right.mp4"],
      ["making-decisions-with-ai", "/videos/making-decisions-with-ai.mp4"],
      ["research-done-right", "/videos/research-done-right.mp4"],
      ["build-a-personal-brain-for-your-ai", "/videos/build-a-personal-brain-for-your-ai.mp4"],
      ["automation-done-right", "/videos/automation-done-right.mp4"],
      ["personalising-claude-code", "/videos/personalising-claude-code.mp4"],
      ["voice-of-customers-and-employees", "/videos/voice-of-customers-and-employees.mp4"],
      ["your-ai-taste-test", "/videos/your-ai-taste-test.mp4"],
      ["token-smartness", "/videos/token-smartness.mp4"],
      ["designing-with-ai-results-you-actually-like", "/videos/designing-with-ai-results-you-actually-like.mp4"],
      ["planning-with-ai", "/videos/planning-with-ai.mp4"],
      ["advanced-skill-patterns", "/videos/advanced-skill-patterns.mp4"],
      ["audit-and-improve-your-ai-system", "/videos/audit-and-improve-your-ai-system.mp4"],
      ["your-team-s-ai-blueprint", "/videos/your-team-s-ai-blueprint.mp4"],
      ["the-daily-dispatch", "/videos/the-daily-dispatch.mp4"],
      ["ai-as-your-tutor", "/videos/ai-as-your-tutor.mp4"],
      ["redesign-your-week-with-ai", "/videos/redesign-your-week-with-ai.mp4"],
      ["the-loop", "/videos/the-loop.mp4"],
    ]);
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
