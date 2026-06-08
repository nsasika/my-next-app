import { APP_PATHS } from '@/config/routes';

export const interviewQuestionsHeroContent = {
  eyebrow: 'Interview questions',
  heading: 'Practice interview topics with theory and practical examples.',
  body: "Nalin's Academy keeps the public recruiter view simple, while the logged-in learning area contains the practical examples and deeper practice pages. Start with the React Hooks overview, then use the dummy login created for learning only to access separate hook examples and other exercises.",
} as const;

export const reactHooksTrack = {
  body: 'Learn how hooks behave in React, then use the dummy login to open the practical hook examples available in the learning sidebar.',
  loginHref: APP_PATHS.login,
  loginLabel: 'Login for examples',
  title: 'React Hooks',
} as const;
