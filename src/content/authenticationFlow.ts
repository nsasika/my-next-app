import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';
import { foundationLessons } from '@/content/foundations';
import type { Locale } from '@/i18n/config';

const sinhalaAuthenticationFlow = {
  header: {
    description:
      'Demo පිවිසුම් තොරතුරු, signed JWT එකක්, HTTP-only cookie එකක් සහ Next.js proxy එකක් භාවිතයෙන් මෙම academy එක ඉගෙනුම් routes ආරක්ෂා කරන ආකාරය.',
    eyebrow: 'මූලික කරුණු / සත්‍යාපනය',
    tags: ['සත්‍යාපනය', 'JWT', 'HTTP-only Cookie', 'Next.js Proxy'],
    title: 'වත්මන් සත්‍යාපන ප්‍රවාහය',
  },
  theory: {
    title: 'සත්‍යාපනය පරිශීලකයා කවුදැයි තහවුරු කරයි',
    summary:
      'මෙය ඉගෙනීම සඳහා සරල කළ implementation එකකි. Demo පිවිසුම් තොරතුරු මඟින් අනන්‍යතාව තහවුරු කර, signed session token එකක් සාදා, ආරක්ෂිත routes load කළ හැකිදැයි server එක තීරණය කරයි.',
    points: [
      'Browser එක පිවිසුම් තොරතුරු login API route එකට යවයි.',
      'Server එක demo user පරීක්ෂා කර කෙටි කාලීන JWT එකක් sign කරයි.',
      'JWT එක access_token නමැති HTTP-only cookie එකේ ගබඩා කරයි.',
      'ආරක්ෂිත ඉගෙනුම් page render කිරීමට පෙර Next.js proxy එක cookie එක පරීක්ෂා කරයි.',
      'Logout කිරීමෙන් cookie එක කල් ඉකුත් කර ඉදිරි ආරක්ෂිත navigation නැවත login වෙත යවයි.',
    ],
    code: 'identity -> signed session -> server-checked route access',
    whatToTry: [
      'Login වී ආරක්ෂිත page එක refresh කරන්න; පසුව logout වී එම page එක නැවත විවෘත කරන්න.',
      'Browser developer tools විවෘත කර JavaScript මඟින් HTTP-only cookie එක කියවිය නොහැකි බව බලන්න.',
    ],
  },
  flow: {
    title: 'වත්මන් login අනුපිළිවෙළ',
    steps: [
      {
        label: 'පිවිසුම් තොරතුරු යැවීම',
        description:
          'Login form එක email සහ password /api/auth/login වෙත POST කරයි.',
      },
      {
        label: 'Token එක සෑදීම',
        description:
          'Demo user ගැළපෙන විට පමණක් route handler එක JWT එකක් sign කරයි.',
      },
      {
        label: 'Cookie එක සැකසීම',
        description: 'Token එක පැය 8ක් සඳහා HTTP-only cookie එකක සුරකියි.',
      },
      {
        label: 'Routes ආරක්ෂා කිරීම',
        description:
          'ආරක්ෂිත lesson routes load වීමට පෙර proxy එක cookie එක verify කරයි.',
      },
    ],
  },
  codeExamples: foundationLessons.currentAuthenticationFlow.codeExamples,
  references: [
    {
      href: 'https://nextjs.org/docs/app/guides/authentication',
      label: 'Next.js සත්‍යාපන මාර්ගෝපදේශය',
    },
    {
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies',
      label: 'MDN HTTP cookies',
    },
    {
      href: 'https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html',
      label: 'OWASP session කළමනාකරණය',
    },
  ],
} as const satisfies ConceptLessonContent;

const tamilAuthenticationFlow = {
  header: {
    description:
      'Demo உள்நுழைவு விவரங்கள், signed JWT, HTTP-only cookie மற்றும் Next.js proxy மூலம் இந்த academy கற்றல் routes-ஐ பாதுகாக்கும் விதம்.',
    eyebrow: 'அடிப்படைகள் / அங்கீகாரம்',
    tags: ['அங்கீகாரம்', 'JWT', 'HTTP-only Cookie', 'Next.js Proxy'],
    title: 'தற்போதைய அங்கீகார ஓட்டம்',
  },
  theory: {
    title: 'அங்கீகாரம் பயனர் யார் என்பதை உறுதிப்படுத்துகிறது',
    summary:
      'இது கற்றலுக்காக எளிமைப்படுத்தப்பட்ட implementation. Demo விவரங்கள் அடையாளத்தை உறுதிப்படுத்துகின்றன, signed session token உருவாக்கப்படுகிறது, பாதுகாக்கப்பட்ட routes load ஆகலாமா என்பதை server தீர்மானிக்கிறது.',
    points: [
      'Browser உள்நுழைவு விவரங்களை login API route-க்கு அனுப்புகிறது.',
      'Server demo user-ஐச் சரிபார்த்து குறுகிய கால JWT-ஐ sign செய்கிறது.',
      'JWT access_token என்ற HTTP-only cookie-ல் சேமிக்கப்படுகிறது.',
      'பாதுகாக்கப்பட்ட கற்றல் page render ஆகும் முன் Next.js proxy cookie-ஐச் சரிபார்க்கிறது.',
      'Logout cookie-ஐ காலாவதியாக்கி அடுத்த பாதுகாக்கப்பட்ட navigation-ஐ login-க்கு அனுப்புகிறது.',
    ],
    code: 'identity -> signed session -> server-checked route access',
    whatToTry: [
      'Login செய்து பாதுகாக்கப்பட்ட page-ஐ refresh செய்யவும்; பின்னர் logout செய்து அதே page-ஐ மீண்டும் திறக்கவும்.',
      'Browser developer tools-ல் JavaScript மூலம் HTTP-only cookie-ஐ வாசிக்க முடியாது என்பதைப் பார்க்கவும்.',
    ],
  },
  flow: {
    title: 'தற்போதைய login வரிசை',
    steps: [
      {
        label: 'உள்நுழைவு விவரங்களை அனுப்புதல்',
        description:
          'Login form email மற்றும் password-ஐ /api/auth/login-க்கு POST செய்கிறது.',
      },
      {
        label: 'Token உருவாக்குதல்',
        description:
          'Demo user பொருந்தினால் மட்டுமே route handler JWT-ஐ sign செய்கிறது.',
      },
      {
        label: 'Cookie அமைத்தல்',
        description:
          'Token 8 மணி நேரத்திற்கு HTTP-only cookie-ல் சேமிக்கப்படுகிறது.',
      },
      {
        label: 'Routes-ஐ பாதுகாத்தல்',
        description:
          'பாதுகாக்கப்பட்ட lesson routes load ஆகும் முன் proxy cookie-ஐ verify செய்கிறது.',
      },
    ],
  },
  codeExamples: foundationLessons.currentAuthenticationFlow.codeExamples,
  references: [
    {
      href: 'https://nextjs.org/docs/app/guides/authentication',
      label: 'Next.js அங்கீகார வழிகாட்டி',
    },
    {
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies',
      label: 'MDN HTTP cookies',
    },
    {
      href: 'https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html',
      label: 'OWASP session மேலாண்மை',
    },
  ],
} as const satisfies ConceptLessonContent;

export const authenticationFlowByLocale = {
  en: foundationLessons.currentAuthenticationFlow,
  si: sinhalaAuthenticationFlow,
  ta: tamilAuthenticationFlow,
} as const satisfies Record<Locale, ConceptLessonContent>;
