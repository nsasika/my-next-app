import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';
import type { ReadingListItem } from '@/components/learning/ReadingList';
import type { Locale } from '@/i18n/config';
import { bookReference, chapterOneTopics, chapterTwoTopics } from './coreJava';
import { javaBackendTesting } from './testing';

const withCode = (
  source: readonly ReadingListItem[],
  translations: readonly { question: string; answer: string }[],
) =>
  translations.map((translation, index) => ({
    ...translation,
    code: source[index].code,
  }));

const siChapterOne = withCode(chapterOneTopics, [
  {
    question: 'Primitive data types',
    answer:
      'Primitive types Java තුළ ඇති කුඩාම built-in values වේ. සාමාන්‍ය whole numbers සඳහා int, ඉතා විශාල සංඛ්‍යා සඳහා long, decimals සඳහා double, true/false සඳහා boolean සහ UTF-16 code unit එකකට char භාවිතා කරයි. ඒවාට නියත ranges ඇත; money සඳහා සාමාන්‍යයෙන් BigDecimal වඩා ආරක්ෂිතය.',
  },
  {
    question: 'Variables',
    answer:
      'Variable එකක් program එක ධාවනය වන විට value එකක් තබන නම් කළ ස්ථානයකි. Java type එක assign කළ හැකි values සහ operations පාලනය කරයි. var compiler එකට type එක infer කිරීමට පමණක් කියයි; Java dynamic නොකරයි. නැවත assign නොකළ යුතු values සඳහා final භාවිතා කරන්න.',
  },
  {
    question: 'Arithmetic operations',
    answer:
      'Java arithmetic සාමාන්‍ය operator precedence අනුගමනය කරයි. Operands දෙකම integers නම් division එක decimal කොටස ඉවත් කරයි; decimal result එකකට එක operand එක double බවට cast කරන්න. Business calculation පැහැදිලි කිරීමට parentheses භාවිතා කරන්න.',
  },
  {
    question: 'Strings',
    answer:
      'String text නියෝජනය කරන immutable object එකකි. Methods original value එක වෙනස් නොකර අලුත් result එකක් ලබාදෙයි. Text content compare කිරීමට equals භාවිතා කරන්න; == references compare කරයි. විශාල loops තුළ text ගොඩනැගීමට StringBuilder සුදුසුය.',
  },
  {
    question: 'Input සහ output',
    answer:
      'Scanner මඟින් System.in කියවිය හැකි අතර print, println සහ printf values පෙන්වයි. සම්පූර්ණ line එකකට nextLine භාවිතා කරන්න. Production systems තුළ input APIs, files, databases හෝ forms වලින් ලැබුණත් මූලික flow එක read, validate, process සහ respond වේ.',
  },
  {
    question: 'Arrays සහ ArrayList',
    answer:
      'Array එකකට creation පසු fixed length එකක් ඇත. ArrayList grow සහ shrink කළ හැකි බැවින් application data සඳහා වඩා පහසුය. Arrays length භාවිතා කරන අතර ArrayList size() භාවිතා කරයි; collections primitives වෙනුවට wrapper objects තබයි.',
  },
]);

const taChapterOne = withCode(chapterOneTopics, [
  {
    question: 'Primitive data types',
    answer:
      'Primitive types Java-வின் சிறிய built-in values. பொதுவான முழு எண்களுக்கு int, பெரிய எண்களுக்கு long, decimals-க்கு double, true/false-க்கு boolean, ஒரு UTF-16 code unit-க்கு char பயன்படுத்தப்படுகிறது. அவற்றுக்கு நிலையான ranges உள்ளன; பணக் கணக்குகளுக்கு BigDecimal பாதுகாப்பானது.',
  },
  {
    question: 'Variables',
    answer:
      'Variable என்பது program இயங்கும் போது value வைத்திருக்கும் பெயரிடப்பட்ட இடம். Java type எந்த values மற்றும் operations அனுமதிக்கப்படுகின்றன என்பதை கட்டுப்படுத்துகிறது. var compiler type-ஐ infer செய்ய மட்டும் உதவுகிறது; Java dynamic ஆகாது. மீண்டும் assign செய்யக்கூடாத values-க்கு final பயன்படுத்தவும்.',
  },
  {
    question: 'Arithmetic operations',
    answer:
      'Java arithmetic வழக்கமான operator precedence-ஐப் பின்பற்றுகிறது. இரண்டு operands integers என்றால் division decimal பகுதியை நீக்கும்; decimal result-க்கு ஒரு operand-ஐ double ஆக cast செய்யவும். Business calculation தெளிவாக parentheses பயன்படுத்தவும்.',
  },
  {
    question: 'Strings',
    answer:
      'String text-ஐ குறிக்கும் immutable object. Methods original value-ஐ மாற்றாமல் புதிய result தருகின்றன. Text content-ஐ compare செய்ய equals பயன்படுத்தவும்; == references-ஐ compare செய்கிறது. பெரிய loops-ல் text உருவாக்க StringBuilder ஏற்றது.',
  },
  {
    question: 'Input மற்றும் output',
    answer:
      'Scanner மூலம் System.in வாசிக்கலாம்; print, println மற்றும் printf values காட்டுகின்றன. முழு line-க்கு nextLine பயன்படுத்தவும். Production-ல் input APIs, files, databases அல்லது forms-ல் வந்தாலும் அடிப்படை flow read, validate, process, respond ஆகும்.',
  },
  {
    question: 'Arrays மற்றும் ArrayList',
    answer:
      'Array உருவாக்கிய பின் fixed length கொண்டது. ArrayList grow மற்றும் shrink ஆகும்; application data-க்கு வசதியானது. Arrays length பயன்படுத்தும்; ArrayList size() பயன்படுத்தும்; collections primitives-க்கு பதிலாக wrapper objects வைத்திருக்கும்.',
  },
]);

const siChapterTwo = withCode(chapterTwoTopics, [
  {
    question: 'Functional decomposition',
    answer:
      'විශාල problem එක පැහැදිලි නම් ඇති කුඩා methods වලට බෙදීම functional decomposition වේ. Method එකක් සාමාන්‍යයෙන් එක පැහැදිලි කාර්යයක් කළ යුතු අතර අවශ්‍ය data parameters ලෙස ගෙන useful result එකක් return කළ යුතුය. මෙය testing, reuse සහ debugging පහසු කරයි.',
  },
  {
    question: 'Classes සහ objects',
    answer:
      'Class එක object සෑදීමේ blueprint එකකි. Fields state තබන අතර methods behavior දක්වයි. private fields සහ valid state එක රකින methods භාවිතයෙන් encapsulation ලබාගන්න.',
  },
  {
    question: 'Object construction',
    answer:
      'Constructor එක new object එකක් සෑදෙන විට ධාවනය වී valid initial state එකක් තබයි. Required values constructor එකෙන් ඉල්ලා invalid objects සෑදීම අපහසු කරන්න. Complex creation සඳහා නම් කළ static factory methods ප්‍රයෝජනවත්ය.',
  },
  {
    question: 'Records',
    answer:
      'Record එක immutable data carrier එකක් සෑදීමට සංක්ෂිප්ත ක්‍රමයකි. Constructor, accessors, equals, hashCode සහ toString Java ස්වයංක්‍රීයව ලබාදෙයි. DTOs, API responses සහ value data සඳහා සුදුසු නමුත් complex mutable behavior සඳහා නොවේ.',
  },
  {
    question: 'Factory methods',
    answer:
      'Factory method එක object එකක් සාදා return කරයි. of, from, parse හෝ create වැනි නමක් creation අරමුණ පැහැදිලි කරයි. එයට validation, caching, subtype selection හෝ complex setup සඟවා තැබිය හැක.',
  },
  {
    question: 'Static variables සහ methods',
    answer:
      'Static members object instance එකකට නොව class එකට අයත් වේ. Shared constants සහ object state නොඅවශ්‍ය helpers සඳහා සුදුසුය. Business behavior අධික ලෙස static කළහොත් testing සහ extension අපහසු වේ.',
  },
  {
    question: 'Packages',
    answer:
      'Packages Java classes namespaces වලට සංවිධානය කර name collisions වැළැක්වීමට සහ සම්බන්ධ code එකට තැබීමට උපකාරී වේ. Professional projects domain සහ responsibility අනුව package structure සකසයි.',
  },
]);

const taChapterTwo = withCode(chapterTwoTopics, [
  {
    question: 'Functional decomposition',
    answer:
      'ஒரு பெரிய problem-ஐ தெளிவான பெயர்களுள்ள சிறிய methods ஆகப் பிரிப்பதே functional decomposition. Method பொதுவாக ஒரு வேலையைச் செய்து தேவையான data-ஐ parameters ஆக பெற்று useful result-ஐ return செய்ய வேண்டும். இது testing, reuse மற்றும் debugging-ஐ எளிதாக்குகிறது.',
  },
  {
    question: 'Classes மற்றும் objects',
    answer:
      'Class என்பது objects உருவாக்கும் blueprint. Fields state வைத்திருக்கும்; methods behavior-ஐ வரையறுக்கின்றன. private fields மற்றும் valid state-ஐ காக்கும் methods மூலம் encapsulation பெறவும்.',
  },
  {
    question: 'Object construction',
    answer:
      'புதிய object உருவாகும் போது constructor இயங்கி valid initial state அமைக்கிறது. Required values-ஐ constructor-ல் கட்டாயப்படுத்தி invalid objects உருவாவதைத் தடுக்கவும். Complex creation-க்கு பெயரிடப்பட்ட static factory methods உதவும்.',
  },
  {
    question: 'Records',
    answer:
      'Record என்பது immutable data carrier உருவாக்கும் சுருக்கமான வழி. Constructor, accessors, equals, hashCode மற்றும் toString தானாக கிடைக்கும். DTOs, API responses மற்றும் value data-க்கு ஏற்றது; complex mutable behavior-க்கு அல்ல.',
  },
  {
    question: 'Factory methods',
    answer:
      'Factory method object உருவாக்கி return செய்கிறது. of, from, parse அல்லது create போன்ற பெயர்கள் creation நோக்கத்தை விளக்குகின்றன. Validation, caching, subtype selection அல்லது complex setup-ஐ மறைக்கலாம்.',
  },
  {
    question: 'Static variables மற்றும் methods',
    answer:
      'Static members object instance-க்கு அல்ல, class-க்கு சொந்தமானவை. Shared constants மற்றும் object state தேவையில்லாத helpers-க்கு ஏற்றவை. Business behavior-ஐ அதிகமாக static ஆக்குவது testing மற்றும் extension-ஐ கடினமாக்கும்.',
  },
  {
    question: 'Packages',
    answer:
      'Packages Java classes-ஐ namespaces ஆக ஒழுங்குபடுத்தி name collisions-ஐ தவிர்க்கின்றன. Professional projects domain மற்றும் responsibility அடிப்படையில் package structure அமைக்கின்றன.',
  },
]);

const localizedTesting = (locale: 'si' | 'ta'): ConceptLessonContent => ({
  header:
    locale === 'si'
      ? {
          eyebrow: 'Java / Backend quality',
          title: 'Java Backend යෙදුම් පරීක්ෂණ',
          description:
            'Business logic, Spring boundaries, persistence, APIs සහ production confidence සඳහා layered Java backend testing strategy එකක්.',
          tags: javaBackendTesting.header.tags,
        }
      : {
          eyebrow: 'Java / Backend quality',
          title: 'Java Backend செயலி சோதனை',
          description:
            'Business logic, Spring boundaries, persistence, APIs மற்றும் production confidence-க்கான layered Java backend testing strategy.',
          tags: javaBackendTesting.header.tags,
        },
  theory:
    locale === 'si'
      ? {
          title:
            'Business rules ඉක්මනින් සහ infrastructure සැබෑ ලෙස test කරන්න',
          summary:
            'Domain unit tests වේගවත් තබා Spring boundaries සඳහා focused slice tests, සැබෑ database engine එකක් සමඟ persistence tests සහ වැදගත් flows සඳහා full application tests භාවිතා කරන්න.',
          points: [
            'JUnit 5 සහ test doubles domain හා service behavior වෙන්ව පරීක්ෂා කරයි.',
            'Integration tests repositories, transactions, messaging සහ external adapters එකට ක්‍රියාකරන බව තහවුරු කරයි.',
            '@WebMvcTest controller HTTP behavior ද @DataJpaTest persistence mappings සහ queries ද පරීක්ෂා කරයි.',
            'Testcontainers disposable PostgreSQL, Kafka හෝ Redis dependencies ධාවනය කරයි.',
            'Contract tests services අතර REST හෝ event compatibility ආරක්ෂා කරයි.',
            'E2E, smoke, load සහ resilience tests operational behavior තහවුරු කරයි.',
          ],
          code: javaBackendTesting.theory.code,
          whatToTry: [
            'Transfer service එක success, insufficient balance, duplicate key සහ repository failure සඳහා test කරන්න.',
            'Production database engine එකම භාවිතයෙන් repository integration test ධාවනය කරන්න.',
          ],
        }
      : {
          title:
            'Business rules-ஐ விரைவாகவும் infrastructure-ஐ நிஜமாகவும் சோதிக்கவும்',
          summary:
            'Domain unit tests வேகமாக இருக்கட்டும்; Spring boundaries-க்கு focused slice tests, உண்மையான database engine-க்கு persistence tests, முக்கிய flows-க்கு full application tests பயன்படுத்தவும்.',
          points: [
            'JUnit 5 மற்றும் test doubles domain மற்றும் service behavior-ஐ தனியாகச் சோதிக்கின்றன.',
            'Integration tests repositories, transactions, messaging மற்றும் external adapters ஒன்றாக இயங்குவதை உறுதிப்படுத்துகின்றன.',
            '@WebMvcTest controller HTTP behavior-ஐ; @DataJpaTest persistence mappings மற்றும் queries-ஐச் சோதிக்கிறது.',
            'Testcontainers disposable PostgreSQL, Kafka அல்லது Redis dependencies இயக்குகிறது.',
            'Contract tests services இடையிலான REST அல்லது event compatibility-ஐ காக்கின்றன.',
            'E2E, smoke, load மற்றும் resilience tests operational behavior-ஐ உறுதிப்படுத்துகின்றன.',
          ],
          code: javaBackendTesting.theory.code,
          whatToTry: [
            'Transfer service-ஐ success, insufficient balance, duplicate key மற்றும் repository failure-க்கு சோதிக்கவும்.',
            'Production database engine-ஐப் பயன்படுத்தி repository integration test இயக்கவும்.',
          ],
        },
  flow:
    locale === 'si'
      ? {
          title: 'Backend quality workflow',
          steps: [
            {
              label: 'Rules unit-test කරන්න',
              description:
                'Spring හෝ network startup නොමැතිව domain behavior පරීක්ෂා කරන්න.',
            },
            {
              label: 'Adapters test කරන්න',
              description:
                'Controllers, serialization, validation සහ repositories සඳහා focused slices භාවිතා කරන්න.',
            },
            {
              label: 'සැබෑ infrastructure භාවිතා කරන්න',
              description:
                'Disposable production-compatible dependencies සමඟ integration tests ධාවනය කරන්න.',
            },
            {
              label: 'Delivery තහවුරු කරන්න',
              description:
                'Risk අනුව contract, smoke, security, resilience සහ performance checks ධාවනය කරන්න.',
            },
          ],
        }
      : {
          title: 'Backend quality workflow',
          steps: [
            {
              label: 'Rules-ஐ unit-test செய்யவும்',
              description:
                'Spring அல்லது network startup இல்லாமல் domain behavior-ஐச் சோதிக்கவும்.',
            },
            {
              label: 'Adapters-ஐச் சோதிக்கவும்',
              description:
                'Controllers, serialization, validation மற்றும் repositories-க்கு focused slices பயன்படுத்தவும்.',
            },
            {
              label: 'உண்மையான infrastructure பயன்படுத்தவும்',
              description:
                'Disposable production-compatible dependencies உடன் integration tests இயக்கவும்.',
            },
            {
              label: 'Delivery-ஐ உறுதிப்படுத்தவும்',
              description:
                'Risk அடிப்படையில் contract, smoke, security, resilience மற்றும் performance checks இயக்கவும்.',
            },
          ],
        },
  codeExamples: javaBackendTesting.codeExamples,
});

export const javaContentByLocale = {
  'en-US': {
    bookReference,
    chapterOne: chapterOneTopics,
    chapterTwo: chapterTwoTopics,
    backendTesting: javaBackendTesting,
  },
  'si-LK': {
    bookReference: {
      ...bookReference,
      note: 'මේවා සම්මුඛ පරීක්ෂණ සූදානම සඳහා ලියූ කෙටි අධ්‍යයන සාරාංශ වන අතර පොතට ආදේශයක් නොවේ.',
    },
    chapterOne: siChapterOne,
    chapterTwo: siChapterTwo,
    backendTesting: localizedTesting('si'),
  },
  'ta-LK': {
    bookReference: {
      ...bookReference,
      note: 'இவை நேர்காணல் தயாரிப்புக்கான சுருக்கமான கற்றல் குறிப்புகள்; புத்தகத்திற்கு மாற்றாக அல்ல.',
    },
    chapterOne: taChapterOne,
    chapterTwo: taChapterTwo,
    backendTesting: localizedTesting('ta'),
  },
} as const satisfies Record<
  Locale,
  {
    bookReference: { author: string; note: string; title: string };
    chapterOne: readonly ReadingListItem[];
    chapterTwo: readonly ReadingListItem[];
    backendTesting: ConceptLessonContent;
  }
>;

export const javaPageCopy = {
  'en-US': {
    bookEyebrow: 'Java book option',
    bookDescription:
      'This guided study option is split by chapter so each section can grow independently.',
    bookReference: 'Book reference',
    author: 'Author',
    topics: 'topics',
    openChapter: 'Open chapter',
    chapterOneTitle: 'Chapter 1: Fundamental Programming Structures',
    chapterOneBody:
      'Primitive data types, variables, arithmetic, strings, input/output, arrays, and array lists.',
    chapterOneDescription:
      'Core building blocks used in Java programs and interview examples.',
    chapterTwoTitle: 'Chapter 2: Object-Oriented Programming',
    chapterTwoBody:
      'Methods, classes, construction, records, factory methods, static members, and packages.',
    chapterTwoDescription:
      'Move from simple statements into methods, objects, records, static members, and packages.',
  },
  'si-LK': {
    bookEyebrow: 'Java පොත් අධ්‍යයන මාර්ගය',
    bookDescription:
      'සෑම කොටසක්ම වෙන වෙනම වර්ධනය කළ හැකි ලෙස මෙම guided study option එක chapters අනුව බෙදා ඇත.',
    bookReference: 'පොත් යොමුව',
    author: 'කර්තෘ',
    topics: 'මාතෘකා',
    openChapter: 'Chapter එක විවෘත කරන්න',
    chapterOneTitle: 'Chapter 1: මූලික programming ව්‍යුහ',
    chapterOneBody:
      'Primitive types, variables, arithmetic, strings, input/output, arrays සහ array lists.',
    chapterOneDescription:
      'Java programs සහ interview examples සඳහා භාවිතා වන මූලික building blocks.',
    chapterTwoTitle: 'Chapter 2: Object-oriented programming',
    chapterTwoBody:
      'Methods, classes, construction, records, factory methods, static members සහ packages.',
    chapterTwoDescription:
      'සරල statements සිට methods, objects, records, static members සහ packages වෙත යන්න.',
  },
  'ta-LK': {
    bookEyebrow: 'Java புத்தகக் கற்றல் பாதை',
    bookDescription:
      'ஒவ்வொரு பகுதியும் தனியாக வளரும்படி இந்த guided study option chapters அடிப்படையில் பிரிக்கப்பட்டுள்ளது.',
    bookReference: 'புத்தக குறிப்பு',
    author: 'ஆசிரியர்',
    topics: 'தலைப்புகள்',
    openChapter: 'Chapter-ஐத் திறக்கவும்',
    chapterOneTitle: 'Chapter 1: அடிப்படை programming கட்டமைப்புகள்',
    chapterOneBody:
      'Primitive types, variables, arithmetic, strings, input/output, arrays மற்றும் array lists.',
    chapterOneDescription:
      'Java programs மற்றும் interview examples-ல் பயன்படுத்தப்படும் அடிப்படை building blocks.',
    chapterTwoTitle: 'Chapter 2: Object-oriented programming',
    chapterTwoBody:
      'Methods, classes, construction, records, factory methods, static members மற்றும் packages.',
    chapterTwoDescription:
      'எளிய statements-இலிருந்து methods, objects, records, static members மற்றும் packages-க்கு நகருங்கள்.',
  },
} as const;
