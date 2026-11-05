import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FootprintShape } from "./Footprints";

/** Shared trail presentation for reader pages and admin previews; Markdown stays authored. */
export function AdventureTrail({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="ui-card max-w-3xl px-5 pt-4 pb-6" aria-label={heading}>
      <h2 className="mb-2 text-xl">{heading}</h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
        ol: ({ children, start }) => <ol start={start} className="adventure-trail my-3">{children}</ol>,
        li: ({ children }) => (
          <li className="adventure-trail-item">
            <span className="adventure-trail-path" aria-hidden="true">
              <svg viewBox="-15 -20 30 40" className="adventure-trail-footprint h-6 w-5 text-primary">
                <FootprintShape />
              </svg>
            </span>
            <span className="adventure-trail-number mt-0.5 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground" aria-hidden="true" />
            <div className="min-w-0 leading-relaxed [&>p]:my-0">{children}</div>
          </li>
        ),
        p: ({ children }) => <p className="my-3 leading-relaxed">{children}</p>,
      }}>{body}</ReactMarkdown>
    </section>
  );
}