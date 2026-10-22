/**
 * Rules-based itinerary recommendation.
 *
 * THE REAL BUILD REPLACES THIS MODULE WITH AN AI CALL. Keep the same
 * input (OnboardingAnswers) and output (Recommendation[]) so screens don't change.
 *
 * Scoring per adventure (higher is better):
 *   +3  role is named in the adventure's professions ("Managers" checks audience)
 *   +1  adventure is for "Everyone" (instead of the +3 above)
 *   +3  goal maps to the adventure's category
 *   +2  comfort maps to one of the adventure's levels (comfort is never shown back)
 *   +1  tools used map to the adventure's "works with" tool
 *   +1  today's AI use maps to the adventure's category
 *   +1  learning preference maps to the adventure's effort
 *   +1  adventure is open now (tie-breaker towards things you can start today)
 * Returns the top 4 when at least 4 score > 0, else the top 3.
 */
import type { Adventure, Category, Effort, Level, Profession, Tool } from "@/content/adventures";

export interface OnboardingAnswers {
  role: Profession;
  aiUseToday: "nothing" | "writing" | "analysis" | "building";
  weeklyTools: "office" | "claude" | "coding";
  goal: "productivity" | "creating" | "setup" | "automation" | "leading";
  learningStyle: "quick" | "steady" | "deep";
  comfort: "new" | "some" | "confident";
}

export interface Recommendation {
  adventure: Adventure;
  score: number;
  why: string;
}

const GOAL_TO_CATEGORY: Record<OnboardingAnswers["goal"], Category> = {
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
const TOOLS_TO_TOOL: Record<OnboardingAnswers["weeklyTools"], Tool> = {
  office: "Any AI tool",
  claude: "Claude",
  coding: "Agentic coding tool",
};
const STYLE_TO_EFFORT: Record<OnboardingAnswers["learningStyle"], Effort> = {
  quick: "Quick win",
  steady: "Moderate",
  deep: "Ambitious",
};

export function scoreAdventure(a: Adventure, ans: OnboardingAnswers): { score: number; why: string } {
  let score = 0;
  const reasons: string[] = [];
  const named = ans.role === "Managers" ? a.audience.includes("Managers") : a.professions.includes(ans.role);
  if (named) { score += 3; reasons.push(ans.role === "Managers" ? "made for people who manage a team" : `made for ${ans.role} work`); }
  else if (a.professions.includes("Everyone")) score += 1;
  if (a.category === GOAL_TO_CATEGORY[ans.goal]) { score += 3; reasons.push(`matches your goal to ${a.category.toLowerCase()}`); }
  if (a.levels.includes(COMFORT_TO_LEVEL[ans.comfort])) score += 2; // never surfaced in the "why"
  if (a.tool === TOOLS_TO_TOOL[ans.weeklyTools] || a.tool === "Any AI tool") { score += 1; reasons.push(`works with ${a.tool === "Any AI tool" ? "the tools you already use" : a.tool}`); }
  if (a.category === USE_TO_CATEGORY[ans.aiUseToday]) score += 1;
  if (a.effort === STYLE_TO_EFFORT[ans.learningStyle]) { score += 1; reasons.push(`fits how you like to learn`); }
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
  return { role: hit ?? "Other", aiUseToday: "writing", weeklyTools: "office", goal: "productivity", learningStyle: "steady", comfort: "some" };
}
