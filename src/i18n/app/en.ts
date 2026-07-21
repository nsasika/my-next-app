import type { AppCopy } from './types';

export const enApp = {
  auth: {
    backLinkLabel: 'Back to public site',
    checkingLabel: 'Checking credentials...',
    connectionError:
      'Login failed. Please check your connection and try again.',
    credentialsHint:
      'To test failure, use credentials different from the demo credentials.',
    credentialsTitle: 'Use these demo credentials',
    description:
      'This learning app uses a demo banking user, a signed JWT, and an HTTP-only cookie to protect the practical examples.',
    emailLabel: 'Email',
    eyebrow: 'Authentication demo',
    loginButtonLabel: 'Login',
    loginFailureLabel: 'Invalid email or password.',
    loginSuccessLabel: 'Login successful.',
    oauthDescription:
      'These buttons are UI placeholders. The production step is wiring provider callbacks, PKCE, state validation, and app session creation.',
    oauthDividerLabel: 'or continue with',
    oauthProviders: [
      { id: 'google', label: 'Continue with Google' },
      { id: 'apple', label: 'Continue with Apple' },
      { id: 'linkedin', label: 'Continue with LinkedIn' },
    ],
    oauthTodoLabel: 'TODO',
    passwordLabel: 'Password',
    publicSiteLabel: 'Public site',
    redirectingLabel: 'Redirecting to the learning workspace...',
    title: 'Login to Nalin’s Academy',
  },
  buildLab: {
    deliveryModelLabel: 'Delivery model',
    eyebrow: 'Engineering capability showcase',
    flow: [
      {
        title: 'Plan and build',
        body: 'Feature ideas become App Router pages, typed React components, reusable content modules, and Node.js-backed API routes.',
      },
      {
        title: 'AI-assisted implementation',
        body: 'Codex, GitHub Copilot, and ChatGPT accelerate iteration while engineering judgement keeps the code maintainable.',
      },
      {
        title: 'Repository workflow',
        body: 'Changes move through GitHub with meaningful commits, linting, type checks, unit coverage targets, and build validation.',
      },
      {
        title: 'Vercel deployments',
        body: 'Preview deployments validate feature branches before production promotion.',
      },
    ],
    heading: 'Build Lab',
    heroBody:
      'A transparent view of how Nalin’s Academy is designed, implemented, tested, versioned, and deployed through preview and production delivery lanes.',
    labels: {},
    releaseEyebrow: 'Release flow',
    releaseTitle: 'Checks and deployment lanes',
    stackEyebrow: 'System snapshot',
    stackUsageBody: 'Used inside the academy build.',
    stackTitle: 'Stack and quality signals',
  },
  shell: {
    closeNavigation: 'Close navigation',
    deleteAccount: 'Delete account',
    editProfile: 'Edit profile',
    learningAccount: 'Learning account',
    learningMap: 'Learning map',
    learningMapBody:
      'Start with foundations, review real interview experiences, then move through technology tracks in order.',
    learningWorkspace: 'Learning workspace',
    lessonPromise: 'Theory, code example, and demo for every lesson.',
    logout: 'Logout',
    openNavigation: 'Open navigation',
    openUserProfile: 'Open user profile',
    soon: 'Soon',
    subscribeServices: 'Subscribe services',
  },
  sidebarLabels: {},
} as const satisfies AppCopy;
