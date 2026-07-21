import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsAuthenticationPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.authentication,
        si: nextjsLessonsByLocale.si.authentication,
        ta: nextjsLessonsByLocale.ta.authentication,
      }}
    />
  );
}
