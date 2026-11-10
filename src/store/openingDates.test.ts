import { describe, expect, it, beforeEach } from "vitest";
import { formatOpensLabel, isOpenOn, WAVE_DEFAULT_DATES } from "@/content/schedule";
import { ADVENTURES } from "@/content/adventures";
import { createLocalStore } from "./localStore";

beforeEach(() => window.localStorage.clear());

describe("per-adventure opening dates", () => {
  it("is open on the opening day and after, closed the day before", () => {
    expect(isOpenOn("2026-11-23", "2026-11-22")).toBe(false);
    expect(isOpenOn("2026-11-23", "2026-11-23")).toBe(true);
    expect(isOpenOn("2026-11-23", "2026-12-01")).toBe(true);
  });

  it("formats as 'Opens 23 Nov', adding the year only outside the current year", () => {
    expect(formatOpensLabel("2026-11-23", "2026-11-10")).toBe("Opens 23 Nov");
    expect(formatOpensLabel("2027-01-04", "2026-11-10")).toBe("Opens 4 Jan 2027");
    expect(formatOpensLabel("2027-01-04", "2027-01-01")).toBe("Opens 4 Jan");
  });

  it("seeds each adventure from its wave placeholder", () => {
    const store = createLocalStore();
    expect(WAVE_DEFAULT_DATES).toEqual({ 1: "2026-11-09", 2: "2026-11-23", 3: "2026-12-07", 4: "2027-01-04" });
    for (const a of ADVENTURES) expect(store.getOpensOn(a.slug)).toBe(WAVE_DEFAULT_DATES[a.wave]);
  });

  it("persists a per-adventure override across a reload", () => {
    createLocalStore().setOpensOn("the-loop", "2026-12-25");
    const reloaded = createLocalStore();
    expect(reloaded.getOpensOn("the-loop")).toBe("2026-12-25");
    expect(reloaded.getOpensOn("de-slop")).toBe("2026-11-09");
  });

  it("applies a wave date to every adventure in the wave only when asked", () => {
    const store = createLocalStore();
    const w3 = ADVENTURES.filter((a) => a.wave === 3).map((a) => a.slug);
    store.setOpensOn(w3[0]!, "2026-12-20");
    store.saveWaveDate(3, "2026-12-14", false);
    expect(store.getOpensOn(w3[0]!)).toBe("2026-12-20");
    expect(store.getOpensOn(w3[1]!)).toBe("2026-12-14");
    store.saveWaveDate(3, "2026-12-10", true);
    expect(w3.every((slug) => store.getOpensOn(slug) === "2026-12-10")).toBe(true);
    store.resetOpeningDates();
    expect(w3.every((slug) => store.getOpensOn(slug) === "2026-12-07")).toBe(true);
  });

  it("moving wave keeps a custom date but follows the new wave when on the old default", () => {
    const store = createLocalStore();
    const [a, b] = ADVENTURES.filter((x) => x.wave === 2);
    store.setOpensOn(b!.slug, "2026-11-30");
    store.setAdventureWave(a!.slug, 4);
    store.setAdventureWave(b!.slug, 4);
    expect(store.getOpensOn(a!.slug)).toBe("2027-01-04");
    expect(store.getOpensOn(b!.slug)).toBe("2026-11-30");
  });
});
