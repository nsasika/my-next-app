import Link from 'next/link';

export default function UseStatePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <Link
        href="/interview-questions/react-hooks"
        className="text-sm font-bold text-sky-700 hover:text-sky-900"
      >
        Back to React Hooks
      </Link>

      <section className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
            Hook deep dive
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            useState: local state, render updates, and safer setters.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            <strong>useState</strong> lets a function component remember a value
            between renders. React returns the current state value and a setter
            function. When the setter receives a new value, React schedules
            another render and the component reads the updated state.
          </p>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Interview-ready answer
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            I use <code className="font-mono">useState</code> for state that is
            local to a component, such as form input, a selected tab, or a UI
            toggle. The setter does not mutate the existing value directly. It
            tells React what the next value should be, and React re-renders the
            component with that new value.
          </p>
        </aside>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          {
            title: 'Initializer',
            body: 'The first argument is used for the first render. For expensive setup, pass a function so it only runs once.',
          },
          {
            title: 'Setter',
            body: 'The setter schedules an update. Use the functional form when the next value depends on the previous value.',
          },
          {
            title: 'Re-render',
            body: 'React compares the next state with the current state. A changed value causes the component to render again.',
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="min-w-0 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-950">
            Practical counter example
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            The functional setter is safer when React may batch updates or when
            multiple updates depend on the previous count.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
            <code>{`const [count, setCount] = useState(0);

function addTwoQuestions() {
  setCount((current) => current + 1);
  setCount((current) => current + 1);
}`}</code>
          </pre>
        </article>

        <article className="min-w-0 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-950">
            Practical form example
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            For object state, create a new object instead of mutating the
            existing one. That keeps updates predictable and easy to explain.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
            <code>{`const [profile, setProfile] = useState({
  role: "Java + React Developer",
  market: "Singapore",
});

function updateRole(role: string) {
  setProfile((current) => ({
    ...current,
    role,
  }));
}`}</code>
          </pre>
        </article>
      </section>

      <section className="mt-14 rounded-lg bg-slate-950 p-6 text-white sm:p-8">
        <h2 className="text-2xl font-bold">Common interview traps</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            [
              'Stale state',
              'Use the functional setter when the next value depends on the previous one.',
            ],
            [
              'Direct mutation',
              'Avoid changing arrays or objects in place because React needs a new reference.',
            ],
            [
              'Too much state',
              'Do not store values that can be derived from props or other state.',
            ],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="font-bold text-sky-300">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
