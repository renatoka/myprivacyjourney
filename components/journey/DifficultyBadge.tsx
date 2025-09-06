'use client';

import { Badge } from '@/components/ui/badge';
import { DifficultyLevel } from '@/lib/types';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface DifficultyBadgeProps {
  level: DifficultyLevel;
  showLabel?: boolean;
}

export function DifficultyBadge({ level, showLabel = true }: DifficultyBadgeProps) {
  const config = {
    easy: {
      label: 'Easy',
      description: 'Quick setup, no technical knowledge needed',
      icon: CheckCircle,
      className: 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200',
    },
    medium: {
      label: 'Medium',
      description: 'Some configuration required, basic tech skills helpful',
      icon: AlertCircle,
      className: 'bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200',
    },
    hard: {
      label: 'Hard',
      description: 'Technical knowledge required, significant time investment',
      icon: XCircle,
      className: 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200',
    },
  };

  const { label, icon: Icon, className } = config[level];

  return (
    <Badge variant="outline" className={className}>
      <Icon size={14} />
      {showLabel && <span className="ml-1">{label}</span>}
    </Badge>
  );
}
