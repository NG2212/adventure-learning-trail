import { Link } from "@tanstack/react-router";
import { Compass, Map, Sparkles } from "lucide-react";

/** The three ways in, shared by Welcome and the empty itinerary. */
export function WelcomeChoices() {
  const cls = "group flex flex-col gap-3 rounded-3xl border bg-card p-6 shadow-soft transition hover:border-primary";
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Link to="/onboarding" className={cls}>
        <Sparkles className="size-7 text-primary" />
        <span className="text-lg font-bold">Suggest an itinerary for me</span>
        <span className="text-sm text-muted-foreground">Answer eight quick questions and get 3-4 destinations picked for you.</span>
      </Link>
      <Link to="/adventures" search={{ build: true }} className={cls}>
        <Map className="size-7 text-primary" />
        <span className="text-lg font-bold">Build my own itinerary</span>
        <span className="text-sm text-muted-foreground">Browse everything and add the destinations you like.</span>
      </Link>
      <Link to="/adventures" search={{ build: false }} className={cls}>
        <Compass className="size-7 text-primary" />
        <span className="text-lg font-bold">See all destinations</span>
        <span className="text-sm text-muted-foreground">Look around first. No commitment.</span>
      </Link>
    </div>
  );
}
