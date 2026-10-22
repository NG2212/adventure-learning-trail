// Titles describe distance travelled, never ability.
export const TITLES = [
  { name: "First Steps", threshold: 1 },
  { name: "Day Tripper", threshold: 3 },
  { name: "Frequent Flyer", threshold: 11 },
  { name: "Globetrotter", threshold: 20 },
] as const;

export type TitleName = (typeof TITLES)[number]["name"];

/** Current title for a completion count, or null before the first completion. */
export function titleFor(count: number): TitleName | null {
  let current: TitleName | null = null;
  for (const t of TITLES) if (count >= t.threshold) current = t.name;
  return current;
}

export function nextTitle(count: number) {
  return TITLES.find((t) => count < t.threshold) ?? null;
}
