import { useState, useCallback } from 'react';
import { getAllFlowers } from '@/lib/data';
import { generateSuggestion } from '@/lib/suggestionEngine';
import { FEELINGS } from '@/data/feelings';
import { usePracticeLog } from '@/hooks/usePracticeLog';
import type { Feeling, MoodEmoji, GeneratedSuggestion } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import ProgressBar from '@/components/shared/ProgressBar';
import FlowerSelector from '@/components/practice/FlowerSelector';
import FeelingSelector from '@/components/practice/FeelingSelector';
import SuggestionCard from '@/components/practice/SuggestionCard';
import PracticeRecorder from '@/components/practice/PracticeRecorder';
import PracticeLogList from '@/components/practice/PracticeLogList';

type WizardStep = 1 | 2 | 3 | 4;

const STEP_LABELS = ['選花材', '選感覺', '看建議', '記錄'] as const;

export default function PracticePage() {
  const allFlowers = getAllFlowers();
  const { logs, addLog, deleteLog, updateLog } = usePracticeLog();

  const [step, setStep] = useState<WizardStep>(1);
  const [selectedSlugs, setSelectedSlugs] = useState<readonly string[]>([]);
  const [selectedFeeling, setSelectedFeeling] = useState<Feeling | null>(null);
  const [suggestion, setSuggestion] = useState<GeneratedSuggestion | null>(null);

  const handleToggleFlower = useCallback((slug: string) => {
    setSelectedSlugs((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug],
    );
  }, []);

  const handleStep1Next = useCallback(() => {
    if (selectedSlugs.length === 0) return;
    setStep(2);
  }, [selectedSlugs]);

  const handleStep2Next = useCallback(() => {
    if (!selectedFeeling) return;
    const flowers = allFlowers.filter((f) => selectedSlugs.includes(f.slug));
    const generated = generateSuggestion(flowers, selectedFeeling);
    setSuggestion(generated);
    setStep(3);
  }, [selectedFeeling, selectedSlugs, allFlowers]);

  const handleStartPractice = useCallback(() => {
    setStep(4);
  }, []);

  const handleSave = useCallback((mood: MoodEmoji, notes: string) => {
    if (!suggestion) return;
    addLog({
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      suggestionId: suggestion.id,
      title: suggestion.title,
      mood,
      notes,
      selectedFlowerSlugs: suggestion.selectedFlowers.map((f) => f.slug),
      feeling: suggestion.feeling,
    });
    setStep(1);
    setSelectedSlugs([]);
    setSelectedFeeling(null);
    setSuggestion(null);
  }, [suggestion, addLog]);

  const handleBack = useCallback(() => {
    setStep((s) => (s > 1 ? ((s - 1) as WizardStep) : s));
  }, []);

  const handleReset = useCallback(() => {
    setStep(1);
    setSelectedSlugs([]);
    setSelectedFeeling(null);
    setSuggestion(null);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionTitle
        title="今天練什麼？"
        subtitle="選擇手邊的花材，告訴我你想呈現的感覺"
      />

      {/* Progress bar with labels */}
      <div className="mb-10 max-w-md mx-auto">
        <ProgressBar totalSteps={4} currentStep={step} />
        <div className="flex mt-2">
          {STEP_LABELS.map((label, i) => (
            <div key={label} className="flex-1 text-center text-xs text-text-light">
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Wizard steps */}
      {step === 1 && (
        <FlowerSelector
          flowers={allFlowers}
          selectedSlugs={selectedSlugs}
          onToggle={handleToggleFlower}
          onNext={handleStep1Next}
        />
      )}

      {step === 2 && (
        <FeelingSelector
          feelings={FEELINGS}
          selected={selectedFeeling}
          onSelect={setSelectedFeeling}
          onNext={handleStep2Next}
        />
      )}

      {step === 3 && suggestion && (
        <SuggestionCard
          suggestion={suggestion}
          onStartPractice={handleStartPractice}
        />
      )}

      {step === 4 && suggestion && (
        <PracticeRecorder
          suggestion={suggestion}
          onSave={handleSave}
        />
      )}

      {/* Back / Reset buttons */}
      {step > 1 && (
        <div className="flex justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={handleBack}
            className="px-5 py-2 text-text-secondary text-sm hover:text-text-primary transition-colors"
          >
            ← 上一步
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2 text-text-light text-sm hover:text-text-primary transition-colors"
          >
            重新開始
          </button>
        </div>
      )}

      {/* Practice logs */}
      {logs.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-xl font-bold text-text-primary mb-4">
            練習紀錄
          </h2>
          <PracticeLogList
            logs={logs}
            onDelete={deleteLog}
            onUpdate={updateLog}
          />
        </div>
      )}
    </div>
  );
}
