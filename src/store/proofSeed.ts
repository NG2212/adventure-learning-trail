import type { ProofOfWork } from "./types";

const BUILT = [
  "A QBR brief for our renewal review, with account risks and next actions linked to the customer board.",
  "A board automation that routes new requests to the right owner and flags missing information.",
  "A release-notes skill that turns shipped items into a concise update for customers and CS.",
  "A customer-feedback summary grouped by recurring themes, with source links for the product team.",
  "A launch brief with clearer scope, dependencies and owners for the CRM rollout.",
  "A weekly team update that puts decisions first and pulls next actions from our work board.",
  "A hiring debrief template that separates interview evidence from assumptions.",
  "A support handoff checklist with escalation boundaries and the right board as the source of truth.",
  "A campaign review that compares the original brief with results and names what we will change next.",
  "A planning board with a capacity check, fewer priorities and explicit owners for each deliverable.",
  "A reusable finance review brief that highlights unusual spend and links back to approved requests.",
  "A stakeholder review skill that challenges the proposal before I share it with the leadership team.",
];
const LEARNED = [
  "Giving the AI source links helped me catch assumptions before sharing.",
  "A specific goal and clear boundaries made the first version much more useful.",
  "I still need to check the facts and make the final call myself.",
  "A smaller, repeatable workflow is easier to maintain than one big prompt.",
];

/** Separate deterministic seed: adding reflections never changes the activity generator. */
export function seedProof(personId: string, slug: string, completedAt: string): ProofOfWork {
  const hash = Array.from(`${personId}/${slug}`).reduce((n, char) => (Math.imul(n, 31) + char.charCodeAt(0)) >>> 0, 17);
  return {
    personId, slug, completed_at: completedAt,
    built: BUILT[hash % BUILT.length] ?? BUILT[0] ?? "A clearer team brief with owners and next actions.",
    learned: LEARNED[hash % LEARNED.length] ?? "",
    rating: hash % 10 === 0 ? 3 : hash % 10 < 5 ? 4 : 5,
  };
}