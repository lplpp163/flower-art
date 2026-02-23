'use client';

import { useState, useCallback } from 'react';
import { getAllPracticeSuggestions, getRandomEncouragement } from '@/lib/data';
import type { PracticeSuggestion, PracticeLog } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import { usePracticeLog } from '@/hooks/usePracticeLog';

const difficultyColors = {
  '簡單': 'bg-sage-light text-sage-dark',
  '中等': 'bg-rose-light text-rose-dark',
  '挑戰': 'bg-yellow-100 text-yellow-700',
} as const;

const moods: PracticeLog['mood'][] = ['😊', '😌', '🤔', '💪', '🌸'];

export default function PracticePage() {
  const suggestions = getAllPracticeSuggestions();
  const [current, setCurrent] = useState<PracticeSuggestion | null>(null);
  const [encouragement, setEncouragement] = useState('');
  const [selectedMood, setSelectedMood] = useState<PracticeLog['mood'] | null>(null);
  const [notes, setNotes] = useState('');
  const { logs, addLog } = usePracticeLog();

  const pickRandom = useCallback(() => {
    const index = Math.floor(Math.random() * suggestions.length);
    setCurrent(suggestions[index]);
    setEncouragement(getRandomEncouragement().text);
    setSelectedMood(null);
    setNotes('');
  }, [suggestions]);

  const handleRecord = useCallback(() => {
    if (!current || !selectedMood) return;
    addLog({
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      suggestionId: current.id,
      title: current.title,
      mood: selectedMood,
      notes,
    });
    setCurrent(null);
    setSelectedMood(null);
    setNotes('');
  }, [current, selectedMood, notes, addLog]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionTitle
        title="今天練什麼？"
        subtitle="讓花藝練習成為每天的小確幸"
      />

      {/* Random Picker */}
      <div className="text-center mb-12">
        <button
          type="button"
          onClick={pickRandom}
          className="px-8 py-4 bg-rose text-white rounded-full font-medium text-lg hover:bg-rose-dark transition-colors shadow-sm"
        >
          🎲 隨機抽一個練習
        </button>
      </div>

      {/* Current Suggestion */}
      {current && (
        <div className="bg-warm-card rounded-xl border border-rose-light p-6 mb-8">
          <p className="text-rose text-sm italic mb-4">「{encouragement}」</p>
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-serif text-xl font-bold text-text-primary">{current.title}</h3>
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${difficultyColors[current.difficulty]}`}>
              {current.difficulty}
            </span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">{current.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-text-light mb-4">
            <span>⏱ {current.duration}</span>
            <span>📂 {current.category}</span>
          </div>

          <div className="mb-4">
            <p className="text-sm text-text-secondary mb-2">需要的材料：</p>
            <div className="flex flex-wrap gap-2">
              {current.materials.map((m) => (
                <span key={m} className="text-xs bg-warm-bg text-text-secondary px-3 py-1 rounded-full border border-border">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Record Section */}
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-sm font-medium text-text-primary mb-3">練習完了嗎？記錄一下心情吧！</p>
            <div className="flex gap-3 mb-3">
              {moods.map((mood) => (
                <button
                  key={mood}
                  type="button"
                  onClick={() => setSelectedMood(mood)}
                  className={`text-2xl p-2 rounded-full transition-all ${
                    selectedMood === mood ? 'bg-rose-light scale-110' : 'hover:bg-warm-bg'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
            <textarea
              placeholder="今天的練習心得..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-warm-bg text-text-primary placeholder:text-text-light focus:outline-none focus:border-rose transition-colors text-sm resize-none h-20 mb-3"
            />
            <button
              type="button"
              onClick={handleRecord}
              disabled={!selectedMood}
              className="px-6 py-2 bg-sage text-white rounded-full text-sm font-medium hover:bg-sage-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              記錄練習
            </button>
          </div>
        </div>
      )}

      {/* Practice History */}
      {logs.length > 0 && (
        <div>
          <h2 className="font-serif text-xl font-bold text-text-primary mb-4">練習紀錄</h2>
          <div className="space-y-3">
            {logs.map((log) => (
              <div key={log.id} className="bg-warm-card rounded-lg border border-border p-4 flex items-start gap-3">
                <span className="text-2xl">{log.mood}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="font-medium text-text-primary text-sm">{log.title}</h4>
                    <span className="text-text-light text-xs">{log.date}</span>
                  </div>
                  {log.notes && (
                    <p className="text-text-secondary text-xs leading-relaxed">{log.notes}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
