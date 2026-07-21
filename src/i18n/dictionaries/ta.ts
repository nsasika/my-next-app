import type { Dictionary } from '../types';
import { LOCALIZED_UI } from '../ui';

export const ta = {
  locale: 'ta-LK',
  ...LOCALIZED_UI['ta-LK'],
  home: {
    hero: {
      body: 'எங்கள் நோக்கம் எளிமையானது: வேலை தேடுபவர்கள் Java, React, frontend architecture மற்றும் full-stack தொழில்நுட்பத் தேர்வுகளை தெளிவான விளக்கங்கள், நேர்முகத் தேர்வுக்கான எடுத்துக்காட்டுகள் மற்றும் வழிகாட்டப்பட்ட பயிற்சிகள் மூலம் கற்கக்கூடிய நடைமுறை தளத்தை உருவாக்குவது.',
      eyebrow: 'வேலை தேடுபவர்களுக்கான நேர்முகத் தேர்வு தயாரிப்பு',
      heading:
        "Nalin's Academy தொழில்நுட்ப அறிவை நேர்முகத் தேர்வு தன்னம்பிக்கையாக மாற்ற உதவுகிறது.",
      primaryAction: 'அகாடமியைப் பாருங்கள்',
      secondaryAction: 'நலினின் தொழில்முறை தொகுப்பைப் பாருங்கள்',
    },
    platform: {
      eyebrow: 'கற்றல் பாதை',
      heading: 'கற்றலிலிருந்து நேர்முகத் தேர்வு பதில்வரை எளிய பாதை.',
      steps: [
        {
          title: 'ஒரு தலைப்பைத் தேர்ந்தெடுக்கவும்',
          body: 'React Hooks, Java அடிப்படைகள் அல்லது full-stack சிந்தனை போன்ற கவனம் செலுத்தப்பட்ட கற்றல் பாதையிலிருந்து தொடங்குங்கள்.',
        },
        {
          title: 'எடுத்துக்காட்டுகளுடன் கற்றுக்கொள்ளுங்கள்',
          body: 'கோட்பாட்டைப் படித்து, அதை நடைமுறை code மற்றும் பொதுவான தொடர்ச்சி நேர்முகக் கேள்விகளுடன் இணைக்கவும்.',
        },
        {
          title: 'தெளிவாக விளக்குங்கள்',
          body: 'ஆட்சேர்ப்பாளர்களும் பொறியியல் நேர்முகத் தேர்வாளர்களும் விரைவாகப் புரிந்துகொள்ளும் வகையில் பதில்களைப் பயிற்சி செய்யுங்கள்.',
        },
      ],
    },
    snapshot: {
      body: 'தளத்தில் தற்போது உள்ள கற்றல் உள்ளடக்கத்தையும் அதன் தரநிலையையும் சுருக்கமாகக் காட்டுகிறது.',
      eyebrow: 'அகாடமி சுருக்கம்',
      stats: [
        { label: 'கற்றல் பாதைகள்', value: '4+' },
        { label: 'நடைமுறை விளக்கங்கள்', value: '30+' },
        { label: 'சோதனை உள்ளடக்கம்', value: '80%' },
      ],
      title:
        'தன்னம்பிக்கையுடன் கற்றுக்கொள்ளுங்கள், பயிற்சி செய்யுங்கள், விளக்குங்கள்',
    },
  },
  academy: {
    hero: {
      body: 'React, Java, frontend architecture மற்றும் full-stack கருத்துகளைத் தெளிவாகக் கற்று, இயக்கிப் பார்த்து, நேர்முகத் தேர்வில் தன்னம்பிக்கையுடன் விவாதிக்க விரும்பும் வேலை தேடுபவர்களுக்கான கவனம் செலுத்தப்பட்ட கற்றல் தளம்.',
      buildLabAction: 'உருவாக்க ஆய்வகத்தைப் பாருங்கள்',
      eyebrow: 'நடைமுறை நேர்முகத் தேர்வு தயாரிப்பு',
      heading:
        "Nalin's Academy பொறியியல் அறிவை நேர்முகத் தேர்வு தன்னம்பிக்கையாக மாற்றுகிறது.",
      portfolioAction: 'நலினின் தொழில்முறை தொகுப்பைப் பாருங்கள்',
    },
    learningPromise: {
      eyebrow: 'கற்றல் வாக்குறுதி',
      heading: 'புரிந்துகொள்ளுங்கள், உருவாக்குங்கள், விளக்குங்கள்',
      items: [
        {
          title: 'கருத்தைப் புரிந்துகொள்ளுங்கள்',
          body: 'நேர்முகத் தேர்வாளர்கள் நீங்கள் விளக்க வேண்டும் என்று எதிர்பார்க்கும் சுருக்கமான கோட்பாடுகள் மற்றும் தொழில்நுட்பத் தேர்வுகளிலிருந்து தொடங்குங்கள்.',
        },
        {
          title: 'அதை code உடன் இணைக்கவும்',
          body: 'தனித்தனி வரையறைகளை மனப்பாடம் செய்வதற்குப் பதிலாக நடைமுறை React, Java மற்றும் Next.js எடுத்துக்காட்டுகளைப் பயன்படுத்துங்கள்.',
        },
        {
          title: 'பதிலைப் பயிற்சி செய்யுங்கள்',
          body: 'தொழில்நுட்பப் புரிதலை தெளிவான, ஒழுங்கமைந்த நேர்முகத் தேர்வு பதிலாக மாற்றுங்கள்.',
        },
      ],
    },
    purpose: {
      body: 'தனிப்பட்ட தொழில்முறை தொகுப்புடன் கற்றல் அனுபவத்தை கலக்காமல், நிறுவனத் திட்டங்களில் பெற்ற பாடங்களை கவனம் செலுத்தப்பட்ட கோட்பாடு, இயக்கக்கூடிய எடுத்துக்காட்டுகள், தொடர்ச்சி கேள்விகள் மற்றும் architecture விவாதங்களாக மாற்றுகிறது.',
      eyebrow: 'அகாடமியின் நோக்கம்',
      stats: [
        { label: 'கற்றல் பாதைகள்', value: '4+' },
        { label: 'நடைமுறை விளக்கங்கள்', value: '30+' },
        { label: 'சோதனை உள்ளடக்கம்', value: '80%' },
      ],
      title: 'நடைமுறை பொறியியல் அனுபவத்திலிருந்து கற்றுக்கொள்ளுங்கள்',
    },
    tracks: {
      eyebrow: 'கற்றல் பாதைகள்',
      title: 'நீங்கள் வளர விரும்பும் பாதையைத் தேர்ந்தெடுக்கவும்',
      panels: [
        {
          body: 'Hooks, rendering, state management, performance, React 18 மற்றும் React 19 ஆகியவை கவனம் செலுத்தப்பட்ட எடுத்துக்காட்டுகளுடன் விளக்கப்படுகின்றன.',
          items: ['Hooks', 'Performance', 'State management'],
          label: 'React',
          title: 'நவீன React பொறியியல்',
        },
        {
          body: 'Core Java கருத்துகள், object-oriented design, interfaces, records மற்றும் நேர்முகத் தேர்வுக்குத் தயாரான பயிற்சிகள்.',
          items: ['Core Java', 'OOP', 'நடைமுறை பயிற்சிகள்'],
          label: 'Java',
          title: 'Java அடிப்படைகள்',
        },
        {
          body: 'App Router, rendering, caching, authentication, SEO, middleware மற்றும் production deployment முடிவுகள்.',
          items: ['App Router', 'Rendering', 'Production'],
          label: 'Next.js',
          title: 'Production பயன்பாட்டிற்கான Next.js',
        },
        {
          body: 'Architecture முடிவுகளை இயங்கும் application code உடன் இணைக்கும் வழிகாட்டப்பட்ட உருவாக்கச் சவால்கள்.',
          items: ['Architecture', 'Implementation', 'Review'],
          label: 'உருவாக்க ஆய்வகம்',
          title: 'உருவாக்கி விளக்குங்கள்',
        },
      ],
    },
  },
  portfolio: {
    capability: {
      eyebrow: 'பொறியியல் திறன்கள்',
      title: 'தொழில்நுட்ப திறன் வரைபடம்',
      panels: [
        {
          body: 'React.js, TypeScript, micro-frontends, frontend நவீனமயமாக்கல், migrations, performance மற்றும் பராமரிக்க எளிதான UI அமைப்புகள்.',
          items: ['React', 'TypeScript', 'Modern UI'],
          label: 'நிறுவன frontend',
          title: 'நிறுவன frontend பொறியியல்',
        },
        {
          body: 'Java, Spring Boot, Scala, Node.js, REST/SOAP services, microservices, Oracle, PostgreSQL மற்றும் CI/CD workflows.',
          items: ['Java', 'Spring Boot', 'Node.js'],
          label: 'Full-stack அடித்தளம்',
          title: 'Full-stack தொழில்நுட்ப அடித்தளம்',
        },
        {
          body: 'DBS Bank, GIC மற்றும் EMC Singapore நிறுவனங்களில் Agile அணிகள், பிராந்திய பங்குதாரர்கள் மற்றும் நிறுவனத் தரநிலைகளுடன் பெற்ற நடைமுறை அனுபவம்.',
          items: ['DBS Bank', 'GIC', 'EMC Singapore'],
          label: 'நிறுவனத் திட்டங்கள்',
          title: 'நிறுவனத் திட்ட வழங்கல்',
        },
        {
          body: 'எனது தற்போதைய கவனம் frontend-ஐ மையமாகக் கொண்ட full-stack பொறியியல்: வலுவான React திறன், Java/backend புரிதல் மற்றும் நிறுவனத் தொடர்பு முக்கியமான பணிகள்.',
          items: [
            'Java + React full-stack engineer',
            'Senior React frontend engineer',
            'React + Node.js engineer',
          ],
          label: 'இலக்கு பணிகள்',
          title: 'தொழில் நோக்கு',
        },
      ],
    },
    enterpriseDelivery: {
      body: 'நிறுவன அமைப்புகளில் frontend-ஐ மையமாகக் கொண்ட full-stack அனுபவம்.',
      eyebrow: 'நிறுவனத் திட்டங்கள்',
      heading: 'React, TypeScript, Java',
    },
    experience: {
      body: 'எனது நிறுவனப் பொறியியல் அனுபவத்தை வடிவமைத்த பணிகள், நாடுகள், பொறுப்புகள் மற்றும் தொழில்நுட்பங்கள் CV தகவல்களின் அடிப்படையில் காட்டப்படுகின்றன. முதன்மைக் கொடி பணியாற்றிய நாட்டையும், மற்ற கொடிகள் வாடிக்கையாளர் அல்லது பிராந்திய ஒத்துழைப்பையும் குறிக்கின்றன.',
      eyebrow: 'முக்கிய தொழில்முறை பயணம்',
      title: 'சிங்கப்பூர் மற்றும் இலங்கையில் பெற்ற தொழில்முறை அனுபவம்',
    },
    hero: {
      action: 'பணி வரலாற்றைப் பாருங்கள்',
      eyebrow: 'மூத்த React மற்றும் Java full-stack பொறியாளர்',
      heading: 'நலின் பத்மசிறி: நிறுவனப் பொறியியல் தொழில்முறை தொகுப்பு',
      paragraphs: [
        'நான் React, TypeScript, Java மற்றும் நவீன full-stack architecture பயன்படுத்தி நிறுவனத் தர web applications உருவாக்குகிறேன்.',
        'DBS Bank, GIC மற்றும் EMC Singapore நிறுவனங்களின் பெரிய அமைப்புகளில் frontend நவீனமயமாக்கல், React migrations, micro-frontends, enterprise integrations, performance மேம்பாடுகள் மற்றும் பல நாடுகளுக்கிடையேயான பாதுகாப்பான delivery அனுபவம் எனக்கு உள்ளது.',
      ],
    },
    resume: {
      docxLabel: 'CV-ஐ DOCX வடிவில் பதிவிறக்கவும்',
      downloadsLabel: 'CV பதிவிறக்கங்கள்',
      pdfLabel: 'CV-ஐ PDF வடிவில் பதிவிறக்கவும்',
    },
    stats: [
      { label: 'பொறியியல் அனுபவம்', value: '8+ ஆண்டுகள்' },
      { label: 'விரிவான பணிகள்', value: '6' },
      { label: 'பணியாற்றிய நாடுகள்', value: '2' },
    ],
    work: {
      'emc-percept': {
        countryName: 'சிங்கப்பூர்',
        dates: '22 அக் 2025 - 31 டிச 2025',
        duration: '2 மாதங்கள்',
        role: 'மூத்த மென்பொருள் பொறியாளர்',
        summary:
          'சிங்கப்பூரின் மொத்த மின்சார சந்தையை ஆதரிக்கும் EMC மைய அமைப்புகளில் நம்பகமான integrations மற்றும் ஒழுங்குமுறை workflows மீது கவனம் செலுத்தி பங்களித்தேன்.',
        highlights: [
          'மொத்த மின்சார சந்தை செயல்பாடுகளுக்கான Java REST மற்றும் SOAP services-ஐ உருவாக்கி பராமரித்தேன்.',
          'Performance tuning மற்றும் data validation உட்பட Oracle SQL மற்றும் stored procedures உருவாக்கினேன்.',
          'ஒழுங்குமுறை ஆவண workflows மற்றும் Angular/Vue frontend-ஐ ஆதரித்தேன்.',
        ],
      },
      'dbs-technopals': {
        collaboration: 'பிராந்திய வழங்கல்: 🇭🇰 ஹொங்கொங் மற்றும் 🇹🇼 தைவான்',
        countryName: 'சிங்கப்பூர்',
        dates: '22 செப் 2022 - 22 செப் 2025',
        duration: '3 ஆண்டுகள்',
        role: 'மூத்த மென்பொருள் பொறியாளர்',
        summary:
          'Scalable frontend architecture, backend integrations மற்றும் பாதுகாப்பான CI/CD நடைமுறைகள் மூலம் நிறுவன banking, equities மற்றும் trading platforms வழங்கினேன்.',
        highlights: [
          'AS/400 மற்றும் .NET legacy systems-ஐ Spring Boot services உடன் React micro-frontends ஆக நவீனமயமாக்கினேன்.',
          'React 18 migration பணிகளை வழிநடத்தி concurrent rendering patterns மூலம் user experience மேம்படுத்தினேன்.',
          'OpenShift releases, dependency vulnerability remediation மற்றும் 80%+ unit-test coverage-ஐ பராமரித்தேன்.',
        ],
      },
      'gic-technopals': {
        countryName: 'சிங்கப்பூர்',
        dates: '18 ஏப் 2022 - 2 செப் 2022',
        duration: '4 மாதங்கள்',
        role: 'மூத்த மென்பொருள் பொறியாளர்',
        summary:
          'Investment analysts மற்றும் business teams பயன்படுத்திய enterprise applications-ன் usability, maintainability மற்றும் performance-ஐ மேம்படுத்தினேன்.',
        highlights: [
          'Class components-ஐ functional React components மற்றும் Hooks ஆக refactor செய்தேன்.',
          'Analysts மற்றும் business stakeholders-க்கான workflow மற்றும் data-presentation features உருவாக்கினேன்.',
          'Django மற்றும் SQLite analytics services உருவாக்கி Jest test coverage-ஐ வலுப்படுத்தினேன்.',
        ],
      },
      ideabits: {
        collaboration:
          'வாடிக்கையாளர் வழங்கல்: 🇦🇺 ஆஸ்திரேலியா மற்றும் 🇪🇺 ஐரோப்பா',
        countryName: 'இலங்கை',
        dates: '26 ஜூலை 2021 - 11 ஏப் 2022',
        duration: '8 மாதங்கள்',
        role: 'மூத்த மென்பொருள் பொறியாளர்',
        summary:
          'சர்வதேச வாடிக்கையாளர்களுக்காக middleware, cloud workflows மற்றும் full-stack MVP applications வழங்கினேன்.',
        highlights: [
          'BroadSign மற்றும் Ayuda advertising platforms-ஐ இணைக்கும் Node.js/Express middleware உருவாக்கினேன்.',
          'PostgreSQL மற்றும் Sequelize உடன் AWS Step Functions மற்றும் Lambda workflows வடிவமைத்தேன்.',
          'ஐரோப்பிய வாடிக்கையாளர்களுக்கான விரைவான product validation-க்கு Next.js மற்றும் React MVPs வழங்கினேன்.',
        ],
      },
      'creative-pagero': {
        collaboration: 'தயாரிப்பு ஒத்துழைப்பு: 🇸🇪 சுவீடன்',
        countryName: 'இலங்கை',
        dates: '1 நவ 2018 - 16 ஆக 2021',
        duration: '2 ஆண்டுகள் 9 மாதங்கள்',
        role: 'மென்பொருள் பொறியாளர் → மூத்த மென்பொருள் பொறியாளர்',
        summary:
          'உலகளாவிய செயல்பாடுகளுக்கான distributed enterprise systems உருவாக்கியபோது மூத்த பொறுப்பிற்கு முன்னேறினேன்.',
        highlights: [
          'சர்வதேச e-invoicing மற்றும் freight products-க்கான React interfaces மற்றும் Scala/Java microservices உருவாக்கினேன்.',
          'PostgreSQL மற்றும் RabbitMQ workflows உடன் invoice audit மற்றும் validation services வடிவமைத்தேன்.',
          'CI/CD மற்றும் production support வழங்கி இளைய பொறியாளர்களுக்கு வழிகாட்டினேன்.',
        ],
      },
      hybriteq: {
        countryName: 'இலங்கை',
        dates: 'பிப் 2018 - செப் 2018',
        duration: '8 மாதங்கள்',
        role: 'மென்பொருள் பொறியாளர்',
        summary:
          'சமீபத்திய CV சுருக்கத்தில் குறிப்பிடப்பட்ட தொடக்ககால மென்பொருள் பொறியியல் பணி.',
        highlights: [
          'இலங்கை delivery team ஒன்றில் வணிக மென்பொருள் பொறியியல் தொழிலைத் தொடங்கினேன்.',
          'பின்னர் வந்த full-stack மற்றும் enterprise engineering பணிகளுக்கான தொழில்முறை அடித்தளத்தை உருவாக்கினேன்.',
        ],
      },
    },
  },
} as const satisfies Dictionary;
