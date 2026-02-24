interface ProgressBarProps {
  readonly totalSteps: number;
  readonly currentStep?: number;
}

export default function ProgressBar({ totalSteps, currentStep }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-1 w-full">
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1;
        const isActive = currentStep !== undefined && stepNum === currentStep;
        const isCompleted = currentStep !== undefined && stepNum < currentStep;
        return (
          <div key={stepNum} className="flex items-center flex-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                isActive
                  ? 'bg-rose text-white'
                  : isCompleted
                  ? 'bg-sage text-white'
                  : 'bg-warm-bg text-text-light border border-border'
              }`}
            >
              {isCompleted ? '✓' : stepNum}
            </div>
            {stepNum < totalSteps && (
              <div
                className={`h-0.5 flex-1 mx-1 transition-colors ${
                  isCompleted ? 'bg-sage' : 'bg-border'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
