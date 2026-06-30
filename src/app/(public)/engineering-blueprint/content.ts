export const engineeringHeroContent = {
  eyebrow: 'Engineering capability showcase',
  heading: 'Engineering Blueprint',
  body: "A transparent view of how Nalin's Academy is designed, implemented, tested, versioned, and deployed through preview and production delivery lanes.",
} as const;

export const technologyStack = [
  {
    category: 'Frontend platform',
    items: ['Next.js App Router', 'React', 'TypeScript'],
  },
  {
    category: 'Backend layer',
    items: ['Node.js runtime', 'Next.js route handlers', 'JWT auth'],
  },
  {
    category: 'AI-assisted engineering',
    items: ['Codex', 'GitHub Copilot', 'ChatGPT'],
  },
  {
    category: 'Delivery platform',
    items: ['GitHub repository', 'Vercel preview', 'Vercel production'],
  },
] as const;

export const deliveryFlow = [
  {
    title: 'Plan and build',
    body: 'Feature ideas are shaped into App Router pages, typed React components, reusable content modules, and Node.js-backed API routes.',
  },
  {
    title: 'AI-assisted implementation',
    body: 'Codex, GitHub Copilot, and ChatGPT accelerate iteration while engineering judgement keeps the code maintainable.',
  },
  {
    title: 'Repository workflow',
    body: 'Changes move through GitHub with meaningful commit messages, linting, type checks, unit coverage targets, and build validation.',
  },
  {
    title: 'Vercel deployments',
    body: 'Preview deployments validate feature branches before the production branch is promoted for public users.',
  },
] as const;

export const qualitySignals = [
  {
    metric: 'ESLint',
    label: 'Static quality checks',
    status: 'Required before merge',
  },
  {
    metric: '80%',
    label: 'Minimum unit coverage',
    status: 'Quality gate target',
  },
  {
    metric: 'TypeScript',
    label: 'Compile-time safety',
    status: 'No emit type-check',
  },
  {
    metric: 'Vercel',
    label: 'Preview + production',
    status: 'Branch-based releases',
  },
  {
    metric: 'Git',
    label: 'Meaningful commits',
    status: 'Readable project history',
  },
] as const;

export const deploymentLanes = [
  {
    name: 'Preview',
    branch: 'Feature / pull request branches',
    detail:
      'Every meaningful branch can be reviewed with an isolated deployment URL before it reaches users.',
  },
  {
    name: 'Production',
    branch: 'Production branch',
    detail:
      'Validated changes are promoted to the public academy experience after checks pass.',
  },
] as const;

export const pipelineChecks = [
  'Meaningful commit message',
  'ESLint and Prettier',
  'TypeScript no-emit check',
  'Vitest unit coverage >= 80%',
  'Vercel preview deployment',
  'Production promotion',
] as const;
