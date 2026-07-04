import { redirect } from 'next/navigation';
import { APP_PATHS } from '@/config/routes';

export default function JavaChapterTwoRedirectPage() {
  redirect(APP_PATHS.javaChapter2);
}
