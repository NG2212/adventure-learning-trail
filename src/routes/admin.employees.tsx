import { createFileRoute } from '@tanstack/react-router';
import { AdminEmployees } from '@/components/admin/AdminEmployees';
import { adminHead } from '@/components/admin/adminHead';
export const Route = createFileRoute('/admin/employees')({head:()=>adminHead('Employees','L&D employee activity, itineraries and earned adventure badges.'),component:AdminEmployees});
