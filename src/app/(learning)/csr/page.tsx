import CSRUsers from './CSRUsers';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import TheoryPanel from '@/components/learning/TheoryPanel';
import { learningContent } from '@/content/learning';

export default function CSRPage() {
  return (
    <>
      <PageHeader {...learningContent.csr.header} />

      <TheoryPanel {...learningContent.csr.theory} />

      <ContentCard>
        <CSRUsers />
      </ContentCard>
    </>
  );
}
