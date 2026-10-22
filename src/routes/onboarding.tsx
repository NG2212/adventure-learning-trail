import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ADVENTURES } from "@/content/adventures";
import { recommend, type OnboardingAnswers } from "@/lib/recommend";
import { store, useStoreState } from "@/store";
import { AdventureIcon } from "@/components/AdventureIcon";
import { LabelChips } from "@/components/LabelChips";
import { ItineraryToggle } from "@/components/ItineraryToggle";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Suggest an itinerary · AI Adventure" },
      { name: "description", content: "Six questions to get a suggested AI Adventure itinerary." },
      { property: "og:title", content: "Suggest an itinerary · AI Adventure" },
      { property: "og:description", content: "Six questions, three or four destinations." },
    ],
  }),
  component: Onboarding,
});

type Question = { key: keyof OnboardingAnswers; prompt: string; options: { value: string; label: string }[] };

const QUESTIONS: Question[] = [
  {
    key: "role", prompt: "What's your role?",
    options: ["Customer Facing", "Marketing", "Engineering", "Product", "Design", "HR", "Finance", "Managers", "Other"].map((v) => ({ value: v, label: v === "Managers" ? "I manage a team" : v })),
  },
  {
    key: "aiUseToday", prompt: "What do you use AI for today?",
    options: [
      { value: "nothing", label: "Not much yet" },
      { value: "writing", label: "Writing and editing" },
      { value: "analysis", label: "Summaries and analysis" },
      { value: "building", label: "Building or automating things" },
    ],
  },
  {
    key: "weeklyTools", prompt: "Which tools do you open weekly?",
    options: [
      { value: "office", label: "Docs, slides, sheets, monday.com" },
      { value: "claude", label: "Claude" },
      { value: "coding", label: "An agentic coding tool" },
    ],
  },
  {
    key: "goal", prompt: "What do you want to get better at?",
    options: [
      { value: "productivity", label: "Getting everyday work done faster" },
      { value: "creating", label: "Creating content and ideas" },
      { value: "setup", label: "Setting up AI so it knows my work" },
      { value: "automation", label: "Automating and delegating tasks" },
      { value: "leading", label: "Leading my team with AI" },
    ],
  },
  {
    key: "learningStyle", prompt: "How do you prefer to learn?",
    options: [
      { value: "quick", label: "Small wins I can finish in one sitting" },
      { value: "steady", label: "A steady project over a few sessions" },
      { value: "deep", label: "A big, ambitious build" },
    ],
  },
  {
    key: "comfort", prompt: "How comfortable are you with AI today?",
    options: [
      { value: "new", label: "Just getting started" },
      { value: "some", label: "I use it now and then" },
      { value: "confident", label: "I use it every day" },
    ],
  },
];

function Onboarding() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<OnboardingAnswers>>({});
  const done = step >= QUESTIONS.length;

  if (done) return <Results answers={answers as OnboardingAnswers} onRestart={() => { setAnswers({}); setStep(0); }} />;

  const q = QUESTIONS[step]!;
  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      <div className="flex items-center gap-2" aria-label={`Question ${step + 1} of ${QUESTIONS.length}`}>
        {QUESTIONS.map((_, i) => (
          <span key={i} className={cn("h-2 flex-1 rounded-full", i < step ? "bg-primary" : i === step ? "bg-sunny" : "bg-stone")} />
        ))}
      </div>
      <p className="mt-6 text-sm font-medium text-muted-foreground">Question {step + 1} of {QUESTIONS.length}</p>
      <h1 className="mt-2 text-3xl">{q.prompt}</h1>
      <div className="mt-8 grid gap-3">
        {q.options.map((o) => (
          <button
            key={o.value}
            onClick={() => { setAnswers({ ...answers, [q.key]: o.value }); setStep(step + 1); }}
            className={cn(
              "rounded-2xl border-2 px-5 py-4 text-left font-medium transition hover:border-primary",
              answers[q.key] === o.value ? "border-primary bg-primary-soft" : "border-border bg-card",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          <ArrowLeft className="size-4" /> Back
        </button>
      )}
    </div>
  );
}

function Results({ answers, onRestart }: { answers: OnboardingAnswers; onRestart: () => void }) {
  const recs = useMemo(() => recommend(ADVENTURES, answers), [answers]);
  const { itinerary } = useStoreState();
  const allAdded = recs.every((r) => itinerary.includes(r.adventure.slug));
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="text-3xl sm:text-4xl">Your suggested itinerary</h1>
      <p className="mt-2 text-muted-foreground">{recs.length} destinations picked from your answers. Add them all, or just the ones you like.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => recs.forEach((r) => store.addToItinerary(r.adventure.slug))}
          disabled={allAdded}
          className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60"
        >
          {allAdded ? "All added" : "Add all to my itinerary"}
        </button>
        <Link to="/itinerary" className="rounded-full border border-primary px-6 py-3 font-semibold text-primary">Go to my itinerary</Link>
        <button onClick={onRestart} className="px-3 text-sm font-semibold text-muted-foreground">Start over</button>
      </div>
      <div className="mt-8 grid gap-4">
        {recs.map(({ adventure, why }) => (
          <div key={adventure.slug} className="flex flex-col gap-4 rounded-3xl border bg-card p-6 shadow-soft sm:flex-row sm:items-start">
            <AdventureIcon adventure={adventure} />
            <div className="flex-1">
              <h2 className="text-lg">{adventure.title}</h2>
              <p className="text-sm text-muted-foreground">{adventure.walkaway}</p>
              <LabelChips adventure={adventure} className="mt-3" />
              <p className="mt-3 text-sm"><span className="font-semibold text-primary">Why this for you: </span>{why}</p>
            </div>
            <ItineraryToggle slug={adventure.slug} />
          </div>
        ))}
      </div>
    </div>
  );
}
