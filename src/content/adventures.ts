// Builds the adventure index at startup from Markdown frontmatter.
// Each file in ./adventures/*.md is one adventure. Add a file, it appears everywhere.
import { parse as parseYaml } from "yaml";

export const CATEGORIES = [
  "Work smarter with AI",
  "Create with AI",
  "Set up your AI",
  "Automate and delegate",
  "Lead with AI",
] as const;
export const LEVELS = ["Foundations", "Intermediate", "Advanced"] as const;
/** Profession filter chips. "Managers" matches the adventure's `audience`, not `professions`. */
export const PROFESSIONS = [
  "Customer Facing", "Marketing", "Engineering", "Product", "Design", "HR", "Finance", "Other", "Managers",
] as const;
export const TOOLS = ["Any AI tool", "Claude", "Agentic coding tool"] as const;
export const EFFORTS = ["Quick win", "Moderate", "Ambitious"] as const;

export type Category = (typeof CATEGORIES)[number];
export type Level = (typeof LEVELS)[number];
export type Profession = (typeof PROFESSIONS)[number];
export type Tool = (typeof TOOLS)[number];
export type Effort = (typeof EFFORTS)[number];

export const ICON_NAMES = [
  "sponge", "masks", "robot", "scale", "compass", "book", "toolbox", "magnifier", "document",
  "chat", "palette", "calendar", "id-card", "map-pin", "brain", "briefcase", "gauge", "layers",
  "shield", "clock", "terminal", "newspaper", "chart", "loop", "network", "people", "balance",
] as const;
export type IconName = (typeof ICON_NAMES)[number];

/** Default glyph per category, used when `icon:` is missing or unknown. */
export const CATEGORY_ICON: Record<Category, IconName> = {
  "Work smarter with AI": "compass",
  "Create with AI": "palette",
  "Set up your AI": "toolbox",
  "Automate and delegate": "robot",
  "Lead with AI": "people",
};

/** Waves: W1 open now, later waves open on a fixed date. */
export const WAVES: Record<number, { label: string; opensOn: string | null }> = {
  1: { label: "Open now", opensOn: null },
  2: { label: "Opens 23 Nov", opensOn: "23 Nov" },
  3: { label: "Opens 7 Dec", opensOn: "7 Dec" },
  4: { label: "Opens 4 Jan", opensOn: "4 Jan" },
};

/** Total adventures planned for the programme. */
export const TOTAL_ADVENTURES = 30;

export interface Adventure {
  slug: string;
  icon: IconName;
  /** Optional badge art (512px PNG, transparent outside the circle); falls back to the Lucide glyph for `icon`. */
  iconAsset?: string | undefined;
  review?: string | undefined;
  title: string;
  walkaway: string;
  category: Category;
  levels: Level[];
  /** Raw values from content: "Everyone", enumerated professions, or free text (e.g. "Advanced users"). */
  professions: string[];
  audience: string[];
  tool: Tool;
  effort: Effort;
  outcome: string;
  wave: number;
  slot: number;
  next: string[];
  body: string;
  isOpen: boolean;
}

/** Raw frontmatter as written in the Markdown files. Extra fields (emoji, pattern, source) are ignored. */
interface Frontmatter {
  review?: unknown;
  slug?: string; icon?: string; title?: string; walkaway?: string;
  category?: Category; levels?: Level[]; professions?: string[]; audience?: string[];
  tool?: Tool; effort?: Effort; outcome?: string; wave?: number | string; slot?: number; next?: string[];
}

function splitFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  return { data: (parseYaml(match[1] ?? "") ?? {}) as Frontmatter, body: (match[2] ?? "").trim() };
}

/** "W2" or 2 -> 2. */
export function parseWave(w: number | string | undefined): number {
  const n = Number(String(w ?? 1).replace(/^W/i, ""));
  return Number.isFinite(n) && n > 0 ? n : 1;
}

function isIconName(x: unknown): x is IconName {
  return typeof x === "string" && (ICON_NAMES as readonly string[]).includes(x);
}

/** Badge art per slug: src/assets/icons/<slug>.png. */
const ICON_ASSETS = import.meta.glob("/src/assets/icons/*.png", { eager: true, import: "default" }) as Record<string, string>;
export function iconAssetFor(slug: string): string | undefined {
  return ICON_ASSETS[`/src/assets/icons/${slug}.png`];
}

export function toAdventure(raw: string): Adventure {
  const { data, body } = splitFrontmatter(raw);
  const category = data.category ?? "Work smarter with AI";
  const wave = parseWave(data.wave);
  return {
    slug: String(data.slug),
    review: typeof data.review === "string" ? data.review : undefined,
    icon: isIconName(data.icon) ? data.icon : CATEGORY_ICON[category],
    title: String(data.title),
    walkaway: String(data.walkaway ?? ""),
    category,
    levels: data.levels ?? [],
    professions: data.professions ?? [],
    audience: data.audience ?? [],
    tool: data.tool ?? "Any AI tool",
    effort: data.effort ?? "Moderate",
    outcome: String(data.outcome ?? ""),
    wave,
    slot: Number(data.slot ?? 0),
    next: data.next ?? [],
    body,
    isOpen: wave === 1,
    iconAsset: iconAssetFor(String(data.slug)),
  };
}

/**
 * Does an adventure match a profession chip?
 * - "Everyone" matches every chip.
 * - "Managers" matches when audience includes "Managers".
 * - "Other" also matches free-text values outside the enumeration (e.g. "Advanced users").
 */
export function matchesProfession(a: Adventure, chip: Profession): boolean {
  if (chip === "Managers") return a.audience.includes("Managers") || a.professions.includes("Managers");
  if (a.professions.includes("Everyone") || a.professions.includes(chip)) return true;
  if (chip === "Other") return a.professions.some((p) => !(PROFESSIONS as readonly string[]).includes(p));
  return false;
}

const files = import.meta.glob("./adventures/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export const ADVENTURES: Adventure[] = Object.values(files)
  .map(toAdventure)
  .sort((a, b) => a.wave - b.wave || a.slot - b.slot);

export function getAdventure(slug: string): Adventure | undefined {
  const key = normalizeSlug(slug);
  return ADVENTURES.find((a) => a.slug === key);
}

/**
 * Body to render:
 * - open with a body, or an admin preview of a scheduled one: the real Markdown
 * - open without a body: a short "Content coming" page
 * - not open: "This adventure opens on <date>" (the body stays loaded for admin preview)
 */
export function canOpenAdventure(a: Pick<Adventure, "isOpen">, demoOpenAll: boolean): boolean {
  return demoOpenAll || a.isOpen;
}

export function reviewState(a: Pick<Adventure, "review">): "Ready" | "Draft" {
  return a.review === "ready" ? "Ready" : "Draft";
}

export function adventureBody(a: Adventure, adminPreview = false, demoOpenAll = false): string {
  const open = canOpenAdventure(a, demoOpenAll);
  if ((open || adminPreview) && a.body) return a.body;
  if (open) return `## Content coming\n\n${a.walkaway}\n\nThe full adventure is being written. Add it to your itinerary and it will be here soon.`;
  return `## This adventure opens on ${WAVES[a.wave]?.opensOn ?? "a later date"}\n\n${a.walkaway}`;
}

/** Shared links may arrive with capitals, spaces, underscores or a trailing slash; adventure slugs are lowercase-hyphenated. */
export function normalizeSlug(slug: string): string {
  return decodeURIComponent(slug).trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/\/+$/, "");
}
