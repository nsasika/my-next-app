import { redirect } from 'next/navigation';
import { APP_PATHS } from '@/config/routes';

export default function EngineeringBlueprintRedirectPage() {
  redirect(APP_PATHS.buildLab);
}
