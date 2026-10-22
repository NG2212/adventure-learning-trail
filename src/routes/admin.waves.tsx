import { createFileRoute } from '@tanstack/react-router';
import { AdminWaves } from '@/components/admin/AdminOperations';
import { adminHead } from '@/components/admin/adminHead';
export const Route = createFileRoute('/admin/waves')({head:()=>adminHead('Waves and announcements','Plan AI Adventure releases and programme announcements.'),component:AdminWaves});
