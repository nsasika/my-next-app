import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsDeploymentMonitoringPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.deploymentMonitoring,
        si: nextjsLessonsByLocale.si.deploymentMonitoring,
        ta: nextjsLessonsByLocale.ta.deploymentMonitoring,
      }}
    />
  );
}
