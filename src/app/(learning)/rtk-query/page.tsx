import ApiIcon from '@mui/icons-material/Api';
import CachedIcon from '@mui/icons-material/Cached';
import SyncIcon from '@mui/icons-material/Sync';
import CodeBlock from '@/components/ui/CodeBlock';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

const sampleCode = `export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
  }),
});`;

const concepts = [
  {
    icon: ApiIcon,
    title: 'Generated hooks',
    text: 'RTK Query generates hooks such as useGetUsersQuery so components can read loading, data, and error state directly.',
  },
  {
    icon: CachedIcon,
    title: 'Built-in caching',
    text: 'It caches request results by endpoint and arguments, then reuses data instead of refetching on every render.',
  },
  {
    icon: SyncIcon,
    title: 'Invalidation',
    text: 'Tags let mutations invalidate related queries so the UI refreshes after a backend change.',
  },
] as const;

export default function RtkQueryPage() {
  return (
    <>
      <PageHeader
        description="RTK Query is the Redux Toolkit data-fetching layer for server cache, generated hooks, invalidation, loading state, and error state."
        eyebrow="State management"
        tags={['Redux Toolkit', 'RTK Query', 'Server state']}
        title="RTK Query"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {concepts.map((concept) => {
          const Icon = concept.icon;

          return (
            <ContentCard key={concept.title}>
              <div className="inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
                <Icon fontSize="small" />
              </div>
              <h2 className="mt-4 text-lg font-black text-slate-950">
                {concept.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {concept.text}
              </p>
            </ContentCard>
          );
        })}
      </div>

      <ContentCard className="mt-6">
        <h2 className="text-xl font-black text-slate-950">
          Typical API slice shape
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Use RTK Query when data belongs to the server and the frontend mainly
          needs caching, refetching, loading state, and mutation invalidation.
          Use normal slices for local UI state and client-only workflows.
        </p>
        <div className="mt-4">
          <CodeBlock code={sampleCode} language="ts" />
        </div>
      </ContentCard>
    </>
  );
}
