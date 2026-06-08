import Image from 'next/image';

export default function AboutMePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="mx-auto w-full max-w-sm rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <Image
            src="/profilepic.png"
            alt="Nalin Padmasiri"
            width={420}
            height={420}
            className="aspect-square w-full rounded-lg object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
            Java + React full-stack developer
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            I&apos;m Nalin Padmasiri, building toward full-stack roles in
            Singapore.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            I work across Java backend services and React-based frontend
            experiences, with a practical focus on building systems that are
            readable, maintainable, and useful for real users. Nalin&apos;s
            Academy reflects the same mindset: explain concepts clearly, connect
            them to production work, and prepare candidates to speak with
            confidence in interviews.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            My target market is Singapore, where strong engineering teams value
            developers who can move between APIs, user interfaces, delivery
            trade-offs, and stakeholder communication.
          </p>
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {[
          {
            title: 'Backend foundation',
            body: 'Java, REST APIs, service boundaries, data flow, debugging, and clean implementation habits.',
          },
          {
            title: 'Frontend execution',
            body: 'React, hooks, state management, rendering behavior, responsive UI, and user-focused delivery.',
          },
          {
            title: 'Singapore focus',
            body: 'Positioning for full-stack roles where communication, ownership, and business awareness matter.',
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

      <section className="mt-14 rounded-lg bg-slate-950 p-6 text-white sm:p-8">
        <h2 className="text-2xl font-bold">Recruiter snapshot</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Role direction
            </p>
            <p className="mt-2 leading-7 text-slate-200">
              Java + React full-stack developer for Singapore-based product,
              platform, fintech, government, or enterprise teams.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Interview story
            </p>
            <p className="mt-2 leading-7 text-slate-200">
              A hands-on engineer who can explain design choices, collaborate
              with teams, and turn complex technical topics into clear outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
