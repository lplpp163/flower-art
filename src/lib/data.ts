import flowersData from '@/data/flowers.json';
import arrangementsData from '@/data/arrangements.json';
import structureTopicsData from '@/data/structure-topics.json';
import practiceSuggestionsData from '@/data/practice-suggestions.json';
import encouragementsData from '@/data/encouragements.json';
import type {
  Flower,
  Arrangement,
  StructureTopic,
  PracticeSuggestion,
  Encouragement,
} from '@/types';

export function getAllFlowers(): readonly Flower[] {
  return flowersData as unknown as readonly Flower[];
}

export function getFlowerBySlug(slug: string): Flower | undefined {
  return getAllFlowers().find((f) => f.slug === slug);
}

export function getAllArrangements(): readonly Arrangement[] {
  return arrangementsData as unknown as readonly Arrangement[];
}

export function getArrangementBySlug(slug: string): Arrangement | undefined {
  return getAllArrangements().find((a) => a.slug === slug);
}

export function getAllStructureTopics(): readonly StructureTopic[] {
  return structureTopicsData as unknown as readonly StructureTopic[];
}

export function getStructureTopicBySlug(slug: string): StructureTopic | undefined {
  return getAllStructureTopics().find((t) => t.slug === slug);
}

export function getAllPracticeSuggestions(): readonly PracticeSuggestion[] {
  return practiceSuggestionsData as unknown as readonly PracticeSuggestion[];
}

export function getAllEncouragements(): readonly Encouragement[] {
  return encouragementsData as unknown as readonly Encouragement[];
}

export function getRandomEncouragement(): Encouragement {
  const items = getAllEncouragements();
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

export function getDailyEncouragement(): Encouragement {
  const items = getAllEncouragements();
  const today = new Date();
  const dayIndex = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % items.length;
  return items[dayIndex];
}
