import { beforeEach, describe, expect, it } from "vitest";
import { createLocalStore, SEED_STATE } from "./localStore";
import { createAdminMock, generateAdminDataset } from "./adminMock";
import { proofGuidance } from "@/lib/proofOfWork";

beforeEach(() => window.localStorage.clear());

describe("proof-of-work completion", () => {
  it("requires nonblank built text and leaves completion unchanged on failure", () => {
    const store = createLocalStore();
    expect(() => store.saveProofOfWork("board-of-advisors", { built: " \n ", learned: "", rating: 5 })).toThrow();
    expect(store.getCompletions()).toHaveLength(1);
    expect(store.getProofOfWork("board-of-advisors")).toBeUndefined();
  });
  it.each([0, 6, 2.5, NaN])("rejects invalid required rating %s", (rating) => {
    const store = createLocalStore();
    expect(() => store.saveProofOfWork("board-of-advisors", { built: "A QBR brief", learned: "", rating })).toThrow();
    expect(store.getCompletions()).toHaveLength(1);
  });
  it.each([1, 2, 3, 4, 5])("accepts rating %s with optional learned text empty", (rating) => {
    const store = createLocalStore();
    expect(store.saveProofOfWork("board-of-advisors", { built: " A QBR brief ", learned: "", rating }).alreadyDone).toBe(false);
    expect(store.getProofOfWork("board-of-advisors")).toMatchObject({ built: "A QBR brief", learned: "", rating, personId: "noa-levi" });
    expect(store.getCompletions()).toHaveLength(2);
  });
  it("edits one entry without changing completion date, count or awarding a title again", () => {
    const store = createLocalStore();
    store.saveProofOfWork("board-of-advisors", { built: "A QBR brief", learned: "", rating: 4 });
    const date = store.getProofOfWork("board-of-advisors")?.completed_at;
    const result = store.saveProofOfWork("board-of-advisors", { built: "Updated customer brief", learned: " Check the source ", rating: 5 });
    expect(result).toEqual({ count: 2, alreadyDone: true, newTitle: null });
    expect(store.getProofOfWork("board-of-advisors")).toMatchObject({ built: "Updated customer brief", learned: "Check the source", rating: 5, completed_at: date });
    expect(store.getSnapshot().proofEntries.filter((p) => p.slug === "board-of-advisors")).toHaveLength(1);
  });
  it("persists own proof and completion together through a fresh store", () => {
    createLocalStore().saveProofOfWork("board-of-advisors", { built: "A board skill", learned: "", rating: 4 });
    const reopened = createLocalStore();
    expect(reopened.getProofOfWork("board-of-advisors")?.built).toBe("A board skill");
    expect(reopened.getCompletions().some((c) => c.slug === "board-of-advisors")).toBe(true);
  });
  it("only returns the current person's own entry through the learner read", () => {
    const store = createLocalStore();
    expect(store.getProofOfWork("de-slop")?.personId).toBe(store.getPerson().id);
    expect(store.getSnapshot().proofEntries.every((p) => p.personId === store.getPerson().id)).toBe(true);
  });
  it("blocks company entry reads for a non-L&D person", () => {
    const mock = createAdminMock(() => ({ ...SEED_STATE, person: { ...SEED_STATE.person, isAdmin: false } }), () => {});
    expect(mock.listProofEntries()).toEqual([]);
  });
  it("seeds one realistic reflection for every existing completion with mostly 4–5 and some 3 ratings", () => {
    const data = generateAdminDataset();
    expect(data.proofEntries).toHaveLength(data.people.reduce((n, p) => n + p.completions.length, 0));
    for (const person of data.people) {
      for (const completion of person.completions) {
        const entries = data.proofEntries.filter((p) => p.personId === person.id && p.slug === completion.slug);
        expect(entries).toHaveLength(1);
        expect(entries[0]?.completed_at).toBe(completion.completedAt);
        expect(entries[0]?.built.length).toBeGreaterThan(20);
      }
    }
    expect(new Set(data.proofEntries.map((p) => p.rating))).toEqual(new Set([3, 4, 5]));
    expect(data.proofEntries.filter((p) => p.rating >= 4).length / data.proofEntries.length).toBeGreaterThan(0.8);
    expect(new Set(data.proofEntries.map((p) => p.built)).size).toBeGreaterThanOrEqual(10);
  });
  it("uses the current edited rating once in averages and counts, immediately", () => {
    const store = createLocalStore();
    const before = store.getRatingSummaries({ slug: "board-of-advisors" })[0];
    if (!before) throw new Error("Missing adventure");
    store.saveProofOfWork("board-of-advisors", { built: "A board skill", learned: "", rating: 1 });
    store.saveProofOfWork("board-of-advisors", { built: "A better skill", learned: "", rating: 5 });
    const after = store.getRatingSummaries({ slug: "board-of-advisors" })[0];
    expect(after?.ratingCount).toBe(before.ratingCount + 1);
    expect(after?.averageRating).toBeCloseTo((before.averageRating * before.ratingCount + 5) / (before.ratingCount + 1));
  });
  it("filters by respondent profession and adventure category and sorts newest entries first", () => {
    const store = createLocalStore();
    const entries = store.listProofEntries({ profession: "Product", category: "Work smarter with AI" });
    expect(entries.length).toBeGreaterThan(0);
    expect(entries.every((p) => p.profession === "Product" && p.category === "Work smarter with AI")).toBe(true);
    expect(entries.map((p) => p.completed_at)).toEqual(entries.map((p) => p.completed_at).sort().reverse());
    const ratings = store.getRatingSummaries({ profession: "Product", category: "Work smarter with AI" });
    for (const summary of ratings) {
      const matches = entries.filter((p) => p.slug === summary.slug);
      expect(summary.ratingCount).toBe(matches.length);
      expect(summary.averageRating).toBe(matches.length ? matches.reduce((n, p) => n + p.rating, 0) / matches.length : 0);
    }
    expect(ratings.map((r) => r.averageRating)).toEqual(ratings.map((r) => r.averageRating).sort((a, b) => b - a));
  });
  it("search and adventure filters apply to the same company entry result", () => {
    const store = createLocalStore();
    store.saveProofOfWork("board-of-advisors", { built: "Unique renewal brief", learned: "", rating: 4 });
    const entries = store.listProofEntries({ slug: "board-of-advisors", search: "unique RENEWAL" });
    expect(entries).toHaveLength(1);
    expect(entries[0]?.personName).toBe("Noa Levi");
    expect(store.listProofEntries({ slug: "de-slop", search: "unique renewal" })).toHaveLength(0);
  });
});

describe("authored proof guidance", () => {
  it("extracts the instruction and example without quotation marks", () => {
    expect(proofGuidance('In "what I built", name your board.\n\nFor example: "A QBR board skill."')).toEqual({ instruction: 'In "what I built", name your board.', placeholder: "A QBR board skill." });
  });
  it("provides a generic placeholder for a proof without an example", () => {
    expect(proofGuidance("Keep your before and after versions.")).toEqual({ instruction: "Keep your before and after versions.", placeholder: "I built a… It helps my team…" });
  });
});