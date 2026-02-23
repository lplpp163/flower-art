'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/types';
import ImageWithFallback from '@/components/shared/ImageWithFallback';

interface JournalListProps {
  readonly posts: readonly BlogPost[];
  readonly tags: readonly string[];
}

export default function JournalList({ posts, tags }: JournalListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((p) => p.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div>
      {/* Tag Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          type="button"
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedTag === null
              ? 'bg-rose text-white'
              : 'bg-warm-card border border-border text-text-secondary hover:border-rose-light'
          }`}
        >
          全部
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-rose text-white'
                : 'bg-warm-card border border-border text-text-secondary hover:border-rose-light'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group flex flex-col sm:flex-row gap-4 bg-warm-card rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-rose-light transition-all"
          >
            <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0">
              <ImageWithFallback
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:py-5 flex flex-col justify-center">
              <span className="text-text-light text-xs mb-1">{post.date}</span>
              <h3 className="font-serif text-lg font-bold text-text-primary group-hover:text-rose-dark transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-warm-bg text-text-light px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
