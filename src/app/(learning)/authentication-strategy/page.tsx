import { redirect } from 'next/navigation';
import { legacyAuthStrategyRedirectPath } from '@/content/foundations';

export default function AuthenticationStrategyPage() {
  redirect(legacyAuthStrategyRedirectPath);
}
