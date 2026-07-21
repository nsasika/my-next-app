import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';

export const taProductionDiagnostics = {
  header: {
    description:
      'Real-user metrics, structured logs, releases, browser evidence மற்றும் மீண்டும் பயன்படுத்தக்கூடிய incident workflow மூலம் frontend production சிக்கல்களை கண்டறியும் முறை.',
    eyebrow: 'அடிப்படைகள் / கண்காணிப்புத் திறன்',
    tags: [
      'Core Web Vitals',
      'Runtime logs',
      'உண்மைப் பயனர் அளவீடு',
      'Incident response',
    ],
    title: 'Frontend Production சிக்கல் பகுப்பாய்வு',
  },
  theory: {
    title: 'User impact, browser evidence மற்றும் server evidence-ஐ இணைக்கவும்',
    summary:
      'Production debugging பாதிக்கப்பட்ட users, route மற்றும் release-ஐ வரையறுத்து real-user performance, browser failures, network requests, runtime logs மற்றும் சமீபத்திய மாற்றங்களை ஒரே timeline-ல் இணைப்பதில் தொடங்குகிறது.',
    points: [
      'Core Web Vitals-ல் LCP loading speed, INP interaction responsiveness மற்றும் CLS visual stability-ஐ அளவிடுகின்றன; FCP மற்றும் TTFB துணை metrics.',
      'Metrics-ஐ route, device, browser, country, release மற்றும் percentile அடிப்படையில் பிரிக்கவும்; average கடுமையான user impact-ஐ மறைக்கலாம்.',
      'Structured logs-க்கு event, route, release, duration, status மற்றும் correlation ID போன்ற நிலையான fields பயன்படுத்தவும்.',
      'Browser errors, failed requests, source maps, traces மற்றும் backend logs ஒரே failing journey-ஐப் பின்தொடரக்கூடிய context பகிர வேண்டும்.',
      'Impact மற்றும் timeline கண்டறிந்து, reproduce செய்து, last-known-good release உடன் compare செய்து, rollback அல்லது feature flag மூலம் mitigate செய்து பின்னர் fix செய்யவும்.',
      'Passwords, tokens, personal data, request bodies அல்லது arbitrary error payloads-ஐ ஒருபோதும் log செய்யாதீர்கள்.',
    ],
    code: `பயனர் அறிக்கை
  -> route + browser + release + நேரம்
  -> Web Vitals / browser error / failed request
  -> correlation ID
  -> Runtime Log அல்லது backend trace
  -> mitigation, fix, rollout, verification`,
    whatToTry: [
      'Vercel Speed Insights-ல் release முன் மற்றும் பின் route அடிப்படையில் LCP, INP-ஐ compare செய்யவும்.',
      'Runtime Logs-ல் message=client_telemetry filter செய்து eventType, path, name மற்றும் release அடிப்படையில் group செய்யவும்.',
    ],
  },
  flow: {
    title: 'Production incident நடைமுறை',
    steps: [
      {
        label: 'பாதிப்பை மதிப்பிடுங்கள்',
        description:
          'Affected routes, users, devices, start time, severity மற்றும் latest deployment கண்டறியவும்.',
      },
      {
        label: 'Signals-ஐ இணைக்கவும்',
        description:
          'Web Vitals, browser errors, network failures, runtime logs, traces மற்றும் release changes-ஐ compare செய்யவும்.',
      },
      {
        label: 'பாதுகாப்பாக mitigate செய்யவும்',
        description:
          'பெரிய fix-க்கு முன் rollback, feature flag disable அல்லது failing remote isolation பயன்படுத்தவும்.',
      },
      {
        label: 'Fix செய்து உறுதிப்படுத்தவும்',
        description:
          'Regression test சேர்த்து gradual deployment மூலம் அதே metrics-ஐ மீண்டும் கண்காணிக்கவும்.',
      },
    ],
  },
  codeExamples: [
    {
      title: 'பாதுகாப்பான browser telemetry',
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
      title: 'தேடக்கூடிய structured log',
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
    { href: 'https://web.dev/articles/vitals', label: 'Web Vitals வழிகாட்டி' },
    {
      href: 'https://vercel.com/docs/speed-insights',
      label: 'Vercel Speed Insights வழிகாட்டி',
    },
    {
      href: 'https://vercel.com/docs/logs',
      label: 'Vercel Runtime Logs வழிகாட்டி',
    },
  ],
} as const satisfies ConceptLessonContent;
