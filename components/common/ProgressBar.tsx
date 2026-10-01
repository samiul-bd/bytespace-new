import React from "react";

export interface ProgressBarProps {
  progress: number;
  trackColor?: string;
  barColor?: string;
  height?: number;
  className?: string;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  trackColor = "bg-neutral-100",
  barColor = "bg-secondary-400",
  height = 8,
  className = "",
  label = "Learning progress",
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      className={`relative w-full rounded-full overflow-hidden ${trackColor} ${className}`}
      style={{ height: `${height}px` }}
      role="progressbar"
      aria-label={label}
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ease-out ${barColor}`}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};
