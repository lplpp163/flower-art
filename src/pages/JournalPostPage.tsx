import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPostBySlug } from '@/data/journal';
import ImageWithFallback from '@/components/shared/ImageWithFallback';

export default function JournalPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/journal" replace />;

  const { meta, content } = post;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/journal" className="text-text-light hover:text-rose-dark text-sm mb-6 inline-block transition-colors">
        ← 返回學習日誌
      </Link>

      {meta.coverImage && (
        <div className="relative h-52 md:h-72 rounded-xl overflow-hidden mb-8">
          <ImageWithFallback src={meta.coverImage} alt={meta.title} fill className="object-cover" />
        </div>
      )}

      <header className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-3">{meta.title}</h1>
        <div className="flex items-center gap-4">
          <span className="text-text-light text-sm">{meta.date}</span>
          <div className="flex gap-1.5">
            {meta.tags.map((tag) => (
              <span key={tag} className="text-xs bg-rose-light/30 text-rose-dark px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <article className="prose prose-neutral max-w-none
        [&_h1]:font-serif [&_h1]:text-text-primary [&_h1]:text-2xl
        [&_h2]:font-serif [&_h2]:text-text-primary [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-4
        [&_h3]:font-serif [&_h3]:text-text-primary [&_h3]:text-lg
        [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:text-sm
        [&_li]:text-text-secondary [&_li]:text-sm
        [&_strong]:text-text-primary
        [&_blockquote]:border-rose [&_blockquote]:bg-rose-light/10 [&_blockquote]:rounded-r-lg [&_blockquote]:py-3 [&_blockquote]:px-4 [&_blockquote]:border-l-4
        [&_blockquote_p]:text-rose-dark [&_blockquote_p]:italic
        [&_a]:text-rose-dark [&_a]:underline
      ">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
