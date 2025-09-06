'use client';

import { SetupTime } from '@/lib/types';
import { Clock } from 'lucide-react';

interface TimeEstimateProps {
  time: SetupTime;
  className?: string;
}

export function TimeEstimate({ time, className = '' }: TimeEstimateProps) {
  const formatTime = () => {
    if (time.description) {
      return time.description;
    }

    if (time.hours) {
      return time.hours === 1 ? '~1 hour' : `~${time.hours} hours`;
    }

    if (time.minutes) {
      if (time.minutes < 60) {
        return `~${time.minutes} mins`;
      }
      const hours = Math.floor(time.minutes / 60);
      const mins = time.minutes % 60;
      if (mins === 0) {
        return hours === 1 ? '~1 hour' : `~${hours} hours`;
      }
      return `~${hours}h ${mins}m`;
    }

    return 'Time varies';
  };

  return (
    <div className={`flex items-center text-sm text-gray-600 ${className}`}>
      <Clock size={14} className="mr-1" />
      <span>{formatTime()}</span>
    </div>
  );
}
