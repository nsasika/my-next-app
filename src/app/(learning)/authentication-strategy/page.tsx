import { legacyAuthStrategyRedirectPath } from '@/content/foundations';
import { redirectToLocalizedPath } from '@/i18n/redirect';

export default async function AuthenticationStrategyPage() {
  return redirectToLocalizedPath(legacyAuthStrategyRedirectPath);
}
