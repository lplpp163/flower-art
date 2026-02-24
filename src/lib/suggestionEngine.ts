import type { Flower, Feeling, GeneratedSuggestion } from '@/types';
import { getAllArrangements } from '@/lib/data';
import { FEELING_TO_ARRANGEMENTS } from '@/data/feelings';

function buildFlowerTips(flowers: readonly Flower[], feeling: Feeling): readonly string[] {
  const tips: string[] = [];
  const hasMain = flowers.some((f) => f.category === '主花');
  const hasFiller = flowers.some((f) => f.category === '配花');
  const hasLeaf = flowers.some((f) => f.category === '葉材');
  const mainFlowers = flowers.filter((f) => f.category === '主花');
  const names = flowers.map((f) => f.name);

  if (!hasMain) {
    tips.push('目前沒有主花，建議加入一支（如玫瑰或百合）讓作品更有焦點。');
  }

  if (mainFlowers.length > 3) {
    tips.push('主花種類較多，選擇其中一種為「主角」，其他退為配角，效果更佳。');
  }

  if (names.includes('繡球花')) {
    tips.push('繡球花非常需要水分，記得先讓花頭浸水，並確保花泥充分吸水。');
  }

  if (names.includes('百合') && names.includes('玫瑰')) {
    tips.push('百合和玫瑰是經典組合！讓百合作頂點，玫瑰填中段，層次感十足。');
  }

  if (names.includes('向日葵') && feeling === '活力繽紛') {
    tips.push('向日葵是這個主題的完美主角，大花面直接吸睛，搭配橘黃小花更出色。');
  }

  if (names.includes('鬱金香') && feeling === '簡約現代') {
    tips.push('鬱金香的線條天生適合線條感設計，保留它自然的弧度，不要強行矯正。');
  }

  if (!hasFiller && !hasLeaf && hasMain) {
    tips.push('目前只有主花，加入葉材或配花（如尤加利葉、滿天星）可以讓作品更豐富有層次。');
  }

  if (hasLeaf && !hasFiller) {
    tips.push('有葉材打底很好！如果有配花（如滿天星或雛菊）可以進一步填補空間。');
  }

  if (feeling === '清新自然' && names.includes('尤加利葉')) {
    tips.push('尤加利葉是清新自然風格的靈魂花材，讓枝條自然伸展，不要剪太短。');
  }

  if (names.includes('桔梗')) {
    tips.push('桔梗花莖有白色汁液，剪切後先在水中浸泡再使用。');
  }

  const generalTip =
    feeling === '溫柔浪漫'
      ? '整體配色集中在粉、白、淡紫的柔和色系，視覺會更統一。'
      : feeling === '清新自然'
        ? '記得留一些自然的葉面和空間，不要插得太密。'
        : feeling === '活力繽紛'
          ? '大膽用對比色！搭配兩種不同顏色的主花，衝突感就是亮點。'
          : feeling === '簡約現代'
            ? '插完後試著移除一支花——減法思維才是線條感的精髓。'
            : '跟著感覺走，沒有標準答案，你覺得美就是美。';

  tips.push(generalTip);

  return tips;
}

function pickArrangementSlug(flowers: readonly Flower[], feeling: Feeling): string {
  const preferred = FEELING_TO_ARRANGEMENTS[feeling];
  const arrangements = getAllArrangements();
  const hasMain = flowers.some((f) => f.category === '主花');

  if (!hasMain && preferred[0] === 'linear') {
    return 'round';
  }

  for (const slug of preferred) {
    if (arrangements.some((a) => a.slug === slug)) return slug;
  }

  return 'round';
}

export function generateSuggestion(
  selectedFlowers: readonly Flower[],
  feeling: Feeling,
): GeneratedSuggestion {
  const arrangements = getAllArrangements();
  const slug = pickArrangementSlug(selectedFlowers, feeling);
  const arrangement = arrangements.find((a) => a.slug === slug) ?? arrangements[0];
  const tips = buildFlowerTips(selectedFlowers, feeling);

  return {
    id: `generated-${slug}-${feeling}`,
    title: `${feeling}的${arrangement.name}`,
    arrangementSlug: arrangement.slug,
    feeling,
    description: arrangement.description,
    difficulty: arrangement.difficulty,
    tips,
    selectedFlowers,
  };
}
