import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Every fenced code block in an adventure renders as a Prompt window. */
export function PromptWindow({ text, title = "Prompt" }: { text: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div data-prompt-window className="ui-card my-5 p-5 pb-7">
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className="min-w-0 font-semibold text-foreground/80">{title}</span>
        <Button variant="ghost"
          type="button"
          onClick={async () => {
            await navigator.clipboard?.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          }}
          className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-sm font-medium hover:bg-primary-soft"
        >
          {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <pre className="rounded-xl bg-muted p-4 whitespace-pre-wrap font-sans text-[15px] leading-relaxed">{text}</pre>
    </div>
  );
}
