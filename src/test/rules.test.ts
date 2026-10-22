import { describe, expect, it } from "vitest";
import { titleFor } from "@/lib/titles";
import { recommend } from "@/lib/recommend";
import { ADVENTURES } from "@/content/adventures";
import { createLocalStore } from "@/store/localStore";

describe("titles", () => {
  it("uses the brief's thresholds 1 / 3 / 11 / 20", () => {
    expect(titleFor(0)).toBeNull();
    expect(titleFor(1)).toBe("First Steps");
    expect(titleFor(3)).toBe("Day Tripper");
    expect(titleFor(11)).toBe("Frequent Flyer");
    expect(titleFor(20)).toBe("Globetrotter");
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
  it("Noa starts with 1 completion and 3 itinerary stops; second completion crosses nothing, third gives Day Tripper", () => {
    const s = createLocalStore();
    expect(s.getCompletions()).toHaveLength(1);
    expect(s.getItinerary()).toHaveLength(3);
    expect(s.markComplete("prompt-toolbox").newTitle).toBeNull();
    expect(s.markComplete("two-faced-pitch").newTitle).toBe("Day Tripper");
  });
});
