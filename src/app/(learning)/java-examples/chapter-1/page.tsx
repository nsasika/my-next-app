import { redirect } from 'next/navigation';
import { APP_PATHS } from '@/config/routes';

export default function JavaChapterOneRedirectPage() {
  redirect(APP_PATHS.javaChapter1);
}
