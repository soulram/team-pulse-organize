
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className, showLabel = true, size = 'md' }) => {
  const progress = Math.max(0, Math.min(100, value));
  
  const getProgressColor = () => {
    if (progress < 25) return "bg-status-off-track";
    if (progress < 70) return "bg-status-at-risk";
    return "bg-status-on-track";
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'h-1';
      case 'lg': return 'h-3';
      default: return 'h-2';
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <Progress 
        value={progress} 
        className={cn(getSizeClass(), "mb-1")}
        indicatorClassName={getProgressColor()}
      />
      {showLabel && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
