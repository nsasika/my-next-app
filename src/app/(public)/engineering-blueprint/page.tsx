import { APP_PATHS } from '@/config/routes';
import { redirectToLocalizedPath } from '@/i18n/redirect';

export default async function EngineeringBlueprintRedirectPage() {
  return redirectToLocalizedPath(APP_PATHS.buildLab);
}
