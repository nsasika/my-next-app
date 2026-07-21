import { technologyLandingContent as en } from '@/content/technologies';
import type { LocalizedLearningContent } from './types';

export const siLearning = {
  labels: {
    commonUsages: 'සාමාන්‍ය භාවිතයන්',
    evolution: 'පරිණාමය',
    logoLabel: '{technology} ලාංඡනය',
    officialWebsites: 'නිල වෙබ් අඩවි',
    startHere: 'මෙතැනින් ආරම්භ කරන්න',
    technologyLanding: 'තාක්ෂණික හැඳින්වීම',
    whatItIsFor: (technology: string) => `${technology} භාවිතා කරන්නේ කුමකටද?`,
  },
  landings: {
    angular: {
      ...en.angular,
      description:
        'Angular යනු components, templates, services, dependency injection, routing සහ forms සමඟ ව්‍යුහගත විශාල web applications ගොඩනැගීමට භාවිතා කරන TypeScript-first framework එකකි.',
      history: [
        {
          title: 'AngularJS සිට Angular දක්වා',
          body: 'AngularJS ecosystem එකෙන් ආරම්භ වූ Angular, ශක්තිමත් tooling සහ component-first architecture සහිත නවීන TypeScript framework එකක් බවට පත්විය.',
        },
        {
          title: 'නවීන දිශාව',
          body: 'නවීන Angular standalone components, signals, වේගවත් builds සහ පැහැදිලි team conventions කෙරෙහි අවධානය යොමු කරයි.',
        },
      ],
      officialLinks: en.angular.officialLinks.map((link, index) => ({
        ...link,
        label: ['Angular ලේඛන', 'Angular පාඩම්', 'Angular පුවත්'][index],
      })),
      primaryAction: undefined,
      summary: [
        'Angular මඟින් view layer එකකට වඩා සම්පූර්ණ application framework එකක් ලැබේ.',
        'Forms, routing, HTTP, testing patterns සහ දිගුකාලීන නඩත්තුව සඳහා පැහැදිලි conventions අවශ්‍ය enterprise teams සඳහා එය සුදුසුය.',
        'මෙම මාර්ගය Angular basics, component communication, services, RxJS, forms සහ production architecture ආවරණය කරයි.',
      ],
      tags: ['TypeScript', 'Framework', 'Enterprise යෙදුම්'],
      usages: [
        'Enterprise dashboards සහ admin systems',
        'Forms බහුල business applications',
        'ශක්තිමත් project conventions අවශ්‍ය යෙදුම්',
        'Framework-level routing, dependency injection සහ testing tools අවශ්‍ය teams',
      ],
    },
    foundations: {
      ...en.foundations,
      description:
        'මූලික කරුණු යනු frameworks, languages, interviews සහ production systems හරහා නැවත භාවිතා වන ඉංජිනේරු සංකල්ප සඳහා වූ ඉගෙනුම් මාර්ගයයි.',
      history: [
        {
          title: 'සංකල්ප tools වලට වඩා දිගුකාලීනයි',
          body: 'Frameworks වෙනස් වුවද identity, sessions, authorization, HTTP, browser security, testing සහ deployment trade-offs නැවත නැවත මතුවේ.',
        },
        {
          title: 'පොදු ඉගෙනුම් අවකාශය',
          body: 'මෙම සංකල්ප එක් වරක් ඉගෙනගෙන React, Next.js, Java සහ architecture ප්‍රශ්නවලට යෙදීමට මෙහි වෙන් කර ඇත.',
        },
      ],
      officialLinks: [
        { ...en.foundations.officialLinks[0], label: 'OAuth 2.0 හැඳින්වීම' },
        {
          ...en.foundations.officialLinks[1],
          label: 'OpenID Connect හැඳින්වීම',
        },
        {
          ...en.foundations.officialLinks[2],
          label: 'OWASP ආරක්ෂක මාර්ගෝපදේශ',
        },
      ],
      primaryAction: {
        ...en.foundations.primaryAction,
        label: 'සත්‍යාපන පාඩම විවෘත කරන්න',
      },
      summary: [
        'එක් frontend framework එකකට වඩා විශාල මාතෘකා සඳහා මූලික කරුණු භාවිතා කරන්න.',
        'Authentication පරිශීලකයා කවුදැයි තහවුරු කරයි. Authorization ඔහුට කළ හැකි දේ තීරණය කරයි.',
        'OAuth 2.0 delegated authorization සඳහා වන අතර OpenID Connect login identity layer එක එක් කරයි.',
      ],
      tags: ['ආරක්ෂාව', 'අනන්‍යතාව', 'Architecture'],
      title: 'මූලික කරුණු',
      usages: [
        'Login, sessions, cookies සහ tokens පැහැදිලිව විස්තර කිරීම',
        'OAuth consent, scopes සහ delegated access තේරුම් ගැනීම',
        'Framework එකකට සීමා නොවන interview answers සූදානම් කිරීම',
        'ආරක්ෂාව, testing සහ user trust සමඟ production features සැලසුම් කිරීම',
      ],
    },
    java: {
      ...en.java,
      description:
        'Java යනු backend systems, enterprise applications, distributed services සහ දිගුකාලීන platforms සඳහා භාවිතා වන පරිණත object-oriented programming language එකකි.',
      history: [
        {
          title: 'ආරම්භයේ සිටම portable',
          body: '1990 දශකයේ හඳුන්වාදුන් Java, Java Virtual Machine හරහා විවිධ operating systems මත එකම program එක ධාවනය කිරීම අරමුණු කළේය.',
        },
        {
          title: 'අඛණ්ඩ පරිණාමය',
          body: 'Generics, lambdas, streams, modules, records, pattern matching සහ virtual threads හරහා platform එක වර්ධනය විය.',
        },
        {
          title: 'විවෘත platform එකක්',
          body: 'OpenJDK යනු Java SE හි open-source reference implementation එක වන අතර community එක පුළුල් libraries සහ tools ecosystem එකක් පවත්වාගෙන යයි.',
        },
      ],
      officialLinks: en.java.officialLinks.map((link, index) => ({
        ...link,
        label: ['Java ඉගෙනුම් අඩවිය', 'Oracle Java', 'Java ලේඛන', 'OpenJDK'][
          index
        ],
      })),
      summary: [
        'Java මඟින් types, classes, methods, object design, collections සහ application structure පැහැදිලිව ඉගෙන ගත හැක.',
        'මෙම academy එක Core Java for the Impatient පොත guided learning option එකක් ලෙස භාවිතා කරයි.',
        'Java landing page එක language එක කෙරෙහි අවධානය යොමු කරන අතර book chapters සහ backend testing වෙනම sidebar lessons ලෙස ඇත.',
      ],
      tags: ['Backend', 'OOP', 'JVM'],
      usages: [
        'REST APIs, microservices සහ backend systems',
        'Enterprise සහ financial applications',
        'Android ecosystem foundations',
        'Data processing, messaging සහ long-running server workloads',
      ],
    },
    nextjs: {
      ...en.nextjs,
      description:
        'Next.js යනු file-based routing, server rendering, static generation, API routes, streaming සහ production deployment සඳහා භාවිතා කරන React framework එකකි.',
      history: [
        {
          title: 'Server මත React',
          body: 'Server-rendered React applications ගොඩනැගීම සහ deploy කිරීම සරල කිරීමට Next.js 2016 දී හඳුන්වා දෙන ලදී.',
        },
        {
          title: 'Full-stack framework එකක්',
          body: 'Pages සහ server rendering සිට App Router, Server Components, caching, route handlers සහ production tooling දක්වා එය වර්ධනය විය.',
        },
        {
          title: 'Production ecosystem',
          body: 'Vercel සහ open-source community එක Next.js සංවර්ධනය කරන අතර එය production React applications වල පුළුල්ව භාවිතා වේ.',
        },
      ],
      officialLinks: en.nextjs.officialLinks.map((link, index) => ({
        ...link,
        label: [
          'Next.js වෙබ් අඩවිය',
          'Next.js ලේඛන',
          'Next.js පාඩම්',
          'Vercel',
        ][index],
      })),
      primaryAction: {
        ...en.nextjs.primaryAction,
        label: 'හැඳින්වීමෙන් ආරම්භ කරන්න',
      },
      summary: [
        'React UI model එක ගොඩනඟන අතර Next.js routing, rendering, caching, APIs සහ deployment structure එක එක් කරයි.',
        'SEO, වේගවත් first load, server data access, authentication සහ API endpoints අවශ්‍ය යෙදුම් සඳහා එය සුදුසුය.',
        'මෙම මාර්ගය routing, layouts, Server Components, rendering modes, middleware සහ monitoring ආවරණය කරයි.',
      ],
      tags: ['React framework', 'App Router', 'Full-stack'],
      usages: [
        'Marketing sites, documentation, dashboards සහ SaaS products',
        'SEO-sensitive server-rendered React pages',
        'API routes සහ server data access සහිත full-stack apps',
        'Static, dynamic සහ streaming UI මිශ්‍ර applications',
      ],
    },
    react: {
      ...en.react,
      description:
        'React යනු components මඟින් user interfaces ගොඩනැගීමට භාවිතා කරන JavaScript library එකකි. සංකීර්ණ screens නැවත භාවිතා කළ හැකි කුඩා කොටස්වලට බෙදීමට එය උපකාරී වේ.',
      history: [
        {
          title: 'Facebook හි ආරම්භය',
          body: 'React Facebook තුළ ආරම්භ වී Instagram වෙත යාමට පෙර Facebook News Feed සඳහා භාවිතා විය.',
        },
        {
          title: 'Open-source නිකුතුව',
          body: '2013 open-source නිකුතුව component-driven UI development frontend community එක පුරා ප්‍රචලිත කළේය.',
        },
        {
          title: 'නවීන React',
          body: 'Fiber, Hooks, concurrent rendering, Server Components සහ framework ecosystem එක React හි ප්‍රධාන පරිණාමයන්ය.',
        },
      ],
      officialLinks: en.react.officialLinks.map((link, index) => ({
        ...link,
        label: [
          'React වෙබ් අඩවිය',
          'React ඉගෙන ගන්න',
          'API ලේඛන',
          'React පුවත්',
        ][index],
      })),
      primaryAction: {
        ...en.react.primaryAction,
        label: 'useRef සමඟ ආරම්භ කරන්න',
      },
      summary: [
        'React UI එක components ලෙස සිතීමට උගන්වයි: සෑම කොටසක්ම data ලබාගෙන output render කර state වෙනස් වූ විට update වේ.',
        'එය කුඩා widget එකක සිට dashboard, React Native mobile app හෝ Next.js full-stack app දක්වා භාවිතා කළ හැක.',
        'මෙම මාර්ගය hooks, rendering, state management, performance, testing සහ interview examples වලින් ආරම්භ වේ.',
      ],
      tags: ['Components', 'Hooks', 'UI architecture'],
      usages: [
        'Interactive web applications සහ dashboards',
        'Reusable design-system components',
        'Client-side state සහිත single-page applications',
        'React Native mobile apps සහ framework-based full-stack apps',
      ],
    },
    interviews: {
      ...en.interviews,
      description:
        'සම්මුඛ පරීක්ෂණ සූදානම තාක්ෂණික දැනුම පැහැදිලි පිළිතුරු, trade-off thinking සහ විශ්වාසදායක සන්නිවේදනය බවට පත් කරයි.',
      history: [
        {
          title: 'මූලික කරුණු පළමුව',
          body: 'ශක්තිමත් interview එකක් concepts පැහැදිලි කිරීම, code කියවීම සහ answers සැබෑ වැඩ සමඟ සම්බන්ධ කිරීමෙන් ආරම්භ වේ.',
        },
        {
          title: 'Syntax ඉක්මවා',
          body: 'Architecture, performance, debugging, delivery ownership සහ team impact පිළිබඳ සාකච්ඡාව ද interview practice තුළ තිබිය යුතුය.',
        },
        {
          title: 'අත්දැකීම් පුස්තකාලය',
          body: 'මෙම මාර්ගය සැබෑ interview experiences සහ target questions පැහැදිලි answer notes බවට පත් කරයි.',
        },
      ],
      officialLinks: en.interviews.officialLinks.map((link) => ({
        ...link,
        label: `${link.label} වෘත්තීය සම්පත`,
      })),
      primaryAction: {
        ...en.interviews.primaryAction,
        label: 'අත්දැකීම් විවෘත කරන්න',
      },
      summary: [
        'අරමුණ scripts කටපාඩම් කිරීම නොව interviewer කෙනෙකුට ඔබගේ thinking අනුගමනය කළ හැකි structure එකකින් පිළිතුරු දීමයි.',
        'ඔබව හඳුන්වාදීම, trade-offs, code සහ project decisions පැහැදිලි කිරීම පුහුණු කරන්න.',
        'සෑම interview note එකක්ම නැවත කියවීමට සහ දියුණු කිරීමට පහසු විය යුතුය.',
      ],
      tags: ['සන්නිවේදනය', 'සැබෑ ප්‍රශ්න', 'පුහුණුව'],
      title: 'සම්මුඛ පරීක්ෂණ',
      usages: [
        'Technical round එකකට පෙර සැබෑ ප්‍රශ්න පුහුණු කිරීම',
        'Project experience සංක්ෂිප්ත answers බවට පත් කිරීම',
        'React, Java, MFE, architecture සහ delivery follow-ups සූදානම් කිරීම',
        'සැබෑ interview එකකින් පසු වැඩිදියුණු කළ යුතු දේ සමාලෝචනය කිරීම',
      ],
    },
  },
} satisfies LocalizedLearningContent;
