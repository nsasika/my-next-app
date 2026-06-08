import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import Link from 'next/link';
import InfoCard from '@/components/InfoCard';
import { interviewQuestionsHeroContent, reactHooksTrack } from './content';

export default function InterviewQuestionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
          {interviewQuestionsHeroContent.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          {interviewQuestionsHeroContent.heading}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          {interviewQuestionsHeroContent.body}
        </p>

        <div className="mx-auto mt-8 max-w-xl text-left">
          <InfoCard
            body={reactHooksTrack.body}
            icon={<IntegrationInstructionsIcon fontSize="small" />}
            title={reactHooksTrack.title}
          />
        </div>

        <div className="mt-4">
          <Link
            href={reactHooksTrack.loginHref}
            className="inline-flex rounded-lg bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800"
          >
            {reactHooksTrack.loginLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
