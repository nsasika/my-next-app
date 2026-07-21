import {
  dbsReactLeadQuestions,
  type InterviewExperience,
} from '../interviewPractice';

export const enInterviewExperiences = {
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
