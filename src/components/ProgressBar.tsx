
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressVariants = cva(
  "transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-green-500",
        warning: "bg-amber-500",
        danger: "bg-red-500",
      },
      size: {
        default: "h-2",
        sm: "h-1",
        lg: "h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ProgressBarProps {
  value: number;
  showLabel?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  showLabel = true,
  variant = 'default',
  size = 'default',
  className,
}) => {
  return (
    <div className={cn("w-full", className)}>
      <Progress value={value} className={cn("w-full", size === "sm" ? "h-1" : size === "lg" ? "h-3" : "h-2")}>
        <div 
          className={cn(progressVariants({ variant }), "h-full")}
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </Progress>
      {showLabel && (
        <div className="text-xs text-muted-foreground text-right mt-1">
          {Math.round(value)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
