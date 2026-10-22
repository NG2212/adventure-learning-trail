import { describe, expect, it } from "vitest";
import { getAdventure } from "./adventures";

describe("adventure links", () => {
  it("resolves every full-content adventure by its exact slug", () => {
    for (const s of ["de-slop", "board-of-advisors", "skills-when-how-and-how-well", "your-own-chief-of-staff", "token-smartness"]) {
      expect(getAdventure(s)?.slug).toBe(s);
    }
  });
  it("resolves mis-cased links to the canonical adventure", () => {
    expect(getAdventure("De-Slop")?.slug).toBe("de-slop");
  });
});
