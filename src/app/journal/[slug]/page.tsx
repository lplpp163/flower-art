import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ImageWithFallback from '@/components/shared/ImageWithFallback';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: '找不到文章' };
  return { title: post.meta.title, description: post.meta.excerpt };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/journal" className="text-text-light hover:text-rose-dark text-sm mb-6 inline-block transition-colors">
        ← 返回學習日誌
      </Link>

      {meta.coverImage && (
        <div className="relative h-52 md:h-72 rounded-xl overflow-hidden mb-8">
          <ImageWithFallback src={meta.coverImage} alt={meta.title} fill className="object-cover" priority />
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
        [&_blockquote]:border-rose [&_blockquote]:bg-rose-light/10 [&_blockquote]:rounded-r-lg [&_blockquote]:py-3 [&_blockquote]:px-4
        [&_blockquote_p]:text-rose-dark [&_blockquote_p]:italic
        [&_a]:text-rose-dark [&_a]:underline
      ">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
