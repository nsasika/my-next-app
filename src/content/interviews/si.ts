import type { LocalizedInterviewExperiences } from './types';
import { siBankQuestions, siVirtusaQuestions } from './legacyLocalized';

export const siInterviewExperiences = {
  'bank-of-singapore': {
    company: 'Bank of Singapore',
    description:
      'React, micro frontends, JavaScript, browser APIs, Git සහ responsive UI පිළිබඳ සැබෑ සම්මුඛ පරීක්ෂණ ප්‍රශ්න සහ පැහැදිලි පිළිතුරු.',
    items: siBankQuestions,
    slug: 'bank-of-singapore',
    tags: ['React', 'Micro frontend', 'JavaScript', 'Banking'],
    title: 'Bank of Singapore සම්මුඛ පරීක්ෂණ අත්දැකීම',
  },
  'virtusa-singapore': {
    company: 'Virtusa Singapore',
    description:
      'Frontend සහ backend architecture, transactions, database performance, React migration සහ testing ආවරණය කළ සැබෑ full-stack සම්මුඛ පරීක්ෂණ අත්දැකීම.',
    items: siVirtusaQuestions,
    slug: 'virtusa-singapore',
    tags: ['Full stack', 'React', 'Java', 'Databases'],
    title: 'Virtusa Singapore සම්මුඛ පරීක්ෂණ අත්දැකීම',
  },
  'mfe-top-10': {
    company: 'ඉලක්කගත සම්මුඛ පරීක්ෂණ ප්‍රශ්න',
    description:
      'Architecture, delivery, security, performance, resilience සහ operations ආවරණය කරන ප්‍රධාන micro frontend ප්‍රශ්න 10ක් සහ lead-level පිළිතුරු.',
    slug: 'mfe-top-10',
    tags: ['Micro frontend', 'Architecture', 'React Lead', 'Module Federation'],
    title: 'ප්‍රධාන Micro Frontend සම්මුඛ පරීක්ෂණ ප්‍රශ්න 10',
    items: [
      {
        eyebrow: 'Architecture',
        question: 'Micro frontend යනු කුමක්ද? එය භාවිතා කළ යුත්තේ කවදාද?',
        answer:
          'විශාල frontend එකක් business domains අනුව, teams වලට independently develop, test සහ deploy කළ හැකි applications ලෙස බෙදීම micro frontend architecture එකයි. Independent ownership සහ release scale එක runtime සහ governance complexity එක සාධාරණ කරන විට භාවිතා කරන්න. කුඩා එකම team එකකට modular monolith එක සාමාන්‍යයෙන් සරලය.',
      },
      {
        eyebrow: 'Composition',
        question:
          'Micro frontends compose කළ හැකි ක්‍රම සහ නිවැරදි ක්‍රමය තෝරාගන්නේ කෙසේද?',
        answer:
          'Runtime composition සඳහා Module Federation, single-spa, web components හෝ විශේෂ අවස්ථාවල iframes භාවිතා කළ හැක. Build-time composition versioned packages භාවිතා කරයි; server composition HTML fragments එකතු කරයි. Deployment independence, isolation, SEO, performance, security සහ team maturity අනුව තෝරන්න.',
      },
      {
        eyebrow: 'Routing',
        question: 'Micro frontend system එකක routing හි owner කවුද?',
        answer:
          'සාමාන්‍යයෙන් shell එක browser history, authentication gates, top-level routes සහ 404 behavior පාලනය කළ යුතුය. Remote එකක් තම base path යටතේ child routes පාලනය කළ හැක. Versioned route contract එක deep links, refresh, Back සහ Forward predictable කරයි.',
      },
      {
        eyebrow: 'Communication',
        question:
          'Tight coupling නොමැතිව micro frontends communicate කරන්නේ කෙසේද?',
        answer:
          'Navigable state සඳහා URL, parent-child data සඳහා explicit props හෝ platform APIs, cross-app notifications සඳහා typed domain events භාවිතා කරන්න. Event names සහ payload schemas version කරන්න. සියලු remotes එක global mutable store එකකට බැඳීමෙන් independent ownership නැති වේ.',
      },
      {
        eyebrow: 'Dependencies',
        question: 'React සහ අනෙකුත් dependencies ආරක්ෂිතව share කරන්නේ කෙසේද?',
        answer:
          'React සහ React DOM වැනි එක runtime instance එකක් අවශ්‍ය, විශාල dependencies පමණක් compatible singletons ලෙස share කරන්න. Version negotiation test කරන්න. සෑම library එකක්ම centrally pin කිරීම duplication අඩු කළත් සියලු remotes එකවර upgrade කළ යුතු monolith එකක් නැවත සාදයි.',
      },
      {
        eyebrow: 'Security',
        question:
          'Micro frontends අතර authentication සහ authorization ක්‍රියා කරන්නේ කෙසේද?',
        answer:
          'Shell එක session එක පිහිටුවා narrow identity contract එකක් ලබාදිය හැකි නමුත් සෑම backend එකක්ම authorization නැවත enforce කළ යුතුය. UI permissions security boundary නොවේ. CSP, trusted remote origins, validated messages සහ secure token handling භාවිතා කරන්න.',
      },
      {
        eyebrow: 'Delivery',
        question:
          'Independent deployment, versioning සහ rollback කළමනාකරණය කරන්නේ කෙසේද?',
        answer:
          'සෑම remote එකක්ම immutable versioned artifact සහ compatible manifest එකක් publish කරයි. Contract, integration, security සහ smoke tests පසු controlled rollout එකක් කරන්න. Backward-compatible contracts, feature flags, canary exposure සහ known-good mapping rollback එකක් තබන්න.',
      },
      {
        eyebrow: 'Performance',
        question: 'Micro frontends application එක slow නොවන ලෙස තබන්නේ කෙසේද?',
        answer:
          'JavaScript, CSS, requests, Core Web Vitals සහ route transitions සඳහා budgets සකසන්න. Safe shared dependencies deduplicate කරන්න, route අනුව remotes lazy-load කරන්න, immutable assets compress සහ cache කරන්න, waterfalls ඉවත් කරන්න. Real-user monitoring මඟින් route සහ remote අනුව මැන බලන්න.',
      },
      {
        eyebrow: 'Resilience',
        question: 'Remote එක load වීමට අසමත් වුවහොත් කුමක් සිදුවිය යුතුද?',
        answer:
          'Shell එක timeout සහ error boundary යොදා localized fallback එකක් පෙන්විය යුතුය. Remote name, version සහ correlation ID log කර unaffected navigation දිගටම ක්‍රියා කළ යුතුය. Safe transient failures පමණක් retry කර known-good artifact එකකට rollback කරන්න.',
      },
      {
        eyebrow: 'Quality සහ operations',
        question:
          'විශාල micro frontend platform එකක් test, observe සහ govern කරන්නේ කෙසේද?',
        answer:
          'Remote teams unit සහ component tests පාලනය කරයි; platform contracts, shell integrations සහ ප්‍රධාන business journeys වෙනම පරීක්ෂා කරයි. Telemetry තුළ route, remote, version, release, Web Vitals, errors සහ correlation IDs තිබිය යුතුය. Platform team templates, security rules, CI gates සහ dashboards සපයයි.',
      },
    ],
  },
  'dbs-ncs-react-lead': {
    company: 'NCS හරහා DBS',
    description:
      'විශාල micro frontend architecture, React performance, routing, Nginx, JavaScript event loop, TypeScript සහ native WebView integration ආවරණය කළ React Lead සම්මුඛ පරීක්ෂණ අත්දැකීම.',
    slug: 'dbs-ncs-react-lead',
    tags: ['DBS', 'NCS', 'React Lead', 'Micro frontend', 'Architecture'],
    title: 'NCS හරහා DBS React Lead සම්මුඛ පරීක්ෂණ අත්දැකීම',
    items: [
      {
        eyebrow: 'හැඳින්වීම',
        question: 'React Lead තනතුර සඳහා ඔබව හඳුන්වා දෙන්නේ කෙසේද?',
        answer:
          'තත්පර 60–90 අතර ඔබගේ වත්මන් භූමිකාව, React සහ TypeScript පළපුරුද්ද, banking domain එක, technical leadership සහ මැනිය හැකි ප්‍රතිඵලයක් කියන්න. DBS හි micro frontends 100කට වැඩි platform එකක domain teams සමඟ independent delivery, performance, testing සහ architecture standards පිළිබඳ වැඩ කළ බව පැහැදිලිව සම්බන්ධ කරන්න.',
        points: [
          'ඔබට follow-up ප්‍රශ්නවලදී විස්තර කළ හැකි සැබෑ වගකීම් පමණක් සඳහන් කරන්න.',
          'Hands-on engineering සහ team leadership දෙකම පෙන්වන්න.',
        ],
      },
      {
        eyebrow: 'Micro frontend architecture',
        question:
          'ඔබ වැඩ කළ DBS micro frontends මොනවාද සහ 100කට වැඩි MFE platform architecture එක ක්‍රියාත්මක කළේ කෙසේද?',
        answer:
          'මුලින් ඔබ සැබැවින්ම වෙනස් කළ micro frontends සහ ඒවායේ business capabilities නම් කරන්න; සියල්ලම ඔබ කළ බව නොකියන්න. Shell එක authentication, global layout, top-level routing, telemetry සහ remote discovery පාලනය කළ අතර domain teams independently deployed remotes පාලනය කළහ. Module Federation runtime එක remoteEntry හරහා remotes load කළ අතර React, React DOM සහ design system compatible singletons ලෙස share කළේය.',
        points: [
          'Routes, events, permissions සහ UI APIs සඳහා versioned contracts භාවිතා කරන්න.',
          'Remote load failure සඳහා timeout, fallback UI, logging සහ rollback සකසන්න.',
          'සියලු remotes එක global mutable store එකකට බැඳීමෙන් වළකින්න.',
        ],
      },
      {
        eyebrow: 'React performance',
        question:
          'React application performance එක ආරම්භයේ සිට production දක්වා වැඩි දියුණු කරන්නේ කෙසේද?',
        answer:
          'පළමුව Core Web Vitals, interaction latency සහ route load targets සකසා Lighthouse, Chrome Performance, React Profiler, bundle analyzer සහ production telemetry මඟින් bottleneck එක මැන බලන්න. Route/component code splitting, tree shaking සහ කුඩා dependencies මඟින් JavaScript අඩු කරන්න. Unnecessary re-renders, effects සහ expensive lists optimize කරන්න; images, fonts, caching සහ API waterfalls නිවැරදි කරන්න. අවසානයේ before/after metrics සහ CI performance budgets භාවිතයෙන් regression වළක්වන්න.',
        points: [
          'Long lists virtualize කර stale requests cancel කරන්න.',
          'Memoization profiling මඟින් අවශ්‍ය බව තහවුරු වූ ස්ථානවල පමණක් යොදන්න.',
          'Real devices සහ slow networks මත පරීක්ෂා කරන්න.',
        ],
      },
      {
        eyebrow: 'React Router',
        question:
          'Routing කළේ කෙසේද? Browser history සහ memory history අතර වෙනස කුමක්ද?',
        answer:
          'react-router-dom හි BrowserRouter, pushState, replaceState සහ popstate භාවිතයෙන් address bar සහ Back/Forward history සමඟ sync වේ. Deep URL refresh සඳහා server එක SPA entry file fallback කළ යුතුය. MemoryRouter entries memory තුළ තබන නිසා URL වෙනස් නොවේ; tests, Storybook, native shells සහ isolated embedded flows සඳහා සුදුසුය. MFE architecture එකක shell එක BrowserRouter හි owner වීම සහ remotes route contract එකක් භාවිතා කිරීම වඩා ආරක්ෂිතයි.',
        code: `<BrowserRouter><Routes><Route path="/customers/:id" element={<CustomerPage />} /></Routes></BrowserRouter>

<MemoryRouter initialEntries={['/customers/42']}><Routes><Route path="/customers/:id" element={<CustomerPage />} /></Routes></MemoryRouter>`,
      },
      {
        eyebrow: 'Module Federation',
        question: 'Module Federation v1 සහ v2 අතර වෙනස කුමක්ද?',
        answer:
          'V1 යනු webpack host/remote containers, remoteEntry.js, exposes, remotes සහ shared dependency negotiation මත පදනම් වූ මුල් runtime model එකයි. V2 එම architecture එකම පවත්වාගෙන manifest metadata, runtime plugins, type generation/consumption, debugging සහ පුළුල් bundler integration වැනි enhanced tooling එකතු කරයි. ඔබ භාවිතා කළ plugin සහ bundler version වල සැබෑ capabilities පමණක් පැහැදිලි කරන්න.',
      },
      {
        eyebrow: 'Nginx performance',
        question:
          'Apache හෝ Nginx භාවිතා කර තිබේද? Nginx මඟින් performance වැඩි කරන්නේ කෙසේද?',
        answer:
          'CDN එකකින් වෙනස්ව Nginx origin එකේ reverse proxy සහ static server ලෙස performance වැඩි කරයි. Brotli/gzip compression, fingerprinted assets සඳහා immutable cache headers, HTTP/2 හෝ HTTP/3, upstream keep-alive, safe proxy caching සහ load balancing භාවිතා කළ හැක. TTFB, upstream latency, cache-hit ratio සහ compression savings load test කර මැනිය යුතුය.',
        points: [
          'Personalized හෝ mutation responses අහම්බෙන් cache නොකරන්න.',
          'CDN සහ Nginx එකිනෙකට අනුපූරක විය හැක.',
        ],
      },
      {
        eyebrow: 'Promises සහ runtimes',
        question:
          'Promises සහ Node.js හා browser JavaScript අතර ප්‍රධාන වෙනස්කම් පැහැදිලි කරන්න.',
        answer:
          'Promise එකක් asynchronous operation එකක eventual fulfillment හෝ rejection නියෝජනය කරයි. Promise semantics දෙකේම සමාන නමුත් host APIs වෙනස්ය: browser එක DOM, events සහ Web APIs සපයයි; Node.js filesystem, sockets, streams, process APIs සහ libuv event loop සපයයි. Promise callbacks current stack එකෙන් පසු microtasks ලෙස ක්‍රියාත්මක වේ. Node හි process.nextTick ඉහළ priority queue එකක් වන බැවින් අධික භාවිතය වෙනත් වැඩ ප්‍රමාද කළ හැක.',
        code: `console.log('start');
setTimeout(() => console.log('timer'), 0);
Promise.resolve().then(() => console.log('microtask'));
console.log('end');
// start, end, microtask, timer`,
      },
      {
        eyebrow: 'TypeScript',
        question:
          'TypeScript යනු කුමක්ද සහ JavaScript application එකකට එය ලබා දෙන්නේ කුමක්ද?',
        answer:
          'TypeScript යනු JavaScript වෙත compile වන statically checked superset එකකි. Type inference, interfaces, generics, discriminated unions සහ utility types මඟින් වැරදි property access සහ argument types runtime ට පෙර සොයාගනී; refactoring, navigation සහ shared contracts වඩා ආරක්ෂිත කරයි. එය runtime API data validate නොකරන නිසා network boundaries වල schema validation සහ tests තවමත් අවශ්‍යය.',
      },
      {
        eyebrow: 'Event loop',
        question:
          'Call stack, task queue සහ microtask queue ඇතුළුව event loop එක නිවැරදිව පැහැදිලි කරන්න.',
        answer:
          'Engine එක current task සහ call stack එක සම්පූර්ණ කරයි. Stack එක හිස් වූ පසු Promise reactions සහ queueMicrotask callbacks ඇති microtask queue එක සම්පූර්ණයෙන් drain කරයි. Browser එකට පසුව render කිරීමට අවස්ථාව ලැබී timer, message හෝ user event වැනි ඊළඟ task එක ගනී. Long task එකක් input සහ rendering block කරන අතර endless microtasks timers සහ painting ප්‍රමාද කරයි.',
        code: `console.log('task');
queueMicrotask(() => console.log('microtask'));
setTimeout(() => console.log('next task'), 0);`,
      },
      {
        eyebrow: 'In-app WebView architecture',
        question:
          'Native code සහ React අතර දෙපාර්ශ්වික WebView communication architecture එකක් සැලසුම් කරන්නේ කෙසේද?',
        answer:
          'Native app එක authentication, secure storage, permissions සහ WebView lifecycle පාලනය කරයි; React web UI එක පාලනය කරයි. {id, version, type, payload} වැනි කුඩා versioned message protocol එකක් සාදා දෙපසම schema validate කරන්න. React-to-native සඳහා postMessage සහ native-to-React සඳහා named event හෝ controlled injection භාවිතා කරන්න. Origins සහ message types allow-list කර request IDs, timeouts සහ structured errors යොදන්න; arbitrary native method execution හෝ secrets expose නොකරන්න.',
        code: `window.ReactNativeWebView?.postMessage(JSON.stringify({
  id: crypto.randomUUID(), version: 1, type: 'OPEN_CAMERA', payload: {}
}));`,
        points: [
          'Handshake, lifecycle recovery සහ idempotent retries සැලසුම් කරන්න.',
          'iOS සහ Android දෙකෙහි contract සහ integration tests ධාවනය කරන්න.',
        ],
      },
    ],
  },
} as const satisfies LocalizedInterviewExperiences;
