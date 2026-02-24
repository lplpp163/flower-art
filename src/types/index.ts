export interface Flower {
  readonly slug: string;
  readonly name: string;
  readonly englishName: string;
  readonly meaning: string;
  readonly description: string;
  readonly quickFacts?: readonly string[];
  readonly season: readonly string[];
  readonly colors: readonly string[];
  readonly careLevel: '簡單' | '中等' | '進階';
  readonly careTips: string;
  readonly imageUrl: string;
  readonly category: '主花' | '配花' | '葉材';
}

export interface ArrangementStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly description: string;
  readonly keyAction?: string;
  readonly tip?: string;
}

export interface Arrangement {
  readonly slug: string;
  readonly name: string;
  readonly subtitle: string;
  readonly description: string;
  readonly difficulty: '初學' | '基礎' | '進階';
  readonly imageUrl: string;
  readonly characteristics: readonly string[];
  readonly materials: readonly string[];
  readonly steps: readonly ArrangementStep[];
  readonly tips: readonly string[];
}

export interface StructureTopic {
  readonly slug: string;
  readonly name: string;
  readonly subtitle: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly keyPoints: readonly string[];
  readonly sections: readonly StructureSection[];
}

export interface StructureSection {
  readonly title: string;
  readonly content: string;
  readonly summary?: string;
  readonly bulletPoints?: readonly string[];
  readonly tip?: string;
}

export interface PracticeSuggestion {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly difficulty: '簡單' | '中等' | '挑戰';
  readonly materials: readonly string[];
  readonly duration: string;
  readonly category: '花型練習' | '結構練習' | '配色練習' | '創意練習';
}

export type MoodEmoji = '😊' | '😌' | '🤔' | '💪' | '🌸';

export type Feeling =
  | '溫柔浪漫'
  | '清新自然'
  | '活力繽紛'
  | '簡約現代'
  | '自然隨性';

export interface FeelingOption {
  readonly id: Feeling;
  readonly label: string;
  readonly description: string;
  readonly emoji: string;
  readonly colorClass: string;
}

export interface GeneratedSuggestion {
  readonly id: string;
  readonly title: string;
  readonly arrangementSlug: string;
  readonly feeling: Feeling;
  readonly description: string;
  readonly difficulty: '初學' | '基礎' | '進階';
  readonly tips: readonly string[];
  readonly selectedFlowers: readonly Flower[];
}

export interface PracticeLog {
  readonly id: string;
  readonly date: string;
  readonly suggestionId: string;
  readonly title: string;
  readonly mood: MoodEmoji;
  readonly notes: string;
  readonly selectedFlowerSlugs?: readonly string[];
  readonly feeling?: Feeling;
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly tags: readonly string[];
  readonly coverImage: string;
}

export interface Encouragement {
  readonly text: string;
  readonly author?: string;
}
