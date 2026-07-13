import type { Dictionary } from '../types';
import { LOCALIZED_UI } from '../ui';

export const si = {
  locale: 'si',
  ...LOCALIZED_UI.si,
  home: {
    hero: {
      body: 'අපගේ අරමුණ සරලයි: රැකියා අපේක්ෂකයින්ට Java, React, frontend architecture සහ full-stack තාක්ෂණික තීරණ පැහැදිලි විස්තර, සම්මුඛ පරීක්ෂණයට ගැළපෙන උදාහරණ සහ මඟපෙන්වන අභ්‍යාස මඟින් ඉගෙන ගත හැකි ප්‍රායෝගික වේදිකාවක් ගොඩනැගීමයි.',
      eyebrow: 'රැකියා අපේක්ෂකයින් සඳහා සම්මුඛ පරීක්ෂණ සූදානම',
      heading:
        "Nalin's Academy තාක්ෂණික දැනුම සම්මුඛ පරීක්ෂණ විශ්වාසය බවට පත් කිරීමට උපකාර කරයි.",
      primaryAction: 'ඇකඩමිය බලන්න',
      secondaryAction: 'නලින්ගේ වෘත්තීය ගොනුව බලන්න',
    },
    platform: {
      eyebrow: 'ඉගෙනුම් මාර්ගය',
      heading: 'ඉගෙනීමේ සිට සාර්ථක පිළිතුරක් දක්වා සරල මඟක්.',
      steps: [
        {
          title: 'මාතෘකාවක් තෝරන්න',
          body: 'React Hooks, Java මූලික කරුණු හෝ full-stack විශ්ලේෂණය වැනි නිශ්චිත ඉගෙනුම් මාර්ගයකින් ආරම්භ කරන්න.',
        },
        {
          title: 'උදාහරණ සමඟ ඉගෙන ගන්න',
          body: 'න්‍යාය කියවා, එය ප්‍රායෝගික code සහ සාමාන්‍ය අමතර සම්මුඛ ප්‍රශ්න සමඟ සම්බන්ධ කරන්න.',
        },
        {
          title: 'පැහැදිලිව විස්තර කරන්න',
          body: 'බඳවාගන්නන්ට සහ ඉංජිනේරු සම්මුඛ පරීක්ෂකයින්ට ඉක්මනින් තේරුම් ගත හැකි ලෙස පිළිතුරු පුහුණු කරන්න.',
        },
      ],
    },
    snapshot: {
      body: 'වේදිකාවේ දැනට ඇති ඉගෙනුම් අන්තර්ගතය සහ එය පවත්වාගෙන යන ගුණාත්මක ප්‍රමිතිය පිළිබඳ සංක්ෂිප්ත දසුනක්.',
      eyebrow: 'ඇකඩමියේ සාරාංශය',
      stats: [
        { label: 'ඉගෙනුම් මාර්ග', value: '4+' },
        { label: 'ප්‍රායෝගික නිරූපණ', value: '30+' },
        { label: 'පරීක්ෂණ ආවරණය', value: '80%' },
      ],
      title: 'විශ්වාසයෙන් ඉගෙන ගන්න, පුහුණු වන්න, විස්තර කරන්න',
    },
  },
  academy: {
    hero: {
      body: 'React, Java, frontend architecture සහ full-stack සංකල්ප පැහැදිලිව ඉගෙනගෙන, ක්‍රියාත්මක කර, සම්මුඛ පරීක්ෂණයකදී විශ්වාසයෙන් සාකච්ඡා කිරීමට කැමති රැකියා අපේක්ෂකයින් සඳහා නිර්මාණය කළ ඉගෙනුම් වේදිකාවකි.',
      buildLabAction: 'Build Lab බලන්න',
      eyebrow: 'ප්‍රායෝගික සම්මුඛ පරීක්ෂණ සූදානම',
      heading:
        "Nalin's Academy ඉංජිනේරු දැනුම සම්මුඛ පරීක්ෂණ විශ්වාසය බවට පත් කරයි.",
      portfolioAction: 'නලින්ගේ වෘත්තීය ගොනුව බලන්න',
    },
    learningPromise: {
      eyebrow: 'අපගේ ඉගෙනුම් පොරොන්දුව',
      heading: 'තේරුම් ගන්න, ගොඩනඟන්න, පැහැදිලි කරන්න',
      items: [
        {
          title: 'සංකල්පය තේරුම් ගන්න',
          body: 'සම්මුඛ පරීක්ෂකයින් ඔබෙන් පැහැදිලි කිරීමට අපේක්ෂා කරන සංක්ෂිප්ත න්‍යාය සහ තාක්ෂණික තේරීම්වලින් ආරම්භ කරන්න.',
        },
        {
          title: 'එය code සමඟ සම්බන්ධ කරන්න',
          body: 'වෙන්වූ අර්ථ දැක්වීම් කටපාඩම් කිරීම වෙනුවට ප්‍රායෝගික React, Java සහ Next.js උදාහරණ භාවිත කරන්න.',
        },
        {
          title: 'පිළිතුර පුහුණු කරන්න',
          body: 'තාක්ෂණික අවබෝධය පැහැදිලි සහ ක්‍රමානුකූල සම්මුඛ පරීක්ෂණ පිළිතුරක් බවට පත් කරන්න.',
        },
      ],
    },
    purpose: {
      body: 'පුද්ගලික වෘත්තීය ගොනුව සමඟ ඉගෙනුම් අත්දැකීම මිශ්‍ර නොකර, ව්‍යවසාය මට්ටමේ ව්‍යාපෘතිවලින් ලබාගත් පාඩම් නිශ්චිත න්‍යාය, ක්‍රියාත්මක කළ හැකි උදාහරණ, අමතර සම්මුඛ ප්‍රශ්න සහ architecture සාකච්ඡා බවට පරිවර්තනය කරයි.',
      eyebrow: 'ඇකඩමියේ අරමුණ',
      stats: [
        { label: 'ඉගෙනුම් මාර්ග', value: '4+' },
        { label: 'ප්‍රායෝගික නිරූපණ', value: '30+' },
        { label: 'පරීක්ෂණ ආවරණය', value: '80%' },
      ],
      title: 'ප්‍රායෝගික ඉංජිනේරු අත්දැකීම්වලින් ඉගෙන ගන්න',
    },
    tracks: {
      eyebrow: 'ඉගෙනුම් මාර්ග',
      title: 'ඔබට වර්ධනය වීමට අවශ්‍ය මාර්ගය තෝරන්න',
      panels: [
        {
          body: 'Hooks, rendering, state management, performance, React 18 සහ React 19 නිශ්චිත උදාහරණ මඟින් පැහැදිලි කරයි.',
          items: ['Hooks', 'Performance', 'State management'],
          label: 'React',
          title: 'නවීන React ඉංජිනේරුකරණය',
        },
        {
          body: 'Core Java සංකල්ප, object-oriented design, interfaces, records සහ සම්මුඛ පරීක්ෂණයට ගැළපෙන අභ්‍යාස.',
          items: ['Core Java', 'OOP', 'ප්‍රායෝගික අභ්‍යාස'],
          label: 'Java',
          title: 'Java මූලික කරුණු',
        },
        {
          body: 'App Router, rendering, caching, authentication, SEO, middleware සහ production deployment තීරණ.',
          items: ['App Router', 'Rendering', 'Production'],
          label: 'Next.js',
          title: 'Production සඳහා Next.js',
        },
        {
          body: 'Architecture තීරණ ක්‍රියාත්මක වන application code සමඟ සම්බන්ධ කරන මඟපෙන්වන අභියෝග.',
          items: ['Architecture', 'Implementation', 'Review'],
          label: 'Build Lab',
          title: 'ගොඩනඟා පැහැදිලි කරන්න',
        },
      ],
    },
  },
  portfolio: {
    capability: {
      eyebrow: 'ඉංජිනේරු හැකියාවන්',
      title: 'තාක්ෂණික හැකියා සිතියම',
      panels: [
        {
          body: 'React.js, TypeScript, micro-frontends, frontend නවීකරණය, migrations, performance සහ නඩත්තු කිරීමට පහසු UI පද්ධති.',
          items: ['React', 'TypeScript', 'Modern UI'],
          label: 'ව්‍යවසාය frontend',
          title: 'ව්‍යවසාය frontend ඉංජිනේරුකරණය',
        },
        {
          body: 'Java, Spring Boot, Scala, Node.js, REST/SOAP services, microservices, Oracle, PostgreSQL සහ CI/CD workflows.',
          items: ['Java', 'Spring Boot', 'Node.js'],
          label: 'Full-stack පදනම',
          title: 'Full-stack තාක්ෂණික පදනම',
        },
        {
          body: 'DBS Bank, GIC සහ EMC Singapore සමඟ Agile කණ්ඩායම්, කලාපීය පාර්ශ්වකරුවන් සහ ව්‍යවසාය ගුණාත්මක ප්‍රමිතීන් යටතේ ලබාගත් ප්‍රායෝගික අත්දැකීම්.',
          items: ['DBS Bank', 'GIC', 'EMC Singapore'],
          label: 'ව්‍යවසාය ව්‍යාපෘති',
          title: 'ව්‍යවසාය මට්ටමේ ව්‍යාපෘති සැපයීම',
        },
        {
          body: 'මගේ වත්මන් අවධානය frontend ප්‍රධාන කරගත් full-stack ඉංජිනේරුකරණයයි: ශක්තිමත් React දැනුම, Java/backend අවබෝධය සහ ව්‍යවසාය සන්නිවේදනය වැදගත් වන භූමිකා.',
          items: [
            'Java + React full-stack engineer',
            'Senior React frontend engineer',
            'React + Node.js engineer',
          ],
          label: 'අපේක්ෂිත භූමිකා',
          title: 'වෘත්තීය දිශානතිය',
        },
      ],
    },
    enterpriseDelivery: {
      body: 'ව්‍යවසාය පද්ධතිවල frontend ප්‍රධාන කරගත් full-stack අත්දැකීම්.',
      eyebrow: 'ව්‍යවසාය ව්‍යාපෘති',
      heading: 'React, TypeScript, Java',
    },
    experience: {
      body: 'මගේ ව්‍යවසාය ඉංජිනේරු අත්දැකීම් හැඩගස්වා ඇති භූමිකා, රටවල්, වගකීම් සහ තාක්ෂණයන් CV තොරතුරු මත පදනම්ව මෙහි පෙන්වයි. ප්‍රධාන කොඩි රැකියාව කළ රටත්, අනෙකුත් කොඩි ගනුදෙනුකරුවන් හෝ කලාපීය සහයෝගීතාවත් දක්වයි.',
      eyebrow: 'විශේෂ වෘත්තීය ගමන',
      title: 'සිංගප්පූරුව සහ ශ්‍රී ලංකාව පුරා වෘත්තීය අත්දැකීම්',
    },
    hero: {
      action: 'වෘත්තීය ඉතිහාසය බලන්න',
      eyebrow: 'ජ්‍යෙෂ්ඨ React සහ Java full-stack ඉංජිනේරු',
      heading: 'නලින් පද්මසිරි: ව්‍යවසාය ඉංජිනේරු වෘත්තීය ගොනුව',
      paragraphs: [
        'මම React, TypeScript, Java සහ නවීන full-stack architecture භාවිතයෙන් ව්‍යවසාය මට්ටමේ web applications ගොඩනඟමි.',
        'DBS Bank, GIC සහ EMC Singapore හි විශාල පද්ධති සඳහා frontend නවීකරණය, React migrations, micro-frontends, enterprise integrations, performance වැඩිදියුණු කිරීම් සහ රටවල් කිහිපයක් හරහා ආරක්ෂිත delivery පිළිබඳ අත්දැකීම් ඇත.',
      ],
    },
    resume: {
      docxLabel: 'CV එක DOCX ලෙස බාගන්න',
      downloadsLabel: 'CV බාගැනීම්',
      pdfLabel: 'CV එක PDF ලෙස බාගන්න',
    },
    stats: [
      { label: 'ඉංජිනේරු අත්දැකීම්', value: 'වසර 8+' },
      { label: 'විස්තරාත්මක භූමිකා', value: '6' },
      { label: 'රැකියාව කළ රටවල්', value: '2' },
    ],
    work: {
      'emc-percept': {
        countryName: 'සිංගප්පූරුව',
        dates: '2025 ඔක් 22 - 2025 දෙසැ 31',
        duration: 'මාස 2',
        role: 'ජ්‍යෙෂ්ඨ මෘදුකාංග ඉංජිනේරු',
        summary:
          'සිංගප්පූරුවේ තොග විදුලි වෙළඳපොළට සහාය වන EMC මූලික වෙළඳපොළ පද්ධතිවල විශ්වාසනීය integrations සහ නියාමන workflows සඳහා දායක විය.',
        highlights: [
          'තොග විදුලි වෙළඳපොළ මෙහෙයුම් සඳහා Java REST සහ SOAP services ගොඩනඟා නඩත්තු කළා.',
          'Performance tuning සහ data validation ඇතුළු Oracle SQL සහ stored procedures සංවර්ධනය කළා.',
          'නියාමන ලේඛන workflows සහ Angular/Vue frontend එකකට සහාය දුන්නා.',
        ],
      },
      'dbs-technopals': {
        collaboration: 'කලාපීය ව්‍යාපෘති: 🇭🇰 හොංකොං සහ 🇹🇼 තායිවානය',
        countryName: 'සිංගප්පූරුව',
        dates: '2022 සැප් 22 - 2025 සැප් 22',
        duration: 'වසර 3',
        role: 'ජ්‍යෙෂ්ඨ මෘදුකාංග ඉංජිනේරු',
        summary:
          'Scalable frontend architecture, backend integrations සහ ආරක්ෂිත CI/CD ක්‍රම භාවිතයෙන් ව්‍යවසාය banking, equities සහ trading platforms සැපයුවා.',
        highlights: [
          'AS/400 සහ .NET legacy පද්ධති Spring Boot services සමඟ React micro-frontends ලෙස නවීකරණය කළා.',
          'React 18 migration කටයුතු මෙහෙයවා concurrent rendering patterns මඟින් user experience වැඩිදියුණු කළා.',
          'OpenShift releases, dependency vulnerability remediation සහ 80%+ unit-test coverage පවත්වාගෙන ගියා.',
        ],
      },
      'gic-technopals': {
        countryName: 'සිංගප්පූරුව',
        dates: '2022 අප්‍රේ 18 - 2022 සැප් 2',
        duration: 'මාස 4',
        role: 'ජ්‍යෙෂ්ඨ මෘදුකාංග ඉංජිනේරු',
        summary:
          'Investment analysts සහ business teams භාවිත කළ enterprise applications වල usability, maintainability සහ performance වැඩිදියුණු කළා.',
        highlights: [
          'Class components functional React components සහ Hooks වෙත refactor කළා.',
          'Analysts සහ business stakeholders සඳහා workflow සහ data-presentation features ගොඩනැඟුවා.',
          'Django සහ SQLite analytics services සංවර්ධනය කර Jest test coverage ශක්තිමත් කළා.',
        ],
      },
      ideabits: {
        collaboration: 'ගනුදෙනුකරු ව්‍යාපෘති: 🇦🇺 ඕස්ට්‍රේලියාව සහ 🇪🇺 යුරෝපය',
        countryName: 'ශ්‍රී ලංකාව',
        dates: '2021 ජූලි 26 - 2022 අප්‍රේ 11',
        duration: 'මාස 8',
        role: 'ජ්‍යෙෂ්ඨ මෘදුකාංග ඉංජිනේරු',
        summary:
          'ජාත්‍යන්තර ගනුදෙනුකරුවන් සඳහා middleware, cloud workflows සහ full-stack MVP applications සැපයුවා.',
        highlights: [
          'BroadSign සහ Ayuda advertising platforms සම්බන්ධ කරන Node.js/Express middleware ගොඩනැඟුවා.',
          'PostgreSQL සහ Sequelize සමඟ AWS Step Functions සහ Lambda workflows නිර්මාණය කළා.',
          'යුරෝපීය ගනුදෙනුකරුවන්ට වේගවත් product validation සඳහා Next.js සහ React MVPs සැපයුවා.',
        ],
      },
      'creative-pagero': {
        collaboration: 'නිෂ්පාදන සහයෝගීතාව: 🇸🇪 ස්වීඩනය',
        countryName: 'ශ්‍රී ලංකාව',
        dates: '2018 නොවැ 1 - 2021 අගෝ 16',
        duration: 'වසර 2 මාස 9',
        role: 'මෘදුකාංග ඉංජිනේරු → ජ්‍යෙෂ්ඨ මෘදුකාංග ඉංජිනේරු',
        summary:
          'ගෝලීය මෙහෙයුම් සඳහා distributed enterprise systems සංවර්ධනය කරමින් ජ්‍යෙෂ්ඨ භූමිකාවකට උසස් විය.',
        highlights: [
          'ජාත්‍යන්තර e-invoicing සහ freight products සඳහා React interfaces සහ Scala/Java microservices ගොඩනැඟුවා.',
          'PostgreSQL සහ RabbitMQ workflows සමඟ invoice audit සහ validation services නිර්මාණය කළා.',
          'CI/CD සහ production support ලබා දෙමින් කනිෂ්ඨ ඉංජිනේරුවන්ට මඟපෙන්වීම සිදු කළා.',
        ],
      },
      hybriteq: {
        countryName: 'ශ්‍රී ලංකාව',
        dates: '2018 පෙබ - 2018 සැප්',
        duration: 'මාස 8',
        role: 'මෘදුකාංග ඉංජිනේරු',
        summary:
          'නවතම CV සාරාංශයේ සඳහන් මුල් වෘත්තීය මෘදුකාංග ඉංජිනේරු භූමිකාව.',
        highlights: [
          'ශ්‍රී ලාංකික delivery team එකක වාණිජ මෘදුකාංග ඉංජිනේරු වෘත්තිය ආරම්භ කළා.',
          'පසුකාලීන full-stack සහ enterprise engineering භූමිකා සඳහා වෘත්තීය පදනම ගොඩනඟා ගත්තා.',
        ],
      },
    },
  },
} as const satisfies Dictionary;
