import { getAllFlowers } from '@/lib/data';
import FlowerGrid from '@/components/flowers/FlowerGrid';
import SectionTitle from '@/components/shared/SectionTitle';

export default function FlowersPage() {
  const flowers = getAllFlowers();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle
        title="花語圖鑑"
        subtitle="認識每一朵花的名字與故事"
      />
      <FlowerGrid flowers={flowers} />
    </div>
  );
}
