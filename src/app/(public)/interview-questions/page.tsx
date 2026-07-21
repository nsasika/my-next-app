import { redirect } from 'next/navigation';
import { APP_PATHS } from '@/config/routes';

export default function InterviewQuestionsPage() {
  redirect(APP_PATHS.interviewPractice);
}
