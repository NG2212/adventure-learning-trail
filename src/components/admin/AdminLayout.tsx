import { useState } from "react";
import { ClientOnly, Link, Outlet } from "@tanstack/react-router";
import { BarChart3, Users, Library, CalendarDays, Settings, ShieldCheck } from "lucide-react";
import { useStoreState } from "@/store";
import { PageHeading } from "@/components/AppShell";
import { Switch } from "@/components/ui/switch";
import { Toaster } from "@/components/ui/sonner";
import { AdminViewContext } from "./AdminCommon";
const tabs = [
  { to: "/admin/overview", label: "Overview", icon: BarChart3 },
  { to: "/admin/employees", label: "Employees", icon: Users },
  { to: "/admin/adventures", label: "Adventures", icon: Library },
  { to: "/admin/waves", label: "Waves & announcements", icon: CalendarDays },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;
export function AdminLayout() {
  const { person } = useStoreState();
  const [managerView, setManagerView] = useState(false);
  if (!person.isAdmin)
    return (
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="text-3xl">Admin access only</h1>
      </div>
    );
  return (
    <AdminViewContext.Provider value={{ managerView, setManagerView }}>
      <div className="mx-auto max-w-7xl px-5 py-10">
        <PageHeading eyebrow="AI Adventure · Admin" title="Programme admin" subtitle="AI Adventure · monday.com">
          <label className="flex items-center gap-3 text-sm">
            <ShieldCheck className="size-4 text-primary" />
            {managerView ? "Manager view" : "L&D view"}
            <Switch
              aria-label="Manager view"
              checked={managerView}
              onCheckedChange={setManagerView}
            />
          </label>
        </PageHeading>
        <nav aria-label="Admin tabs" className="mb-6 flex gap-2 overflow-x-auto border-b pb-3">
          {tabs
            .filter((t) => !managerView || t.to !== "/admin/employees")
            .map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                activeProps={{ className: "bg-primary-soft text-primary font-semibold" }}
              >
                <t.icon className="size-4" />
                {t.label}
              </Link>
            ))}
        </nav>
        <ClientOnly fallback={<div className="py-8 text-sm text-muted-foreground" role="status">Loading programme data…</div>}><Outlet /></ClientOnly>
      </div>
      <Toaster />
    </AdminViewContext.Provider>
  );
}
