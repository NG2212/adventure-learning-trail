import type { Adventure } from "@/content/adventures";
import type { Completion } from "./types";
export const ADMIN_TODAY = "2026-10-22";
export const ORG_TEAMS: Record<string, string[]> = {
  "Sales & CS": ["Enterprise Sales", "Commercial Sales", "Customer Success", "Support"],
  Marketing: ["Brand", "Growth", "Content"],
  "R&D": ["Platform", "Infrastructure", "Integrations", "Core Experience"],
  Product: ["Work Management", "CRM", "Product Operations"],
  Design: ["Product Design", "Brand Design", "Research"],
  People: ["Talent", "People Partners", "Learning & Development"],
  Finance: ["Accounting", "FP&A", "Procurement"],
  Operations: ["Business Operations", "IT", "Workplace", "Strategy"],
};
export const EMPLOYEE_PROFESSIONS = [
  "Customer Facing",
  "Marketing",
  "Engineering",
  "Product",
  "Design",
  "HR",
  "Finance",
  "Other",
];
export interface AdminPerson {
  id: string;
  name: string;
  email: string;
  profession: string;
  org: string;
  team: string;
  managerId: string;
  isManager: boolean;
  joinedAt: string;
  lastActiveAt: string | null;
  title: string;
  completions: Completion[];
  itinerary: string[];
  estimatedMinutes: number;
}
export interface ActivityEvent {
  id: string;
  personId: string;
  slug: string;
  kind: "opened" | "added" | "completed";
  at: string;
}
export interface AdminSession {
  personId: string;
  slug: string;
  at: string;
  estimatedMinutes: number;
}
export interface AdminFilters {
  org?: string;
  team?: string;
  managerId?: string;
  profession?: string;
  wave?: string;
  days?: number;
  title?: string;
  inactive?: boolean;
  search?: string;
}
export interface AdventureMetric {
  slug: string;
  title: string;
  opens: number;
  completions: number;
  rate: number;
  badgeCount: number;
}
export interface GroupMetric {
  name: string;
  total: number;
  active: number;
  activePercent: number;
  completions: number;
  average: number;
}
export interface AdminAggregates {
  total: number;
  active: number;
  activePercent: number;
  opens: number;
  completions: number;
  average: number;
  completionRate: number;
  adds: number;
  estimatedMinutes: number;
  medianMinutes: number;
  weekly: { name: string; value: number }[];
  adventures: AdventureMetric[];
  categories: { name: string; value: number }[];
  titles: { name: string; value: number }[];
  orgs: GroupMetric[];
  professions: GroupMetric[];
}
export type AdminStatus = "Open" | "Scheduled" | "Draft";
export interface AdminAdventure extends Adventure {
  status: AdminStatus;
}
export interface AdminWave {
  number: number;
  date: string;
}
export interface AdminAnnouncement {
  text: string;
  showFrom: string;
  showUntil: string;
}
export interface AdminReadsWrites {
  listPeople(filters?: AdminFilters): AdminPerson[];
  getPersonActivity(id: string, filters?: AdminFilters): ActivityEvent[];
  getAggregates(filters?: AdminFilters): AdminAggregates;
  listAdminAdventures(): AdminAdventure[];
  saveAdminAdventure(adventure: AdminAdventure): void;
  setAdventureWave(slug: string, wave: number): void;
  setAdventureStatus(slug: string, status: AdminStatus): void;
  getAdminWaves(): AdminWave[];
  saveAdminWave(wave: AdminWave): void;
  getAdminAnnouncement(): AdminAnnouncement;
  saveAdminAnnouncement(announcement: AdminAnnouncement): void;
  listAdmins(): string[];
  addAdmin(personId: string): void;
}
