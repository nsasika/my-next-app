import type { ReadingListItem } from '@/components/learning/ReadingList';
import {
  bankOfSingaporeQuestions,
  virtusaSingaporeQuestions,
} from '../interviewPractice';

function translatedItems(
  source: readonly ReadingListItem[],
  translations: readonly Pick<ReadingListItem, 'question' | 'answer'>[],
): readonly ReadingListItem[] {
  return translations.map((translation, index) => ({
    ...translation,
    code: source[index].code,
  }));
}

export const siVirtusaQuestions = translatedItems(virtusaSingaporeQuestions, [
  {
    question: 'ඔබ ගැන කෙටි හැඳින්වීමක් දෙන්න.',
    answer:
      'තත්පර 60කින් වත්මන් role එක, React/TypeScript සහ Java/Spring Boot stack එක, මෑත domain එක සහ මැනිය හැකි ප්‍රතිඵලයක් කියන්න. අවසානයේ scalable frontend/backend delivery සහ ownership අවශ්‍ය බව සම්බන්ධ කරන්න.',
  },
  {
    question: 'මෑත project එකක frontend architecture පැහැදිලි කරන්න.',
    answer:
      'Routing, shared layout, feature components, state සහ server-data layer, API client, loading/error states, performance සහ tests යන layers අනුව පැහැදිලි කරන්න. Local UI state component එකට ආසන්නවද shared state store එකකද යන්න හේතුව සමඟ කියන්න.',
  },
  {
    question: 'මෑත project එකක backend architecture පැහැදිලි කරන්න.',
    answer:
      'Controller එක request validate කර service එකට යවයි; service එක business rules සහ transaction boundaries පාලනය කර repository එක persistence හසුරුවයි. Authentication, logging, metrics, errors සහ retries cross-cutting concerns වේ.',
  },
  {
    question: 'Transactions සහ ACID හසුරුවන්නේ කෙසේද?',
    answer:
      'ACID යනු atomicity, consistency, isolation සහ durability වේ. එකට සාර්ථක හෝ අසාර්ථක විය යුතු database changes පමණක් කෙටි transaction boundary එකක තබන්න.',
  },
  {
    question: 'DB save සාර්ථකවී email එක අසාර්ථක වුවහොත් කුමක් වේද?',
    answer:
      'Email external side effect එකක් නිසා සාමාන්‍ය DB transaction එකේ කොටසක් නොවේ. Business data සහ outbox event එක එක transaction එකක save කර worker එක email යවා failures retry කිරීම විශ්වාසදායක pattern එකයි.',
  },
  {
    question: 'එකම API call එක නැවත නැවත ක්‍රියාත්මක වීම වළක්වන්නේ කෙසේද?',
    answer:
      'Idempotency key එකක්, database unique constraint එකක් සහ පළමු සාර්ථක result එක ගබඩා කිරීම භාවිතා කරන්න. Equivalent duplicate requests සඳහා mutation එක නැවත නොකර එම result එකම return කරන්න.',
  },
  {
    question: 'සාර්ථක DB query එකක් මන්දගාමී වීමට හේතු මොනවාද?',
    answer:
      'Missing හෝ වැරදි indexes, full scans, large joins, stale statistics, N+1 calls, locks, excessive rows සහ poor query plans හේතු විය හැක. EXPLAIN ANALYZE, row counts, lock waits සහ network time බලන්න.',
  },
  {
    question: 'React 18 වෙත migrate කළේ කෙසේද?',
    answer:
      'ReactDOM.render වෙනුවට createRoot යොදා, StrictMode side effects, automatic batching, testing libraries, router සහ build tooling පරීක්ෂා කර critical flows සඳහා regression tests ධාවනය කළෙමි.',
  },
  {
    question: 'Third-party libraries සමඟ migration ගැටලු විසඳුවේ කෙසේද?',
    answer:
      'Peer dependency ranges, concurrent rendering support සහ පැරණි test utilities හඳුනාගෙන compatible versions upgrade කළෙමි, abandoned packages මාරු කළෙමි සහ risky components සඳහා focused regression tests එක් කළෙමි.',
  },
  {
    question: 'Unit සහ integration testing කළේ කෙසේද?',
    answer:
      'Unit tests dependencies mock කර isolated logic පරීක්ෂා කරයි. Integration tests component, store සහ API mock හෝ service සහ test database එකක් එකට පරීක්ෂා කරයි. Arrange, act, assert අනුව observable result එක assert කරන්න.',
  },
  {
    question: 'Deadlock යනු කුමක්ද? එය වළක්වන්නේ කෙසේද?',
    answer:
      'Transactions එකිනෙක locks සඳහා වටයකින් බලා සිටීම deadlock එකකි. Consistent lock ordering, කෙටි transactions, නිවැරදි indexes, valid isolation level, retry සහ blocked-query monitoring භාවිතා කරන්න.',
  },
  {
    question: 'Optimistic සහ pessimistic locking පැහැදිලි කරන්න.',
    answer:
      'Optimistic locking conflicts දුර්ලභ බව සලකා update විට version එක පරීක්ෂා කරයි. Pessimistic locking conflict වැඩි බව සලකා row එක කලින් lock කරයි. Read-heavy systems සඳහා optimistic ද high-contention critical updates සඳහා pessimistic ද සුදුසුය.',
  },
]);

export const taVirtusaQuestions = translatedItems(virtusaSingaporeQuestions, [
  {
    question: 'உங்களைப் பற்றி சுருக்கமாக அறிமுகப்படுத்துங்கள்.',
    answer:
      '60 விநாடிகளில் தற்போதைய role, React/TypeScript மற்றும் Java/Spring Boot stack, சமீப domain, ஒரு measurable result ஆகியவற்றைக் கூறுங்கள். Scalable frontend/backend delivery மற்றும் ownership தேடுவதாக முடிக்கவும்.',
  },
  {
    question: 'சமீப project-ன் frontend architecture-ஐ விளக்குங்கள்.',
    answer:
      'Routing, shared layout, feature components, state/server-data layer, API client, loading/error states, performance மற்றும் tests என்ற layers-ஆக விளக்கவும். Local UI state அல்லது shared store தேர்வின் காரணத்தைக் கூறவும்.',
  },
  {
    question: 'சமீப project-ன் backend architecture-ஐ விளக்குங்கள்.',
    answer:
      'Controller request-ஐ validate செய்து service-க்கு அனுப்புகிறது; service business rules மற்றும் transaction boundaries-ஐ நிர்வகிக்கிறது; repository persistence-ஐ கையாளுகிறது. Authentication, logging, metrics, errors மற்றும் retries cross-cutting concerns.',
  },
  {
    question: 'Transactions மற்றும் ACID-ஐ எவ்வாறு கையாள்கிறீர்கள்?',
    answer:
      'ACID என்பது atomicity, consistency, isolation, durability. ஒன்றாக வெற்றி அல்லது தோல்வி அடைய வேண்டிய database changes மட்டும் குறுகிய transaction boundary-ல் இருக்க வேண்டும்.',
  },
  {
    question: 'DB save வெற்றி, email தோல்வி என்றால் என்ன நடக்கும்?',
    answer:
      'Email external side effect; சாதாரண DB transaction-ன் பகுதி அல்ல. Business data மற்றும் outbox event-ஐ ஒரே transaction-ல் save செய்து worker மூலம் email அனுப்பி failures-ஐ retry செய்வது நம்பகமான pattern.',
  },
  {
    question: 'ஒரே API call பலமுறை செயல்படுவதை எவ்வாறு தவிர்ப்பது?',
    answer:
      'Idempotency key, database unique constraint மற்றும் முதல் வெற்றிகரமான result-ஐ சேமித்தல் பயன்படுத்தவும். Equivalent duplicate requests-க்கு mutation மீண்டும் செய்யாமல் அதே result-ஐ return செய்யவும்.',
  },
  {
    question: 'வெற்றிகரமான DB query ஏன் மெதுவாக இருக்கலாம்?',
    answer:
      'Missing/wrong indexes, full scans, பெரிய joins, stale statistics, N+1 calls, locks, அதிக rows மற்றும் poor query plans காரணமாகலாம். EXPLAIN ANALYZE, row counts, lock waits மற்றும் network time பார்க்கவும்.',
  },
  {
    question: 'React 18-க்கு எவ்வாறு migrate செய்தீர்கள்?',
    answer:
      'ReactDOM.render-ஐ createRoot-ஆக மாற்றி StrictMode side effects, automatic batching, testing libraries, router மற்றும் build tooling-ஐச் சோதித்து critical flows-க்கு regression tests இயக்கினேன்.',
  },
  {
    question: 'Third-party migration சிக்கல்களை எவ்வாறு தீர்த்தீர்கள்?',
    answer:
      'Peer dependencies, concurrent rendering support மற்றும் பழைய test utilities-ஐ கண்டறிந்து compatible versions upgrade செய்து abandoned packages மாற்றி focused regression tests சேர்த்தேன்.',
  },
  {
    question: 'Unit மற்றும் integration testing எவ்வாறு செய்தீர்கள்?',
    answer:
      'Unit tests dependencies-ஐ mock செய்து isolated logic-ஐச் சோதிக்கும். Integration tests component, store, API mock அல்லது service மற்றும் test database-ஐ ஒன்றாகச் சோதிக்கும். Observable result-ஐ arrange, act, assert முறையில் உறுதிப்படுத்தவும்.',
  },
  {
    question: 'Deadlock என்றால் என்ன? எவ்வாறு தவிர்ப்பது?',
    answer:
      'Transactions ஒன்றின் locks-க்கு ஒன்று வட்டமாக காத்திருப்பதே deadlock. Consistent lock ordering, குறுகிய transactions, சரியான indexes, பொருத்தமான isolation, retry மற்றும் blocked-query monitoring பயன்படுத்தவும்.',
  },
  {
    question: 'Optimistic மற்றும் pessimistic locking-ஐ விளக்குங்கள்.',
    answer:
      'Optimistic locking conflicts அரிது எனக் கருதி update-ல் version-ஐச் சோதிக்கிறது. Pessimistic locking contention அதிகம் எனக் கருதி row-ஐ முன்பே lock செய்கிறது. Read-heavy systems-க்கு optimistic; critical high-contention updates-க்கு pessimistic.',
  },
]);

export const siBankQuestions = translatedItems(bankOfSingaporeQuestions, [
  {
    question: 'ඔබ ගැන පැහැදිලි කරන්න.',
    answer:
      'වත්මන් role එක, React/TypeScript depth, banking exposure, ප්‍රබල frontend areas සහ recent result එකක් තත්පර 60–90කින් කියන්න. MFE delivery, shared UI, APIs, performance, testing සහ platform collaboration role එකට සම්බන්ධ කරන්න.',
  },
  {
    question: 'ඔබ වැඩ කළ projects මොනවාද?',
    answer:
      'අදාළ projects දෙකක් හෝ තුනක් තෝරා business goal, ඔබගේ role, stack, architecture decisions, testing, release process සහ measurable impact පැහැදිලි කරන්න. Banking සඳහා reliability, security, accessibility සහ performance අවධාරණය කරන්න.',
  },
  {
    question: 'Micro frontend architecture පැහැදිලි කරන්න.',
    answer:
      'විශාල frontend එක independently owned සහ deployed applications වලට බෙදයි. Shell එක layout, routing, auth context සහ platform concerns පාලනය කරන අතර remotes business domains පාලනය කරයි. Stable routes, events සහ design-system contracts පමණක් share කරන්න.',
  },
  {
    question: 'useContext සහ useState අතර වෙනස කුමක්ද?',
    answer:
      'useState එක component හෝ කුඩා tree එකක state පාලනය කරයි. useContext prop drilling නොමැතිව descendants අතර theme, auth හෝ locale වැනි value share කරයි; නිතර වෙනස්වන විශාල state සඳහා එය සම්පූර්ණ store එකක් නොවේ.',
  },
  {
    question: 'Custom hook එකක් ලියන්නේ කෙසේද සහ එය අවශ්‍ය ඇයි?',
    answer:
      'use නමින් ආරම්භ වන function එකක් React hooks එකතු කර reusable stateful behavior සපයයි. Debounce, data fetching, media query හෝ form logic components කිහිපයක නැවත භාවිතා වන විට custom hook එකක් සාදන්න.',
  },
  {
    question:
      'Flexbox, item spacing සහ mobile/web layout හඳුනාගැනීම පැහැදිලි කරන්න.',
    answer:
      'Row හෝ column එකක one-dimensional layout සඳහා Flexbox භාවිතා කරන්න. Parent එකට display:flex, gap සහ අවශ්‍ය justify-content යොදන්න. Responsive changes සඳහා CSS breakpoints භාවිතා කර JavaScript අවශ්‍ය විට පමණක් යොදන්න.',
  },
  {
    question: 'sessionStorage සහ localStorage අතර වෙනස කුමක්ද?',
    answer:
      'localStorage ඉවත් කරන තෙක් පවතින අතර same-origin tabs අතර share වේ. sessionStorage වත්මන් tab session එකට පමණක් සීමා වී tab එක වැසූ විට ඉවත් වේ. Sensitive session tokens සඳහා secure HTTP-only cookies වඩා සුදුසුය.',
  },
  {
    question: 'git reset සහ git revert අතරින් history තබන්නේ කුමක්ද?',
    answer:
      'git reset branch pointer එක මාරු කර local history rewrite කළ හැක. git revert පැරණි commit එක undo කරන අලුත් commit එකක් සාදන නිසා history තබා shared branches සඳහා වඩා ආරක්ෂිතය.',
  },
  {
    question: 'Asynchronous programming සහ async/await පැහැදිලි කරන්න.',
    answer:
      'Async work ප්‍රතිඵලයක් බලා සිටින අතර main flow block නොකරයි. async function එකක් හැමවිටම Promise return කරන අතර await Promise resolve වන තෙක් එම function එකේ execution pause කරයි.',
  },
  {
    question: 'some සහ find අතර වෙනස කුමක්ද?',
    answer:
      'some අවම වශයෙන් item එකක් condition එකට ගැළපේදැයි boolean එකක් return කරයි. find පළමු matching item එක හෝ කිසිවක් නැත්නම් undefined return කරයි.',
  },
  {
    question: 'Equality comparison code එකේ output කුමක්ද?',
    answer:
      'true == "true" false ය; string එක boolean true බවට නොහැරේ. true == 1 true ය; loose equality true එක 1 බවට හරවයි. true === 1 false ය; strict equality type සහ value දෙකම පරීක්ෂා කරයි.',
  },
  {
    question: 'Array එකෙන් number 2 පමණක් filter කරන්න.',
    answer:
      'Result එක array එකක් විය යුතු නිසා filter සහ strict equality භාවිතා කරන්න. එවිට number 2 පමණක් තබා string "2" වැනි values නොගැළපේ.',
  },
  {
    question: 'Micro frontends භාවිතයේ ගැටලු මොනවාද?',
    answer:
      'Version conflicts, duplicated dependencies, inconsistent UI, local development, communication, routing, performance සහ unclear ownership ගැටලු විය හැක. Contracts, platform standards, design tokens, observability සහ dependency governance භාවිතයෙන් අවදානම අඩු කරන්න.',
  },
  {
    question: 'Lazy loading පැහැදිලි කරන්න.',
    answer:
      'Initial bundle එකට සියල්ල නොදමා අවශ්‍ය විට code load කිරීම lazy loading වේ. React.lazy/Suspense හෝ next/dynamic භාවිතා කරන්න. Initial load අඩු වන නමුත් loading සහ error states නිවැරදිව සැලසුම් කළ යුතුය.',
  },
]);

export const taBankQuestions = translatedItems(bankOfSingaporeQuestions, [
  {
    question: 'உங்களைப் பற்றி விளக்குங்கள்.',
    answer:
      'தற்போதைய role, React/TypeScript depth, banking exposure, வலுவான frontend areas மற்றும் recent result-ஐ 60–90 விநாடிகளில் கூறுங்கள். MFE delivery, shared UI, APIs, performance, testing மற்றும் platform collaboration-ஐ role-க்கு இணைக்கவும்.',
  },
  {
    question: 'எந்த projects-ல் பணிபுரிந்தீர்கள்?',
    answer:
      'இரண்டு அல்லது மூன்று தொடர்புடைய projects-ஐத் தேர்ந்து business goal, உங்கள் role, stack, architecture decisions, testing, release process மற்றும் measurable impact-ஐ விளக்கவும். Banking-ல் reliability, security, accessibility மற்றும் performance-ஐ வலியுறுத்தவும்.',
  },
  {
    question: 'Micro frontend architecture-ஐ விளக்குங்கள்.',
    answer:
      'பெரிய frontend-ஐ independently owned மற்றும் deployed applications ஆகப் பிரிக்கிறது. Shell layout, routing, auth context மற்றும் platform concerns-ஐ நிர்வகிக்கும்; remotes business domains-ஐ நிர்வகிக்கும். Stable routes, events மற்றும் design-system contracts மட்டும் பகிரவும்.',
  },
  {
    question: 'useContext மற்றும் useState வேறுபாடு என்ன?',
    answer:
      'useState ஒரு component அல்லது சிறிய tree-ன் state-ஐ நிர்வகிக்கும். useContext prop drilling இல்லாமல் theme, auth அல்லது locale போன்ற value-ஐ descendants-க்கு பகிரும்; அடிக்கடி மாறும் பெரிய state-க்கு இது முழு store அல்ல.',
  },
  {
    question: 'Custom hook எவ்வாறு எழுதுவது, ஏன் தேவை?',
    answer:
      'use என்று தொடங்கும் function React hooks-ஐ இணைத்து reusable stateful behavior வழங்கும். Debounce, data fetching, media query அல்லது form logic பல components-ல் தேவைப்பட்டால் custom hook உருவாக்கவும்.',
  },
  {
    question: 'Flexbox, spacing மற்றும் mobile/web layout-ஐ விளக்குங்கள்.',
    answer:
      'Row அல்லது column one-dimensional layout-க்கு Flexbox பயன்படுத்தவும். Parent-க்கு display:flex, gap மற்றும் பொருத்தமான justify-content அமைக்கவும். Responsive changes-க்கு CSS breakpoints பயன்படுத்தி JavaScript-ஐ அவசியமானபோது மட்டும் பயன்படுத்தவும்.',
  },
  {
    question: 'sessionStorage மற்றும் localStorage வேறுபாடு என்ன?',
    answer:
      'localStorage நீக்கும் வரை நீடித்து same-origin tabs இடையே பகிரப்படும். sessionStorage தற்போதைய tab session-க்கு மட்டும்; tab மூடும்போது நீங்கும். Sensitive session tokens-க்கு secure HTTP-only cookies ஏற்றவை.',
  },
  {
    question: 'git reset மற்றும் git revert-இல் history வைத்திருப்பது எது?',
    answer:
      'git reset branch pointer-ஐ மாற்றி local history-ஐ rewrite செய்யலாம். git revert பழைய commit-ஐ undo செய்ய புதிய commit உருவாக்குவதால் history நீடிக்கும் மற்றும் shared branches-க்கு பாதுகாப்பானது.',
  },
  {
    question: 'Asynchronous programming மற்றும் async/await-ஐ விளக்குங்கள்.',
    answer:
      'Async work result-க்காக காத்திருந்தாலும் main flow-ஐ block செய்யாது. async function எப்போதும் Promise return செய்யும்; await Promise resolve ஆகும் வரை அந்த function execution-ஐ pause செய்கிறது.',
  },
  {
    question: 'some மற்றும் find வேறுபாடு என்ன?',
    answer:
      'some குறைந்தது ஒரு item condition-க்கு பொருந்துகிறதா என boolean return செய்கிறது. find முதல் matching item அல்லது இல்லையெனில் undefined return செய்கிறது.',
  },
  {
    question: 'Equality comparison code output என்ன?',
    answer:
      'true == "true" false; string boolean true ஆக மாறாது. true == 1 true; loose equality true-ஐ 1 ஆக மாற்றும். true === 1 false; strict equality type மற்றும் value இரண்டையும் சோதிக்கும்.',
  },
  {
    question: 'Array-ல் number 2 மட்டும் filter செய்யவும்.',
    answer:
      'Result array ஆக இருக்க filter மற்றும் strict equality பயன்படுத்தவும். Number 2 மட்டும் இருக்கும்; string "2" போன்ற values பொருந்தாது.',
  },
  {
    question: 'Micro frontends பயன்படுத்துவதின் சிக்கல்கள் என்ன?',
    answer:
      'Version conflicts, duplicated dependencies, inconsistent UI, local development, communication, routing, performance மற்றும் unclear ownership சிக்கல்கள். Contracts, platform standards, design tokens, observability மற்றும் dependency governance மூலம் அபாயத்தைக் குறைக்கவும்.',
  },
  {
    question: 'Lazy loading-ஐ விளக்குங்கள்.',
    answer:
      'Initial bundle-ல் அனைத்தையும் சேர்க்காமல் தேவைப்படும்போது code load செய்வதே lazy loading. React.lazy/Suspense அல்லது next/dynamic பயன்படுத்தவும். Initial load குறையும்; loading மற்றும் error states அவசியம்.',
  },
]);
