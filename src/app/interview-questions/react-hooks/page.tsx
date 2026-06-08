import Link from 'next/link';

const hooks = [
  {
    name: 'useState',
    href: '/interview-questions/react-hooks/use-state',
    theory:
      'Stores component-local state and schedules a re-render when the setter receives a new value.',
    example:
      'Use it for form inputs, toggles, counters, tabs, and small UI state.',
  },
  {
    name: 'useEffect',
    href: '#use-effect',
    theory:
      'Runs side effects after render, such as subscriptions, document title updates, or network requests.',
    example: 'Use cleanup functions for timers, listeners, and subscriptions.',
  },
  {
    name: 'useMemo',
    href: '#use-memo',
    theory: 'Memoizes an expensive calculated value until dependencies change.',
    example:
      'Use it when recalculation is costly or a stable value prevents extra work.',
  },
  {
    name: 'useRef',
    href: '#use-ref',
    theory:
      'Stores a mutable value that survives renders without causing a re-render.',
    example:
      'Use it for DOM references, timers, previous values, and imperative handles.',
  },
];

export default function ReactHooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
          React interview track
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          React Hooks: behavior, trade-offs, and practical examples.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          Hooks let function components hold state, run side effects, share
          reusable behavior, and coordinate rendering. In interviews, the strong
          answer is not just what a hook does, but when it re-renders, when it
          keeps a value stable, and what problems it solves.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {hooks.map((hook) => (
          <Link
            key={hook.name}
            href={hook.href}
            className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-sky-300 hover:shadow-sm"
          >
            <h2 className="text-xl font-bold text-slate-950">{hook.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {hook.theory}
            </p>
            <p className="mt-4 rounded-lg bg-slate-100 p-4 text-sm font-medium leading-6 text-slate-700">
              Practical use: {hook.example}
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-14 rounded-lg bg-slate-950 p-6 text-white sm:p-8">
        <h2 className="text-2xl font-bold">Interview answer framework</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            ['Behavior', 'What changes between renders and what stays stable?'],
            ['Dependency', 'Which values does the hook depend on?'],
            [
              'Trade-off',
              'Does the hook improve clarity, performance, or reuse?',
            ],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="font-bold text-sky-300">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-2">
        <article
          id="use-effect"
          className="min-w-0 rounded-lg border border-slate-200 bg-white p-6"
        >
          <h2 className="text-xl font-bold text-slate-950">
            useEffect example
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            An effect runs after React commits the render. The dependency array
            controls when the effect runs again, and the cleanup function
            handles the previous side effect before the next one starts.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
            <code>{`useEffect(() => {
  document.title = \`Questions: \${count}\`;

  return () => {
    document.title = "Nalin's Academy";
  };
}, [count]);`}</code>
          </pre>
        </article>

        <article
          id="use-ref"
          className="min-w-0 rounded-lg border border-slate-200 bg-white p-6"
        >
          <h2 className="text-xl font-bold text-slate-950">useRef example</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A ref keeps a value between renders without triggering another
            render. That makes it useful for DOM nodes and mutable values that
            do not belong in visible state.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
            <code>{`const inputRef = useRef<HTMLInputElement>(null);

function focusSearch() {
  inputRef.current?.focus();
}`}</code>
          </pre>
        </article>
      </section>
    </div>
  );
}
