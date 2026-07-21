import type { AppCopy } from './types';

export const siApp = {
  auth: {
    backLinkLabel: 'පොදු වෙබ් අඩවියට ආපසු',
    checkingLabel: 'පිවිසුම් තොරතුරු පරීක්ෂා කරමින්...',
    connectionError:
      'පිවිසීම අසාර්ථකයි. සම්බන්ධතාව පරීක්ෂා කර නැවත උත්සාහ කරන්න.',
    credentialsHint:
      'අසාර්ථක අවස්ථාව පරීක්ෂා කිරීමට demo තොරතුරුවලට වෙනස් අගයන් භාවිතා කරන්න.',
    credentialsTitle: 'මෙම demo පිවිසුම් තොරතුරු භාවිතා කරන්න',
    description:
      'ප්‍රායෝගික උදාහරණ ආරක්ෂා කිරීමට මෙම යෙදුම demo banking user කෙනෙක්, signed JWT එකක් සහ HTTP-only cookie එකක් භාවිතා කරයි.',
    emailLabel: 'විද්‍යුත් තැපෑල',
    eyebrow: 'සත්‍යාපන නිරූපණය',
    loginButtonLabel: 'පිවිසෙන්න',
    loginFailureLabel: 'විද්‍යුත් තැපෑල හෝ මුරපදය වැරදියි.',
    loginSuccessLabel: 'පිවිසීම සාර්ථකයි.',
    oauthDescription:
      'මෙම buttons UI placeholders වේ. Production පියවර වන්නේ provider callbacks, PKCE, state validation සහ app session සම්බන්ධ කිරීමයි.',
    oauthDividerLabel: 'හෝ මෙයින් ඉදිරියට යන්න',
    oauthProviders: [
      { id: 'google', label: 'Google සමඟ ඉදිරියට' },
      { id: 'apple', label: 'Apple සමඟ ඉදිරියට' },
      { id: 'linkedin', label: 'LinkedIn සමඟ ඉදිරියට' },
    ],
    oauthTodoLabel: 'ඉදිරියට කළ යුතුයි',
    passwordLabel: 'මුරපදය',
    publicSiteLabel: 'පොදු වෙබ් අඩවිය',
    redirectingLabel: 'ඉගෙනුම් වැඩබිමට යොමු කරමින්...',
    title: 'Nalin’s Academy වෙත පිවිසෙන්න',
  },
  buildLab: {
    deliveryModelLabel: 'බෙදාහැරීමේ ආකෘතිය',
    eyebrow: 'ඉංජිනේරු හැකියාවන්',
    flow: [
      {
        title: 'සැලසුම් කර ගොඩනඟන්න',
        body: 'අදහස් App Router pages, typed React components, reusable content modules සහ Node.js API routes බවට පත් වේ.',
      },
      {
        title: 'AI සහාය ඇති ක්‍රියාත්මක කිරීම',
        body: 'Codex, GitHub Copilot සහ ChatGPT වේගය වැඩි කරන අතර ඉංජිනේරු විනිශ්චය code එක නඩත්තු කළ හැකිව තබයි.',
      },
      {
        title: 'Repository ක්‍රියාවලිය',
        body: 'Meaningful commits, linting, type checks, unit coverage සහ build validation සමඟ වෙනස්කම් GitHub හරහා ගමන් කරයි.',
      },
      {
        title: 'Vercel deployments',
        body: 'Production වෙත ප්‍රවර්ධනය කිරීමට පෙර preview deployments මඟින් feature branches පරීක්ෂා කරයි.',
      },
    ],
    heading: 'ගොඩනැගීමේ පරීක්ෂණාගාරය',
    heroBody:
      'Nalin’s Academy සැලසුම් කිරීම, සංවර්ධනය, පරීක්ෂා කිරීම, version කිරීම සහ deploy කිරීම පිළිබඳ පැහැදිලි දසුනක්.',
    labels: {
      'Frontend platform': 'Frontend වේදිකාව',
      'Backend layer': 'Backend ස්තරය',
      'AI-assisted engineering': 'AI සහාය ඇති ඉංජිනේරුකරණය',
      'Delivery platform': 'බෙදාහැරීමේ වේදිකාව',
      'Static quality checks': 'ස්ථිතික ගුණාත්මක පරීක්ෂණ',
      'Minimum unit coverage': 'අවම unit test ආවරණය',
      'Compile-time safety': 'Compile-time ආරක්ෂාව',
      'Preview + production': 'Preview සහ production',
      'Meaningful commits': 'අර්ථවත් commits',
      'Required before merge': 'Merge කිරීමට පෙර අවශ්‍යයි',
      'Quality gate target': 'ගුණාත්මක සීමාව',
      'No emit type-check': 'Output නොසාදන type-check',
      'Branch-based releases': 'Branch පදනම් releases',
      'Readable project history': 'කියවිය හැකි project history',
      Preview: 'පෙරදසුන',
      Production: 'නිෂ්පාදනය',
      'Feature / pull request branches': 'Feature / pull request branches',
      'Production branch': 'Production branch',
      'Every meaningful branch can be reviewed with an isolated deployment URL before it reaches users.':
        'පරිශීලකයින් වෙත යාමට පෙර සෑම වැදගත් branch එකක්ම වෙනම deployment URL එකකින් සමාලෝචනය කළ හැක.',
      'Validated changes are promoted to the public academy experience after checks pass.':
        'පරීක්ෂණ සමත් වූ වෙනස්කම් public academy වෙත ප්‍රවර්ධනය කරයි.',
      'Meaningful commit message': 'අර්ථවත් commit message',
      'ESLint and Prettier': 'ESLint සහ Prettier',
      'TypeScript no-emit check': 'TypeScript no-emit පරීක්ෂණය',
      'Vitest unit coverage >= 80%': 'Vitest unit coverage >= 80%',
      'Vercel preview deployment': 'Vercel preview deployment',
      'Production promotion': 'Production වෙත ප්‍රවර්ධනය',
      'Keep every change readable in project history.':
        'සෑම වෙනස්කමක්ම project history තුළ කියවිය හැකිව තබන්න.',
      'Catch formatting and common code quality issues early.':
        'Formatting සහ සාමාන්‍ය code quality ගැටලු කලින් හඳුනාගන්න.',
      'Run no-emit checks so contracts fail before runtime.':
        'Runtime ට පෙර contract වැරදි සොයාගැනීමට no-emit checks ධාවනය කරන්න.',
      'Keep unit coverage above the 80% quality gate.':
        'Unit coverage 80% quality gate ට ඉහළ තබන්න.',
      'Validate each branch in an isolated deployment.':
        'සෑම branch එකක්ම වෙනම deployment එකක පරීක්ෂා කරන්න.',
      'Promote only after checks and review signals pass.':
        'පරීක්ෂණ සහ review සමත් වූ පසු පමණක් promote කරන්න.',
    },
    releaseEyebrow: 'Release ක්‍රියාවලිය',
    releaseTitle: 'පරීක්ෂණ සහ deployment මාර්ග',
    stackEyebrow: 'පද්ධති සාරාංශය',
    stackUsageBody: 'Academy build එක තුළ භාවිතා කරයි.',
    stackTitle: 'තාක්ෂණ සහ ගුණාත්මක සංඥා',
  },
  shell: {
    closeNavigation: 'මෙනුව වසන්න',
    deleteAccount: 'ගිණුම මකන්න',
    editProfile: 'පැතිකඩ සංස්කරණය',
    learningAccount: 'ඉගෙනුම් ගිණුම',
    learningMap: 'ඉගෙනුම් සිතියම',
    learningMapBody:
      'මූලික කරුණු වලින් ආරම්භ කර, සැබෑ සම්මුඛ පරීක්ෂණ අත්දැකීම් සමාලෝචනය කර, පසුව තාක්ෂණික මාර්ග අනුපිළිවෙළින් ඉගෙන ගන්න.',
    learningWorkspace: 'ඉගෙනුම් වැඩබිම',
    lessonPromise: 'සෑම පාඩමකටම න්‍යාය, code උදාහරණයක් සහ demo එකක්.',
    logout: 'ඉවත් වන්න',
    openNavigation: 'මෙනුව විවෘත කරන්න',
    openUserProfile: 'පරිශීලක පැතිකඩ විවෘත කරන්න',
    soon: 'ළඟදීම',
    subscribeServices: 'සේවාවන්ට දායක වන්න',
  },
  sidebarLabels: {
    Foundations: 'මූලික කරුණු',
    Interviews: 'සම්මුඛ පරීක්ෂණ',
    Technologies: 'තාක්ෂණයන්',
    'Common engineering theory beyond a single framework.':
      'එක් framework එකකට සීමා නොවන පොදු ඉංජිනේරු න්‍යාය.',
    'Real questions faced in interviews, with answer notes.':
      'සැබෑ සම්මුඛ ප්‍රශ්න සහ පැහැදිලි පිළිතුරු සටහන්.',
    'Real interview experience': 'සැබෑ සම්මුඛ පරීක්ෂණ අත්දැකීම්',
    'Target interview questions': 'ඉලක්කගත සම්මුඛ පරීක්ෂණ ප්‍රශ්න',
    'Top 10 micro frontend questions': 'ප්‍රධාන micro frontend ප්‍රශ්න 10',
    Testing: 'පරීක්ෂණ',
    Observability: 'නිරීක්ෂණ හැකියාව',
    'Frontend production diagnostics': 'Frontend production ගැටලු විශ්ලේෂණය',
    'Frontend testing': 'Frontend පරීක්ෂණ',
    'Backend quality': 'Backend ගුණාත්මකභාවය',
    'Java backend testing': 'Java backend පරීක්ෂණ',
    Authentication: 'සත්‍යාපනය',
    Authorization: 'අවසර පාලනය',
    'Current Authentication Flow': 'වත්මන් සත්‍යාපන ක්‍රියාවලිය',
    'React Hooks': 'React Hooks පාඩම්',
    'Rules of Hooks': 'Hooks නීති',
    'React 18 Changes': 'React 18 වෙනස්කම්',
    'React 18 Overview': 'React 18 සාරාංශය',
    'Automatic Batching': 'ස්වයංක්‍රීය Batching',
    'React 19 Changes': 'React 19 වෙනස්කම්',
    'React 19 Overview': 'React 19 සාරාංශය',
    'State management': 'State කළමනාකරණය',
    'Slice + reducers': 'Slice සහ reducers',
    'Store example': 'Store උදාහරණය',
    'React Performance': 'React කාර්ය සාධනය',
    'Why and how to test': 'පරීක්ෂා කරන්නේ ඇයි සහ කෙසේද?',
    'Render profiling demo': 'Render profiling නිරූපණය',
    'SSR rendering': 'SSR rendering පාඩම',
    'CSR rendering': 'CSR rendering පාඩම',
    'Java for the Impatient': 'Core Java ඉගෙනුම් පොත',
    'Book overview': 'පොත් සාරාංශය',
    'Chapter 1': 'පළමු පරිච්ඡේදය',
    'Chapter 2': 'දෙවන පරිච්ඡේදය',
    'Next.js Fundamentals': 'Next.js මූලික කරුණු',
    'Intro to Next.js': 'Next.js හැඳින්වීම',
    'Server and Client Components': 'Server සහ Client Components',
    'Caching and revalidation': 'Caching සහ නැවත වලංගු කිරීම',
    'Production Next.js': 'Production Next.js',
    'Middleware and proxy': 'Middleware සහ proxy',
    'Layouts and route groups': 'Layouts සහ route groups',
    'SEO and metadata': 'SEO සහ metadata',
    'Deployment and monitoring': 'Deployment සහ අධීක්ෂණය',
    'Core Java examples and interview-ready fundamentals.':
      'Core Java උදාහරණ සහ සම්මුඛ පරීක්ෂණයට සුදුසු මූලික කරුණු.',
    'Hooks, rendering, state, side effects, and performance.':
      'Hooks, rendering, state, side effects සහ performance.',
    'Production React routing, rendering, APIs, and deployment.':
      'Production React routing, rendering, APIs සහ deployment.',
    'Component architecture, TypeScript, templates, and services.':
      'Component architecture, TypeScript, templates සහ services.',
  },
} as const satisfies AppCopy;
