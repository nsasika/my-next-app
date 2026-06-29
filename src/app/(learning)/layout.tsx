import LearningShell from '@/components/layout/LearningShell';

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LearningShell>{children}</LearningShell>;
}
