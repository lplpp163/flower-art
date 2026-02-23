import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from '@/types';

const JOURNAL_DIR = path.join(process.cwd(), 'src', 'content', 'journal');

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(JOURNAL_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((filename): BlogPost => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(JOURNAL_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title ?? '',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? '',
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPostBySlug(slug: string): { meta: BlogPost; content: string } | undefined {
  const filePath = path.join(JOURNAL_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title ?? '',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? '',
    },
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}
