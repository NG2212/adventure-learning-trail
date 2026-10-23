import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FootprintRating } from "./FootprintRating";
import { proofGuidance } from "@/lib/proofOfWork";
import type { ProofInput, ProofOfWork } from "@/store/types";

export function ProofOfWorkDialog({ title, body, entry, onClose, onSave }: { title: string; body: string; entry?: ProofOfWork | undefined; onClose: () => void; onSave: (input: ProofInput) => void }) {
  const [built, setBuilt] = useState(entry?.built ?? "");
  const [learned, setLearned] = useState(entry?.learned ?? "");
  const [rating, setRating] = useState(entry?.rating ?? 0);
  const [error, setError] = useState("");
  const guidance = proofGuidance(body);
  return <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
    <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg">
      <DialogTitle className="pr-6 text-xl leading-snug">{title}</DialogTitle>
      <DialogDescription>Visible to you and L&D admins, never to other employees.</DialogDescription>
      <form className="space-y-5" onSubmit={(e) => {
        e.preventDefault();
        if (!built.trim() || !rating) return;
        try { onSave({ built, learned, rating }); } catch (err) { setError(err instanceof Error ? err.message : "Could not save your entry."); }
      }}>
        <div>
          <label htmlFor="proof-built" className="text-sm font-semibold">What did you build? <span className="text-muted-foreground">(required)</span></label>
          <p id="proof-instruction" className="mt-2 mb-3 text-sm leading-relaxed text-muted-foreground">{guidance.instruction}</p>
          <Textarea id="proof-built" required rows={4} aria-describedby="proof-instruction" placeholder={guidance.placeholder} value={built} onChange={(e) => setBuilt(e.target.value)} />
        </div>
        <div>
          <label htmlFor="proof-learned" className="text-sm font-semibold">What did you learn? <span className="text-muted-foreground">(optional)</span></label>
          <Textarea id="proof-learned" rows={2} className="mt-2 min-h-16" value={learned} onChange={(e) => setLearned(e.target.value)} />
        </div>
        <fieldset>
          <legend className="mb-2 text-sm font-semibold">How was this adventure? <span className="text-muted-foreground">(required)</span></legend>
          <FootprintRating value={rating} onChange={setRating} />
        </fieldset>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <DialogFooter className="gap-2">
          <Button type="button" variant="outline" onClick={onClose}>Not yet</Button>
          <Button type="submit" disabled={!built.trim() || !rating}>{entry ? "Save changes" : "Complete adventure"}</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>;
}