import CSRUsers from './CSRUsers';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

export default function CSRPage() {
  return (
    <>
      <PageHeader
        description="This route is server-rendered, while the user list below is intentionally fetched in a client component."
        eyebrow="Rendering"
        tags={['CSR', 'Server Wrapper', 'Client Fetch']}
        title="CSR Users Page"
      />

      <ContentCard>
        <CSRUsers />
      </ContentCard>
    </>
  );
}
