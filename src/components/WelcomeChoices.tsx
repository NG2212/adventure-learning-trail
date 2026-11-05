import { Link } from "@tanstack/react-router";
import { Compass, Map, Sparkles } from "lucide-react";

/** The three ways in, shared by Welcome and the empty journey. */
export function WelcomeChoices() {
  const cls = "ui-card ui-card-hover group flex flex-col gap-3 p-6 pb-8";
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Link to="/onboarding" className={cls}>
        <span className="icon-tile"><Sparkles className="size-6" /></span>
        <span className="text-lg font-semibold text-navy">Suggest a journey for me</span>
        <span className="border-b pb-3 text-sm text-muted-foreground">Answer eight quick questions and get a journey of 3-4 destinations picked for you.</span>
      </Link>
      <Link to="/adventures" search={{ build: true }} className={cls}>
        <span className="icon-tile"><Map className="size-6" /></span>
        <span className="text-lg font-semibold text-navy">Build my own journey</span>
        <span className="border-b pb-3 text-sm text-muted-foreground">Browse everything and add the destinations you like to your journey.</span>
      </Link>
      <Link to="/adventures" search={{ build: false }} className={cls}>
        <span className="icon-tile"><Compass className="size-6" /></span>
        <span className="text-lg font-semibold text-navy">See all destinations</span>
        <span className="border-b pb-3 text-sm text-muted-foreground">Look around first. No commitment.</span>
      </Link>
    </div>
  );
}
