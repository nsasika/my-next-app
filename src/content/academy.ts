export const academyHeroContent = {
  eyebrow: 'Practical interview preparation',
  heading:
    "Nalin's Academy turns engineering knowledge into interview confidence.",
  body: 'A focused learning platform for job seekers who want clear React, Java, frontend architecture, and full-stack explanations they can study, run, and confidently discuss in interviews.',
} as const;

export const academyPurposeContent = {
  title: 'Learn from practical engineering experience',
  body: 'The academy translates enterprise delivery lessons into focused theory, runnable examples, interview follow-ups, and architecture discussions without mixing the learning experience with the personal portfolio.',
} as const;

export const academyImpactStats = [
  { label: 'Learning tracks', value: '4+' },
  { label: 'Practical demos', value: '30+' },
  { label: 'Coverage gate', value: '80%' },
] as const;

export const academyPromises = [
  {
    icon: 'stories' as const,
    title: 'Understand the concept',
    body: 'Start with concise theory and the trade-offs interviewers expect you to explain.',
  },
  {
    icon: 'build' as const,
    title: 'Connect it to code',
    body: 'Use practical React, Java, and Next.js examples instead of memorizing isolated definitions.',
  },
  {
    icon: 'practice' as const,
    title: 'Practice the answer',
    body: 'Turn technical understanding into clear, structured interview communication.',
  },
] as const;

export const academyPanels = [
  {
    body: 'Hooks, rendering, state management, performance, React 18 and React 19 explained through focused examples.',
    icon: 'code' as const,
    id: 'react-track',
    items: ['Hooks', 'Performance', 'State management'],
    label: 'React',
    tone: 'typescript' as const,
    title: 'Modern React engineering',
  },
  {
    body: 'Core Java concepts, object-oriented design, interfaces, records, and interview-ready exercises.',
    icon: 'architecture' as const,
    id: 'java-track',
    items: ['Core Java', 'OOP', 'Practice exercises'],
    label: 'Java',
    tone: 'emerald' as const,
    title: 'Java foundations',
  },
  {
    body: 'App Router, rendering, caching, authentication, SEO, middleware, and production deployment decisions.',
    icon: 'delivery' as const,
    id: 'nextjs-track',
    items: ['App Router', 'Rendering', 'Production'],
    label: 'Next.js',
    tone: 'slate' as const,
    title: 'Production Next.js',
  },
  {
    body: 'Guided implementation challenges that connect architecture decisions to working application code.',
    icon: 'tools' as const,
    id: 'build-lab',
    items: ['Architecture', 'Implementation', 'Review'],
    label: 'Build Lab',
    tone: 'purple' as const,
    title: 'Build and explain',
  },
] as const;
