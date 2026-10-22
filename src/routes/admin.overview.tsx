import { createFileRoute } from '@tanstack/react-router';
import { AdminOverview } from '@/components/admin/AdminOverview';
import { adminHead } from '@/components/admin/adminHead';
export const Route = createFileRoute('/admin/overview')({head:()=>adminHead('Overview','Employee engagement and completion analytics for the AI Adventure programme.'),component:AdminOverview});
