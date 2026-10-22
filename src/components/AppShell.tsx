import { Link, useLocation } from "@tanstack/react-router";
import { X } from "lucide-react";
import { store, useStoreState } from "@/store";
import { titleFor } from "@/lib/titles";
import { Footprint } from "./Footprints";

const NAV = [
  { to: "/itinerary", label: "My itinerary" },
  { to: "/adventures", label: "All adventures" },
  { to: "/progress", label: "Progress" },
  { to: "/admin", label: "Admin" },
] as const;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={inverted ? "text-primary-foreground" : "text-primary"}>
      <Footprint className="mr-1.5 h-5 w-3.5 -rotate-12 align-[-2px]" />
      <span className="font-bold tracking-tight">AI Adventure</span>
    </span>
  );
}

export function AppHeader() {
  const state = useStoreState();
  const count = state.completions.length;
  const title = titleFor(count);
  return (
    <>
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4">
          <Link to="/welcome" className="text-lg"><Wordmark /></Link>
          <nav className="order-3 flex w-full gap-1 overflow-x-auto md:order-none md:w-auto">
            {NAV.filter((n) => n.to !== "/admin" || state.person.isAdmin).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to !== "/adventures" }}
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                activeProps={{ className: "bg-primary-soft !text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3 text-sm">
            <span className="hidden sm:inline">Hi {state.person.firstName}</span>
            <Link to="/progress" className="rounded-full bg-primary px-3.5 py-1.5 font-medium text-primary-foreground">
              {title ?? "Ready to set off"} · {count} completed
            </Link>
          </div>
        </div>
      </header>
      {!state.announcementDismissed && (
        <div className="bg-primary-soft">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-2.5 text-sm">
            <span className="size-2 rounded-full bg-lime ring-2 ring-primary" />
            <span>New on Monday: two new adventures opened.</span>
            <Link to="/adventures" className="font-semibold text-primary underline-offset-4 hover:underline">See them</Link>
            <button aria-label="Dismiss announcement" onClick={() => store.dismissAnnouncement()} className="ml-auto rounded-full p-1 hover:bg-background">
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function AppFooter() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted-foreground">
        AI Adventure · Built for monday.com by Nufar Gaspar
      </div>
    </footer>
  );
}

/** Wraps every page: header only when signed in (not on "/"), footer everywhere. */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isSignIn = pathname === "/";
  return (
    <div className="flex min-h-screen flex-col">
      {!isSignIn && <AppHeader />}
      <main className="flex-1">{children}</main>
      {isSignIn ? (
        <footer className="bg-primary px-5 py-4 text-center text-sm text-primary-foreground/80">AI Adventure · Built for monday.com by Nufar Gaspar</footer>
      ) : (
        <AppFooter />
      )}
    </div>
  );
}

export function PageHeading({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
