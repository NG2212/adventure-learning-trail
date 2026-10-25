import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useHydrated } from "@tanstack/react-router";
import { ADVENTURES } from "@/content/adventures";
import { recommend, type OnboardingAnswers } from "@/lib/recommend";
import { store } from "@/store";
import { AdventureCard } from "@/components/AdventureCard";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/pageHead";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({ head: () => pageHead("Your starting point", "Build your AI Adventure journey around your work and goals."), component: Onboarding });
export const ASPIRATIONS = ["Build confidence with AI", "Make everyday work easier", "Build something new"];
const QUESTIONS = [
  { key: "role", prompt: "What's your role?", options: ["Customer Facing", "Marketing", "Engineering", "Product", "Design", "HR", "Finance", "Managers", "Other"] },
  { key: "team", prompt: "Which team do you belong to?", options: [] },
  { key: "aiUseToday", prompt: "What do you use AI for today?", options: ["Not much yet", "Writing and editing", "Summaries and analysis", "Building or automating things"], values: ["nothing", "writing", "analysis", "building"] },
  { key: "weeklyTools", prompt: "Which tools do you open weekly?", options: ["Docs, slides, sheets, monday.com", "Claude", "An agentic coding tool"], values: ["office", "claude", "coding"] },
  { key: "goal", prompt: "What do you want to get better at?", options: ["Getting everyday work done faster", "Creating content and ideas", "Setting up AI so it knows my work", "Automating and delegating tasks", "Leading my team with AI"], values: ["productivity", "creating", "setup", "automation", "leading"] },
  { key: "aspirations", prompt: "What do you want to get out of this?", options: ASPIRATIONS },
  { key: "learningStyle", prompt: "How do you prefer to learn?", options: ["Small wins I can finish in one sitting", "A steady project over a few sessions", "A big, ambitious build"], values: ["quick", "steady", "deep"] },
  { key: "comfort", prompt: "How comfortable are you with AI today?", options: ["Just getting started", "I use it now and then", "I use it every day"], values: ["new", "some", "confident"] },
] as const;
export const ANSWER_LABELS: Record<string, string> = { nothing: "Not much yet", writing: "Writing and editing", analysis: "Summaries and analysis", building: "Building or automating things", office: "Docs, slides, sheets, monday.com", claude: "Claude", coding: "An agentic coding tool", productivity: "Getting everyday work done faster", creating: "Creating content and ideas", setup: "Setting up AI so it knows my work", automation: "Automating and delegating tasks", leading: "Leading my team with AI", quick: "Small wins I can finish in one sitting", steady: "A steady project over a few sessions", deep: "A big, ambitious build", new: "Just getting started", some: "I use it now and then", confident: "I use it every day" };
function Onboarding() {
  const hydrated = useHydrated();
  return hydrated ? <Questions /> : null;
}
function Questions() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<OnboardingAnswers>>(() => store.getPerson().onboardingAnswers ?? {});
  const q = QUESTIONS[step];
  if (!q) {
    const recs = recommend(ADVENTURES, answers as OnboardingAnswers);
    return <div className="mx-auto max-w-6xl px-5 py-12"><h1 className="text-3xl">Your suggested journey</h1><div className="my-6 flex flex-wrap gap-3"><Button asChild><Link to="/welcome">Home</Link></Button><Button variant="outline" asChild><Link to="/my-journey">Go to My journey</Link></Button><Button variant="ghost" onClick={() => setStep(0)}>Edit answers</Button></div><div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">{recs.map(({ adventure }) => <AdventureCard key={adventure.slug} adventure={adventure} />)}</div></div>;
  }
  const value = answers[q.key];
  const multiple = q.key === "aspirations";
  const free = q.key === "team";
  const valid = free ? Boolean(answers.team?.trim()) : multiple ? Boolean(answers.aspirations?.length || answers.aspirationText?.trim()) : Boolean(value);
  const next = () => {
    if (step === QUESTIONS.length - 1) store.saveOnboardingAnswers(answers as OnboardingAnswers);
    setStep(step + 1);
  };
  return <div className="mx-auto max-w-2xl px-5 py-12">
    <div className="flex gap-2" aria-label={`Question ${step + 1} of 8`}>{QUESTIONS.map((_, i) => <span key={i} className={cn("h-2 flex-1 rounded-full", i < step ? "bg-primary" : i === step ? "bg-sunny" : "bg-stone")} />)}</div>
    <p className="mt-6 text-sm text-muted-foreground">Question {step + 1} of 8</p><h1 className="mt-2 text-3xl">{q.prompt}</h1>
    <div className="mt-8 grid gap-3">
      {free ? <><label htmlFor="team" className="text-sm font-medium">Team</label><input id="team" list="team-suggestions" value={answers.team ?? ""} onChange={(e) => setAnswers({ ...answers, team: e.target.value })} className="rounded-lg border bg-card px-4 py-3" placeholder="Your team" /><datalist id="team-suggestions">{["Product", "Engineering", "Marketing", "Design", "Customer Success", "People", "Finance"].map((team) => <option key={team} value={team} />)}</datalist></> : q.options.map((label, i) => {
        const option = "values" in q ? q.values[i] : label;
        const selected = multiple ? answers.aspirations?.includes(label) : value === option;
        return <Button key={label} variant="outline" aria-pressed={Boolean(selected)} onClick={() => setAnswers({ ...answers, [q.key]: multiple ? selected ? answers.aspirations?.filter((v) => v !== label) : [...(answers.aspirations ?? []), label] : option })} className={cn("h-auto min-h-14 justify-start whitespace-normal rounded-lg border-2 px-5 py-4 text-left", selected && "border-primary bg-primary-soft")}>{multiple && <span className={cn("size-4 shrink-0 rounded border", selected && "bg-primary")} />}{label === "Managers" ? "I manage a team" : label}</Button>;
      })}
      {multiple && <><label htmlFor="aspiration-text" className="mt-3 text-sm font-medium">Anything else?</label><textarea id="aspiration-text" rows={2} value={answers.aspirationText ?? ""} onChange={(e) => setAnswers({ ...answers, aspirationText: e.target.value })} className="rounded-lg border bg-card px-4 py-3" /></>}
    </div>
    <div className="mt-6 flex justify-between"><Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft />Back</Button><Button disabled={!valid} onClick={next}>{step === 7 ? "Save answers" : "Continue"}</Button></div>
  </div>;
}
