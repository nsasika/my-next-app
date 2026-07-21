import {
  dbsReactLeadQuestions,
  mfeTargetQuestions,
  type InterviewExperience,
} from '../interviewPractice';

export const enInterviewExperiences = {
  'mfe-top-10': {
    company: 'Target interview questions',
    description:
      'Ten common micro frontend architecture questions with concise, lead-level answers covering design, delivery, security, performance, resilience, and operations.',
    items: mfeTargetQuestions,
    slug: 'mfe-top-10',
    tags: ['Micro frontend', 'Architecture', 'React Lead', 'Module Federation'],
    title: 'Top 10 Micro Frontend Interview Questions',
  },
  'dbs-ncs-react-lead': {
    company: 'DBS via NCS',
    description:
      'React Lead interview experience covering large-scale micro frontends, performance, routing, platform delivery, JavaScript internals, TypeScript, and native WebView integration.',
    items: dbsReactLeadQuestions,
    slug: 'dbs-ncs-react-lead',
    tags: ['DBS', 'NCS', 'React Lead', 'Micro frontend', 'Architecture'],
    title: 'DBS via NCS React Lead Interview Experience',
  },
} as const satisfies Readonly<Record<string, InterviewExperience>>;
