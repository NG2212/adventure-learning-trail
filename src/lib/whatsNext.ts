/**
 * "What's next" at the end of an adventure. Platform behaviour, never static text.
 * 1. The first adventure in the person's itinerary that is not done (and is not this one).
 * 2. Else one open adventure the person has not done, best by the onboarding scoring
 *    (using the person's role); ties and zero scores fall back to the first open by slot.
 * 3. Else a link to All adventures (returns null).
 */
import type { Adventure } from "@/content/adventures";
import { defaultAnswersFor, scoreAdventure } from "./recommend";

export type WhatsNext = { adventure: Adventure; reason: "itinerary" | "suggested" } | null;

export function pickWhatsNext(
  currentSlug: string,
  itinerary: string[],
  doneSlugs: string[],
  adventures: Adventure[],
  role: string,
): WhatsNext {
  const done = new Set([...doneSlugs, currentSlug]);
  const fromItinerary = itinerary.map((s) => adventures.find((a) => a.slug === s)).find((a) => a && !done.has(a.slug));
  if (fromItinerary) return { adventure: fromItinerary, reason: "itinerary" };

  const candidates = adventures.filter((a) => a.isOpen && !done.has(a.slug)).sort((x, y) => x.slot - y.slot);
  if (!candidates.length) return null;
  const answers = defaultAnswersFor(role);
  let best = candidates[0]!;
  let bestScore = scoreAdventure(best, answers).score;
  for (const a of candidates.slice(1)) {
    const s = scoreAdventure(a, answers).score;
    if (s > bestScore) { best = a; bestScore = s; }
  }
  return { adventure: best, reason: "suggested" };
}
