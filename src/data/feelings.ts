import type { Feeling, FeelingOption } from '@/types';

export const FEELINGS: readonly FeelingOption[] = [
  {
    id: '溫柔浪漫',
    label: '溫柔浪漫',
    description: '柔和粉嫩，傳遞溫柔心意',
    emoji: '🌸',
    colorClass: 'border-rose text-rose-dark bg-rose-light/20',
  },
  {
    id: '清新自然',
    label: '清新自然',
    description: '綠意盎然，感受大自然的呼吸',
    emoji: '🌿',
    colorClass: 'border-sage text-sage-dark bg-sage-light/20',
  },
  {
    id: '活力繽紛',
    label: '活力繽紛',
    description: '鮮豔多彩，充滿正能量',
    emoji: '🌻',
    colorClass: 'border-yellow-400 text-yellow-700 bg-yellow-50',
  },
  {
    id: '簡約現代',
    label: '簡約現代',
    description: '少即是多，線條感的設計美學',
    emoji: '🤍',
    colorClass: 'border-border text-text-primary bg-warm-bg',
  },
  {
    id: '自然隨性',
    label: '自然隨性',
    description: '不拘一格，跟著感覺走',
    emoji: '🍃',
    colorClass: 'border-sage-light text-sage-dark bg-sage-light/10',
  },
] as const;

export const FEELING_TO_ARRANGEMENTS: Readonly<Record<Feeling, readonly string[]>> = {
  '溫柔浪漫': ['round'],
  '清新自然': ['round', 'linear'],
  '活力繽紛': ['round', 'triangle'],
  '簡約現代': ['linear'],
  '自然隨性': ['linear', 'round'],
} as const;
