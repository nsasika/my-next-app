const CategoryLoading = () => (
  <main className="min-h-screen bg-background">
    <div className="mx-auto max-w-3xl px-6 py-10 animate-pulse">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-8 w-8 rounded bg-muted" />
        <div className="space-y-1.5">
          <div className="h-6 w-32 rounded bg-muted" />
          <div className="h-3 w-48 rounded bg-muted" />
        </div>
      </div>
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4">
            <div className="h-4 w-2/3 rounded bg-muted mb-2" />
            <div className="h-3 w-full rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default CategoryLoading;
