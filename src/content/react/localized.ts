import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';
import { APP_PATHS, type AppPath } from '@/config/routes';
import type { Locale } from '@/i18n/config';
import { TechnicalTerm } from '@/i18n/technicalTerms';

type LocalizedTopic = {
  description: string;
  title: string;
};

type TopicTranslations = {
  sinhala: LocalizedTopic;
  tamil: LocalizedTopic;
};

const topicTranslations: Partial<Record<AppPath, TopicTranslations>> = {
  [APP_PATHS.customHooks]: {
    sinhala: {
      title: `${TechnicalTerm.HOOKS} නීති`,
      description:
        'React Hooks නිවැරදිව සහ අනුමාන කළ හැකි ලෙස භාවිතා කිරීමේ නීති.',
    },
    tamil: {
      title: `${TechnicalTerm.HOOKS} விதிகள்`,
      description:
        'React Hooks-ஐ சரியாகவும் கணிக்கக்கூடிய வகையிலும் பயன்படுத்தும் விதிகள்.',
    },
  },
  [APP_PATHS.useRefTest]: {
    sinhala: {
      title: TechnicalTerm.USE_REF,
      description:
        'Render කිරීමක් නොකර mutable value එකක් හෝ DOM reference එකක් රඳවාගන්නා ආකාරය.',
    },
    tamil: {
      title: TechnicalTerm.USE_REF,
      description:
        'மறுபடியும் render செய்யாமல் mutable value அல்லது DOM reference-ஐ வைத்திருக்கும் முறை.',
    },
  },
  [APP_PATHS.useCallback]: {
    sinhala: {
      title: TechnicalTerm.USE_CALLBACK,
      description:
        'අවශ්‍ය අවස්ථාවල function reference ස්ථාවර කර child renders පාලනය කිරීම.',
    },
    tamil: {
      title: TechnicalTerm.USE_CALLBACK,
      description:
        'தேவையான இடங்களில் function reference-ஐ நிலைப்படுத்தி child renders-ஐ கட்டுப்படுத்துதல்.',
    },
  },
  [APP_PATHS.react18Changes]: {
    sinhala: {
      title: 'React 18 වෙනස්කම්',
      description:
        'Concurrent rendering, automatic batching, transitions සහ නව hooks පිළිබඳ සාරාංශය.',
    },
    tamil: {
      title: 'React 18 மாற்றங்கள்',
      description:
        'Concurrent rendering, automatic batching, transitions மற்றும் புதிய hooks பற்றிய சுருக்கம்.',
    },
  },
  [APP_PATHS.react18Batching]: {
    sinhala: {
      title: TechnicalTerm.AUTOMATIC_BATCHING,
      description:
        'State updates කිහිපයක් එක render එකකට එකතු කර performance වැඩි කරන ආකාරය.',
    },
    tamil: {
      title: TechnicalTerm.AUTOMATIC_BATCHING,
      description:
        'பல state updates-ஐ ஒரே render-ஆக இணைத்து performance மேம்படுத்தும் விதம்.',
    },
  },
  [APP_PATHS.react18Transitions]: {
    sinhala: {
      title: `Transitions සහ ${TechnicalTerm.USE_TRANSITION}`,
      description:
        'Urgent updates responsive තබා අඩු ප්‍රමුඛතා වැඩ transition එකක් ලෙස ධාවනය කිරීම.',
    },
    tamil: {
      title: `Transitions மற்றும் ${TechnicalTerm.USE_TRANSITION}`,
      description:
        'Urgent updates responsive ஆக இருக்க குறைந்த முன்னுரிமை வேலையை transition ஆக இயக்குதல்.',
    },
  },
  [APP_PATHS.react18DeferredValue]: {
    sinhala: {
      title: TechnicalTerm.USE_DEFERRED_VALUE,
      description:
        'Input එක responsive තබා මිල අධික derived result එක පසුව update කිරීම.',
    },
    tamil: {
      title: TechnicalTerm.USE_DEFERRED_VALUE,
      description:
        'Input responsive ஆக இருக்கச் செய்து costly derived result-ஐ பின்னர் update செய்தல்.',
    },
  },
  [APP_PATHS.react18Id]: {
    sinhala: {
      title: TechnicalTerm.USE_ID,
      description: 'Accessibility සහ hydration සඳහා ස්ථාවර unique IDs සෑදීම.',
    },
    tamil: {
      title: TechnicalTerm.USE_ID,
      description:
        'Accessibility மற்றும் hydration-க்கு நிலையான unique IDs உருவாக்குதல்.',
    },
  },
  [APP_PATHS.react18ExternalStore]: {
    sinhala: {
      title: TechnicalTerm.USE_SYNC_EXTERNAL_STORE,
      description:
        'Concurrent rendering අතර tearing නොමැතිව external store එකකට subscribe වීම.',
    },
    tamil: {
      title: TechnicalTerm.USE_SYNC_EXTERNAL_STORE,
      description:
        'Concurrent rendering-ல் tearing இல்லாமல் external store-க்கு subscribe செய்தல்.',
    },
  },
  [APP_PATHS.react19Changes]: {
    sinhala: {
      title: 'React 19 වෙනස්කම්',
      description:
        'Actions, optimistic updates සහ use API ඇතුළු React 19 හැකියාවන්.',
    },
    tamil: {
      title: 'React 19 மாற்றங்கள்',
      description:
        'Actions, optimistic updates மற்றும் use API உள்ளிட்ட React 19 திறன்கள்.',
    },
  },
  [APP_PATHS.react19ActionState]: {
    sinhala: {
      title: TechnicalTerm.USE_ACTION_STATE,
      description:
        'Form action result, pending state සහ errors එක තැනක පාලනය කිරීම.',
    },
    tamil: {
      title: TechnicalTerm.USE_ACTION_STATE,
      description:
        'Form action result, pending state மற்றும் errors-ஐ ஒரே இடத்தில் நிர்வகித்தல்.',
    },
  },
  [APP_PATHS.react19Optimistic]: {
    sinhala: {
      title: TechnicalTerm.USE_OPTIMISTIC,
      description:
        'Server mutation එක අවසන් වීමට පෙර ක්ෂණික optimistic UI පෙන්වීම.',
    },
    tamil: {
      title: TechnicalTerm.USE_OPTIMISTIC,
      description:
        'Server mutation முடிவதற்கு முன் உடனடி optimistic UI காட்டுதல்.',
    },
  },
  [APP_PATHS.react19Use]: {
    sinhala: {
      title: 'use() API',
      description:
        'Render අතර promise හෝ context resource එකක් Suspense සමඟ කියවීම.',
    },
    tamil: {
      title: 'use() API',
      description:
        'Render போது promise அல்லது context resource-ஐ Suspense உடன் வாசித்தல்.',
    },
  },
  [APP_PATHS.counterSlice]: {
    sinhala: {
      title: `${TechnicalTerm.REDUX_TOOLKIT} Slice`,
      description:
        'Redux state, reducers සහ actions අඩු boilerplate සමඟ සංවිධානය කිරීම.',
    },
    tamil: {
      title: `${TechnicalTerm.REDUX_TOOLKIT} Slice`,
      description:
        'Redux state, reducers மற்றும் actions-ஐ குறைந்த boilerplate உடன் அமைத்தல்.',
    },
  },
  [APP_PATHS.reduxThunk]: {
    sinhala: {
      title: TechnicalTerm.REDUX_THUNK,
      description:
        'සරල async workflows සහ API calls Redux actions සමඟ පාලනය කිරීම.',
    },
    tamil: {
      title: TechnicalTerm.REDUX_THUNK,
      description:
        'எளிய async workflows மற்றும் API calls-ஐ Redux actions உடன் நிர்வகித்தல்.',
    },
  },
  [APP_PATHS.reduxSaga]: {
    sinhala: {
      title: TechnicalTerm.REDUX_SAGA,
      description:
        'Complex side effects generators සහ declarative effects මඟින් පාලනය කිරීම.',
    },
    tamil: {
      title: TechnicalTerm.REDUX_SAGA,
      description:
        'Complex side effects-ஐ generators மற்றும் declarative effects மூலம் நிர்வகித்தல்.',
    },
  },
  [APP_PATHS.rtkQuery]: {
    sinhala: {
      title: TechnicalTerm.RTK_QUERY,
      description:
        'Server data fetching, caching, invalidation සහ loading state සඳහා Redux Toolkit layer එක.',
    },
    tamil: {
      title: TechnicalTerm.RTK_QUERY,
      description:
        'Server data fetching, caching, invalidation மற்றும் loading state-க்கான Redux Toolkit layer.',
    },
  },
  [APP_PATHS.takeEvery]: {
    sinhala: {
      title: 'Saga takeEvery',
      description:
        'පැමිණෙන සෑම matching action එකකටම වෙනම saga task එකක් ධාවනය කිරීම.',
    },
    tamil: {
      title: 'Saga takeEvery',
      description:
        'வரும் ஒவ்வொரு matching action-க்கும் தனி saga task இயக்குதல்.',
    },
  },
  [APP_PATHS.takeLatest]: {
    sinhala: {
      title: 'Saga takeLatest',
      description: 'නවතම request එක පමණක් තබා පැරණි running task අවලංගු කිරීම.',
    },
    tamil: {
      title: 'Saga takeLatest',
      description:
        'புதிய request மட்டும் வைத்துக் கொண்டு பழைய running task-ஐ ரத்து செய்தல்.',
    },
  },
  [APP_PATHS.debounce]: {
    sinhala: {
      title: 'Saga Debounce',
      description:
        'User input නිශ්චල වන තෙක් බලා අතිරික්ත API requests අඩු කිරීම.',
    },
    tamil: {
      title: 'Saga Debounce',
      description:
        'User input நின்ற பின் செயல்பட்டு தேவையற்ற API requests-ஐ குறைத்தல்.',
    },
  },
  [APP_PATHS.zustand]: {
    sinhala: {
      title: `${TechnicalTerm.ZUSTAND} Store`,
      description:
        'කුඩා API එකක් සමඟ සරල සහ වේගවත් client state store එකක් සෑදීම.',
    },
    tamil: {
      title: `${TechnicalTerm.ZUSTAND} Store`,
      description:
        'சிறிய API மூலம் எளிய மற்றும் வேகமான client state store உருவாக்குதல்.',
    },
  },
  [APP_PATHS.performanceGuide]: {
    sinhala: {
      title: 'Performance පරීක්ෂා කරන්නේ ඇයි සහ කෙසේද?',
      description:
        'Optimize කිරීමට පෙර browser tools, React Profiler සහ Web Vitals මඟින් bottleneck එක මැනීම.',
    },
    tamil: {
      title: 'Performance-ஐ ஏன், எப்படி சோதிப்பது?',
      description:
        'Optimize செய்வதற்கு முன் browser tools, React Profiler மற்றும் Web Vitals மூலம் bottleneck-ஐ அளவிடுதல்.',
    },
  },
  [APP_PATHS.useMemoTest]: {
    sinhala: {
      title: TechnicalTerm.USE_MEMO,
      description:
        'මිල අධික derived calculation එක dependencies වෙනස් වන විට පමණක් නැවත ධාවනය කිරීම.',
    },
    tamil: {
      title: TechnicalTerm.USE_MEMO,
      description:
        'Costly derived calculation-ஐ dependencies மாறும்போது மட்டும் மீண்டும் இயக்குதல்.',
    },
  },
  [APP_PATHS.reactMemo]: {
    sinhala: {
      title: TechnicalTerm.REACT_MEMO,
      description: 'Props වෙනස් නොවූ විට component render එක මඟහැරීම.',
    },
    tamil: {
      title: TechnicalTerm.REACT_MEMO,
      description: 'Props மாறாதபோது component render-ஐ தவிர்த்தல்.',
    },
  },
  [APP_PATHS.performance]: {
    sinhala: {
      title: 'Render Profiling Demo',
      description:
        'Render count සහ expensive work මැන optimization එකේ බලපෑම තහවුරු කිරීම.',
    },
    tamil: {
      title: 'Render Profiling Demo',
      description:
        'Render count மற்றும் expensive work-ஐ அளந்து optimization தாக்கத்தை உறுதிப்படுத்துதல்.',
    },
  },
  [APP_PATHS.ssr]: {
    sinhala: {
      title: TechnicalTerm.SERVER_SIDE_RENDERING,
      description:
        'Request එකකට server එකේ HTML සාදා වේගවත් initial content සහ SEO ලබාදීම.',
    },
    tamil: {
      title: TechnicalTerm.SERVER_SIDE_RENDERING,
      description:
        'ஒவ்வொரு request-க்கும் server-ல் HTML உருவாக்கி வேகமான initial content மற்றும் SEO வழங்குதல்.',
    },
  },
  [APP_PATHS.csr]: {
    sinhala: {
      title: TechnicalTerm.CLIENT_SIDE_RENDERING,
      description:
        'Browser එකේ JavaScript මඟින් data load කර interactive UI render කිරීම.',
    },
    tamil: {
      title: TechnicalTerm.CLIENT_SIDE_RENDERING,
      description:
        'Browser JavaScript மூலம் data load செய்து interactive UI render செய்தல்.',
    },
  },
};

function createLocalizedLesson(
  topic: LocalizedTopic,
  locale: 'si-LK' | 'ta-LK',
): ConceptLessonContent {
  const isSinhala = locale === 'si-LK';
  return {
    header: {
      description: topic.description,
      eyebrow: isSinhala ? 'React / ඉගෙනුම් පාඩම' : 'React / கற்றல் பாடம்',
      tags: isSinhala
        ? [TechnicalTerm.REACT, TechnicalTerm.TYPESCRIPT, 'ප්‍රායෝගික ඉගෙනීම']
        : [TechnicalTerm.REACT, TechnicalTerm.TYPESCRIPT, 'நடைமுறை கற்றல்'],
      title: topic.title,
    },
    theory: {
      title: isSinhala
        ? `${topic.title} තේරුම් ගන්න`
        : `${topic.title}-ஐ புரிந்துகொள்ளுங்கள்`,
      summary: topic.description,
      points: isSinhala
        ? [
            'මෙම සංකල්පය විසඳන ගැටලුව මුලින් හඳුනාගන්න.',
            'අවශ්‍ය විට පමණක් භාවිතා කර මැනිය හැකි ප්‍රතිඵල තහවුරු කරන්න.',
            'Dependencies, cleanup, rendering සහ error paths සමාලෝචනය කරන්න.',
            'Interview එකකදී use case එක, trade-offs සහ project example එකක් පැහැදිලි කරන්න.',
          ]
        : [
            'இந்த concept தீர்க்கும் பிரச்சினையை முதலில் அடையாளம் காணுங்கள்.',
            'தேவையானபோது மட்டும் பயன்படுத்தி அளவிடக்கூடிய முடிவை உறுதிப்படுத்துங்கள்.',
            'Dependencies, cleanup, rendering மற்றும் error paths-ஐ மதிப்பாய்வு செய்யுங்கள்.',
            'Interview-ல் use case, trade-offs மற்றும் project example-ஐ தெளிவாக விளக்குங்கள்.',
          ],
      whatToTry: isSinhala
        ? [
            'කුඩා example එකක් ධාවනය කර render behavior එක DevTools මඟින් පරීක්ෂා කරන්න.',
          ]
        : [
            'சிறிய example ஒன்றை இயக்கி render behavior-ஐ DevTools மூலம் பரிசோதிக்கவும்.',
          ],
    },
  };
}

export const REACT_LESSONS_BY_LOCALE: Readonly<
  Partial<Record<AppPath, Partial<Record<Locale, ConceptLessonContent>>>>
> = Object.fromEntries(
  Object.entries(topicTranslations).map(([pathname, translations]) => [
    pathname,
    {
      'si-LK': createLocalizedLesson(translations!.sinhala, 'si-LK'),
      'ta-LK': createLocalizedLesson(translations!.tamil, 'ta-LK'),
    },
  ]),
);
