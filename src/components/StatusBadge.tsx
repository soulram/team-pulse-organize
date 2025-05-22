
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

type StatusType = 'on-track' | 'at-risk' | 'off-track' | 'completed' | 'not-started';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'on-track':
        return { color: 'bg-status-on-track text-white', label: 'On Track' };
      case 'at-risk':
        return { color: 'bg-status-at-risk text-white', label: 'At Risk' };
      case 'off-track':
        return { color: 'bg-status-off-track text-white', label: 'Off Track' };
      case 'completed':
        return { color: 'bg-status-completed text-white', label: 'Completed' };
      case 'not-started':
        return { color: 'bg-status-not-started text-white', label: 'Not Started' };
      default:
        return { color: 'bg-gray-500 text-white', label: 'Unknown' };
    }
  };

  const { color, label } = getStatusConfig();

  return (
    <Badge className={cn(color, className)}>
      {label}
    </Badge>
  );
};

export default StatusBadge;
