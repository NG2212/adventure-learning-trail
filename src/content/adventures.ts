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

export type IconName =
  | "sponge" | "masks" | "toolbox" | "compass" | "chat" | "chart"
  | "document" | "calendar" | "robot" | "pin" | "lightbulb" | "shield";

/** Waves: W1 open now, later waves open on a fixed date. */
export const WAVES: Record<number, { label: string; opensOn: string | null }> = {
  1: { label: "Open now", opensOn: null },
  2: { label: "Opens 23 Nov", opensOn: "23 Nov" },
  3: { label: "Opens 7 Dec", opensOn: "7 Dec" },
  4: { label: "Opens 4 Jan", opensOn: "4 Jan" },
};

/** Total adventures planned for the programme (30 per the brief). */
export const TOTAL_ADVENTURES = 30;

export interface Adventure {
  slug: string;
  icon: IconName;
  title: string;
  walkaway: string;
  category: Category;
  levels: Level[];
  professions: Profession[];
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

const CATEGORY_ICON: Record<Category, IconName> = {
  "Work smarter with AI": "lightbulb",
  "Create with AI": "document",
  "Set up your AI": "toolbox",
  "Automate and delegate": "robot",
  "Lead with AI": "compass",
};

/** Raw frontmatter as written in the Markdown files. */
interface Frontmatter {
  slug?: string; emoji?: string; icon?: IconName; title?: string; walkaway?: string;
  category?: Category; levels?: Level[]; professions?: Profession[]; audience?: string[];
  tool?: Tool; effort?: Effort; outcome?: string; wave?: number; slot?: number; next?: string[];
}

function splitFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  return { data: (parseYaml(match[1] ?? "") ?? {}) as Frontmatter, body: (match[2] ?? "").trim() };
}

function toAdventure(raw: string): Adventure {
  const { data, body } = splitFrontmatter(raw);
  const category = data.category ?? "Work smarter with AI";
  const wave = Number(data.wave ?? 1);
  // `emoji` is intentionally ignored in the UI.
  return {
    slug: String(data.slug),
    icon: data.icon ?? CATEGORY_ICON[category],
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
  };
}

const files = import.meta.glob("./adventures/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export const ADVENTURES: Adventure[] = Object.values(files)
  .map(toAdventure)
  .sort((a, b) => a.wave - b.wave || a.slot - b.slot);

export function getAdventure(slug: string): Adventure | undefined {
  return ADVENTURES.find((a) => a.slug === slug);
}

/** Body to render: the real Markdown when open, a short notice otherwise. */
export function adventureBody(a: Adventure): string {
  if (a.isOpen && a.body) return a.body;
  return `## This adventure opens on ${WAVES[a.wave]?.opensOn ?? "a later date"}\n\n${a.walkaway}`;
}
