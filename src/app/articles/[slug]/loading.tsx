const ArticleLoading = () => (
  <main className="min-h-screen bg-background">
    <div className="mx-auto max-w-3xl px-6 py-10 animate-pulse">
      <div className="mb-6 h-4 w-40 rounded bg-muted" />
      <div className="mb-8 space-y-3">
        <div className="h-8 w-3/4 rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-24 rounded bg-muted" />
      </div>
      <div className="mb-8 h-12 rounded-lg bg-muted" />
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-4 rounded bg-muted" style={{ width: `${85 + (i % 3) * 5}%` }} />
        ))}
      </div>
    </div>
  </main>
);

export default ArticleLoading;
