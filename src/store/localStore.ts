import { titleFor } from "@/lib/titles";
import type { AdventureStore, DemoSettings, StoreState } from "./types";
import { createAdminMock } from "./adminMock";
import { seedProof } from "./proofSeed";
import { ADVENTURES } from "@/content/adventures";
import { normaliseAnswers, recommend } from "@/lib/recommend";

const STORAGE_KEY = "ai-adventure-state-v2";

/** Mock settings: change here without resetting employee browser storage. */
export const MOCK_SETTINGS: Readonly<DemoSettings> = {
  demoOpenAll: true,
  showReviewState: true,
  ratingDisplayMinimum: 5,
};

/** Seed: Noa has completed 1 adventure and has 3 in her itinerary. */
export const SEED_STATE: StoreState = {
  signedIn: false,
  person: {
    id: "noa-levi",
    name: "Noa Levi",
    firstName: "Noa",
    role: "Product Manager",
    isAdmin: true,
  },
  itinerary: ["board-of-advisors", "your-ai-identity", "skills-when-how-and-how-well"],
  completions: [{ slug: "de-slop", completedAt: "2026-10-15" }],
  proofEntries: [seedProof("noa-levi", "de-slop", "2026-10-15")],
  announcementDismissed: false,
};

export function createLocalStore(settings: Readonly<DemoSettings> = MOCK_SETTINGS): AdventureStore {
  let state: StoreState = SEED_STATE;
  let loaded = false;
  const listeners = new Set<() => void>();

  function load() {
    if (loaded || typeof window === "undefined") return;
    loaded = true;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        state = { ...SEED_STATE, ...saved };
        // Older saves held one value for the multi-select questions; migrate to one-item arrays.
        if (state.person.onboardingAnswers) state = { ...state, person: { ...state.person, onboardingAnswers: normaliseAnswers(state.person.onboardingAnswers) } };
        // Older demo completions predate reflection collection; give them seeded entries.
        if (!Array.isArray(saved.proofEntries)) {
          state = { ...state, proofEntries: state.completions.map((c) => seedProof(state.person.id, c.slug, c.completedAt)) };
        }
      }
    } catch {
      /* ignore corrupt storage */
    }
  }

  function read(): StoreState {
    load();
    return state;
  }

  function write(next: StoreState) {
    state = next;
    if (typeof window !== "undefined")
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    listeners.forEach((l) => l());
  }

  const admin = createAdminMock(read, () => {
      state = { ...read() };
      listeners.forEach((listener) => listener());
    });

  return {
    getDemoSettings: () => settings,
    ...admin,
    getAdventureRating(slug) {
      const summary = admin.getRatingSummaries({ slug })[0];
      if (!summary || summary.ratingCount === 0 || summary.ratingCount < settings.ratingDisplayMinimum) return undefined;
      return { averageRating: summary.averageRating, ratingCount: summary.ratingCount };
    },
    getPerson: () => read().person,
    isSignedIn: () => read().signedIn,
    signIn: () => write({ ...read(), signedIn: true }),
    saveOnboardingAnswers(answers) {
      const s = read();
      const saved = { ...normaliseAnswers(answers), team: answers.team?.trim(), aspirations: [...(answers.aspirations ?? [])], aspirationText: answers.aspirationText?.trim() };
      const completedStops = s.itinerary.filter((slug) => s.completions.some((c) => c.slug === slug));
      const suggested = recommend(ADVENTURES, saved).map((r) => r.adventure.slug);
      write({ ...s, signedIn: true, person: { ...s.person, onboardingAnswers: saved }, itinerary: [...new Set([...completedStops, ...suggested])] });
    },
    getItinerary: () => read().itinerary,
    addToItinerary(slug) {
      const s = read();
      if (!s.itinerary.includes(slug)) write({ ...s, itinerary: [...s.itinerary, slug] });
    },
    removeFromItinerary(slug) {
      const s = read();
      write({ ...s, itinerary: s.itinerary.filter((x) => x !== slug) });
    },
    reorderItinerary(slug, direction) {
      const s = read();
      const list = [...s.itinerary];
      const i = list.indexOf(slug);
      const j = direction === "up" ? i - 1 : i + 1;
      if (i < 0 || j < 0 || j >= list.length) return;
      list.splice(j, 0, list.splice(i, 1)[0] as string);
      write({ ...s, itinerary: list });
    },
    markComplete(slug) {
      const s = read();
      const before = s.completions.length;
      if (s.completions.some((c) => c.slug === slug)) {
        return { count: before, newTitle: null, alreadyDone: true };
      }
      const completions = [
        ...s.completions,
        { slug, completedAt: new Date().toISOString().slice(0, 10) },
      ];
      write({ ...s, completions });
      const prevTitle = titleFor(before);
      const title = titleFor(completions.length);
      return {
        count: completions.length,
        newTitle: title !== prevTitle ? title : null,
        alreadyDone: false,
      };
    },
    getCompletions: () => read().completions,
    getProofOfWork: (slug) => read().proofEntries.find((p) => p.personId === read().person.id && p.slug === slug),
    saveProofOfWork(slug, input) {
      if (!input.built.trim() || !Number.isInteger(input.rating) || input.rating < 1 || input.rating > 5) {
        throw new Error("Describe what you built and choose a rating from 1 to 5.");
      }
      if (!ADVENTURES.some((a) => a.slug === slug)) throw new Error("Unknown adventure.");
      const s = read();
      const previous = s.completions.find((c) => c.slug === slug);
      const completedAt = previous?.completedAt ?? new Date().toISOString();
      const completions = previous ? s.completions : [...s.completions, { slug, completedAt }];
      const entry = { personId: s.person.id, slug, built: input.built.trim(), learned: input.learned.trim(), rating: input.rating, completed_at: completedAt };
      write({ ...s, completions, proofEntries: [...s.proofEntries.filter((p) => !(p.personId === s.person.id && p.slug === slug)), entry] });
      const newTitle = titleFor(completions.length);
      return { count: completions.length, alreadyDone: Boolean(previous), newTitle: newTitle !== titleFor(s.completions.length) ? newTitle : null };
    },
    getTitle: () => titleFor(read().completions.length),
    isAnnouncementDismissed: () => read().announcementDismissed,
    dismissAnnouncement: () => write({ ...read(), announcementDismissed: true }),
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot: read,
  };
}
