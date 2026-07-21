import type { AppCopy } from './types';

export const taApp = {
  auth: {
    backLinkLabel: 'பொது தளத்திற்குத் திரும்பு',
    checkingLabel: 'உள்நுழைவு விவரங்கள் சரிபார்க்கப்படுகின்றன...',
    connectionError:
      'உள்நுழைவு தோல்வியடைந்தது. இணைப்பைச் சரிபார்த்து மீண்டும் முயலவும்.',
    credentialsHint:
      'தோல்வியைச் சோதிக்க demo விவரங்களிலிருந்து வேறான மதிப்புகளைப் பயன்படுத்தவும்.',
    credentialsTitle: 'இந்த demo உள்நுழைவு விவரங்களைப் பயன்படுத்தவும்',
    description:
      'நடைமுறை எடுத்துக்காட்டுகளைப் பாதுகாக்க இந்த செயலி demo banking user, signed JWT மற்றும் HTTP-only cookie-ஐ பயன்படுத்துகிறது.',
    emailLabel: 'மின்னஞ்சல்',
    eyebrow: 'அங்கீகார விளக்கம்',
    loginButtonLabel: 'உள்நுழைவு',
    loginFailureLabel: 'மின்னஞ்சல் அல்லது கடவுச்சொல் தவறானது.',
    loginSuccessLabel: 'உள்நுழைவு வெற்றிகரமாக முடிந்தது.',
    oauthDescription:
      'இந்த buttons UI placeholders. Provider callbacks, PKCE, state validation மற்றும் app session உருவாக்கத்தை இணைப்பதே production படி.',
    oauthDividerLabel: 'அல்லது இதனுடன் தொடரவும்',
    oauthProviders: [
      { id: 'google', label: 'Google உடன் தொடரவும்' },
      { id: 'apple', label: 'Apple உடன் தொடரவும்' },
      { id: 'linkedin', label: 'LinkedIn உடன் தொடரவும்' },
    ],
    oauthTodoLabel: 'செய்ய வேண்டியது',
    passwordLabel: 'கடவுச்சொல்',
    publicSiteLabel: 'பொது தளம்',
    redirectingLabel: 'கற்றல் பணியிடத்திற்குத் திருப்பப்படுகிறது...',
    title: 'Nalin’s Academy-க்கு உள்நுழைக',
  },
  buildLab: {
    deliveryModelLabel: 'வழங்கல் மாதிரி',
    eyebrow: 'பொறியியல் திறன் காட்சி',
    flow: [
      {
        title: 'திட்டமிட்டு உருவாக்கு',
        body: 'யோசனைகள் App Router pages, typed React components, reusable content modules மற்றும் Node.js API routes ஆக உருவாகின்றன.',
      },
      {
        title: 'AI உதவியுடன் செயலாக்கம்',
        body: 'Codex, GitHub Copilot மற்றும் ChatGPT வேகத்தை உயர்த்துகின்றன; பொறியியல் தீர்மானம் code-ஐ பராமரிக்கக்கூடியதாக வைத்திருக்கிறது.',
      },
      {
        title: 'Repository நடைமுறை',
        body: 'Meaningful commits, linting, type checks, unit coverage மற்றும் build validation உடன் மாற்றங்கள் GitHub வழியாக நகர்கின்றன.',
      },
      {
        title: 'Vercel deployments',
        body: 'Production promotion-க்கு முன் preview deployments feature branches-ஐ சரிபார்க்கின்றன.',
      },
    ],
    heading: 'Build Lab',
    heroBody:
      'Nalin’s Academy எவ்வாறு வடிவமைக்கப்பட்டு, உருவாக்கப்பட்டு, சோதிக்கப்பட்டு, version செய்யப்பட்டு deploy செய்யப்படுகிறது என்பதற்கான வெளிப்படையான பார்வை.',
    labels: {
      'Frontend platform': 'Frontend தளம்',
      'Backend layer': 'Backend அடுக்கு',
      'AI-assisted engineering': 'AI உதவியுள்ள பொறியியல்',
      'Delivery platform': 'வழங்கல் தளம்',
      'Static quality checks': 'நிலையான தரச் சோதனைகள்',
      'Minimum unit coverage': 'குறைந்தபட்ச unit test coverage',
      'Compile-time safety': 'Compile-time பாதுகாப்பு',
      'Preview + production': 'Preview மற்றும் production',
      'Meaningful commits': 'அர்த்தமுள்ள commits',
      'Required before merge': 'Merge-க்கு முன் அவசியம்',
      'Quality gate target': 'தர வரம்பு',
      'No emit type-check': 'Output இல்லாத type-check',
      'Branch-based releases': 'Branch அடிப்படையிலான releases',
      'Readable project history': 'படிக்கக்கூடிய project history',
      Preview: 'முன்னோட்டம்',
      Production: 'உற்பத்தி',
      'Feature / pull request branches': 'Feature / pull request branches',
      'Production branch': 'Production branch',
      'Every meaningful branch can be reviewed with an isolated deployment URL before it reaches users.':
        'பயனர்களை அடையும் முன் ஒவ்வொரு முக்கிய branch-ஐயும் தனி deployment URL மூலம் பரிசீலிக்கலாம்.',
      'Validated changes are promoted to the public academy experience after checks pass.':
        'சோதனைகள் முடிந்த பின் சரிபார்க்கப்பட்ட மாற்றங்கள் public academy-க்கு உயர்த்தப்படும்.',
      'Meaningful commit message': 'அர்த்தமுள்ள commit message',
      'ESLint and Prettier': 'ESLint மற்றும் Prettier',
      'TypeScript no-emit check': 'TypeScript no-emit சோதனை',
      'Vitest unit coverage >= 80%': 'Vitest unit coverage >= 80%',
      'Vercel preview deployment': 'Vercel preview deployment',
      'Production promotion': 'Production promotion',
      'Keep every change readable in project history.':
        'ஒவ்வொரு மாற்றமும் project history-ல் படிக்கக்கூடியதாக இருக்கட்டும்.',
      'Catch formatting and common code quality issues early.':
        'Formatting மற்றும் பொதுவான code quality சிக்கல்களை முன்கூட்டியே கண்டறியவும்.',
      'Run no-emit checks so contracts fail before runtime.':
        'Runtime-க்கு முன் contract பிழைகளை கண்டறிய no-emit checks இயக்கவும்.',
      'Keep unit coverage above the 80% quality gate.':
        'Unit coverage-ஐ 80% quality gate-க்கு மேல் வைத்திருக்கவும்.',
      'Validate each branch in an isolated deployment.':
        'ஒவ்வொரு branch-ஐயும் தனி deployment-ல் சரிபார்க்கவும்.',
      'Promote only after checks and review signals pass.':
        'Checks மற்றும் review signals வென்ற பின் மட்டுமே promote செய்யவும்.',
    },
    releaseEyebrow: 'Release நடைமுறை',
    releaseTitle: 'சோதனைகள் மற்றும் deployment வழிகள்',
    stackEyebrow: 'கணினி சுருக்கம்',
    stackUsageBody: 'Academy build-ல் பயன்படுத்தப்படுகிறது.',
    stackTitle: 'தொழில்நுட்பம் மற்றும் தரக் குறியீடுகள்',
  },
  shell: {
    closeNavigation: 'வழிசெலுத்தலை மூடு',
    deleteAccount: 'கணக்கை நீக்கு',
    editProfile: 'சுயவிவரத்தைத் திருத்து',
    learningAccount: 'கற்றல் கணக்கு',
    learningMap: 'கற்றல் வரைபடம்',
    learningMapBody:
      'அடிப்படைகளில் தொடங்கி, உண்மையான நேர்காணல் அனுபவங்களைப் பார்த்து, பின்னர் தொழில்நுட்பப் பாதைகளில் வரிசையாகச் செல்லுங்கள்.',
    learningWorkspace: 'கற்றல் பணியிடம்',
    lessonPromise:
      'ஒவ்வொரு பாடத்திற்கும் கோட்பாடு, code எடுத்துக்காட்டு மற்றும் demo.',
    logout: 'வெளியேறு',
    openNavigation: 'வழிசெலுத்தலைத் திற',
    openUserProfile: 'பயனர் சுயவிவரத்தைத் திற',
    soon: 'விரைவில்',
    subscribeServices: 'சேவைகளுக்கு சந்தா செலுத்து',
  },
  sidebarLabels: {
    Foundations: 'அடிப்படைகள்',
    Interviews: 'நேர்காணல்கள்',
    Technologies: 'தொழில்நுட்பங்கள்',
    'Common engineering theory beyond a single framework.':
      'ஒரே framework-ஐத் தாண்டிய பொதுப் பொறியியல் கோட்பாடு.',
    'Real questions faced in interviews, with answer notes.':
      'உண்மையான நேர்காணல் கேள்விகளும் தெளிவான பதில் குறிப்புகளும்.',
    'Real interview experience': 'உண்மையான நேர்காணல் அனுபவங்கள்',
    Testing: 'சோதனை',
    'Frontend testing': 'Frontend சோதனை',
    'Backend quality': 'Backend தரம்',
    'Java backend testing': 'Java backend சோதனை',
    Authentication: 'அங்கீகாரம்',
    Authorization: 'அனுமதி',
    'Current Authentication Flow': 'தற்போதைய அங்கீகார நடைமுறை',
    'Core Java examples and interview-ready fundamentals.':
      'Core Java எடுத்துக்காட்டுகள் மற்றும் நேர்காணலுக்கான அடிப்படைகள்.',
    'Hooks, rendering, state, side effects, and performance.':
      'Hooks, rendering, state, side effects மற்றும் performance.',
    'Production React routing, rendering, APIs, and deployment.':
      'Production React routing, rendering, APIs மற்றும் deployment.',
    'Component architecture, TypeScript, templates, and services.':
      'Component architecture, TypeScript, templates மற்றும் services.',
  },
} as const satisfies AppCopy;
