import type { Metadata } from 'next';
import { getAllBlogPosts, getAllTags } from '@/lib/mdx';
import SectionTitle from '@/components/shared/SectionTitle';
import JournalList from '@/components/journal/JournalList';

export const metadata: Metadata = {
  title: '學習日誌',
  description: '花藝知識與心得分享，陪伴你的學習旅程。',
};

export default function JournalPage() {
  const posts = getAllBlogPosts();
  const tags = getAllTags();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionTitle
        title="學習日誌"
        subtitle="花藝知識與心得，一起成長"
      />
      <JournalList posts={posts} tags={tags} />
    </div>
  );
}
