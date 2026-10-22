import { useState } from "react";
import { Check, Copy } from "lucide-react";

/** Every fenced code block in an adventure renders as a Prompt window. */
export function PromptWindow({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="my-5 rounded-2xl bg-stone p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Prompt</span>
        <button
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
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-[15px] leading-relaxed">{text}</pre>
    </div>
  );
}
