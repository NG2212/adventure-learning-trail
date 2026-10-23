import { titleFor } from "@/lib/titles";
import type { AdventureStore, DemoSettings, StoreState } from "./types";
import { createAdminMock } from "./adminMock";

const STORAGE_KEY = "ai-adventure-state-v2";

/** Temporary review settings: flip either flag here, without resetting browser storage. */
export const MOCK_SETTINGS: Readonly<DemoSettings> = {
  demoOpenAll: true,
  showReviewState: true,
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
      if (raw) state = { ...SEED_STATE, ...JSON.parse(raw) };
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

  return {
    getDemoSettings: () => settings,
    ...createAdminMock(read, () => {
      state = { ...read() };
      listeners.forEach((listener) => listener());
    }),
    getPerson: () => read().person,
    isSignedIn: () => read().signedIn,
    signIn: () => write({ ...read(), signedIn: true }),
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
