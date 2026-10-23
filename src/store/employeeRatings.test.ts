import { beforeEach, describe, expect, it } from "vitest";
import { ADVENTURES } from "@/content/adventures";
import { createLocalStore, MOCK_SETTINGS } from "./localStore";

beforeEach(() => window.localStorage.clear());

describe("employee adventure ratings", () => {
  it("defaults the display minimum to five ratings", () => {
    expect(createLocalStore().getDemoSettings().ratingDisplayMinimum).toBe(5);
  });

  it("shows aggregate-only ratings at five and hides them at four", () => {
    const slug = "the-loop";
    const proofEntries = Array.from({ length: 5 }, (_, i) => ({ personId: "noa-levi", slug, built: "A work brief", learned: "", rating: [4, 5, 4, 5, 5][i], completed_at: "2026-10-15" }));
    window.localStorage.setItem("ai-adventure-state-v2", JSON.stringify({ proofEntries }));
    expect(createLocalStore().getAdventureRating(slug)).toEqual({ averageRating: 4.6, ratingCount: 5 });
    window.localStorage.setItem("ai-adventure-state-v2", JSON.stringify({ proofEntries: proofEntries.slice(0, 4) }));
    expect(createLocalStore().getAdventureRating(slug)).toBeUndefined();
  });

  it("respects a changed minimum independently of the admin summaries", () => {
    const store = createLocalStore();
    const summary = store.getRatingSummaries({ slug: "de-slop" })[0];
    if (!summary) throw new Error("Missing seeded rating");
    expect(createLocalStore({ ...MOCK_SETTINGS, ratingDisplayMinimum: summary.ratingCount }).getAdventureRating(summary.slug)?.ratingCount).toBe(summary.ratingCount);
    const hidden = createLocalStore({ ...MOCK_SETTINGS, ratingDisplayMinimum: summary.ratingCount + 1 });
    expect(hidden.getAdventureRating(summary.slug)).toBeUndefined();
    expect(hidden.getRatingSummaries({ slug: summary.slug })[0]).toEqual(summary);
  });

  it("has visible seeded ratings and at least one scheduled adventure with nothing to show", () => {
    const store = createLocalStore();
    expect(ADVENTURES.some((a) => store.getAdventureRating(a.slug))).toBe(true);
    expect(ADVENTURES.some((a) => !a.isOpen && store.getAdventureRating(a.slug) === undefined)).toBe(true);
    expect(store.getAdventureRating("unknown-adventure")).toBeUndefined();
  });
});