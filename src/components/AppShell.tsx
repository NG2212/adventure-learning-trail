import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { store, useStoreState } from "@/store";
import { titleFor } from "@/lib/titles";
import { Footprint, FootprintShape } from "./Footprints";
import { MondayLogo } from "./MondayLogo";
import { DiscFilters } from "./AdventureIcon";
import { ADMIN_TODAY } from '@/store/adminTypes';

const NAV = [
  { to: "/welcome", label: "Home" },
  { to: "/my-journey", label: "My journey" },
  { to: "/adventures", label: "All adventures" },
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
  const headerRef = useRef<HTMLDivElement>(null);
  const state = useStoreState();
  const count = state.completions.length;
  const title = titleFor(count);
  const announcement = store.getAdminAnnouncement();
  const announcementVisible = ADMIN_TODAY >= announcement.showFrom && ADMIN_TODAY <= announcement.showUntil;
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const updateHeight = () => {
      document.documentElement.style.setProperty("--app-header-height", `${header.getBoundingClientRect().height}px`);
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--app-header-height");
    };
  }, []);
  return (
    <div ref={headerRef} data-app-header className="sticky top-0 z-40 shrink-0 bg-background">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4">
          <Link to="/welcome" className="flex items-center gap-3 text-lg"><MondayLogo /><span aria-hidden className="h-5 w-px bg-border" /><Wordmark /></Link>
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
            <Link to="/profile" className="text-primary">Hi {state.person.firstName}</Link>
            <Link to="/my-journey" className="rounded-full bg-primary px-3.5 py-1.5 font-medium text-primary-foreground">
              {title ?? "Ready to set off"} · {count} completed
            </Link>
          </div>
        </div>
      </header>
      {!state.announcementDismissed && announcementVisible && (
        <div className="bg-primary-soft">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-2.5 text-sm">
            <span className="size-2 rounded-full bg-lime ring-2 ring-primary" />
            <span>{announcement.text}</span>
            <Link to="/adventures" className="font-semibold text-primary underline-offset-4 hover:underline">See them</Link>
            <button aria-label="Dismiss announcement" onClick={() => store.dismissAnnouncement()} className="ml-auto rounded-full p-1 hover:bg-background">
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}
    </div>
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
    <div className={isSignIn ? "flex min-h-screen flex-col" : "relative isolate flex min-h-screen flex-col bg-surface"}>
      <DiscFilters />
      {!isSignIn && <FootprintBackdrop />}
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

/** Sparse, faint footprints in the accent colours, fixed behind signed-in pages. */
const PRINTS = [
  { x: 6, y: 18, a: 20, c: "var(--color-primary)" }, { x: 9, y: 24, a: 30, c: "var(--color-primary)", f: true },
  { x: 92, y: 30, a: -25, c: "var(--color-coral)" }, { x: 95, y: 36, a: -15, c: "var(--color-coral)", f: true },
  { x: 4, y: 70, a: 10, c: "var(--color-lime)" }, { x: 7, y: 76, a: 25, c: "var(--color-lime)", f: true },
  { x: 90, y: 80, a: -35, c: "var(--color-primary)" }, { x: 94, y: 86, a: -20, c: "var(--color-primary)", f: true },
  { x: 50, y: 96, a: 80, c: "var(--color-coral)" },
];
function FootprintBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08]">
      {PRINTS.map((p, i) => (
        <svg key={i} viewBox="-10 -16 20 33" className="absolute h-9 w-6" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
          <FootprintShape angle={p.a} fill={p.c} flip={p.f} />
        </svg>
      ))}
    </div>
  );
}
