import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { store } from "@/store";
import { FootprintShape, trail } from "@/components/Footprints";
import { Wordmark } from "@/components/AppShell";
import { MondayLogo } from "@/components/MondayLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Adventure · Sign in" },
      { name: "description", content: "Pick a path. Build something real. Keep it." },
      { property: "og:title", content: "AI Adventure" },
      { property: "og:description", content: "Pick a path. Build something real. Keep it." },
    ],
  }),
  component: SignIn,
});

// Footprint trails branching in several directions, as in the mood reference.
const TRAILS = [
  { from: [560, 40], heading: 120, count: 5, bend: 8, fill: "var(--color-lime)" },
  { from: [880, 160], heading: 145, count: 6, bend: 0, fill: "var(--color-pink)" },
  { from: [1100, 560], heading: 25, count: 9, bend: -3, fill: "var(--color-background)" },
  { from: [1240, 500], heading: 50, count: 6, bend: -2, fill: "var(--color-sunny)" },
  { from: [1200, 640], heading: 125, count: 6, bend: 0, fill: "var(--color-success)" },
  { from: [640, 1000], heading: 30, count: 7, bend: 3, fill: "var(--color-coral)" },
  { from: [320, 1000], heading: 60, count: 5, bend: 4, fill: "var(--color-info)" },
  { from: [1080, 780], heading: 150, count: 5, bend: 0, fill: "var(--color-background)" },
];

function SignIn() {
  const navigate = useNavigate();
  return (
    <section className="relative flex min-h-[calc(100vh-52px)] items-center overflow-hidden bg-primary text-primary-foreground">
      <svg viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden>
        {TRAILS.flatMap((t, ti) =>
          trail(t.from[0] ?? 0, t.from[1] ?? 0, t.heading, t.count, 72, t.bend).map((p, i) => (
            <FootprintShape key={`${ti}-${i}`} {...p} scale={1.9} fill={t.fill} />
          )),
        )}
      </svg>
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <MondayLogo inverted className="h-7" />
        <p className="mt-4 text-lg"><Wordmark inverted /></p>
        <h1 className="mt-6 text-6xl font-bold leading-none sm:text-8xl">AI Adventure</h1>
        <p className="mt-6 max-w-xl text-xl font-semibold sm:text-2xl">Pick a path. Build something real. Keep it.</p>
        <button
          onClick={() => {
            store.signIn();
            navigate({ to: "/welcome" });
          }}
          className="mt-10 rounded-3xl bg-background px-8 py-5 text-lg font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5"
        >
          Continue with your monday account
        </button>
      </div>
    </section>
  );
}
