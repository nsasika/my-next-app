import {
  dbsReactLeadQuestions,
  mfeTargetQuestions,
  bankOfSingaporeQuestions,
  virtusaSingaporeQuestions,
  type InterviewExperience,
} from '../interviewPractice';

export const enInterviewExperiences = {
  'bank-of-singapore': {
    company: 'Bank of Singapore',
    description:
      'Real React and micro frontend interview questions covering architecture, hooks, browser APIs, Git, JavaScript, and performance.',
    items: bankOfSingaporeQuestions,
    slug: 'bank-of-singapore',
    tags: ['React', 'Micro frontend', 'JavaScript', 'Banking'],
    title: 'Bank of Singapore Interview Experience',
  },
  'virtusa-singapore': {
    company: 'Virtusa Singapore',
    description:
      'A real full-stack interview covering frontend and backend architecture, transactions, databases, React migration, and testing.',
    items: virtusaSingaporeQuestions,
    slug: 'virtusa-singapore',
    tags: ['Full stack', 'React', 'Java', 'Databases'],
    title: 'Virtusa Singapore Interview Experience',
  },
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
