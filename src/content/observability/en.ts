import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';

export const enProductionDiagnostics = {
  header: {
    description:
      'Learn how real-user metrics, structured logs, releases, browser evidence, and a repeatable incident workflow help diagnose frontend production issues.',
    eyebrow: 'Foundations / Observability',
    tags: ['Core Web Vitals', 'Runtime logs', 'RUM', 'Incident response'],
    title: 'Frontend Production Diagnostics',
  },
  theory: {
    title: 'Correlate user impact, browser evidence, and server evidence',
    summary:
      'Production debugging starts by defining the affected users and release, then correlating real-user performance, browser failures, network requests, runtime logs, and recent changes. One signal rarely explains the full issue.',
    points: [
      'Core Web Vitals measure user experience: LCP loading, INP responsiveness, and CLS visual stability. Useful supporting metrics include FCP and TTFB.',
      'Segment metrics by route, device, browser, geography, release, and percentile; averages can hide severely affected users.',
      'Structured logs use stable fields such as event, route, release, duration, status, and correlation ID so failures can be searched and grouped.',
      'Browser errors, failed requests, source maps, traces, and backend logs should share enough context to follow one failing journey.',
      'Start with impact and timeline, reproduce when possible, compare the last known-good release, mitigate safely, then fix and verify with the same signals.',
      'Never log passwords, tokens, personal data, request bodies, or arbitrary error payloads.',
    ],
    code: `User report
  -> route + browser + release + timestamp
  -> Web Vitals / browser error / failed request
  -> correlation ID
  -> Vercel Runtime Log or backend trace
  -> mitigation, fix, rollout, verification`,
    whatToTry: [
      'Open Vercel Speed Insights and compare LCP and INP by route before and after a release.',
      'Filter Runtime Logs for message=client_telemetry, then group by eventType, path, name, and release.',
    ],
  },
  flow: {
    title: 'Production incident workflow',
    steps: [
      {
        label: 'Triage impact',
        description:
          'Identify affected routes, users, devices, start time, severity, and the latest deployment.',
      },
      {
        label: 'Correlate signals',
        description:
          'Compare Web Vitals, browser errors, network failures, runtime logs, traces, and release changes.',
      },
      {
        label: 'Mitigate safely',
        description:
          'Rollback, disable a feature flag, or isolate a failing remote before attempting a large fix.',
      },
      {
        label: 'Fix and verify',
        description:
          'Add a regression test, deploy gradually, watch the same metrics, and record the root cause and prevention.',
      },
    ],
  },
  codeExamples: [
    {
      title: 'Sanitized browser telemetry',
      filePath: 'src/components/observability/ClientObservability.tsx',
      language: 'tsx',
      code: `useReportWebVitals((metric) => {
  sendClientEvent({
    eventType: 'web-vital',
    id: metric.id,
    name: metric.name,
    path: window.location.pathname,
    rating: metric.rating,
    value: metric.value,
  });
});`,
    },
    {
      title: 'Searchable structured runtime log',
      filePath: 'src/app/api/observability/client-events/route.ts',
      language: 'ts',
      code: `console.info(JSON.stringify({
  level: 'info',
  message: 'client_telemetry',
  eventType: 'web-vital',
  name: 'INP',
  path: '/interviews',
  release: process.env.VERCEL_GIT_COMMIT_SHA,
}));`,
    },
  ],
  references: [
    { href: 'https://web.dev/articles/vitals', label: 'web.dev Web Vitals' },
    {
      href: 'https://vercel.com/docs/speed-insights',
      label: 'Vercel Speed Insights',
    },
    { href: 'https://vercel.com/docs/logs', label: 'Vercel Runtime Logs' },
  ],
} as const satisfies ConceptLessonContent;
