import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';
import type { Locale } from '@/i18n/config';
import { nextjsLessons } from './nextjsLessons';

type NextjsLessonKey = keyof typeof nextjsLessons;

type NativeLesson = {
  description: string;
  points: readonly string[];
  summary: string;
  theoryTitle: string;
  title: string;
};

function localizedLesson(
  key: NextjsLessonKey,
  locale: 'si' | 'ta',
  copy: NativeLesson,
): ConceptLessonContent {
  const source = nextjsLessons[key];
  return {
    header: {
      ...source.header,
      description: copy.description,
      eyebrow:
        locale === 'si' ? 'Next.js / ඉගෙනුම් මාර්ගය' : 'Next.js / கற்றல் பாதை',
      title: copy.title,
    },
    theory: {
      code: source.theory.code,
      points: copy.points,
      summary: copy.summary,
      title: copy.theoryTitle,
    },
    references: source.references,
  };
}

const si: Record<NextjsLessonKey, NativeLesson> = {
  intro: {
    title: 'Next.js හැඳින්වීම',
    description:
      'Modern React projects framework එකකින් ආරම්භ වීමට හේතුව, CRA deprecation සහ Next.js හි භූමිකාව.',
    theoryTitle:
      'React UI සාදයි; Next.js production application shell එක සපයයි',
    summary:
      'Production app එකකට components වලට අමතරව routing, data loading, rendering, caching, errors, auth, SEO සහ deployment එකට වැඩ කළ යුතුය.',
    points: [
      'Routing හෝ production infrastructure අවශ්‍ය නව React apps සඳහා framework එකක් භාවිතා කිරීම නිර්දේශිතය.',
      'Create React App නව apps සඳහා deprecated වී maintenance mode එකේ පවතී.',
      'Next.js file routing, Server Components, APIs, metadata, caching සහ deployment workflows සපයයි.',
      'Client-only අවශ්‍යතාවක් නම් Vite වැනි build tool එකක් තවමත් සුදුසු විය හැක.',
    ],
  },
  routers: {
    title: 'App Router සහ Pages Router',
    description:
      'Modern App Router එක පැරණි Pages Router එකෙන් වෙනස් වන ආකාරය සහ නව projects සඳහා app directory භාවිතා කළ යුතු හේතුව.',
    theoryTitle: 'App Router යනු modern routing model එකයි',
    summary:
      'Routers දෙකම files URLs වලට map කළත් App Router, Server Components, nested layouts, route groups, loading/error boundaries සහ route handlers composable ලෙස එක් කරයි.',
    points: [
      'Pages Router pages directory සහ getServerSideProps වැනි data functions භාවිතා කරයි.',
      'App Router page.tsx, layout.tsx, loading.tsx, error.tsx සහ route.ts conventions භාවිතා කරයි.',
      'Layouts navigation අතර mounted වී sidebar සහ shared context තබාගනී.',
      'Legacy dependency නොමැති නව work සඳහා App Router තෝරන්න.',
    ],
  },
  components: {
    title: 'Server සහ Client Components',
    description: 'Server සහ browser අතර rendering work වෙන්කරන ආකාරය.',
    theoryTitle:
      'Server work server එකේ තබා interactivity පහළ client boundary එකකට ගෙනයන්න',
    summary:
      'App Router components default ලෙස Server Components වේ. Browser APIs, state, effects හෝ event handlers අවශ්‍ය විට පමණක් use client යොදන්න.',
    points: [
      'Server Components data fetch කර secrets browser එකෙන් ඈත් කරයි.',
      'Client Components click handlers, hooks සහ browser APIs සඳහා අවශ්‍යය.',
      'Server Component එක serializable props සමඟ Client Component එක render කළ හැක.',
      'කුඩා client boundaries browser වෙත යවන JavaScript අඩු කරයි.',
    ],
  },
  rendering: {
    title: 'SSR, SSG, ISR සහ CSR',
    description:
      'ප්‍රායෝගික pages සඳහා නිවැරදි rendering strategy එක තෝරන ආකාරය.',
    theoryTitle: 'මුළු app එකට නොව route එකකට rendering තෝරන්න',
    summary:
      'එකම Next.js app එක static, request-time, incrementally regenerated සහ client-interactive content එකට භාවිතා කළ හැක.',
    points: [
      'Build-time දන්නා content සඳහා SSG.',
      'Deployment පසු periodic updates සඳහා ISR.',
      'Fresh request-specific හෝ user-specific data සඳහා SSR.',
      'Page එක useful වූ පසු highly interactive widgets සඳහා CSR.',
    ],
  },
  caching: {
    title: 'Caching සහ Revalidation',
    description: 'Repeated work අඩු කර content fresh තබන ආකාරය.',
    theoryTitle: 'නිවැරදි work cache කර දැනුවත්ව revalidate කරන්න',
    summary:
      'Caching expensive result එක නැවත භාවිතා කරයි; revalidation එය refresh කළ යුතු වේලාව පාලනය කරයි.',
    points: [
      'Static rendering page-level cache එකකි.',
      'fetch සහ cached functions repeated data work අඩු කරයි.',
      'Predictable freshness සඳහා time-based revalidation යොදන්න.',
      'Mutation පසු අදාළ path හෝ tag revalidate කරන්න.',
    ],
  },
  middleware: {
    title: 'Middleware සහ Proxy',
    description:
      'Route load වීමට පෙර auth, redirects සහ request shaping කරන ආකාරය.',
    theoryTitle: 'Proxy matched route content ට පෙර ධාවනය වේ',
    summary:
      'මෙම app එක protected content render වීමට පෙර session cookie verify කරයි; එම නිසා security decision එක client redirect එකක් නොව server boundary එකකි.',
    points: [
      'Proxy lightweight request decisions සඳහා තබන්න.',
      'Heavy business logic route handlers හෝ server functions වල තබන්න.',
      'Public assets සහ login allow කර private routes protect කරන්න.',
      'Session-dependent redirects සඳහා no-store headers යොදන්න.',
    ],
  },
  layouts: {
    title: 'Layouts සහ Route Groups',
    description:
      'App Router project එක nested segments සහ route groups වලින් සංවිධානය කරන ආකාරය.',
    theoryTitle: 'Layouts navigation අතර shared UI තබාගනී',
    summary:
      'Layout එක child routes wrap කර segment එක තුළ navigation අතර mounted වේ. Route groups URL වෙනස් නොකර files සංවිධානය කරයි.',
    points: [
      'layout.tsx sidebar, header, providers සහ shell සඳහා සුදුසුය.',
      '(learning) වැනි route groups URL segment එක් නොකරයි.',
      'Nested layouts app කොටස්වලට තම shell පාලනය කිරීමට ඉඩ දෙයි.',
      'අදාළ නොවන routes UI inherit නොවන ලෙස layouts focused තබන්න.',
    ],
  },
  authentication: {
    title: 'Next.js සත්‍යාපනය',
    description: 'App Router project එකකට authentication එක ගැළපෙන ආකාරය.',
    theoryTitle:
      'Server එකේ authenticate කර session checks routes වලට ආසන්නව තබන්න',
    summary:
      'Production app එක identity provider හෝ backend එකෙන් user verify කර secure session එකක් තබා protected content render වීමට පෙර එය පරීක්ෂා කරයි.',
    points: [
      'Login/logout සඳහා route handlers හෝ server actions භාවිතා කරන්න.',
      'Browser JavaScript token නොකියවන ලෙස HTTP-only cookies භාවිතා කරන්න.',
      'Broad gating සඳහා proxy සහ page-specific checks සඳහා Server Components භාවිතා කරන්න.',
      'Real delegated login සඳහා OAuth/OIDC provider භාවිතා කරන්න.',
    ],
  },
  seo: {
    title: 'SEO සහ Metadata',
    description:
      'Metadata, server rendering සහ structured content discovery වැඩි කරන ආකාරය.',
    theoryTitle: 'SEO ප්‍රයෝජනවත් HTML සහ නිවැරදි metadata වලින් ආරම්භ වේ',
    summary:
      'Next.js route එකකට metadata, crawl කළ හැකි HTML සහ social preview සඳහා Open Graph data නිර්මාණය කළ හැක.',
    points: [
      'Title, description, canonical URL සහ social preview metadata සකසන්න.',
      'Search engines වහා කියවිය යුතු content server-render හෝ static කරන්න.',
      'Semantic headings සහ meaningful link text භාවිතා කරන්න.',
      'විශාල public sites සඳහා sitemap සහ robots metadata එක් කරන්න.',
    ],
  },
  deploymentMonitoring: {
    title: 'Deployment සහ Production Monitoring',
    description:
      'Build පසු deploys, environment variables, logs, analytics, performance සහ quality gates කළමනාකරණය.',
    theoryTitle: 'Production යනු build, deploy, observe සහ improve චක්‍රයකි',
    summary:
      'Healthy deployment එකකට repeatable builds, environment config, automated checks, runtime logs, performance monitoring සහ alerts ඇත.',
    points: [
      'Merge පෙර lint, types, tests සහ coverage CI තුළ ධාවනය කරන්න.',
      'Secrets source code නොව environment variables වල තබන්න.',
      'Build/function logs, Web Vitals, errors සහ traffic trends බලන්න.',
      'Slow pages, auth failures සහ broken APIs සඳහා alerts සහ diagnostics භාවිතා කරන්න.',
    ],
  },
};

const ta: Record<NextjsLessonKey, NativeLesson> = {
  intro: {
    title: 'Next.js அறிமுகம்',
    description:
      'Modern React projects framework-ல் தொடங்குவதன் காரணம், CRA deprecation மற்றும் Next.js-ன் பங்கு.',
    theoryTitle:
      'React UI உருவாக்குகிறது; Next.js production application shell வழங்குகிறது',
    summary:
      'Production app-க்கு components மட்டுமன்றி routing, data loading, rendering, caching, errors, auth, SEO மற்றும் deployment ஒன்றாக இயங்க வேண்டும்.',
    points: [
      'Routing அல்லது production infrastructure தேவைப்படும் புதிய React apps-க்கு framework பரிந்துரைக்கப்படுகிறது.',
      'Create React App புதிய apps-க்கு deprecated ஆகி maintenance mode-ல் உள்ளது.',
      'Next.js file routing, Server Components, APIs, metadata, caching மற்றும் deployment workflows வழங்குகிறது.',
      'Client-only தேவைக்கு Vite போன்ற build tool ஏற்றதாக இருக்கலாம்.',
    ],
  },
  routers: {
    title: 'App Router மற்றும் Pages Router',
    description:
      'Modern App Router பழைய Pages Router-இலிருந்து மாறும் விதமும் புதிய projects-ல் app directory ஏன் பயன்படுத்த வேண்டும் என்பதும்.',
    theoryTitle: 'App Router modern routing model',
    summary:
      'இரண்டும் files-ஐ URLs-க்கு map செய்கின்றன; App Router Server Components, nested layouts, route groups, loading/error boundaries மற்றும் route handlers-ஐ composable ஆக இணைக்கிறது.',
    points: [
      'Pages Router pages directory மற்றும் getServerSideProps போன்ற data functions பயன்படுத்துகிறது.',
      'App Router page.tsx, layout.tsx, loading.tsx, error.tsx மற்றும் route.ts conventions பயன்படுத்துகிறது.',
      'Layouts navigation இடையே mounted இருந்து sidebar மற்றும் shared context-ஐ வைத்திருக்கின்றன.',
      'Legacy dependency இல்லாத புதிய work-க்கு App Router தேர்ந்தெடுக்கவும்.',
    ],
  },
  components: {
    title: 'Server மற்றும் Client Components',
    description:
      'Server மற்றும் browser இடையே rendering work பிரிக்கப்படும் விதம்.',
    theoryTitle:
      'Server work-ஐ server-ல் வைத்துப் interactivity-ஐ கீழ் client boundary-க்கு நகர்த்தவும்',
    summary:
      'App Router components default-ஆக Server Components. Browser APIs, state, effects அல்லது handlers தேவைப்பட்டால் மட்டும் use client பயன்படுத்தவும்.',
    points: [
      'Server Components data fetch செய்து secrets-ஐ browser-இலிருந்து விலக்குகின்றன.',
      'Client Components clicks, hooks மற்றும் browser APIs-க்கு தேவை.',
      'Server Component serializable props உடன் Client Component render செய்யலாம்.',
      'சிறிய client boundaries browser JavaScript-ஐக் குறைக்கின்றன.',
    ],
  },
  rendering: {
    title: 'SSR, SSG, ISR மற்றும் CSR',
    description: 'Practical pages-க்கு சரியான rendering strategy தேர்வு.',
    theoryTitle:
      'முழு app-க்கு அல்ல, ஒவ்வொரு route-க்கும் rendering தேர்வு செய்யவும்',
    summary:
      'ஒரே Next.js app static, request-time, incrementally regenerated மற்றும் client-interactive content-ஐ கலக்கலாம்.',
    points: [
      'Build-time content-க்கு SSG.',
      'Deployment பின் periodic updates-க்கு ISR.',
      'Fresh request/user-specific data-க்கு SSR.',
      'Useful page மேல் highly interactive widgets-க்கு CSR.',
    ],
  },
  caching: {
    title: 'Caching மற்றும் Revalidation',
    description: 'Repeated work குறைந்து content fresh ஆக இருக்கும் விதம்.',
    theoryTitle: 'சரியான work-ஐ cache செய்து திட்டமிட்டு revalidate செய்யவும்',
    summary:
      'Caching expensive result-ஐ மீண்டும் பயன்படுத்துகிறது; revalidation refresh நேரத்தைக் கட்டுப்படுத்துகிறது.',
    points: [
      'Static rendering page-level cache.',
      'fetch மற்றும் cached functions repeated data work-ஐக் குறைக்கின்றன.',
      'Predictable freshness-க்கு time-based revalidation.',
      'Mutation பின் தொடர்புடைய path அல்லது tag revalidate செய்யவும்.',
    ],
  },
  middleware: {
    title: 'Middleware மற்றும் Proxy',
    description: 'Route load முன் auth, redirects மற்றும் request shaping.',
    theoryTitle: 'Proxy matched route content-க்கு முன் இயங்குகிறது',
    summary:
      'Protected content render முன் app session cookie verify செய்கிறது; security decision client redirect அல்ல, server boundary.',
    points: [
      'Proxy-ல் lightweight request decisions மட்டும்.',
      'Heavy business logic route handlers/server functions-ல்.',
      'Public assets/login allow செய்து private routes protect செய்யவும்.',
      'Session redirects-க்கு no-store headers பயன்படுத்தவும்.',
    ],
  },
  layouts: {
    title: 'Layouts மற்றும் Route Groups',
    description:
      'App Router project-ஐ nested segments மற்றும் route groups மூலம் ஒழுங்குபடுத்துதல்.',
    theoryTitle: 'Layouts navigation இடையே shared UI-ஐ வைத்திருக்கின்றன',
    summary:
      'Layout child routes-ஐ wrap செய்து segment navigation இடையே mounted இருக்கும். Route groups URL மாற்றாமல் files ஒழுங்குபடுத்துகின்றன.',
    points: [
      'layout.tsx sidebar, header, providers மற்றும் shell-க்கு ஏற்றது.',
      '(learning) URL segment சேர்க்காது.',
      'Nested layouts ஒவ்வொரு app பகுதிக்கும் shell ownership தருகின்றன.',
      'Unrelated routes UI inherit செய்யாதபடி layouts focused ஆக இருக்கட்டும்.',
    ],
  },
  authentication: {
    title: 'Next.js அங்கீகாரம்',
    description: 'App Router project-ல் authentication பொருந்தும் விதம்.',
    theoryTitle:
      'Server-ல் authenticate செய்து session checks-ஐ routes-க்கு அருகில் வைக்கவும்',
    summary:
      'Production app provider/backend மூலம் identity verify செய்து secure session வைத்துப் protected content render முன் சோதிக்கிறது.',
    points: [
      'Login/logout-க்கு route handlers அல்லது server actions.',
      'Tokens browser JavaScript-க்கு தெரியாதபடி HTTP-only cookies.',
      'Broad gating-க்கு proxy; page checks-க்கு Server Components.',
      'Delegated login-க்கு OAuth/OIDC provider.',
    ],
  },
  seo: {
    title: 'SEO மற்றும் Metadata',
    description:
      'Metadata, server rendering மற்றும் structured content discovery-ஐ மேம்படுத்தும் விதம்.',
    theoryTitle: 'SEO பயனுள்ள HTML மற்றும் சரியான metadata-வில் தொடங்குகிறது',
    summary:
      'Next.js ஒவ்வொரு route-க்கும் metadata, crawlable HTML மற்றும் Open Graph social preview உருவாக்கலாம்.',
    points: [
      'Title, description, canonical URL மற்றும் social metadata அமைக்கவும்.',
      'உடனே வாசிக்க வேண்டிய content-ஐ server-render/static செய்யவும்.',
      'Semantic headings மற்றும் meaningful links பயன்படுத்தவும்.',
      'பெரிய public sites-க்கு sitemap மற்றும் robots metadata.',
    ],
  },
  deploymentMonitoring: {
    title: 'Deployment மற்றும் Production Monitoring',
    description:
      'Build பின் deploys, environment variables, logs, analytics, performance மற்றும் quality gates.',
    theoryTitle: 'Production என்பது build, deploy, observe, improve சுழற்சி',
    summary:
      'Healthy deployment-க்கு repeatable builds, environment config, automated checks, runtime logs, performance monitoring மற்றும் alerts தேவை.',
    points: [
      'Merge முன் lint, types, tests மற்றும் coverage CI-ல்.',
      'Secrets source code-ல் அல்ல, environment variables-ல்.',
      'Build/function logs, Web Vitals, errors மற்றும் traffic trends பார்க்கவும்.',
      'Slow pages, auth failures மற்றும் broken APIs-க்கு alerts பயன்படுத்தவும்.',
    ],
  },
};

export const nextjsLessonsByLocale: Record<
  Locale,
  Record<NextjsLessonKey, ConceptLessonContent>
> = {
  en: nextjsLessons,
  si: Object.fromEntries(
    Object.entries(si).map(([key, copy]) => [
      key,
      localizedLesson(key as NextjsLessonKey, 'si', copy),
    ]),
  ) as Record<NextjsLessonKey, ConceptLessonContent>,
  ta: Object.fromEntries(
    Object.entries(ta).map(([key, copy]) => [
      key,
      localizedLesson(key as NextjsLessonKey, 'ta', copy),
    ]),
  ) as Record<NextjsLessonKey, ConceptLessonContent>,
};
