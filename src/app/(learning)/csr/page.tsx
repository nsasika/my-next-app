import CSRUsers from './CSRUsers';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import ContentCard from '@/components/ui/ContentCard';
import { learningContent } from '@/content/learning';

export default function CSRPage() {
  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/csr/CSRUsers.tsx"
      header={learningContent.csr.header}
      theory={learningContent.csr.theory}
    >
      <ContentCard>
        <CSRUsers />
      </ContentCard>
    </LearningExamplePage>
  );
}
