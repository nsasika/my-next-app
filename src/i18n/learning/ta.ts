import { technologyLandingContent as en } from '@/content/technologies';
import type { LocalizedLearningContent } from './types';

export const taLearning = {
  labels: {
    commonUsages: 'பொதுவான பயன்பாடுகள்',
    evolution: 'பரிணாமம்',
    logoLabel: '{technology} சின்னம்',
    officialWebsites: 'அதிகாரப்பூர்வ இணையதளங்கள்',
    startHere: 'இங்கே தொடங்குங்கள்',
    technologyLanding: 'தொழில்நுட்ப அறிமுகம்',
    whatItIsFor: (technology: string) => `${technology} எதற்குப் பயன்படுகிறது?`,
  },
  landings: {
    angular: {
      ...en.angular,
      description:
        'Angular என்பது components, templates, services, dependency injection, routing மற்றும் forms கொண்டு கட்டமைக்கப்பட்ட பெரிய web applications உருவாக்கும் TypeScript-first framework.',
      history: [
        {
          title: 'AngularJS முதல் Angular வரை',
          body: 'AngularJS ecosystem-இல் தொடங்கிய Angular, வலுவான tooling மற்றும் component-first architecture கொண்ட நவீன TypeScript framework ஆக வளர்ந்தது.',
        },
        {
          title: 'நவீன திசை',
          body: 'நவீன Angular standalone components, signals, வேகமான builds மற்றும் தெளிவான team conventions மீது கவனம் செலுத்துகிறது.',
        },
      ],
      officialLinks: en.angular.officialLinks.map((link, index) => ({
        ...link,
        label: ['Angular ஆவணங்கள்', 'Angular பாடங்கள்', 'Angular செய்திகள்'][
          index
        ],
      })),
      primaryAction: undefined,
      summary: [
        'Angular ஒரு view layer மட்டும் அல்லாமல் முழுமையான application framework வழங்குகிறது.',
        'Forms, routing, HTTP, testing patterns மற்றும் நீண்டகால பராமரிப்புக்கு தெளிவான conventions தேவைப்படும் enterprise teams-க்கு இது ஏற்றது.',
        'இந்தப் பாதை Angular basics, component communication, services, RxJS, forms மற்றும் production architecture-ஐ உள்ளடக்கும்.',
      ],
      tags: ['TypeScript', 'Framework', 'Enterprise செயலிகள்'],
      usages: [
        'Enterprise dashboards மற்றும் admin systems',
        'Forms நிறைந்த business applications',
        'வலுவான project conventions தேவைப்படும் செயலிகள்',
        'Framework-level routing, dependency injection மற்றும் testing tools தேவைப்படும் teams',
      ],
    },
    foundations: {
      ...en.foundations,
      description:
        'அடிப்படைகள் என்பது frameworks, languages, interviews மற்றும் production systems முழுவதும் மீண்டும் பயன்படும் பொறியியல் கருத்துகளுக்கான கற்றல் பாதை.',
      history: [
        {
          title: 'கருத்துகள் tools-ஐ விட நீடிக்கும்',
          body: 'Frameworks மாறினாலும் identity, sessions, authorization, HTTP, browser security, testing மற்றும் deployment trade-offs தொடர்ந்து வருகின்றன.',
        },
        {
          title: 'பகிரப்பட்ட கற்றல் இடம்',
          body: 'இந்த கருத்துகளை ஒருமுறை கற்று React, Next.js, Java மற்றும் architecture கேள்விகளில் பயன்படுத்த இங்கு தனியாக வைத்துள்ளோம்.',
        },
      ],
      officialLinks: [
        { ...en.foundations.officialLinks[0], label: 'OAuth 2.0 அறிமுகம்' },
        {
          ...en.foundations.officialLinks[1],
          label: 'OpenID Connect அறிமுகம்',
        },
        {
          ...en.foundations.officialLinks[2],
          label: 'OWASP பாதுகாப்பு வழிகாட்டிகள்',
        },
      ],
      primaryAction: {
        ...en.foundations.primaryAction,
        label: 'அங்கீகாரப் பாடத்தைத் திற',
      },
      summary: [
        'ஒரே frontend framework-ஐ விட பெரிய தலைப்புகளுக்கு அடிப்படைகளைப் பயன்படுத்துங்கள்.',
        'Authentication பயனர் யார் என்பதை உறுதிப்படுத்துகிறது. Authorization அவர் என்ன செய்யலாம் என்பதை முடிவு செய்கிறது.',
        'OAuth 2.0 delegated authorization-க்கு; OpenID Connect login identity layer-ஐச் சேர்க்கிறது.',
      ],
      tags: ['பாதுகாப்பு', 'அடையாளம்', 'Architecture'],
      title: 'அடிப்படைகள்',
      usages: [
        'Login, sessions, cookies மற்றும் tokens-ஐ தெளிவாக விளக்குதல்',
        'OAuth consent, scopes மற்றும் delegated access புரிதல்',
        'ஒரே framework-க்கு கட்டுப்படாத interview answers தயாரித்தல்',
        'பாதுகாப்பு, testing மற்றும் user trust உடன் production features வடிவமைத்தல்',
      ],
    },
    java: {
      ...en.java,
      description:
        'Java என்பது backend systems, enterprise applications, distributed services மற்றும் நீண்டகால platforms-க்கு பயன்படும் முதிர்ந்த object-oriented programming language.',
      history: [
        {
          title: 'தொடக்கம் முதலே portable',
          body: '1990களில் அறிமுகமான Java, Java Virtual Machine மூலம் பல operating systems-ல் ஒரே program-ஐ இயக்குவதைக் குறிக்கோளாகக் கொண்டது.',
        },
        {
          title: 'தொடர்ச்சியான வளர்ச்சி',
          body: 'Generics, lambdas, streams, modules, records, pattern matching மற்றும் virtual threads மூலம் platform வளர்ந்தது.',
        },
        {
          title: 'திறந்த platform',
          body: 'OpenJDK என்பது Java SE-ன் open-source reference implementation; community பெரிய libraries மற்றும் tools ecosystem-ஐ பராமரிக்கிறது.',
        },
      ],
      officialLinks: en.java.officialLinks.map((link, index) => ({
        ...link,
        label: ['Java கற்றல் தளம்', 'Oracle Java', 'Java ஆவணங்கள்', 'OpenJDK'][
          index
        ],
      })),
      summary: [
        'Java types, classes, methods, object design, collections மற்றும் application structure-ஐ தெளிவாகக் கற்பிக்கிறது.',
        'இந்த academy Core Java for the Impatient புத்தகத்தை guided learning option ஆகப் பயன்படுத்துகிறது.',
        'Java landing page மொழியை மையப்படுத்துகிறது; book chapters மற்றும் backend testing தனிப் sidebar lessons ஆக உள்ளன.',
      ],
      tags: ['Backend', 'OOP', 'JVM'],
      usages: [
        'REST APIs, microservices மற்றும் backend systems',
        'Enterprise மற்றும் financial applications',
        'Android ecosystem foundations',
        'Data processing, messaging மற்றும் long-running server workloads',
      ],
    },
    nextjs: {
      ...en.nextjs,
      description:
        'Next.js என்பது file-based routing, server rendering, static generation, API routes, streaming மற்றும் production deployment வழங்கும் React framework.',
      history: [
        {
          title: 'Server-ல் React',
          body: 'Server-rendered React applications உருவாக்கவும் deploy செய்யவும் எளிதாக்க Next.js 2016ல் அறிமுகமானது.',
        },
        {
          title: 'Full-stack framework',
          body: 'Pages மற்றும் server rendering முதல் App Router, Server Components, caching, route handlers மற்றும் production tooling வரை வளர்ந்தது.',
        },
        {
          title: 'Production ecosystem',
          body: 'Vercel மற்றும் open-source community Next.js-ஐ உருவாக்குகின்றன; production React applications-ல் இது பரவலாகப் பயன்படுகிறது.',
        },
      ],
      officialLinks: en.nextjs.officialLinks.map((link, index) => ({
        ...link,
        label: [
          'Next.js இணையதளம்',
          'Next.js ஆவணங்கள்',
          'Next.js பாடங்கள்',
          'Vercel',
        ][index],
      })),
      primaryAction: {
        ...en.nextjs.primaryAction,
        label: 'அறிமுகத்துடன் தொடங்குங்கள்',
      },
      summary: [
        'React UI model-ஐ உருவாக்குகிறது; Next.js routing, rendering, caching, APIs மற்றும் deployment structure-ஐச் சேர்க்கிறது.',
        'SEO, வேகமான first load, server data access, authentication மற்றும் API endpoints தேவைப்படும் செயலிகளுக்கு இது ஏற்றது.',
        'இந்தப் பாதை routing, layouts, Server Components, rendering modes, middleware மற்றும் monitoring-ஐ உள்ளடக்கும்.',
      ],
      tags: ['React framework', 'App Router', 'Full-stack'],
      usages: [
        'Marketing sites, documentation, dashboards மற்றும் SaaS products',
        'SEO-sensitive server-rendered React pages',
        'API routes மற்றும் server data access கொண்ட full-stack apps',
        'Static, dynamic மற்றும் streaming UI கலந்த applications',
      ],
    },
    react: {
      ...en.react,
      description:
        'React என்பது components மூலம் user interfaces உருவாக்கும் JavaScript library. சிக்கலான screens-ஐ மீண்டும் பயன்படும் சிறிய பகுதிகளாகப் பிரிக்க உதவுகிறது.',
      history: [
        {
          title: 'Facebook-ல் தொடக்கம்',
          body: 'React Facebook-க்குள் உருவாகி Instagram-க்கு முன் Facebook News Feed-ல் பயன்படுத்தப்பட்டது.',
        },
        {
          title: 'Open-source வெளியீடு',
          body: '2013 open-source வெளியீடு component-driven UI development-ஐ frontend community முழுவதும் பரப்பியது.',
        },
        {
          title: 'நவீன React',
          body: 'Fiber, Hooks, concurrent rendering, Server Components மற்றும் framework ecosystem ஆகியவை React-ன் முக்கிய வளர்ச்சிகள்.',
        },
      ],
      officialLinks: en.react.officialLinks.map((link, index) => ({
        ...link,
        label: [
          'React இணையதளம்',
          'React கற்றுக்கொள்ளுங்கள்',
          'API ஆவணங்கள்',
          'React செய்திகள்',
        ][index],
      })),
      primaryAction: {
        ...en.react.primaryAction,
        label: 'useRef உடன் தொடங்குங்கள்',
      },
      summary: [
        'React UI-ஐ components ஆகச் சிந்திக்க கற்பிக்கிறது: ஒவ்வொரு பகுதியும் data பெற்று output render செய்து state மாறும்போது update ஆகிறது.',
        'சிறிய widget, dashboard, React Native mobile app அல்லது Next.js full-stack app வரை பயன்படுத்தலாம்.',
        'இந்தப் பாதை hooks, rendering, state management, performance, testing மற்றும் interview examples மூலம் தொடங்குகிறது.',
      ],
      tags: ['Components', 'Hooks', 'UI architecture'],
      usages: [
        'Interactive web applications மற்றும் dashboards',
        'Reusable design-system components',
        'Client-side state கொண்ட single-page applications',
        'React Native mobile apps மற்றும் framework-based full-stack apps',
      ],
    },
    interviews: {
      ...en.interviews,
      description:
        'நேர்காணல் தயாரிப்பு தொழில்நுட்ப அறிவை தெளிவான பதில்கள், trade-off thinking மற்றும் நம்பிக்கையான தொடர்பாக மாற்றுகிறது.',
      history: [
        {
          title: 'அடிப்படைகள் முதலில்',
          body: 'வலுவான interview concepts-ஐ தெளிவாக விளக்குதல், code படித்தல் மற்றும் answers-ஐ உண்மையான பணியுடன் இணைப்பதில் தொடங்குகிறது.',
        },
        {
          title: 'Syntax-ஐத் தாண்டி',
          body: 'Architecture, performance, debugging, delivery ownership மற்றும் team impact பற்றிய உரையாடலும் interview practice-ல் இருக்க வேண்டும்.',
        },
        {
          title: 'அனுபவ நூலகம்',
          body: 'இந்தப் பாதை உண்மையான interview experiences மற்றும் target questions-ஐ தெளிவான answer notes ஆக மாற்றுகிறது.',
        },
      ],
      officialLinks: en.interviews.officialLinks.map((link) => ({
        ...link,
        label: `${link.label} தொழில்முறை வளம்`,
      })),
      primaryAction: {
        ...en.interviews.primaryAction,
        label: 'அனுபவங்களைத் திற',
      },
      summary: [
        'Scripts மனப்பாடம் செய்வது நோக்கம் அல்ல; interviewer உங்கள் thinking-ஐப் பின்பற்றக்கூடிய structure-ல் பதிலளிப்பதே நோக்கம்.',
        'உங்களை அறிமுகப்படுத்துதல், trade-offs, code மற்றும் project decisions-ஐ விளக்கப் பயிற்சி செய்யுங்கள்.',
        'ஒவ்வொரு interview note-மும் மீண்டும் படித்து மேம்படுத்த எளிதாக இருக்க வேண்டும்.',
      ],
      tags: ['தொடர்பு', 'உண்மையான கேள்விகள்', 'பயிற்சி'],
      title: 'நேர்காணல்கள்',
      usages: [
        'Technical round-க்கு முன் உண்மையான கேள்விகள் பயிற்சி செய்தல்',
        'Project experience-ஐ சுருக்கமான answers ஆக மாற்றுதல்',
        'React, Java, MFE, architecture மற்றும் delivery follow-ups தயாரித்தல்',
        'உண்மையான interviewக்கு பின் மேம்படுத்த வேண்டியவற்றை மதிப்பாய்வு செய்தல்',
      ],
    },
  },
} satisfies LocalizedLearningContent;
