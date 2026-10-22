import { createFileRoute } from "@tanstack/react-router";
import { AdminSettings } from "@/components/admin/AdminOperations";
import { adminHead } from "@/components/admin/adminHead";
export const Route = createFileRoute("/admin/settings")({
  head: () => adminHead("Settings", "Manage L&D admins and view adventure title thresholds."),
  component: AdminSettings,
});
