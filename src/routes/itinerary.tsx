import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/itinerary")({ beforeLoad: () => { throw redirect({ to: "/my-journey", replace: true }); } });
