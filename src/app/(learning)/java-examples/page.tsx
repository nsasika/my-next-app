import { redirect } from 'next/navigation';
import { APP_PATHS } from '@/config/routes';

export default function JavaExamplesRedirectPage() {
  redirect(APP_PATHS.javaBook);
}
