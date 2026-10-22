import type { TitleName } from "@/lib/titles";

export interface Person {
  id: string;
  name: string;
  firstName: string;
  role: string;
  isAdmin: boolean;
}

export interface Completion {
  slug: string;
  completedAt: string; // ISO date
}

export interface StoreState {
  signedIn: boolean;
  person: Person;
  itinerary: string[]; // ordered adventure slugs
  completions: Completion[];
  announcementDismissed: boolean;
}

export interface CompletionResult {
  count: number;
  newTitle: TitleName | null; // set only when a threshold was crossed
  alreadyDone: boolean;
}

/**
 * The single data-layer contract. Every read and write in the UI goes through
 * this interface so the localStorage implementation can be swapped for an API.
 */
export interface AdventureStore {
  getPerson(): Person;
  isSignedIn(): boolean;
  signIn(): void;
  getItinerary(): string[];
  addToItinerary(slug: string): void;
  removeFromItinerary(slug: string): void;
  reorderItinerary(slug: string, direction: "up" | "down"): void;
  markComplete(slug: string): CompletionResult;
  getCompletions(): Completion[];
  getTitle(): TitleName | null;
  isAnnouncementDismissed(): boolean;
  dismissAnnouncement(): void;
  // For React: subscribe to changes and read an immutable snapshot.
  subscribe(listener: () => void): () => void;
  getSnapshot(): StoreState;
}
