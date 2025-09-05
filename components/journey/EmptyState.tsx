'use client';

import { Shield } from 'lucide-react';

interface EmptyStateProps {
  completedSteps: number;
  totalSteps: number;
}

export function EmptyState({ completedSteps, totalSteps }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg">
      <Shield size={48} className="mx-auto mb-4 text-gray-400" />
      <h3 className="mb-2 text-lg font-semibold text-gray-900">Start Your Privacy Journey</h3>
      <p className="mb-6 text-gray-600">
        Click on any step to learn about privacy-focused alternatives to mainstream services.
      </p>

      <div className="text-sm text-gray-500">
        Progress: {completedSteps} of {totalSteps} steps completed
        {completedSteps > 0 && (
          <div className="mt-2">
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-green-500 transition-all duration-300"
                style={{
                  width: `${(completedSteps / totalSteps) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
