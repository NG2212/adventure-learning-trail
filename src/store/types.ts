import type { TitleName } from "@/lib/titles";
import type { AdminReadsWrites } from "./adminTypes";
import type { OnboardingAnswers } from "@/lib/recommend";

export interface Person {
  id: string;
  name: string;
  firstName: string;
  role: string;
  isAdmin: boolean;
  onboardingAnswers?: OnboardingAnswers;
  /** True once the first-run opening video screen has been shown. */
  welcomeSeen?: boolean;
}

export interface Completion {
  slug: string;
  completedAt: string; // ISO date
}

export interface ProofInput {
  built: string;
  learned: string;
  rating: number;
}

export interface ProofOfWork extends ProofInput {
  personId: string;
  slug: string;
  completed_at: string;
}

export interface StoreState {
  signedIn: boolean;
  person: Person;
  itinerary: string[]; // ordered adventure slugs
  completions: Completion[];
  proofEntries: ProofOfWork[];
  announcementDismissed: boolean;
}

export interface CompletionResult {
  count: number;
  newTitle: TitleName | null; // set only when a threshold was crossed
  alreadyDone: boolean;
}

export interface DemoSettings {
  demoOpenAll: boolean;
  showReviewState: boolean;
  ratingDisplayMinimum: number;
}

export interface AdventureRating {
  averageRating: number;
  ratingCount: number;
}

/**
 * The single data-layer contract. Every read and write in the UI goes through
 * this interface so the localStorage implementation can be swapped for an API.
 */
export interface AdventureStore extends AdminReadsWrites {
  getDemoSettings(): Readonly<DemoSettings>;
  getAdventureRating(slug: string): AdventureRating | undefined;
  getPerson(): Person;
  isSignedIn(): boolean;
  signIn(): void;
  saveOnboardingAnswers(answers: OnboardingAnswers): void;
  markWelcomeSeen(): void;
  getItinerary(): string[];
  addToItinerary(slug: string): void;
  removeFromItinerary(slug: string): void;
  reorderItinerary(slug: string, direction: "up" | "down"): void;
  markComplete(slug: string): CompletionResult;
  getProofOfWork(slug: string): ProofOfWork | undefined;
  saveProofOfWork(slug: string, input: ProofInput): CompletionResult;
  getCompletions(): Completion[];
  getTitle(): TitleName | null;
  isAnnouncementDismissed(): boolean;
  dismissAnnouncement(): void;
  // For React: subscribe to changes and read an immutable snapshot.
  subscribe(listener: () => void): () => void;
  getSnapshot(): StoreState;
}
