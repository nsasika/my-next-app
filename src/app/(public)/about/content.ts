import { PUBLIC_ASSETS } from '@/config/app';

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

export const heroContent = {
  eyebrow: 'Founder-engineer behind the academy',
  heading: 'Nalin Padmasiri: Engineering Leader & Academy Builder',
  paragraphs: [
    "I build enterprise-grade web applications and use Nalin's Academy as a practical learning platform for job seekers who want clear, interview-ready explanations.",
    'I have worked on large-scale systems at DBS Bank, GIC, and EMC Singapore, contributing to frontend modernization, React migrations, enterprise integrations, and application performance improvements while collaborating with cross-functional teams across multiple countries.',
  ],
} as const;

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
    label: 'Singapore',
  },
  {
    label: 'Sri Lanka',
  },
] as const;

export const expertiseCards = [
  {
    title: 'Enterprise frontend',
    body: 'React.js, TypeScript, micro-frontends, frontend modernization, migrations, performance, and maintainable UI systems.',
  },
  {
    title: 'Full-stack foundation',
    body: 'Java, Spring Boot, Scala, Node.js, REST/SOAP services, microservices, Oracle, PostgreSQL, and CI/CD workflows.',
  },
  {
    title: 'Banking delivery',
    body: 'Hands-on experience across DBS Bank, GIC, and EMC Singapore with Agile teams and enterprise-grade delivery expectations.',
  },
] as const;

export const targetRoleContent = {
  title: 'Target role direction',
  body: 'My current career focus is frontend-led full-stack engineering: roles where strong React delivery, Java/backend understanding, and enterprise communication all matter.',
} as const;

export const targetRoles = [
  'Java + React full-stack engineer with a frontend focus',
  'Senior frontend engineer for React and TypeScript platforms',
  'React + Node.js engineer for enterprise web applications',
] as const;

export const academyOriginContent = {
  title: "The purpose of Nalin's Academy",
  body: "Nalin's Academy exists to turn hard-earned engineering experience into practical preparation: React, Java, architecture, performance, and interview communication explained through examples that candidates can study, run, and discuss with confidence.",
} as const;

export const academyImpactStats = [
  { label: 'Years engineering', value: '8+' },
  { label: 'Core tracks', value: 'React + Java' },
  { label: 'Delivery focus', value: 'Enterprise' },
] as const;

export const resumePath = PUBLIC_ASSETS.resumes.pdf;
export const resumeFiles = [
  {
    filePath: PUBLIC_ASSETS.resumes.pdf,
    label: 'PDF',
  },
  {
    filePath: PUBLIC_ASSETS.resumes.docx,
    label: 'DOCX',
  },
] as const;
