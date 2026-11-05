import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { CompletionResult } from "@/store/types";
import { useStoreState } from "@/store";
import { titleFor } from "@/lib/titles";
import { FootprintShape, trail } from "./Footprints";
import { ShareCard } from "./ShareCard";
import { WhatsNextPanel } from "./WhatsNext";

/** Completion celebration: lime glow, footprints stepping in, count, new title. */
export function Celebration({ result, adventureTitle, slug, onClose }: { result: CompletionResult | null; adventureTitle: string; slug: string; onClose: () => void }) {
  const [sharing, setSharing] = useState(false);
  const { person } = useStoreState();
  if (!result) return null;
  const colours = ["var(--color-primary)", "var(--color-pink)", "var(--color-primary)", "var(--color-sunny)", "var(--color-primary)"];

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="ui-card ui-card-accent-lime max-w-lg p-8 text-center">
        {sharing ? (
          <>
            <DialogTitle>Share your progress</DialogTitle>
            <DialogDescription>Preview of the card your colleagues will see.</DialogDescription>
            <ShareCard name={person.name} title={titleFor(result.count)} count={result.count} />
            <button onClick={() => setSharing(false)} className="mx-auto mt-2 text-sm font-semibold text-primary">Back</button>
          </>
        ) : (
          <>
            <div className="mx-auto flex size-32 items-center justify-center rounded-full bg-lime shadow-glow">
              <svg viewBox="0 0 100 100" className="size-24" aria-hidden>
                {trail(35, 90, 15, 5, 18, 4).map((p, i) => (
                  <g key={i} className="animate-step" style={{ animationDelay: `${i * 0.18}s`, transformBox: "fill-box", transformOrigin: "center" }}>
                    <FootprintShape {...p} scale={0.55} fill={colours[i]} />
                  </g>
                ))}
              </svg>
            </div>
            <DialogTitle className="mt-6 text-2xl">Adventure complete</DialogTitle>
            <DialogDescription className="text-base text-foreground">
              You finished <strong>{adventureTitle}</strong> and earned its badge.
            </DialogDescription>
            <p className="text-4xl font-bold text-primary">{result.count}</p>
            <p className="-mt-3 text-sm text-muted-foreground">adventures completed</p>
            {result.newTitle && (
              <p className="mx-auto rounded-full bg-sunny px-4 py-1.5 text-sm font-semibold">New title: {result.newTitle}</p>
            )}
            <WhatsNextPanel currentSlug={slug} onNavigate={onClose} />
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button onClick={() => setSharing(true)} className="rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Share</button>
              <Link to="/my-journey" className="rounded-full border border-primary px-5 py-2.5 font-semibold text-primary">Back to my journey</Link>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
