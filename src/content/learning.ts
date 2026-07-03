export const learningContent = {
  javaExamples: {
    header: {
      description:
        'A starter workspace for Java interview examples. We can expand this into focused pages as we add real implementations.',
      eyebrow: 'Java track',
      tags: ['Java', 'Spring Boot', 'Backend', 'Practice'],
      title: 'Java Examples',
    },
    theory: {
      title: 'How Java examples should be studied',
      summary:
        'Java interview examples are easiest to learn when each one connects the language feature, a realistic code sample, and the tradeoffs behind the implementation.',
      points: [
        'Start with the concept: collections, streams, exceptions, generics, APIs, or transactions.',
        'Read the implementation with attention to naming, null handling, immutability, and boundary design.',
        'Use the demo notes to explain why the code is useful in production-style backend work.',
      ],
      code: `public List<String> activeUserNames(List<User> users) {
    return users.stream()
        .filter(User::isActive)
        .map(User::name)
        .sorted()
        .toList();
}`,
      whatToTry: [
        'Trace the stream pipeline from list input to sorted names.',
        'Think through how the method should behave with no active users.',
      ],
    },
  },
  useRef: {
    header: {
      description:
        'Use refs for mutable values and direct DOM access without making those values part of render state.',
      eyebrow: 'Hooks',
      tags: ['React', 'Client Component', 'useRef'],
      title: 'useRef Hook Example',
    },
    theory: {
      title: 'What useRef is for',
      summary:
        'useRef stores a mutable value that survives renders. Updating ref.current does not trigger another render, which makes it useful for DOM access and render-independent values.',
      points: [
        'Use DOM refs when you need to focus, measure, or control an element directly.',
        'Use value refs for mutable data such as timers, previous values, or render counters.',
        'Use state instead when changing the value should update what the user sees immediately.',
      ],
      code: `const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();`,
      whatToTry: [
        'Type in the input and watch the render count change.',
        'Click Focus Input to see the ref reach into the DOM without querying the document.',
      ],
    },
  },
  useMemo: {
    header: {
      description:
        'Search and sort 10,000 banking transactions while comparing expensive filtering with and without useMemo.',
      eyebrow: 'React Performance',
      tags: ['React', 'Client Component', 'useMemo', 'Banking'],
      title: 'useMemo Banking Transactions Performance Demo',
    },
    theory: {
      title: 'Why useMemo matters in a dashboard',
      summary:
        'Banking dashboards often filter and sort large transaction lists. useMemo prevents that expensive work from running again when unrelated UI state changes.',
      points: [
        'Without useMemo, filtering runs when search changes, sort changes, counter changes, or theme changes.',
        'With useMemo, filtering runs only when the transactions, search text, or sort order changes.',
        'That means fewer calculations, faster re-renders, and a better user experience.',
      ],
      code: `const filteredTransactions = useMemo(() => {
  return filterTransactions(transactions, searchText, sortOrder);
}, [transactions, searchText, sortOrder]);`,
      whatToTry: [
        'Search or change sort order. Both versions must filter again because the filter input changed.',
        'Click Counter or Theme Toggle. Only the non-memoized version repeats the expensive filtering.',
      ],
    },
    banners: {
      memoEnabled: {
        message:
          'The page re-rendered for unrelated UI state. useMemo reused the filtered banking transactions instead of filtering 10,000 rows again.',
        title: 'useMemo skipped unnecessary filtering',
        tone: 'success',
      },
      memoDisabled: {
        message:
          'The page re-rendered for unrelated UI state. Because useMemo is OFF, the dashboard filtered 10,000 rows again.',
        title: 'Filtering ran again',
        tone: 'warning',
      },
    },
    demo: {
      searchLabel: 'Search transaction',
      searchPlaceholder: 'Try salary, ATM, loan, merchant, card...',
      sortLabel: 'Sort by amount',
      sortAscendingLabel: 'Asc',
      sortDescendingLabel: 'Desc',
      themeToggleLabel: 'Theme Toggle',
      counterLabel: 'Counter',
      useMemoToggleLabel: 'Use useMemo',
      enabledLabel: 'ON',
      disabledLabel: 'OFF',
      totalTransactionsLabel: 'Total transactions',
      filteredTransactionsLabel: 'Filtered transactions',
      filterRunsLabel: 'Filter executed',
      calculationTimeLabel: 'Last calculation time',
      withoutMemoTitle: 'Without useMemo',
      withMemoTitle: 'With useMemo',
      normalCalculationDescription:
        'Filtering runs when search changes, counter changes, and theme changes.',
      memoCalculationDescription:
        'Filtering runs only when search text or sort order changes.',
      activeModeLabel: 'Current mode',
      transactionListTitle: 'Sample filtered transactions',
      tableHeaders: {
        account: 'Account',
        amount: 'Amount',
        channel: 'Channel',
        id: 'ID',
        merchant: 'Merchant',
      },
    },
  },
  customHooks: {
    header: {
      description:
        'Learn the rules of hooks, then extract reusable stateful behavior into custom hooks.',
      eyebrow: 'React Hooks',
      tags: ['React', 'Rules of Hooks', 'Custom Hook'],
      title: 'React Hooks and Custom Hooks',
    },
    theory: {
      title: 'Rules of hooks first',
      summary:
        'React hooks depend on call order. Keep hooks at the top level of function components and custom hooks so React can match state to the same hook call on every render.',
      points: [
        'Call hooks only from React function components or custom hooks.',
        'Do not call hooks inside conditions, loops, nested functions, or event handlers.',
        'Name custom hooks with the use prefix so React hook rules and linting can understand them.',
        'Move behavior into a custom hook when multiple components need the same state logic.',
      ],
      code: `function useCounter() {
  const [count, setCount] = useState(0);
  return { count, increment, decrement };
}`,
      whatToTry: [
        'Click increment and decrement to use behavior returned from the hook.',
        'Notice the page does not need to know how the hook stores count internally.',
      ],
    },
    demoDescription: 'This page demonstrates a reusable counter hook.',
  },
  counterSlice: {
    header: {
      description:
        'A small Redux Toolkit slice example with increment, decrement, reset, and payload-based actions.',
      eyebrow: 'Redux Toolkit',
      tags: ['Redux Toolkit', 'Client Component', 'State'],
      title: 'Counter Slice',
    },
    theory: {
      title: 'What a Redux slice contains',
      summary:
        'Redux Toolkit slices group a feature name, initial state, reducer functions, and generated action creators in one place.',
      points: [
        'Reducers describe how state changes in response to actions.',
        'Redux Toolkit uses Immer, so reducers can look like they mutate state while still producing immutable updates.',
        'Components dispatch generated actions instead of changing shared state directly.',
      ],
      code: `const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { increment, decrement, reset },
});`,
      whatToTry: [
        'Increment and decrement to dispatch simple actions.',
        'Type an amount and dispatch an action with a payload.',
      ],
    },
  },
  batching: {
    header: {
      description:
        'React batches multiple state updates into fewer renders, including async boundaries in modern React.',
      eyebrow: 'React 18',
      tags: ['React', 'Client Component', 'Batching'],
      title: 'Automatic Batching',
    },
    theory: {
      title: 'What automatic batching means',
      summary:
        'Batching lets React collect multiple state updates and render once with the final result. React 18 expanded this behavior to updates inside promises, timeouts, and other async callbacks.',
      points: [
        'Without batching, three state updates could create three separate renders.',
        'With batching, React waits until the event or async callback finishes, then renders the combined result.',
        'The UI still receives every state change; React just does less rendering work.',
      ],
      code: `setCount((count) => count + 1);
setText('Updated');
setMessage('Done');`,
      whatToTry: [
        'Click Update sync and watch three values change together.',
        'Click Update async setTimeout and notice the delayed updates still land as one coordinated UI change.',
      ],
    },
  },
  transitions: {
    header: {
      description:
        'Keep urgent input responsive while expensive list filtering runs as lower-priority work.',
      eyebrow: 'React 18',
      tags: ['React', 'Client Component', 'useTransition'],
      title: 'startTransition / useTransition',
    },
    theory: {
      title: 'What transitions are for',
      summary:
        'A transition marks an update as non-urgent. React can keep urgent work, like typing into an input, responsive while heavier UI updates finish in the background.',
      points: [
        'Use urgent state for the value the user is directly editing.',
        'Wrap expensive derived updates in startTransition so React can interrupt them when newer input arrives.',
        'isPending is a status flag you can use to show that transition work is still catching up.',
      ],
      code: `setQuery(value);
startTransition(() => {
  setDeferredQuery(value);
});`,
      whatToTry: [
        'Type quickly and compare the urgent value with the deferred value.',
        'Watch the filtered result count catch up after the input stays responsive.',
      ],
    },
  },
  reduxThunk: {
    header: {
      description:
        'Redux Thunk is a practical fit for one-shot async requests and logic that needs dispatch or state access.',
      eyebrow: 'RTK Middleware',
      tags: ['Redux Toolkit', 'Thunk', 'Async State'],
      title: 'RTK Middleware: Thunk',
    },
    theory: {
      title: 'How thunk middleware works',
      summary:
        'Thunk middleware lets you dispatch a function instead of a plain action. That function can run async code, read state, and dispatch success or failure actions later.',
      points: [
        'Use thunks for one-shot async work such as fetching users after a button click.',
        'Redux Toolkit includes createAsyncThunk to generate pending, fulfilled, and rejected action types.',
        'Thunk is simple and direct, but it is not designed for long-running orchestration or cancellation.',
      ],
      code: `dispatch(fetchUsers());

builder
  .addCase(fetchUsers.pending, ...)
  .addCase(fetchUsers.fulfilled, ...);`,
      whatToTry: [
        'Click Fetch Users to dispatch the async thunk.',
        'Watch loading state, users, and errors flow through Redux state.',
      ],
    },
  },
  reduxSaga: {
    header: {
      description:
        'Redux Saga is useful when async workflows need cancellation, orchestration, retries, or deterministic control.',
      eyebrow: 'RTK Middleware',
      tags: ['Redux Toolkit', 'Redux Saga', 'Side Effects'],
      title: 'RTK Middleware: Saga',
    },
    theory: {
      title: 'How saga middleware works',
      summary:
        'Redux Saga listens for Redux actions and runs generator functions to perform side effects. The component dispatches an intent, and the saga coordinates the async workflow.',
      points: [
        'Sagas are middleware, so they sit between dispatched actions and async effects.',
        'Effects like call, put, takeEvery, and takeLatest describe what should happen in a testable way.',
        'Saga is helpful when the workflow needs cancellation, retries, sequencing, or background tasks.',
      ],
      code: `yield takeLatest(fetchUsersSagaRequest.type, fetchUsersWorker);
yield put(fetchUsersSagaSuccess(users));`,
      whatToTry: [
        'Click Fetch Saga Users to dispatch the request action.',
        'The saga middleware catches that action, calls the API, then dispatches success or failure.',
      ],
    },
  },
  takeEvery: {
    header: {
      description:
        'takeEvery processes every matching action. It is useful when every event matters.',
      eyebrow: 'Redux Saga',
      tags: ['takeEvery', 'Client Component', 'Events'],
      title: 'takeEvery Example',
    },
    theory: {
      title: 'When to use takeEvery',
      summary:
        'takeEvery starts a new saga task for every matching action. No previous task is cancelled, so every event is handled.',
      points: [
        'Use it for logging, analytics, audit trails, and actions where every event matters.',
        'Multiple tasks can run at the same time if actions happen quickly.',
        'Do not use it for search requests where older responses should be ignored.',
      ],
      code: `yield takeEvery(userLogEvent.type, userLogEventWorker);`,
      whatToTry: [
        'The page dispatches one log event when it loads.',
        'Click Log Event repeatedly; each click dispatches another action for saga middleware to process.',
      ],
    },
    demoDescription:
      'This page dispatches a log event on mount and every time you click the button.',
  },
  takeLatest: {
    header: {
      description:
        'takeLatest cancels older matching work and keeps only the newest request active.',
      eyebrow: 'Redux Saga',
      tags: ['takeLatest', 'Client Component', 'Cancellation'],
      title: 'takeLatest Example',
    },
    theory: {
      title: 'When to use takeLatest',
      summary:
        'takeLatest runs only the newest task for a matching action. If another matching action arrives before the current task finishes, the old task is cancelled.',
      points: [
        'Use it for search, autocomplete, filters, and profile refreshes where the latest answer should win.',
        'It prevents stale API responses from overwriting newer results.',
        'It is a cancellation pattern, not just a loading-state pattern.',
      ],
      code: `yield takeLatest(fetchUsersSagaRequest.type, fetchUsersWorker);`,
      whatToTry: [
        'Open the Redux Saga example and trigger a fetch.',
        'Think of repeated clicks as newer requests replacing older work.',
      ],
    },
    demoParagraphs: [
      'The takeLatest effect ensures that only the latest dispatched action is processed, canceling ongoing work from previous actions.',
      'This is especially useful for searches or API calls where only the newest result should update the UI.',
      'Compare this with takeEvery, which processes every matching action without cancellation.',
    ],
  },
  debounce: {
    header: {
      description:
        'A Redux Saga debounce example that keeps only useful search work flowing through the state layer.',
      eyebrow: 'Redux Saga',
      tags: ['Debounce', 'Client Component', 'Search'],
      title: 'Clients Search',
    },
    theory: {
      title: 'What debounce does',
      summary:
        'Debounce waits for activity to pause before running the expensive work. In this page, saga middleware waits after query changes before fetching clients.',
      points: [
        'Typing updates Redux state immediately so the input stays controlled.',
        'The saga debounce effect waits for a quiet period before calling the API.',
        'This reduces duplicate network calls while the user is still typing.',
      ],
      code: `yield debounce(500, updateQuery.type, fetchClientsWorker);`,
      whatToTry: [
        'Type several characters quickly and watch the UI avoid firing a request for every keystroke.',
        'Pause after typing so the debounced saga can fetch matching clients.',
      ],
    },
  },
  performance: {
    header: {
      description:
        'Practice render profiling with a parent update and a memoized child component.',
      eyebrow: 'Performance',
      tags: ['React', 'Profiler', 'Memoization'],
      title: 'Render Profiling Demo',
    },
    theory: {
      title: 'What to inspect in this demo',
      summary:
        'React performance work starts by observing what renders. This page creates parent renders while the UserCard is wrapped with React.memo.',
      points: [
        'A parent state update can cause child components to render.',
        'Memoization is useful when repeated rendering or calculation is expensive enough to matter.',
        'Use this beside the React DevTools Profiler to compare parent and child renders.',
      ],
      code: `const MemoizedUserCard = memo(UserCard);
const expensiveValue = useMemo(calculate, [input]);`,
      whatToTry: [
        'Click Increment Count and notice this page renders again.',
        'Use this as a mental model before comparing useMemo, debounce, and batching pages.',
      ],
    },
  },
  ssr: {
    header: {
      description:
        'This page fetches data on the server with no client component needed for the list.',
      eyebrow: 'Rendering',
      tags: ['SSR', 'Server Component', 'no-store'],
      title: 'SSR Users Page',
    },
    theory: {
      title: 'What SSR means here',
      summary:
        'Server-side rendering fetches data on the server for the current request, then sends HTML to the browser with the data already included.',
      points: [
        'The fetch call runs before the browser receives this page.',
        'cache: no-store tells Next.js to fetch fresh data for each request.',
        'SSR is useful for request-specific, SEO-friendly, or always-fresh pages.',
      ],
      code: `const res = await fetch(url, { cache: 'no-store' });
const users = await res.json();`,
      whatToTry: [
        'Refresh the page and notice the list is already present when the route loads.',
        'Compare with the CSR page, where the browser shows loading first.',
      ],
    },
  },
  csr: {
    header: {
      description:
        'This route is server-rendered, while the user list below is intentionally fetched in a client component.',
      eyebrow: 'Rendering',
      tags: ['CSR', 'Server Wrapper', 'Client Fetch'],
      title: 'CSR Users Page',
    },
    theory: {
      title: 'What CSR means here',
      summary:
        'Client-side rendering fetches the data in the browser after the component mounts. The route can load first, then the client component fills in the data.',
      points: [
        'The page shell renders before the browser fetch finishes.',
        'useEffect starts the request after the client component mounts.',
        'CSR is useful for interactive data that does not need to be in the initial HTML.',
      ],
      code: `useEffect(() => {
  fetch('/api/users').then(setUsers);
}, []);`,
      whatToTry: [
        'Open the page and look for the loading message before users appear.',
        'Compare this with SSR to understand where the fetch runs.',
      ],
    },
  },
  zustand: {
    header: {
      description:
        'Learn how a small Zustand store can hold shared client state without reducers, actions, or a provider.',
      eyebrow: 'State Management',
      tags: ['Zustand', 'Client Component', 'Store'],
      title: 'Zustand State Management',
    },
    theory: {
      title: 'What Zustand gives you',
      summary:
        'Zustand is a small state-management library for client state. You create a store as a hook, select the exact values or actions a component needs, and update state through store functions.',
      points: [
        'Unlike Redux, Zustand does not require a Provider for basic client-side stores.',
        'Selectors keep components subscribed only to the state they read.',
        'It is useful for UI state, small shared workflows, and places where Redux would feel too heavy.',
      ],
      code: `const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));`,
      whatToTry: [
        'Increment and decrement the count to see the store update instantly.',
        'Reset the count and notice that the actions live in the store, not in the component.',
      ],
    },
    counterDescription:
      'This value comes from a Zustand store hook in src/lib/zustand/useZustandCounterStore.ts.',
  },
} as const;
