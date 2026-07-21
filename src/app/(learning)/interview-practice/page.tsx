import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';
import { interviewExperiences } from '@/content/interviewPractice';

export default function InterviewPracticePage() {
  return (
    <>
      <PageHeader
        description="Choose one real interview experience and practice it separately."
        eyebrow="Interview practice"
        tags={['Bank of Singapore', 'Virtusa Singapore', 'Real questions']}
        title="Interview Questions"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {interviewExperiences.map((experience) => (
          <Link
            key={experience.company}
            className="group min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
            href={`/interview-practice/${experience.slug}`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
              {experience.company}
            </p>
            <div className="mt-2 flex min-w-0 items-start justify-between gap-4">
              <h2 className="text-xl font-black leading-tight text-slate-950">
                {experience.title}
              </h2>
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white transition group-hover:bg-sky-700">
                <ArrowForwardIcon fontSize="small" />
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {experience.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
