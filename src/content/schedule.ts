// Per-adventure opening dates. Wave dates only seed the defaults; the live date per
// adventure is supplied by the AdventureStore through setOpensOnSource.

/** Placeholder seed dates per wave until the launch date is confirmed. */
export const WAVE_DEFAULT_DATES: Record<number, string> = {
  1: "2026-11-09",
  2: "2026-11-23",
  3: "2026-12-07",
  4: "2027-01-04",
};

export function waveDefaultDate(wave: number): string {
  return WAVE_DEFAULT_DATES[wave] ?? WAVE_DEFAULT_DATES[4]!;
}

/** Today's local calendar date as YYYY-MM-DD. */
export function todayISO(now: Date = new Date()): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}

/** Open on or after the opening day. */
export function isOpenOn(opensOn: string, today: string = todayISO()): boolean {
  return today >= opensOn;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "23 Nov", with the year only when it is not the current year. */
export function formatOpensDate(opensOn: string, today: string = todayISO()): string {
  const [y, m, d] = opensOn.split("-").map(Number);
  const base = `${d} ${MONTHS[(m ?? 1) - 1]}`;
  return y && String(y) !== today.slice(0, 4) ? `${base} ${y}` : base;
}

/** "Opens 23 Nov". */
export function formatOpensLabel(opensOn: string, today: string = todayISO()): string {
  return `Opens ${formatOpensDate(opensOn, today)}`;
}

type Source = (slug: string, wave: number) => string;
let source: Source = (_slug, wave) => waveDefaultDate(wave);

/** The data layer registers itself here so adventures read their live opening date. */
export function setOpensOnSource(fn: Source) {
  source = fn;
}

export function opensOnFor(slug: string, wave: number): string {
  return source(slug, wave);
}
