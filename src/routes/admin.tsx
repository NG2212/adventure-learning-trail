import { createFileRoute } from '@tanstack/react-router';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { adminHead } from '@/components/admin/adminHead';
export const Route = createFileRoute('/admin')({head:()=>adminHead('Programme admin','L&D programme analytics and content administration.'),component:AdminLayout});