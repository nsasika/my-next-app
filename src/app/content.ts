export const homeHeroContent = {
  eyebrow: 'Interview preparation for job seekers',
  heading:
    "Nalin's Academy helps candidates turn technical knowledge into interview confidence.",
  body: 'The ambition is simple: build a practical interview-preparation platform where job seekers can learn Java, React, frontend architecture, and full-stack trade-offs through clear explanations, recruiter-ready examples, and guided practice.',
  primaryAction: {
    href: '/interview-questions',
    label: 'Explore questions',
  },
  secondaryAction: {
    href: '/about',
    label: 'Meet Nalin',
  },
} as const;

export const platformDirectionContent = {
  eyebrow: 'Platform direction',
  heading: 'A simple path from learning to interview answers.',
} as const;

export const platformSteps = [
  {
    icon: 'track',
    title: 'Choose a topic',
    body: 'Start with focused tracks such as React hooks, Java fundamentals, or full-stack reasoning.',
  },
  {
    icon: 'code',
    title: 'Learn with examples',
    body: 'Read the theory, then connect it to practical code and common interview follow-ups.',
  },
  {
    icon: 'groups',
    title: 'Explain with clarity',
    body: 'Practice answers in a way recruiters and engineering interviewers can understand quickly.',
  },
] as const;

export const learningPillars = [
  {
    icon: 'react',
    title: 'React depth',
    body: 'Hooks, rendering behavior, state flow, and performance patterns.',
  },
  {
    icon: 'java',
    title: 'Java strength',
    body: 'Backend fundamentals, APIs, services, and production reasoning.',
  },
  {
    icon: 'recruiter',
    title: 'Recruiter clarity',
    body: 'Profiles and answers shaped around the expectations of hiring teams.',
  },
] as const;
