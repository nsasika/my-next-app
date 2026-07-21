import type { LocalizedInterviewExperiences } from './types';

export const taInterviewExperiences = {
  'dbs-ncs-react-lead': {
    company: 'NCS வழியாக DBS',
    description:
      'பெரிய அளவிலான micro frontend architecture, React performance, routing, Nginx, JavaScript event loop, TypeScript மற்றும் native WebView integration பற்றிய React Lead நேர்காணல் அனுபவம்.',
    slug: 'dbs-ncs-react-lead',
    tags: ['DBS', 'NCS', 'React Lead', 'Micro frontend', 'Architecture'],
    title: 'NCS வழியாக DBS React Lead நேர்காணல் அனுபவம்',
    items: [
      {
        eyebrow: 'அறிமுகம்',
        question: 'React Lead பதவிக்காக உங்களை எப்படி அறிமுகப்படுத்துவீர்கள்?',
        answer:
          '60–90 விநாடிகளில் தற்போதைய பங்கு, React மற்றும் TypeScript அனுபவம், banking domain, technical leadership மற்றும் அளவிடக்கூடிய ஒரு விளைவைச் சொல்லுங்கள். DBS-இல் 100-க்கும் மேற்பட்ட micro frontends கொண்ட platform-இல் domain teams உடன் independent delivery, performance, testing மற்றும் architecture standards மீது பணியாற்றியதைப் பதவியுடன் இணைக்கவும்.',
        points: [
          'Follow-up கேள்விகளில் விளக்கக்கூடிய உண்மையான பொறுப்புகளை மட்டும் கூறுங்கள்.',
          'Hands-on engineering மற்றும் team leadership இரண்டையும் காட்டுங்கள்.',
        ],
      },
      {
        eyebrow: 'Micro frontend architecture',
        question:
          'நீங்கள் எந்த DBS micro frontends-ல் பணியாற்றினீர்கள்? 100-க்கும் மேற்பட்ட MFE platform architecture எவ்வாறு செயல்பட்டது?',
        answer:
          'முதலில் நீங்கள் உண்மையில் மாற்றிய micro frontends மற்றும் அவற்றின் business capabilities-ஐப் பெயரிடுங்கள்; அனைத்தையும் நீங்களே செய்ததாகக் கூறாதீர்கள். Shell authentication, global layout, top-level routing, telemetry மற்றும் remote discovery-ஐ நிர்வகித்தது; domain teams independently deployed remotes-ஐச் சொந்தமாக வைத்திருந்தன. Module Federation runtime remoteEntry மூலம் remotes-ஐ ஏற்றியது; React, React DOM மற்றும் design system compatible singletons ஆக பகிரப்பட்டன.',
        points: [
          'Routes, events, permissions மற்றும் UI APIs-க்கு versioned contracts பயன்படுத்தவும்.',
          'Remote load failure-க்கு timeout, fallback UI, logging மற்றும் rollback வைத்திருக்கவும்.',
          'அனைத்து remotes-ஐயும் ஒரே global mutable store-க்கு இணைக்காதீர்கள்.',
        ],
      },
      {
        eyebrow: 'React performance',
        question:
          'React application performance-ஐ ஆய்விலிருந்து production வரை எவ்வாறு மேம்படுத்துவீர்கள்?',
        answer:
          'Core Web Vitals, interaction latency மற்றும் route load targets-ஐ முதலில் அமைக்கவும். Lighthouse, Chrome Performance, React Profiler, bundle analyzer மற்றும் production telemetry மூலம் bottleneck-ஐ அளவிடவும். Route/component splitting, tree shaking மற்றும் சிறிய dependencies மூலம் JavaScript-ஐக் குறைக்கவும். தேவையற்ற re-renders, effects மற்றும் பெரிய lists-ஐ optimize செய்யவும்; images, fonts, caching மற்றும் API waterfalls-ஐச் சரிசெய்யவும். Before/after metrics மற்றும் CI performance budgets மூலம் regressions-ஐத் தடுக்கவும்.',
        points: [
          'Long lists-ஐ virtualize செய்து stale requests-ஐ cancel செய்யவும்.',
          'Profiling தேவை என நிரூபித்த இடங்களில் மட்டுமே memoization பயன்படுத்தவும்.',
          'Real devices மற்றும் slow networks-ல் சோதிக்கவும்.',
        ],
      },
      {
        eyebrow: 'React Router',
        question:
          'Routing எவ்வாறு கையாளப்பட்டது? Browser history மற்றும் memory history இடையிலான வேறுபாடு என்ன?',
        answer:
          'react-router-dom-இன் BrowserRouter, pushState, replaceState மற்றும் popstate மூலம் address bar மற்றும் Back/Forward history உடன் ஒத்திசைகிறது. Deep URL refresh-க்கு server SPA entry fallback தேவை. MemoryRouter entries-ஐ memory-ல் வைத்திருப்பதால் URL மாறாது; tests, Storybook, native shells மற்றும் isolated embedded flows-க்கு ஏற்றது. MFE architecture-ல் shell BrowserRouter-ஐச் சொந்தமாக வைத்துக் கொண்டு remotes route contract பயன்படுத்துவது பாதுகாப்பானது.',
        code: `<BrowserRouter><Routes><Route path="/customers/:id" element={<CustomerPage />} /></Routes></BrowserRouter>

<MemoryRouter initialEntries={['/customers/42']}><Routes><Route path="/customers/:id" element={<CustomerPage />} /></Routes></MemoryRouter>`,
      },
      {
        eyebrow: 'Module Federation',
        question: 'Module Federation v1 மற்றும் v2 இடையிலான வேறுபாடு என்ன?',
        answer:
          'V1 என்பது webpack host/remote containers, remoteEntry.js, exposes, remotes மற்றும் shared dependency negotiation அடிப்படையிலான முதன்மை runtime model. V2 அதே architecture-ஐ வைத்துக்கொண்டு manifest metadata, runtime plugins, type generation/consumption, debugging மற்றும் விரிவான bundler integration போன்ற enhanced tooling-ஐச் சேர்க்கிறது. உங்கள் project பயன்படுத்திய plugin மற்றும் bundler versions-ன் உண்மையான capabilities-ஐ மட்டும் விளக்கவும்.',
      },
      {
        eyebrow: 'Nginx performance',
        question:
          'Apache அல்லது Nginx பயன்படுத்தியுள்ளீர்களா? Nginx தானாக performance-ஐ எவ்வாறு மேம்படுத்துகிறது?',
        answer:
          'CDN-இலிருந்து வேறுபட்டு Nginx origin-ல் reverse proxy மற்றும் static server ஆக performance-ஐ மேம்படுத்துகிறது. Brotli/gzip compression, fingerprinted assets-க்கு immutable cache headers, HTTP/2 அல்லது HTTP/3, upstream keep-alive, பாதுகாப்பான proxy caching மற்றும் load balancing பயன்படுத்தலாம். TTFB, upstream latency, cache-hit ratio மற்றும் compression savings-ஐ load test மூலம் அளவிட வேண்டும்.',
        points: [
          'Personalized அல்லது mutation responses-ஐ தவறுதலாக cache செய்யாதீர்கள்.',
          'CDN மற்றும் Nginx ஒன்றுக்கொன்று துணையாக இருக்கலாம்.',
        ],
      },
      {
        eyebrow: 'Promises மற்றும் runtimes',
        question:
          'Promises மற்றும் Node.js, browser JavaScript இடையிலான முக்கிய வேறுபாடுகளை விளக்குங்கள்.',
        answer:
          'Promise ஒரு asynchronous operation-ன் eventual fulfillment அல்லது rejection-ஐக் குறிக்கிறது. Promise semantics இரண்டிலும் ஒரே மாதிரி; host APIs வேறுபடும். Browser DOM, events மற்றும் Web APIs தருகிறது; Node.js filesystem, sockets, streams, process APIs மற்றும் libuv event loop தருகிறது. Promise callbacks தற்போதைய stack முடிந்த பின் microtasks ஆக இயங்கும். Node-இன் process.nextTick queue அதிக முன்னுரிமை கொண்டதால் அதைப் பெருமளவில் பயன்படுத்துவது மற்ற பணியைத் தாமதப்படுத்தலாம்.',
        code: `console.log('start');
setTimeout(() => console.log('timer'), 0);
Promise.resolve().then(() => console.log('microtask'));
console.log('end');
// start, end, microtask, timer`,
      },
      {
        eyebrow: 'TypeScript',
        question:
          'TypeScript என்றால் என்ன? JavaScript application-க்கு அது என்ன வழங்குகிறது?',
        answer:
          'TypeScript என்பது JavaScript-ஆக compile ஆகும் statically checked superset. Type inference, interfaces, generics, discriminated unions மற்றும் utility types மூலம் தவறான property access மற்றும் argument types-ஐ runtime-க்கு முன் கண்டுபிடிக்கிறது; refactoring, navigation மற்றும் shared contracts பாதுகாப்பாகின்றன. இது runtime API data-ஐ validate செய்யாது; network boundaries-ல் schema validation மற்றும் tests இன்னும் தேவை.',
      },
      {
        eyebrow: 'Event loop',
        question:
          'Call stack, task queue மற்றும் microtask queue உட்பட event loop-ஐச் சரியாக விளக்குங்கள்.',
        answer:
          'Engine தற்போதைய task மற்றும் call stack-ஐ முழுமையாக முடிக்கிறது. Stack காலியானதும் Promise reactions மற்றும் queueMicrotask callbacks கொண்ட microtask queue முழுமையாக drain செய்யப்படுகிறது. பின்னர் browser render செய்யலாம்; timer, message அல்லது user event போன்ற அடுத்த task எடுக்கப்படும். Long task input மற்றும் rendering-ஐ block செய்கிறது; முடிவில்லா microtasks timers மற்றும் painting-ஐத் தாமதப்படுத்தும்.',
        code: `console.log('task');
queueMicrotask(() => console.log('microtask'));
setTimeout(() => console.log('next task'), 0);`,
      },
      {
        eyebrow: 'In-app WebView architecture',
        question:
          'Native code மற்றும் React இடையே இருவழி WebView communication architecture-ஐ எவ்வாறு வடிவமைப்பீர்கள்?',
        answer:
          'Native app authentication, secure storage, permissions மற்றும் WebView lifecycle-ஐச் சொந்தமாக வைத்திருக்கிறது; React web UI-ஐச் சொந்தமாக வைத்திருக்கிறது. {id, version, type, payload} போன்ற சிறிய versioned message protocol அமைத்து இருபுறமும் schema validate செய்யவும். React-to-native-க்கு postMessage, native-to-React-க்கு பெயரிடப்பட்ட event அல்லது controlled injection பயன்படுத்தவும். Origins மற்றும் message types-ஐ allow-list செய்து request IDs, timeouts மற்றும் structured errors பயன்படுத்தவும்; arbitrary native methods அல்லது secrets-ஐ expose செய்யாதீர்கள்.',
        code: `window.ReactNativeWebView?.postMessage(JSON.stringify({
  id: crypto.randomUUID(), version: 1, type: 'OPEN_CAMERA', payload: {}
}));`,
        points: [
          'Handshake, lifecycle recovery மற்றும் idempotent retries-ஐ வடிவமைக்கவும்.',
          'iOS மற்றும் Android இரண்டிலும் contract மற்றும் integration tests இயக்கவும்.',
        ],
      },
    ],
  },
} as const satisfies LocalizedInterviewExperiences;
