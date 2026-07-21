import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsAuthenticationPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].authentication,
        si: nextjsLessonsByLocale['si-LK'].authentication,
        ta: nextjsLessonsByLocale['ta-LK'].authentication,
      }}
    />
  );
}
