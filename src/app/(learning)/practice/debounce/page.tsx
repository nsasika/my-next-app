'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { updateQuery } from '@/lib/features/client/clientsSlice';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import StatusMessage from '@/components/ui/StatusMessage';
import TheoryPanel from '@/components/learning/TheoryPanel';
import { learningContent } from '@/content/learning';

const DebouncePage = () => {
  const dispatch = useAppDispatch();
  const { query, results, loading, error } = useAppSelector(
    (state) => state.clients,
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateQuery(e.target.value)); // Dispatch the query update
  };

  return (
    <>
      <PageHeader {...learningContent.debounce.header} />

      <TheoryPanel {...learningContent.debounce.theory} />

      <ContentCard>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search clients..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <div className="mt-5 space-y-3">
          {loading ? <StatusMessage>Loading...</StatusMessage> : null}
          {error ? (
            <StatusMessage tone="error">Error: {error}</StatusMessage>
          ) : null}
          <ul className="grid gap-2 sm:grid-cols-2">
            {results.map((client) => (
              <li
                key={client.id}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {client.name}
              </li>
            ))}
          </ul>
        </div>
      </ContentCard>
    </>
  );
};

export default DebouncePage;
