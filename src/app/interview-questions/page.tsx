import Link from 'next/link';

const questionTracks = [
  {
    title: 'React Hooks',
    href: '/interview-questions/react-hooks',
    body: 'Explain state, effects, refs, memoization, and custom hooks using interview-ready language.',
  },
  {
    title: 'Full-stack reasoning',
    href: '/about',
    body: 'Practice connecting frontend decisions to backend APIs, performance, and delivery trade-offs.',
  },
  {
    title: 'Career positioning',
    href: '/',
    body: 'Turn project experience into concise stories that recruiters and hiring managers can understand.',
  },
];

export default function InterviewQuestionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
          Interview question library
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Practice the questions that reveal how you think.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          Nalin&apos;s Academy is designed for job seekers who need more than
          memorized definitions. Each topic connects the theory, the practical
          code, and the interview explanation so candidates can answer with
          structure and confidence.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {questionTracks.map((track) => (
          <Link
            key={track.title}
            href={track.href}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-slate-950">{track.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {track.body}
            </p>
            <span className="mt-6 inline-flex text-sm font-bold text-sky-700">
              Open track
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-14 rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950">
          How to use this library
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            ['1. Learn', 'Read the concept in plain language first.'],
            ['2. Code', 'Study a compact practical example.'],
            [
              '3. Explain',
              'Practice the answer as if speaking to an interviewer.',
            ],
          ].map(([title, body]) => (
            <div key={title} className="border-l-4 border-sky-600 pl-4">
              <h3 className="font-bold text-slate-950">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
