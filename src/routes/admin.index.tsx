import { createFileRoute, Navigate } from "@tanstack/react-router";
import { adminHead } from "@/components/admin/adminHead";
export const Route = createFileRoute("/admin/")({
  head: () => adminHead("Programme admin", "AI Adventure programme administration."),
  component: () => <Navigate to="/admin/overview" replace />,
});
