import { reviewState, type Adventure } from "@/content/adventures";
import { store } from "@/store";
import { cn } from "@/lib/utils";

/** Absolute overlay: review marks never reserve space or move authored labels. */
export function ReviewStamp({ adventure }: { adventure: Pick<Adventure, "review"> }) {
  if (!store.getDemoSettings().showReviewState) return null;
  const state = reviewState(adventure);
  return <span aria-label={`Review state: ${state}`} className={cn("review-stamp", state === "Ready" ? "review-stamp-ready" : "review-stamp-draft")}>{state}</span>;
}