import { createFileRoute } from '@tanstack/react-router';
import { AdminAdventures } from '@/components/admin/AdminAdventures';
import { adminHead } from '@/components/admin/adminHead';
export const Route = createFileRoute('/admin/adventures')({head:()=>adminHead('Adventure directory','Manage adventure content, labels, waves and draft destinations.'),component:AdminAdventures});
