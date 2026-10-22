import { describe, expect, it } from "vitest";
import { generateAdminDataset, createAdminMock } from "@/store/adminMock";
import { SEED_STATE, createLocalStore } from "@/store/localStore";
import { ADVENTURES } from "@/content/adventures";
describe("Admin mock rules", () => {
  it("generates exactly 140 deterministic employees", () => {
    expect(generateAdminDataset().people).toHaveLength(140);
    expect(generateAdminDataset()).toEqual(generateAdminDataset());
  });
  it("has 28 managers drawn from employees", () => {
    const { people } = generateAdminDataset();
    expect(people.filter((p) => p.isManager)).toHaveLength(28);
    expect(people.every((p) => people.some((m) => m.id === p.managerId && m.isManager))).toBe(true);
  });
  it("has approximately 15% never active", () => {
    expect(generateAdminDataset().people.filter((p) => p.lastActiveAt === null)).toHaveLength(21);
  });
  it("keeps Noa seed completion and itinerary", () => {
    const store = createAdminMock(
      () => SEED_STATE,
      () => {},
    );
    const noa = store.listPeople({ search: "Noa Levi" })[0];
    expect(noa?.completions.map((c) => c.slug)).toEqual(["de-slop"]);
    expect(noa?.itinerary).toEqual([
      "board-of-advisors",
      "your-ai-identity",
      "skills-when-how-and-how-well",
    ]);
    expect(noa?.title).toBe("First Steps");
  });
  it("does not contain personal score, level, or comfort fields", () => {
    for (const p of generateAdminDataset().people) {
      expect(Object.keys(p)).not.toContain("score");
      expect(Object.keys(p)).not.toContain("level");
      expect(Object.keys(p)).not.toContain("comfort");
    }
  });
  it("counts completion rate as completed divided by opened", () => {
    const store = createAdminMock(
      () => SEED_STATE,
      () => {},
    );
    const a = store.getAggregates();
    expect(a.completionRate).toBe((a.completions / a.opens) * 100);
  });
  it("uses opens for active employees and all matching people as denominator", () => {
    const store = createAdminMock(
      () => SEED_STATE,
      () => {},
    );
    const a = store.getAggregates();
    expect(a.total).toBe(140);
    expect(a.active).toBe(119);
    expect(a.activePercent).toBe((119 / 140) * 100);
  });
  it("filters change numbers and date ranges are inclusive subsets", () => {
    const store = createAdminMock(
      () => SEED_STATE,
      () => {},
    );
    expect(store.getAggregates({ org: "Product" }).total).toBeLessThan(140);
    expect(store.getAggregates({ days: 7 }).completions).toBeLessThan(
      store.getAggregates({ days: 60 }).completions,
    );
  });
  it("opens precede completions and completions are unique per person and adventure", () => {
    const { events } = generateAdminDataset();
    const completed = events.filter((e) => e.kind === "completed");
    expect(new Set(completed.map((e) => `${e.personId}/${e.slug}`)).size).toBe(completed.length);
    expect(
      completed.every((e) =>
        events.some(
          (o) =>
            o.personId === e.personId && o.slug === e.slug && o.kind === "opened" && o.at <= e.at,
        ),
      ),
    ).toBe(true);
  });
  it("starts with 30 adventures and saves a session-only Draft", () => {
    const store = createLocalStore(),
      a = ADVENTURES[0];
    if (!a) throw new Error("Missing seed");
    expect(store.listAdminAdventures()).toHaveLength(30);
    store.saveAdminAdventure({
      ...a,
      slug: "new-draft",
      title: "New draft",
      status: "Draft",
      isOpen: false,
    });
    expect(store.listAdminAdventures().find((x) => x.slug === "new-draft")?.status).toBe("Draft");
    expect(createLocalStore().listAdminAdventures()).toHaveLength(30);
  });
});
