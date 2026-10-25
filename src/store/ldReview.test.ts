import { beforeEach, describe, expect, it } from "vitest";
import { ADVENTURES, effortLabel, toAdventure } from "@/content/adventures";
import { recommend, type OnboardingAnswers } from "@/lib/recommend";
import { createLocalStore } from "./localStore";
import { badgeStateFor } from "@/components/AdventureIcon";

const answers: OnboardingAnswers = { role: "Product", team: "Product Experience", aiUseToday: "writing", weeklyTools: "claude", goal: "creating", aspirations: ["Build confidence with AI", "Build something new"], aspirationText: "Bring useful ideas to my team", learningStyle: "steady", comfort: "some" };
beforeEach(() => localStorage.clear());
describe("approved L&D review rules", () => {
  it("earned badges take priority even for scheduled adventures", () => {
    expect(badgeStateFor({ slug: "scheduled", isOpen: false }, new Set(["scheduled"]))).toBe("earned");
  });
  it("open unearned badges remain open", () => {
    expect(badgeStateFor({ slug: "open", isOpen: true }, new Set())).toBe("open");
  });
  it("scheduled unearned badges remain later even when demo access opens their pages", () => {
    const store = createLocalStore();
    expect(store.getDemoSettings().demoOpenAll).toBe(true);
    const scheduled = ADVENTURES.find((a) => a.wave === 2);
    if (!scheduled) throw new Error("Missing W2 demo adventure");
    expect(badgeStateFor(scheduled, new Set())).toBe("later");
  });
  it("a first visit has no saved answers and saving persists team and multiple aspirations with the person", () => {
    const store = createLocalStore();
    expect(store.getPerson().onboardingAnswers).toBeUndefined();
    store.saveOnboardingAnswers(answers);
    expect(createLocalStore().getPerson().onboardingAnswers).toEqual(answers);
  });
  it("redo recomputes suggestions while preserving every completion, proof entry and completed trail stop", () => {
    const store = createLocalStore();
    store.addToItinerary("de-slop");
    const completions = store.getCompletions();
    const proof = store.getProofOfWork("de-slop");
    store.saveOnboardingAnswers(answers);
    const changed = { ...answers, goal: "automation" as const };
    store.saveOnboardingAnswers(changed);
    expect(store.getItinerary()).toEqual([...new Set(["de-slop", ...recommend(ADVENTURES, changed).map((r) => r.adventure.slug)])]);
    expect(store.getCompletions()).toEqual(completions);
    expect(store.getProofOfWork("de-slop")).toEqual(proof);
  });
  it.each([["Quick win", "Quick win · ~15 min"], ["Moderate", "Moderate · ~45 min"], ["Ambitious", "Ambitious · 1.5–2 h"]] as const)("%s uses the approved default", (effort, expected) => {
    expect(effortLabel({ effort })).toBe(expected);
  });
  it("the authored free-text time overrides the effort default", () => {
    const adventure = toAdventure('---\nslug: test\ntitle: Test\neffort: Moderate\ntime: "~1 h"\n---\n');
    expect(effortLabel(adventure)).toBe("Moderate · ~1 h");
  });
});
