import { FootprintShape, trail } from "./Footprints";

/** Image-like share card preview: name, title, count, footprints. */
export function ShareCard({ name, title, count }: { name: string; title: string | null; count: number }) {
  const colours = ["var(--color-lime)", "var(--color-pink)", "var(--color-sunny)", "var(--color-background)"];
  return (
    <div className="relative aspect-[1.91/1] w-full overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground">
      <svg viewBox="0 0 400 210" className="absolute inset-0 size-full" preserveAspectRatio="xMaxYMid slice" aria-hidden>
        {trail(300, 230, 25, 7, 34, -4).map((p, i) => (
          <FootprintShape key={i} {...p} scale={0.8} fill={colours[i % colours.length]} />
        ))}
      </svg>
      <div className="relative flex h-full flex-col justify-between">
        <p className="text-sm font-semibold opacity-90">AI Adventure</p>
        <div>
          <p className="text-2xl font-bold sm:text-3xl">{name}</p>
          <p className="mt-1 text-lg">{title ?? "Ready to set off"}</p>
          <p className="mt-3 inline-block rounded-full bg-background px-3 py-1 text-sm font-semibold text-foreground">
            {count} adventures completed
          </p>
        </div>
      </div>
    </div>
  );
}
