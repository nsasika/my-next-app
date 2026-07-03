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
    icon: 'eslint',
    metric: 'ESLint',
    label: 'Static quality checks',
    status: 'Required before merge',
  },
  {
    icon: 'coverage',
    metric: '80%',
    label: 'Minimum unit coverage',
    status: 'Quality gate target',
  },
  {
    icon: 'typescript',
    metric: 'TypeScript',
    label: 'Compile-time safety',
    status: 'No emit type-check',
  },
  {
    icon: 'vercel',
    metric: 'Vercel',
    label: 'Preview + production',
    status: 'Branch-based releases',
  },
  {
    icon: 'git',
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
  {
    detail: 'Keep every change readable in project history.',
    icon: 'git',
    title: 'Meaningful commit message',
  },
  {
    detail: 'Catch formatting and common code quality issues early.',
    icon: 'eslint',
    title: 'ESLint and Prettier',
  },
  {
    detail: 'Run no-emit checks so contracts fail before runtime.',
    icon: 'typescript',
    title: 'TypeScript no-emit check',
  },
  {
    detail: 'Keep unit coverage above the 80% quality gate.',
    icon: 'coverage',
    title: 'Vitest unit coverage >= 80%',
  },
  {
    detail: 'Validate each branch in an isolated deployment.',
    icon: 'vercel',
    title: 'Vercel preview deployment',
  },
  {
    detail: 'Promote only after checks and review signals pass.',
    icon: 'release',
    title: 'Production promotion',
  },
] as const;
