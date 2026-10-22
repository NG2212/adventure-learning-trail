import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, FileText, FolderKanban } from "lucide-react";
import { PageHeading } from "@/components/AppShell";
import { Chip } from "@/components/LabelChips";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin · AI Adventure" },
      { name: "description", content: "Admin tools for the AI Adventure programme (coming soon)." },
      { property: "og:title", content: "Admin · AI Adventure" },
      { property: "og:description", content: "Admin tools, coming soon." },
    ],
  }),
  component: Admin,
});

const PLANNED = [
  { icon: FolderKanban, title: "Adventure directory", text: "Every adventure with its labels and wave, in one list." },
  { icon: FileText, title: "Add or edit an adventure", text: "Paste Markdown and fill a labels form to publish a destination." },
  { icon: BarChart3, title: "Analytics and CSV export", text: "Programme-level opens, itinerary adds and completions. No per-person scores or rankings." },
];

function Admin() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <PageHeading title="Admin" subtitle="This area is coming soon. Here is what it will hold.">
        <Chip tone="neutral">Coming soon</Chip>
      </PageHeading>
      <div className="grid gap-4 sm:grid-cols-3">
        {PLANNED.map((p) => (
          <div key={p.title} className="rounded-3xl border bg-card p-6 shadow-soft">
            <p.icon className="size-7 text-primary" />
            <h2 className="mt-4 text-lg">{p.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
