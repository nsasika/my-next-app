import type { Dictionary } from '../types';
import { LOCALIZED_UI } from '../ui';

export const en = {
  locale: 'en-US',
  ...LOCALIZED_UI['en-US'],
  home: {
    hero: {
      body: 'The ambition is simple: build a practical interview-preparation platform where job seekers can learn Java, React, frontend architecture, and full-stack trade-offs through clear explanations, recruiter-ready examples, and guided practice.',
      eyebrow: 'Interview preparation for job seekers',
      heading:
        "Nalin's Academy helps candidates turn technical knowledge into interview confidence.",
      primaryAction: 'Explore the Academy',
      secondaryAction: "View Nalin's portfolio",
    },
    platform: {
      eyebrow: 'Platform direction',
      heading: 'A simple path from learning to interview answers.',
      steps: [
        {
          title: 'Choose a topic',
          body: 'Start with focused tracks such as React hooks, Java fundamentals, or full-stack reasoning.',
        },
        {
          title: 'Learn with examples',
          body: 'Read the theory, then connect it to practical code and common interview follow-ups.',
        },
        {
          title: 'Explain with clarity',
          body: 'Practice answers in a way recruiters and engineering interviewers can understand quickly.',
        },
      ],
    },
    snapshot: {
      body: 'A compact view of what the platform already offers and the quality bar behind it.',
      eyebrow: 'Academy snapshot',
      stats: [
        { label: 'Learning tracks', value: '4+' },
        { label: 'Practical demos', value: '30+' },
        { label: 'Coverage gate', value: '80%' },
      ],
      title: 'Learn, practice, and explain with confidence',
    },
  },
  academy: {
    hero: {
      body: 'A focused learning platform for job seekers who want clear React, Java, frontend architecture, and full-stack explanations they can study, run, and confidently discuss in interviews.',
      buildLabAction: 'Explore Build Lab',
      eyebrow: 'Practical interview preparation',
      heading:
        "Nalin's Academy turns engineering knowledge into interview confidence.",
      portfolioAction: "View Nalin's portfolio",
    },
    learningPromise: {
      eyebrow: 'Learning promise',
      heading: 'Understand, build, explain',
      items: [
        {
          title: 'Understand the concept',
          body: 'Start with concise theory and the trade-offs interviewers expect you to explain.',
        },
        {
          title: 'Connect it to code',
          body: 'Use practical React, Java, and Next.js examples instead of memorizing isolated definitions.',
        },
        {
          title: 'Practice the answer',
          body: 'Turn technical understanding into clear, structured interview communication.',
        },
      ],
    },
    purpose: {
      body: 'The academy translates enterprise delivery lessons into focused theory, runnable examples, interview follow-ups, and architecture discussions without mixing the learning experience with the personal portfolio.',
      eyebrow: 'Academy purpose',
      stats: [
        { label: 'Learning tracks', value: '4+' },
        { label: 'Practical demos', value: '30+' },
        { label: 'Coverage gate', value: '80%' },
      ],
      title: 'Learn from practical engineering experience',
    },
    tracks: {
      eyebrow: 'Learning tracks',
      title: 'Choose how you want to grow',
      panels: [
        {
          body: 'Hooks, rendering, state management, performance, React 18 and React 19 explained through focused examples.',
          items: ['Hooks', 'Performance', 'State management'],
          label: 'React',
          title: 'Modern React engineering',
        },
        {
          body: 'Core Java concepts, object-oriented design, interfaces, records, and interview-ready exercises.',
          items: ['Core Java', 'OOP', 'Practice exercises'],
          label: 'Java',
          title: 'Java foundations',
        },
        {
          body: 'App Router, rendering, caching, authentication, SEO, middleware, and production deployment decisions.',
          items: ['App Router', 'Rendering', 'Production'],
          label: 'Next.js',
          title: 'Production Next.js',
        },
        {
          body: 'Guided implementation challenges that connect architecture decisions to working application code.',
          items: ['Architecture', 'Implementation', 'Review'],
          label: 'Build Lab',
          title: 'Build and explain',
        },
      ],
    },
  },
  portfolio: {
    capability: {
      eyebrow: 'Engineering profile',
      title: 'Capability map',
      panels: [
        {
          body: 'React.js, TypeScript, micro-frontends, frontend modernization, migrations, performance, and maintainable UI systems.',
          items: ['React', 'TypeScript', 'Modern UI'],
          label: 'Enterprise frontend',
          title: 'Enterprise frontend',
        },
        {
          body: 'Java, Spring Boot, Scala, Node.js, REST/SOAP services, microservices, Oracle, PostgreSQL, and CI/CD workflows.',
          items: ['Java', 'Spring Boot', 'Node.js'],
          label: 'Full-stack foundation',
          title: 'Full-stack foundation',
        },
        {
          body: 'Hands-on delivery across DBS Bank, GIC, and EMC Singapore with Agile teams, regional stakeholders, and enterprise quality expectations.',
          items: ['DBS Bank', 'GIC', 'EMC Singapore'],
          label: 'Enterprise delivery',
          title: 'Enterprise delivery',
        },
        {
          body: 'My current focus is frontend-led full-stack engineering: roles where strong React delivery, Java/backend understanding, and enterprise communication all matter.',
          items: [
            'Java + React full-stack engineer',
            'Senior React frontend engineer',
            'React + Node.js engineer',
          ],
          label: 'Target roles',
          title: 'Target role direction',
        },
      ],
    },
    enterpriseDelivery: {
      body: 'Frontend-led full-stack experience across enterprise systems.',
      eyebrow: 'Enterprise delivery',
      heading: 'React, TypeScript, Java',
    },
    experience: {
      body: 'A résumé-based timeline of the roles, countries, delivery scope, and technologies that shaped my enterprise engineering experience. Country flags show employment location; collaboration flags identify client or regional delivery context.',
      eyebrow: 'Featured professional journey',
      title: 'Work experience across Singapore and Sri Lanka',
    },
    hero: {
      action: 'Explore work history',
      eyebrow: 'Senior React & Java full-stack engineer',
      heading: 'Nalin Padmasiri: Enterprise engineering portfolio',
      paragraphs: [
        'I build enterprise-grade web applications with React, TypeScript, Java, and modern full-stack architecture.',
        'My experience spans large-scale systems at DBS Bank, GIC, and EMC Singapore, including frontend modernization, React migrations, micro-frontends, enterprise integrations, performance improvements, and secure delivery across multiple countries.',
      ],
    },
    resume: {
      docxLabel: 'Download résumé as DOCX',
      downloadsLabel: 'Résumé downloads',
      pdfLabel: 'Download résumé as PDF',
    },
    stats: [
      { label: 'Engineering experience', value: '8+ years' },
      { label: 'Detailed roles', value: '6' },
      { label: 'Work countries', value: '2' },
    ],
    work: {
      'emc-percept': {
        countryName: 'Singapore',
        dates: '22 Oct 2025 - 31 Dec 2025',
        duration: '2 months',
        role: 'Senior Software Engineer',
        summary:
          "Contributed to EMC's core market systems supporting Singapore's wholesale electricity market, with a focus on reliable integrations and regulatory workflows.",
        highlights: [
          'Built and maintained Java REST and SOAP services for wholesale electricity market operations.',
          'Developed Oracle SQL and stored procedures, including performance tuning and data validation.',
          'Supported regulatory document workflows and a mixed Angular and Vue front end.',
        ],
      },
      'dbs-technopals': {
        collaboration: 'Regional delivery: 🇭🇰 Hong Kong and 🇹🇼 Taiwan',
        countryName: 'Singapore',
        dates: '22 Sep 2022 - 22 Sep 2025',
        duration: '3 years',
        role: 'Senior Software Engineer',
        summary:
          'Delivered enterprise banking, equities, and trading platforms through scalable frontend architecture, backend integrations, and secure CI/CD practices.',
        highlights: [
          'Modernized AS/400 and .NET systems as React micro-frontends backed by Spring Boot services.',
          'Led React 18 migration work and applied concurrent rendering patterns to improve user experience.',
          'Delivered independent OpenShift releases, remediated dependency vulnerabilities, and maintained 80%+ unit-test coverage.',
        ],
      },
      'gic-technopals': {
        countryName: 'Singapore',
        dates: '18 Apr 2022 - 2 Sep 2022',
        duration: '4 months',
        role: 'Senior Software Engineer',
        summary:
          'Improved the usability, maintainability, and performance of enterprise applications used by investment analysts and business teams.',
        highlights: [
          'Refactored class components into functional React components and Hooks.',
          'Built workflow and data-presentation features for analysts and business stakeholders.',
          'Developed Django and SQLite analytics services and strengthened Jest test coverage.',
        ],
      },
      ideabits: {
        collaboration: 'Client delivery: 🇦🇺 Australia and 🇪🇺 Europe',
        countryName: 'Sri Lanka',
        dates: '26 Jul 2021 - 11 Apr 2022',
        duration: '8 months',
        role: 'Senior Software Engineer',
        summary:
          'Delivered middleware, cloud workflows, and full-stack MVP applications for international clients.',
        highlights: [
          'Built Node.js and Express middleware connecting BroadSign and Ayuda advertising platforms.',
          'Designed AWS Step Functions and Lambda workflows with PostgreSQL and Sequelize persistence.',
          'Delivered Next.js and React MVPs that enabled rapid product validation for European clients.',
        ],
      },
      'creative-pagero': {
        collaboration: 'Product collaboration: 🇸🇪 Sweden',
        countryName: 'Sri Lanka',
        dates: '1 Nov 2018 - 16 Aug 2021',
        duration: '2 years 9 months',
        role: 'Software Engineer → Senior Software Engineer',
        summary:
          'Progressed into a senior role while developing distributed, enterprise-grade systems for global operations.',
        highlights: [
          'Built React interfaces and Scala/Java microservices for international e-invoicing and freight products.',
          'Architected invoice audit and validation services with PostgreSQL and RabbitMQ workflows.',
          'Supported CI/CD and production operations while mentoring junior engineers and sharing knowledge.',
        ],
      },
      hybriteq: {
        countryName: 'Sri Lanka',
        dates: 'Feb 2018 - Sep 2018',
        duration: '8 months',
        role: 'Software Engineer',
        summary:
          'An early-career software engineering role listed in the latest résumé experience summary.',
        highlights: [
          'Started a commercial software engineering career in a Sri Lankan delivery team.',
          'Built the professional foundation for later full-stack and enterprise engineering roles.',
        ],
      },
    },
  },
} as const satisfies Dictionary;
