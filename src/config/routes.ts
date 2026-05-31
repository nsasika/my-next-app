export const ROUTES: RoutesType[] = [
  {
    title: 'Hooks',
    links: [
      { href: '/use-ref-test', label: 'useRef' },
      { href: '/use-memo-test', label: 'useMemo' },
      { href: '/custom-hooks', label: 'custom Hooks' },
    ],
  },
  {
    title: 'React 18 Changes',
    links: [
      { href: '/react18/batching', label: 'Automatic Batching' },
      { href: '/react18/transitions', label: 'Transitions (useTransition)' },
    ],
  },
  {
    title:"Redux Toolkit",
    links:[
      {href:"/counterSlice", label:"Counter Example"},
      {href:"/redux-thunk", label:"Redux Thunk Example"},
      {href:"/redux-saga", label:"Redux Saga Example"}
    ]   
  },
  {
    title:"RTK SAGA",
    links:[
      {href:"/practice/takeEvery", label:"Take Every"},
      {href:"/practice/takeLatest", label:"Take Latest"},
      {href:"/practice/debounce", label:"Debounce"}
    ]   
  },
  {
    title: "Performance Testing",
    links: [{ href: "/performance", label: "Performance Testing" }],
  },
  {
    title:"About Me",
    links:[
      {href:"/about", label:"Nalin Padmasiri"}
    ]   
  }
];
