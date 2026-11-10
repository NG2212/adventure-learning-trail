import { useSyncExternalStore } from "react";
import { createLocalStore, SEED_STATE } from "./localStore";
import type { AdventureStore } from "./types";
import { setOpensOnSource } from "@/content/schedule";

/** Swap this line to change the data layer (e.g. an API-backed store). */
export const store: AdventureStore = createLocalStore();
// Adventures read their live opening date from the store.
setOpensOnSource((slug) => store.getOpensOn(slug));

/** React hook: re-renders on any store change. Server render uses the seed. */
export function useStoreState() {
  return useSyncExternalStore(store.subscribe, store.getSnapshot, () => SEED_STATE);
}

export type { AdventureStore } from "./types";
