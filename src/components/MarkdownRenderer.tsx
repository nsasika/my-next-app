import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Variant = 'article' | 'chat';

type Props = { children: string; variant?: Variant };

/**
 * Shared markdown renderer used by both the article detail page (server)
 * and the AI chat bubbles (client). The `variant` controls heading scale
 * and prose density — articles use larger headings for long-form reading,
 * chat uses compact headings for short AI responses.
 */
const MarkdownRenderer = ({ children, variant = 'chat' }: Props) => {
  const isArticle = variant === 'article';

  return (
    <div className={isArticle ? 'space-y-1' : 'space-y-2 text-sm leading-relaxed'}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className={`mt-2 font-semibold ${isArticle ? 'text-2xl mt-8 mb-3' : 'text-base'}`}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={`mt-2 font-semibold ${isArticle ? 'text-xl mt-6 mb-2' : 'text-base'}`}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={`mt-2 font-semibold ${isArticle ? 'text-base mt-4 mb-1.5' : 'text-sm'}`}>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className={isArticle ? 'my-3 leading-relaxed text-foreground/90' : undefined}>
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className={`list-disc pl-5 ${isArticle ? 'my-3 space-y-1.5' : 'my-1 space-y-1'}`}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className={`list-decimal pl-5 ${isArticle ? 'my-3 space-y-1.5' : 'my-1 space-y-1'}`}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className={isArticle ? 'leading-relaxed' : 'leading-snug'}>{children}</li>
          ),
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isArticle
                  ? 'text-primary underline underline-offset-2 hover:text-primary/80'
                  : 'text-primary underline underline-offset-2'
              }
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-3 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isBlock = (className ?? '').startsWith('language-');
            return isBlock ? (
              <code className={className}>{children}</code>
            ) : (
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{children}</code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-2 overflow-x-auto rounded-md bg-muted p-3 text-xs">{children}</pre>
          ),
          table: ({ children }) => (
            <div className="my-2 overflow-x-auto">
              <table className="w-full text-xs">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b px-2 py-1 text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => <td className="border-b px-2 py-1">{children}</td>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
