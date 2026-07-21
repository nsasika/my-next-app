import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';

export const siProductionDiagnostics = {
  header: {
    description:
      'Real-user metrics, structured logs, releases, browser evidence සහ නැවත භාවිතා කළ හැකි incident workflow එකක් මඟින් frontend production ගැටලු සොයාගන්නා ආකාරය.',
    eyebrow: 'මූලික කරුණු / නිරීක්ෂණ හැකියාව',
    tags: [
      'Core Web Vitals',
      'Runtime logs',
      'සැබෑ පරිශීලක මැනීම',
      'Incident response',
    ],
    title: 'Frontend Production ගැටලු විශ්ලේෂණය',
  },
  theory: {
    title: 'User impact, browser evidence සහ server evidence සම්බන්ධ කරන්න',
    summary:
      'Production debugging ආරම්භ වන්නේ බලපෑමට ලක් වූ users, route සහ release එක හඳුනාගෙන real-user performance, browser failures, network requests, runtime logs සහ මෑත වෙනස්කම් එකම timeline එකක සම්බන්ධ කිරීමෙනි.',
    points: [
      'Core Web Vitals තුළ LCP loading speed, INP interaction responsiveness සහ CLS visual stability මනින අතර FCP සහ TTFB උපකාරක metrics වේ.',
      'Metrics route, device, browser, country, release සහ percentile අනුව වෙන් කරන්න; average එකක් දැඩි user impact සඟවා තැබිය හැක.',
      'Structured logs සඳහා event, route, release, duration, status සහ correlation ID වැනි ස්ථාවර fields භාවිතා කරන්න.',
      'Browser errors, failed requests, source maps, traces සහ backend logs එකම failing journey එක සොයාගත හැකි context එකක් බෙදාගත යුතුය.',
      'Impact සහ timeline හඳුනාගෙන, reproduce කර, last-known-good release එක සමඟ compare කර, rollback හෝ feature flag එකකින් mitigate කර පසුව fix කරන්න.',
      'Passwords, tokens, personal data, request bodies හෝ arbitrary error payloads කිසිවිටෙක log නොකරන්න.',
    ],
    code: `පරිශීලක වාර්තාව
  -> route + browser + release + වේලාව
  -> Web Vitals / browser error / failed request
  -> correlation ID
  -> Runtime Log හෝ backend trace
  -> mitigation, fix, rollout, verification`,
    whatToTry: [
      'Vercel Speed Insights තුළ release එකකට පෙර සහ පසු route අනුව LCP සහ INP compare කරන්න.',
      'Runtime Logs තුළ message=client_telemetry filter කර eventType, path, name සහ release අනුව group කරන්න.',
    ],
  },
  flow: {
    title: 'Production incident ක්‍රියාවලිය',
    steps: [
      {
        label: 'බලපෑම තක්සේරු කරන්න',
        description:
          'Affected routes, users, devices, start time, severity සහ latest deployment හඳුනාගන්න.',
      },
      {
        label: 'Signals සම්බන්ධ කරන්න',
        description:
          'Web Vitals, browser errors, network failures, runtime logs, traces සහ release changes compare කරන්න.',
      },
      {
        label: 'ආරක්ෂිතව mitigate කරන්න',
        description:
          'විශාල fix එකකට පෙර rollback, feature flag disable කිරීම හෝ failing remote isolate කිරීම භාවිතා කරන්න.',
      },
      {
        label: 'Fix කර තහවුරු කරන්න',
        description:
          'Regression test එකක් එක් කර gradual deployment එකකින් එම metrics නැවත නිරීක්ෂණය කරන්න.',
      },
    ],
  },
  codeExamples: [
    {
      title: 'ආරක්ෂිත browser telemetry',
      filePath: 'src/components/observability/ClientObservability.tsx',
      language: 'tsx',
      code: `useReportWebVitals((metric) => {
  sendClientEvent({
    eventType: 'web-vital',
    name: metric.name,
    path: window.location.pathname,
    rating: metric.rating,
    value: metric.value,
  });
});`,
    },
    {
      title: 'Search කළ හැකි structured log',
      filePath: 'src/app/api/observability/client-events/route.ts',
      language: 'ts',
      code: `console.info(JSON.stringify({
  message: 'client_telemetry',
  name: 'INP',
  path: '/interviews',
  release: process.env.VERCEL_GIT_COMMIT_SHA,
}));`,
    },
  ],
  references: [
    {
      href: 'https://web.dev/articles/vitals',
      label: 'Web Vitals මාර්ගෝපදේශය',
    },
    {
      href: 'https://vercel.com/docs/speed-insights',
      label: 'Vercel Speed Insights මාර්ගෝපදේශය',
    },
    {
      href: 'https://vercel.com/docs/logs',
      label: 'Vercel Runtime Logs මාර්ගෝපදේශය',
    },
  ],
} as const satisfies ConceptLessonContent;
