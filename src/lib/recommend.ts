/**
 * Rules-based itinerary recommendation.
 *
 * THE REAL BUILD REPLACES THIS MODULE WITH AN AI CALL. Keep the same
 * input (OnboardingAnswers) and output (Recommendation[]) so screens don't change.
 *
 * Scoring per adventure (higher is better):
 *   +3  role is named in the adventure's professions ("Managers" checks audience)
 *   +1  adventure is for "Everyone" (instead of the +3 above)
 *   Multi-select answers (goal, weekly tools, learning style) add their points once per matching selected value.
 *   +3  goal maps to the adventure's category
 *   +2  comfort maps to one of the adventure's levels (comfort is never shown back)
 *   +1  tools used map to the adventure's "works with" tool
 *   +1  today's AI use maps to the adventure's category
 *   +1  learning preference maps to the adventure's effort
 *   +1  adventure is open now (tie-breaker towards things you can start today)
 * Returns the top 4 when at least 4 score > 0, else the top 3.
 */
import type { Adventure, Category, Effort, Level, Profession, Tool } from "@/content/adventures";

export type WeeklyTool = "office" | "claude" | "coding";
export type Goal = "productivity" | "creating" | "setup" | "automation" | "leading";
export type LearningStyle = "quick" | "steady" | "deep";
const MULTI = ["weeklyTools", "goal", "learningStyle"] as const;

/** Older saves stored one value; wrap any single value as a one-item array. */
export function normaliseAnswers<T extends Record<string, unknown>>(raw: T): T {
  const out: Record<string, unknown> = { ...raw };
  for (const key of MULTI) {
    const v = out[key];
    out[key] = Array.isArray(v) ? v : typeof v === "string" && v ? [v] : [];
  }
  return out as T;
}

export interface OnboardingAnswers {
  team?: string | undefined;
  aspirations?: string[];
  aspirationText?: string | undefined;
  role: Profession;
  aiUseToday: "nothing" | "writing" | "analysis" | "building";
  weeklyTools: WeeklyTool[];
  goal: Goal[];
  learningStyle: LearningStyle[];
  comfort: "new" | "some" | "confident";
}

export interface Recommendation {
  adventure: Adventure;
  score: number;
  why: string;
}

const GOAL_TO_CATEGORY: Record<Goal, Category> = {
  productivity: "Work smarter with AI",
  creating: "Create with AI",
  setup: "Set up your AI",
  automation: "Automate and delegate",
  leading: "Lead with AI",
};
const USE_TO_CATEGORY: Record<OnboardingAnswers["aiUseToday"], Category> = {
  nothing: "Set up your AI",
  writing: "Create with AI",
  analysis: "Work smarter with AI",
  building: "Automate and delegate",
};
const COMFORT_TO_LEVEL: Record<OnboardingAnswers["comfort"], Level> = {
  new: "Foundations",
  some: "Intermediate",
  confident: "Advanced",
};
const TOOLS_TO_TOOL: Record<WeeklyTool, Tool> = {
  office: "Any AI tool",
  claude: "Claude",
  coding: "Agentic coding tool",
};
const STYLE_TO_EFFORT: Record<LearningStyle, Effort> = {
  quick: "Quick win",
  steady: "Moderate",
  deep: "Ambitious",
};

export function scoreAdventure(a: Adventure, input: OnboardingAnswers): { score: number; why: string } {
  const ans = normaliseAnswers(input);
  let score = 0;
  const reasons: string[] = [];
  const named = ans.role === "Managers" ? a.audience.includes("Managers") : a.professions.includes(ans.role);
  if (named) { score += 3; reasons.push(ans.role === "Managers" ? "made for people who manage a team" : `made for ${ans.role} work`); }
  else if (a.professions.includes("Everyone")) score += 1;
  const goals = ans.goal.filter((g) => GOAL_TO_CATEGORY[g] === a.category).length;
  if (goals) { score += 3 * goals; reasons.push(`matches your goal to ${a.category.toLowerCase()}`); }
  if (a.levels.includes(COMFORT_TO_LEVEL[ans.comfort])) score += 2; // never surfaced in the "why"
  const tools = a.tool === "Any AI tool" ? Math.max(1, ans.weeklyTools.length) : ans.weeklyTools.filter((t) => TOOLS_TO_TOOL[t] === a.tool).length;
  if (tools) { score += tools; reasons.push(`works with ${a.tool === "Any AI tool" ? "the tools you already use" : a.tool}`); }
  if (a.category === USE_TO_CATEGORY[ans.aiUseToday]) score += 1;
  const styles = ans.learningStyle.filter((l) => STYLE_TO_EFFORT[l] === a.effort).length;
  if (styles) { score += styles; reasons.push(`fits how you like to learn`); }
  if (a.isOpen) score += 1;
  const why = reasons.length ? capitalise(reasons.slice(0, 2).join(" and ")) + "." : "A good next destination from where you are.";
  return { score, why };
}

export function recommend(adventures: Adventure[], ans: OnboardingAnswers): Recommendation[] {
  const scored = adventures
    .map((adventure) => ({ adventure, ...scoreAdventure(adventure, ans) }))
    .sort((x, y) => y.score - x.score || x.adventure.wave - y.adventure.wave);
  const positive = scored.filter((s) => s.score > 0);
  return scored.slice(0, positive.length >= 4 ? 4 : 3);
}

function capitalise(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Answers used when no onboarding answers exist (they are never stored).
 * Only the person's role is known; the other answers are neutral defaults.
 */
export function defaultAnswersFor(role: string): OnboardingAnswers {
  const r = role.toLowerCase();
  const PROFS: Profession[] = ["Customer Facing", "Marketing", "Engineering", "Product", "Design", "HR", "Finance"];
  const hit = PROFS.find((p) => r.includes(p.toLowerCase()));
  return { role: hit ?? "Other", aiUseToday: "writing", weeklyTools: ["office"], goal: ["productivity"], learningStyle: ["steady"], comfort: "some" };
}
