import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';
import { foundationLessons } from './foundations';
import type { Locale } from '@/i18n/config';

const siFrontendTesting = {
  header: {
    eyebrow: 'මූලික කරුණු / පරීක්ෂණ',
    title: 'Frontend යෙදුම් පරීක්ෂණ',
    description:
      'වෙන් කළ functions සිට සම්පූර්ණ browser user journeys දක්වා frontend යෙදුමක් සඳහා ප්‍රායෝගික testing strategy එකක්.',
    tags: ['Unit testing', 'Integration testing', 'E2E', 'Accessibility'],
  },
  theory: {
    title: 'ප්‍රයෝජනවත් විශ්වාසය ලබාදෙන කුඩාම test එක භාවිතා කරන්න',
    summary:
      'හොඳ frontend test suite එකක් වේගවත් unit tests, සැබෑ component සහ integration tests, අත්‍යවශ්‍ය end-to-end journeys කිහිපයක් සහ automated accessibility හා visual checks එකතු කරයි. Component ඇතුළත implementation නොව පරිශීලකයාට පෙනෙන behavior පරීක්ෂා කරන්න.',
    points: [
      'Unit tests pure functions, reducers, hooks, formatters සහ සීමිත component behavior වෙන්ව පරීක්ෂා කරයි.',
      'Integration tests form, validation, router, store සහ mocked API boundary වැනි සම්බන්ධ කොටස් එකට render කරයි.',
      'End-to-end tests production වැනි පද්ධතියක සැබෑ browser එකක ප්‍රධාන user journeys ධාවනය කරයි.',
      'Contract tests frontend API assumptions backend schemas සමඟ ගැළපෙන බව තහවුරු කරයි.',
      'Accessibility, visual regression, performance සහ security checks සාමාන්‍ය assertions මඟහැරෙන අවදානම් ආවරණය කරයි.',
      'Coverage යනු guardrail එකක් මිස quality සාක්ෂියක් නොවේ; වැදගත් outcomes සහ failure paths assert කරන්න.',
    ],
    code: foundationLessons.frontendTesting.theory.code,
    whatToTry: [
      'Validation function එකකට unit test එකක් සහ form submit එකකට integration test එකක් ලියන්න.',
      'Login, search, checkout හෝ payment අතරින් වැඩිම business අවදානම ඇති journeys පමණක් E2E suite එකට තෝරන්න.',
    ],
  },
  flow: {
    title: 'Frontend quality workflow',
    steps: [
      {
        label: 'අවදානම හඳුනාගන්න',
        description:
          'Business-critical behavior, edge cases, browsers, devices සහ accessibility අවශ්‍යතා හඳුනාගන්න.',
      },
      {
        label: 'Code එකට ආසන්නව test කරන්න',
        description:
          'Deterministic unit සහ integration tests මඟින් logic සහ component behavior ඉක්මනින් ආවරණය කරන්න.',
      },
      {
        label: 'Boundaries තහවුරු කරන්න',
        description:
          'Network boundary එකේ mock කර API request සහ response shapes සඳහා contract tests එක් කරන්න.',
      },
      {
        label: 'ප්‍රධාන journeys සනාථ කරන්න',
        description:
          'කුඩා E2E suite එකක් සහ quality checks CI හා production වැනි environment එකක ධාවනය කරන්න.',
      },
    ],
  },
  codeExamples: foundationLessons.frontendTesting.codeExamples,
} as const satisfies ConceptLessonContent;

const taFrontendTesting = {
  header: {
    eyebrow: 'அடிப்படைகள் / சோதனை',
    title: 'Frontend செயலி சோதனை',
    description:
      'தனி functions முதல் முழுமையான browser user journeys வரை frontend செயலிக்கான நடைமுறை testing strategy.',
    tags: ['Unit testing', 'Integration testing', 'E2E', 'Accessibility'],
  },
  theory: {
    title: 'பயனுள்ள நம்பிக்கையை வழங்கும் மிகச் சிறிய test-ஐ பயன்படுத்துங்கள்',
    summary:
      'ஆரோக்கியமான frontend test suite வேகமான unit tests, நிஜமான component மற்றும் integration tests, சில முக்கிய end-to-end journeys, automated accessibility மற்றும் visual checks ஆகியவற்றை இணைக்கிறது. Component internals-ஐ விட பயனர் காணும் behavior-ஐ சோதிக்கவும்.',
    points: [
      'Unit tests pure functions, reducers, hooks, formatters மற்றும் குறுகிய component behavior-ஐ தனியாகச் சோதிக்கின்றன.',
      'Integration tests form, validation, router, store மற்றும் mocked API boundary போன்ற இணைந்த பகுதிகளை ஒன்றாக render செய்கின்றன.',
      'End-to-end tests production போன்ற அமைப்பில் உண்மையான browser மூலம் முக்கிய user journeys-ஐ இயக்குகின்றன.',
      'Contract tests frontend API assumptions backend schemas-உடன் பொருந்துவதை உறுதிப்படுத்துகின்றன.',
      'Accessibility, visual regression, performance மற்றும் security checks பொதுவான assertions தவறவிடும் அபாயங்களைச் சோதிக்கின்றன.',
      'Coverage ஒரு guardrail; quality-ன் ஆதாரம் அல்ல. முக்கிய outcomes மற்றும் failure paths-ஐ assert செய்யவும்.',
    ],
    code: foundationLessons.frontendTesting.theory.code,
    whatToTry: [
      'Validation function-க்கு unit test மற்றும் form submit-க்கு integration test எழுதுங்கள்.',
      'Login, search, checkout அல்லது payment-இல் அதிக business risk உள்ள journeys மட்டும் E2E suite-க்கு தேர்ந்தெடுக்கவும்.',
    ],
  },
  flow: {
    title: 'Frontend quality workflow',
    steps: [
      {
        label: 'அபாயத்தை வரையறுக்கவும்',
        description:
          'Business-critical behavior, edge cases, browsers, devices மற்றும் accessibility தேவைகளை அடையாளம் காணவும்.',
      },
      {
        label: 'Code-க்கு அருகில் சோதிக்கவும்',
        description:
          'Deterministic unit மற்றும் integration tests மூலம் logic மற்றும் component behavior-ஐ விரைவாகச் சோதிக்கவும்.',
      },
      {
        label: 'Boundaries-ஐ உறுதிப்படுத்தவும்',
        description:
          'Network boundary-ல் mock செய்து API request மற்றும் response shapes-க்கு contract tests சேர்க்கவும்.',
      },
      {
        label: 'முக்கிய journeys-ஐ நிரூபிக்கவும்',
        description:
          'சிறிய E2E suite மற்றும் quality checks-ஐ CI மற்றும் production போன்ற environment-ல் இயக்கவும்.',
      },
    ],
  },
  codeExamples: foundationLessons.frontendTesting.codeExamples,
} as const satisfies ConceptLessonContent;

const siOauth = {
  header: {
    eyebrow: 'මූලික කරුණු / අවසර පාලනය',
    title: 'OAuth 2.0 සහ OpenID Connect',
    description:
      'OAuth 2.0 delegated authorization සඳහාය. OpenID Connect, Google හෝ Apple login වැනි අවස්ථා සඳහා identity layer එක එක් කරයි.',
    tags: ['OAuth 2.0', 'OIDC', 'Authorization Code', 'PKCE'],
  },
  theory: {
    title: 'OAuth access එකට අවසර දෙයි; OIDC පරිශීලකයා සත්‍යාපනය කරයි',
    summary:
      'OAuth මඟින් password එක share නොකර වෙනත් system එකක සීමිත access ලබාදිය හැක. Login සඳහා OIDC මඟින් identity සනාථ කරන ID token එකක් ලැබේ.',
    points: [
      'Authentication: ඔබ කවුද?',
      'Authorization: ඔබට කළ හැක්කේ කුමක්ද?',
      'OAuth 2.0 resources සඳහා access tokens නිකුත් කරයි.',
      'OIDC login සඳහා ID tokens සහ identity claims එක් කරයි.',
      'Browser apps සඳහා Authorization Code with PKCE නිර්දේශිත flow එකයි.',
    ],
    code: foundationLessons.oauth2Authorization.theory.code,
    whatToTry: [
      'Continue with Google යනු සාමාන්‍යයෙන් OIDC login සහ OAuth consent එකක් බව මතක තබාගන්න.',
      'profile හෝ email වැනි scopes සීමිත authorization එකක් නියෝජනය කරයි.',
    ],
  },
  flow: {
    title: 'Authorization Code with PKCE මානසික ආකෘතිය',
    steps: [
      {
        label: 'Login ආරම්භ කරන්න',
        description: 'App එක trusted identity provider වෙත redirect කරයි.',
      },
      {
        label: 'User consent',
        description:
          'Provider පරිශීලකයා සත්‍යාපනය කර ඉල්ලූ scopes සඳහා consent ගනී.',
      },
      {
        label: 'Code එක ලබාගන්න',
        description:
          'Provider කෙටි කාලීන authorization code එකක් සමඟ ආපසු redirect කරයි.',
      },
      {
        label: 'Tokens හුවමාරු කරන්න',
        description:
          'Server එක code එක tokens සඳහා හුවමාරු කර app session එකක් සාදයි.',
      },
    ],
  },
  codeExamples: foundationLessons.oauth2Authorization.codeExamples,
  references: foundationLessons.oauth2Authorization.references,
} as const satisfies ConceptLessonContent;

const taOauth = {
  header: {
    eyebrow: 'அடிப்படைகள் / அனுமதி',
    title: 'OAuth 2.0 மற்றும் OpenID Connect',
    description:
      'OAuth 2.0 delegated authorization-க்கானது. Google அல்லது Apple login போன்றவற்றுக்கு OpenID Connect identity layer-ஐச் சேர்க்கிறது.',
    tags: ['OAuth 2.0', 'OIDC', 'Authorization Code', 'PKCE'],
  },
  theory: {
    title: 'OAuth access-ஐ அனுமதிக்கிறது; OIDC பயனரை அங்கீகரிக்கிறது',
    summary:
      'Password-ஐ பகிராமல் மற்றொரு system-க்கு வரையறுக்கப்பட்ட access வழங்க OAuth உதவுகிறது. Login-க்கு OIDC பயனர் identity-ஐ நிரூபிக்கும் ID token வழங்குகிறது.',
    points: [
      'Authentication: நீங்கள் யார்?',
      'Authorization: உங்களுக்கு என்ன செய்ய அனுமதி?',
      'OAuth 2.0 resources-க்காக access tokens வழங்குகிறது.',
      'OIDC login-க்கு ID tokens மற்றும் identity claims சேர்க்கிறது.',
      'Browser apps-க்கு Authorization Code with PKCE பரிந்துரைக்கப்படும் flow.',
    ],
    code: foundationLessons.oauth2Authorization.theory.code,
    whatToTry: [
      'Continue with Google என்பது பொதுவாக OIDC login மற்றும் OAuth consent என்பதை நினைவில் கொள்ளுங்கள்.',
      'profile அல்லது email போன்ற scopes வரையறுக்கப்பட்ட authorization-ஐ குறிக்கின்றன.',
    ],
  },
  flow: {
    title: 'Authorization Code with PKCE மன மாதிரி',
    steps: [
      {
        label: 'Login தொடங்கு',
        description: 'App trusted identity provider-க்கு redirect செய்கிறது.',
      },
      {
        label: 'User consent',
        description:
          'Provider பயனரை அங்கீகரித்து கேட்ட scopes-க்கு consent பெறுகிறது.',
      },
      {
        label: 'Code பெறுதல்',
        description:
          'Provider குறுகிய கால authorization code உடன் திருப்புகிறது.',
      },
      {
        label: 'Tokens பரிமாற்றம்',
        description:
          'Server code-ஐ tokens-க்கு மாற்றி app session உருவாக்குகிறது.',
      },
    ],
  },
  codeExamples: foundationLessons.oauth2Authorization.codeExamples,
  references: foundationLessons.oauth2Authorization.references,
} as const satisfies ConceptLessonContent;

export const frontendTestingByLocale = {
  'en-US': foundationLessons.frontendTesting,
  'si-LK': siFrontendTesting,
  'ta-LK': taFrontendTesting,
} as const satisfies Record<Locale, ConceptLessonContent>;

export const oauthLessonByLocale = {
  'en-US': foundationLessons.oauth2Authorization,
  'si-LK': siOauth,
  'ta-LK': taOauth,
} as const satisfies Record<Locale, ConceptLessonContent>;
