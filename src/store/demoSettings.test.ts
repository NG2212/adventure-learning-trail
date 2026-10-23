import { describe, expect, it } from "vitest";
import { ADVENTURES, adventureBody, canOpenAdventure, reviewState, toAdventure } from "@/content/adventures";
import { createLocalStore } from "./localStore";

describe("temporary demo review rules", () => {
  const scheduled = ADVENTURES.find((a) => a.slug === "the-loop");

  it("defaults to opening every wave, with review marks visible", () => {
    const settings = createLocalStore().getDemoSettings();
    expect(settings).toEqual({ demoOpenAll: true, showReviewState: true, ratingDisplayMinimum: 5 });
    expect(ADVENTURES.every((a) => canOpenAdventure(a, settings.demoOpenAll))).toBe(true);
  });

  it("restores scheduled locks with one flag without changing wave data", () => {
    if (!scheduled) throw new Error("Missing the-loop seed");
    const settings = createLocalStore({ demoOpenAll: false, showReviewState: true, ratingDisplayMinimum: 5 }).getDemoSettings();
    expect(canOpenAdventure(scheduled, settings.demoOpenAll)).toBe(false);
    expect(scheduled.isOpen).toBe(false);
    expect(adventureBody(scheduled, false, settings.demoOpenAll)).toContain("This adventure opens on");
  });

  it("delivers the scheduled body in demo mode and preserves admin preview with gating enabled", () => {
    if (!scheduled) throw new Error("Missing the-loop seed");
    expect(adventureBody(scheduled, false, true)).toBe(scheduled.body);
    expect(adventureBody(scheduled, true, false)).toBe(scheduled.body);
  });

  it("only exact review: ready is Ready, with missing/other frontmatter Draft", () => {
    const parse = (line: string) => toAdventure(`---\nslug: review-test\ntitle: Review test\n${line}\n---\nBody`);
    expect(reviewState(parse("review: ready"))).toBe("Ready");
    for (const value of ["", "review: draft", "review: Ready", "review: true"]) {
      expect(reviewState(parse(value))).toBe("Draft");
    }
  });

  it("derives every adventure's review mark from its frontmatter", () => {
    for (const adventure of ADVENTURES) {
      const expected = adventure.review?.trim().toLowerCase() === "ready" ? "Ready" : "Draft";
      expect(reviewState(adventure), adventure.slug).toBe(expected);
    }
    expect(ADVENTURES.some((a) => reviewState(a) === "Ready")).toBe(true);
    expect(ADVENTURES.some((a) => reviewState(a) === "Draft")).toBe(true);
  });

  it("can hide all review marks independently of opening adventures", () => {
    expect(createLocalStore({ demoOpenAll: true, showReviewState: false, ratingDisplayMinimum: 5 }).getDemoSettings()).toEqual({ demoOpenAll: true, showReviewState: false, ratingDisplayMinimum: 5 });
  });
});