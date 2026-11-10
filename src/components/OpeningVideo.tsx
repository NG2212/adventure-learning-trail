import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PreviewVideo } from "@/components/PreviewVideo";

export const OPENING_VIDEO = "/videos/ai-adventure-opening.mp4";
export const OPENING_POSTER = "/videos/ai-adventure-opening.jpg";

/** Quiet Home link that replays the first-run opening video in a dialog. */
export function OpeningVideoLink() {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline">
        <Play className="size-3.5" />Watch the welcome video
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogTitle>Welcome to the AI Adventure</DialogTitle>
        <PreviewVideo url={OPENING_VIDEO} poster={OPENING_POSTER} title="Welcome to the AI Adventure" caption={null} className="w-full" />
      </DialogContent>
    </Dialog>
  );
}
