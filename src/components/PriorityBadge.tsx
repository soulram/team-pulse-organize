
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

type PriorityType = 'low' | 'medium' | 'high' | 'urgent';

interface PriorityBadgeProps {
  priority: PriorityType;
  className?: string;
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority, className }) => {
  const getPriorityConfig = () => {
    switch (priority) {
      case 'low':
        return { color: 'bg-priority-low text-white', label: 'Low' };
      case 'medium':
        return { color: 'bg-priority-medium text-white', label: 'Medium' };
      case 'high':
        return { color: 'bg-priority-high text-white', label: 'High' };
      case 'urgent':
        return { color: 'bg-priority-urgent text-white', label: 'Urgent' };
      default:
        return { color: 'bg-gray-500 text-white', label: 'Unknown' };
    }
  };

  const { color, label } = getPriorityConfig();

  return (
    <Badge className={cn(color, className)}>
      {label}
    </Badge>
  );
};

export default PriorityBadge;
