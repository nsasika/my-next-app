import type { WorkExperience } from '@/components/WorkExperienceTimeline';
import { PUBLIC_ASSETS } from '@/config/app';

export const portfolioHeroContent = {
  eyebrow: 'Senior React & Java full-stack engineer',
  heading: 'Nalin Padmasiri: Enterprise engineering portfolio',
  paragraphs: [
    'I build enterprise-grade web applications with React, TypeScript, Java, and modern full-stack architecture.',
    'My experience spans large-scale systems at DBS Bank, GIC, and EMC Singapore, including frontend modernization, React migrations, micro-frontends, enterprise integrations, performance improvements, and secure delivery across multiple countries.',
  ],
} as const;

export const portfolioStats = [
  { label: 'Engineering experience', value: '8+ years' },
  { label: 'Detailed roles', value: '6' },
  { label: 'Work countries', value: '2' },
] as const;

export const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@nalinsacademy8871',
    icon: 'youtube' as const,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/nsasika',
    icon: 'github' as const,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nalin-padmasiri/',
    icon: 'linkedin' as const,
  },
] as const;

export const highlightLinks = [
  {
    label: 'DBS Bank',
    href: 'https://www.dbs.com/default.page',
  },
  {
    label: 'GIC',
    href: 'https://www.gic.com.sg/',
  },
  {
    label: 'EMC Singapore',
    href: 'https://www.home.emcsg.com/',
  },
  {
    label: '🇸🇬 Singapore',
  },
  {
    label: '🇱🇰 Sri Lanka',
  },
] as const;

export const portfolioPanels = [
  {
    icon: 'code' as const,
    id: 'enterprise-frontend',
    items: ['React', 'TypeScript', 'Modern UI'],
    label: 'Enterprise frontend',
    tone: 'typescript' as const,
    title: 'Enterprise frontend',
    body: 'React.js, TypeScript, micro-frontends, frontend modernization, migrations, performance, and maintainable UI systems.',
  },
  {
    icon: 'architecture' as const,
    id: 'full-stack-foundation',
    items: ['Java', 'Spring Boot', 'Node.js'],
    label: 'Full-stack foundation',
    tone: 'emerald' as const,
    title: 'Full-stack foundation',
    body: 'Java, Spring Boot, Scala, Node.js, REST/SOAP services, microservices, Oracle, PostgreSQL, and CI/CD workflows.',
  },
  {
    icon: 'business' as const,
    id: 'enterprise-delivery',
    items: ['DBS Bank', 'GIC', 'EMC Singapore'],
    label: 'Enterprise delivery',
    tone: 'blue' as const,
    title: 'Enterprise delivery',
    body: 'Hands-on delivery across DBS Bank, GIC, and EMC Singapore with Agile teams, regional stakeholders, and enterprise quality expectations.',
  },
  {
    body: 'My current focus is frontend-led full-stack engineering: roles where strong React delivery, Java/backend understanding, and enterprise communication all matter.',
    icon: 'psychology' as const,
    id: 'target-role-direction',
    items: [
      'Java + React full-stack engineer with a frontend focus',
      'Senior frontend engineer for React and TypeScript platforms',
      'React + Node.js engineer for enterprise web applications',
    ],
    label: 'Target roles',
    tone: 'purple' as const,
    title: 'Target role direction',
  },
] as const;

export const workExperience = [
  {
    client: 'EMC Singapore',
    company: 'Percept Solutions Pte Ltd',
    country: { flag: '🇸🇬', name: 'Singapore' },
    dates: '22 Oct 2025 - 31 Dec 2025',
    duration: '2 months',
    highlights: [
      'Built and maintained Java REST and SOAP services for wholesale electricity market operations.',
      'Developed Oracle SQL and stored procedures, including performance tuning and data validation.',
      'Supported regulatory document workflows and a mixed Angular and Vue front end.',
    ],
    id: 'emc-percept',
    role: 'Senior Software Engineer',
    summary:
      "Contributed to EMC's core market systems supporting Singapore's wholesale electricity market, with a focus on reliable integrations and regulatory workflows.",
    technologies: [
      { icon: 'backend', label: 'Java 17/21 + REST/SOAP' },
      { icon: 'data', label: 'Oracle + XML/XSLT' },
      { icon: 'frontend', label: 'Angular + Vue.js' },
    ],
  },
  {
    client: 'DBS Bank',
    collaboration: 'Regional delivery: 🇭🇰 Hong Kong and 🇹🇼 Taiwan',
    company: 'Technopals Pte Ltd',
    country: { flag: '🇸🇬', name: 'Singapore' },
    dates: '22 Sep 2022 - 22 Sep 2025',
    duration: '3 years',
    highlights: [
      'Modernized AS/400 and .NET systems as React micro-frontends backed by Spring Boot services.',
      'Led React 18 migration work and applied concurrent rendering patterns to improve user experience.',
      'Delivered independent OpenShift releases, remediated dependency vulnerabilities, and maintained 80%+ unit-test coverage.',
    ],
    id: 'dbs-technopals',
    role: 'Senior Software Engineer',
    summary:
      'Delivered enterprise banking, equities, and trading platforms through scalable frontend architecture, backend integrations, and secure CI/CD practices.',
    technologies: [
      { icon: 'frontend', label: 'React + TypeScript' },
      { icon: 'architecture', label: 'Micro-frontends + Redux' },
      { icon: 'backend', label: 'Java + Spring Boot' },
      { icon: 'cloud', label: 'OpenShift + Jenkins' },
    ],
  },
  {
    client: 'GIC',
    company: 'Technopals Pte Ltd',
    country: { flag: '🇸🇬', name: 'Singapore' },
    dates: '18 Apr 2022 - 2 Sep 2022',
    duration: '4 months',
    highlights: [
      'Refactored class components into functional React components and Hooks.',
      'Built workflow and data-presentation features for analysts and business stakeholders.',
      'Developed Django and SQLite analytics services and strengthened Jest test coverage.',
    ],
    id: 'gic-technopals',
    role: 'Senior Software Engineer',
    summary:
      'Improved the usability, maintainability, and performance of enterprise applications used by investment analysts and business teams.',
    technologies: [
      { icon: 'frontend', label: 'React + Redux' },
      { icon: 'backend', label: 'Python Django' },
      { icon: 'data', label: 'SQLite' },
      { icon: 'architecture', label: 'Jest + Storybook' },
    ],
  },
  {
    collaboration: 'Client delivery: 🇦🇺 Australia and 🇪🇺 Europe',
    company: 'IdeaBits Lanka Pvt Ltd',
    country: { flag: '🇱🇰', name: 'Sri Lanka' },
    dates: '26 Jul 2021 - 11 Apr 2022',
    duration: '8 months',
    highlights: [
      'Built Node.js and Express middleware connecting BroadSign and Ayuda advertising platforms.',
      'Designed AWS Step Functions and Lambda workflows with PostgreSQL and Sequelize persistence.',
      'Delivered Next.js and React MVPs that enabled rapid product validation for European clients.',
    ],
    id: 'ideabits',
    role: 'Senior Software Engineer',
    summary:
      'Delivered middleware, cloud workflows, and full-stack MVP applications for international clients.',
    technologies: [
      { icon: 'frontend', label: 'Next.js + React' },
      { icon: 'backend', label: 'Node.js + Express' },
      { icon: 'data', label: 'PostgreSQL + Sequelize' },
      { icon: 'cloud', label: 'AWS Lambda + Step Functions' },
    ],
  },
  {
    client: 'Pagero AB',
    collaboration: 'Product collaboration: 🇸🇪 Sweden',
    company: 'Creative Technology Solutions Pvt Ltd',
    country: { flag: '🇱🇰', name: 'Sri Lanka' },
    dates: '1 Nov 2018 - 16 Aug 2021',
    duration: '2 years 9 months',
    highlights: [
      'Built React interfaces and Scala/Java microservices for international e-invoicing and freight products.',
      'Architected invoice audit and validation services with PostgreSQL and RabbitMQ workflows.',
      'Supported CI/CD and production operations while mentoring junior engineers and sharing knowledge.',
    ],
    id: 'creative-pagero',
    role: 'Software Engineer → Senior Software Engineer',
    summary:
      'Progressed into a senior role while developing distributed, enterprise-grade systems for global operations.',
    technologies: [
      { icon: 'frontend', label: 'React + Storybook' },
      { icon: 'backend', label: 'Scala + Java/Spring Boot' },
      { icon: 'data', label: 'PostgreSQL + RabbitMQ' },
      { icon: 'cloud', label: 'Docker + GoCD/Jenkins' },
    ],
  },
  {
    company: 'Hybriteq Pvt Ltd',
    country: { flag: '🇱🇰', name: 'Sri Lanka' },
    dates: 'Feb 2018 - Sep 2018',
    duration: '8 months',
    highlights: [
      'Started a commercial software engineering career in a Sri Lankan delivery team.',
      'Built the professional foundation for later full-stack and enterprise engineering roles.',
    ],
    id: 'hybriteq',
    role: 'Software Engineer',
    summary:
      'An early-career software engineering role listed in the latest résumé experience summary.',
    technologies: [{ icon: 'frontend', label: 'Software engineering' }],
  },
] as const satisfies readonly WorkExperience[];

export const resumeFiles = [
  {
    filePath: PUBLIC_ASSETS.resumes.pdf,
    format: 'pdf',
  },
  {
    filePath: PUBLIC_ASSETS.resumes.docx,
    format: 'docx',
  },
] as const;
