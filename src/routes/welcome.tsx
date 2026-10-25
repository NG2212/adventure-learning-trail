import { useEffect } from "react";
import { createFileRoute, useNavigate, useHydrated } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useStoreState } from "@/store";
import { WelcomeChoices } from "@/components/WelcomeChoices";
import { BadgeGrid } from "@/components/BadgeGrid";

export const Route = createFileRoute("/welcome")({
  head: () => ({
    meta: [
      { title: "Welcome · AI Adventure" },
      { name: "description", content: "Start your AI Adventure: get a suggested itinerary or build your own." },
      { property: "og:title", content: 'Welcome · AI Adventure' },
      { property: "og:description", content: 'Start your AI Adventure: get a suggested itinerary or build your own.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Welcome,
});

function Welcome() {
  const { person } = useStoreState();
  const navigate = useNavigate();
  const hydrated = useHydrated();
  useEffect(() => { if (hydrated && !person.onboardingAnswers) void navigate({ to: "/onboarding", replace: true }); }, [hydrated, person.onboardingAnswers, navigate]);
  if (!hydrated || !person.onboardingAnswers) return null;
  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="text-3xl sm:text-4xl">Welcome, {person.firstName}</h1>
      <div className="mt-8 flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-3xl bg-stone">
        <span className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Play className="ml-1 size-8" fill="currentColor" />
        </span>
        <p className="font-semibold">A welcome from L&amp;D</p>
      </div>
      <p className="mt-8 max-w-3xl text-lg">
        AI Adventure is a set of short, hands-on destinations. Each one ends with something real you built and keep:
        a prompt, a document, a working setup. Go at your own pace, in any order, and choose the path that fits your work.
      </p>
      <h2 className="mt-12 mb-5 text-xl">How would you like to start?</h2>
      <WelcomeChoices />
      <BadgeGrid />
    </div>
  );
}
