export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
            Interview preparation for job seekers
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Nalin&apos;s Academy helps candidates turn technical knowledge into
            interview confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            The ambition is simple: build a practical interview-preparation
            platform where job seekers can learn Java, React, frontend
            architecture, and full-stack trade-offs through clear explanations,
            recruiter-ready examples, and guided practice.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/interview-questions"
              className="rounded-lg bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
            >
              Explore questions
            </a>
            <a
              href="/about"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Meet Nalin
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Platform direction
          </h2>
          <div className="mt-6 space-y-5">
            {[
              {
                title: 'Interview maps',
                body: 'Organized tracks for React, Java, system design, and full-stack problem solving.',
              },
              {
                title: 'Practical answers',
                body: 'Theory paired with code examples, trade-offs, and the kind of wording that works in interviews.',
              },
              {
                title: 'Career positioning',
                body: 'A learning experience shaped for job seekers who need to explain impact, not just syntax.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-sky-600 pl-4">
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          [
            'React depth',
            'Hooks, rendering behavior, state flow, and performance patterns.',
          ],
          [
            'Java strength',
            'Backend fundamentals, APIs, services, and production reasoning.',
          ],
          [
            'Recruiter clarity',
            'Profiles and answers shaped around the expectations of hiring teams.',
          ],
        ].map(([title, body]) => (
          <article
            key={title}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <h3 className="text-lg font-bold text-slate-950">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
