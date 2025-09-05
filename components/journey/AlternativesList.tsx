'use client';

import { Separator } from '@/components/ui/separator';
import { createServiceMap } from '@/lib/services';
import { Service } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface AlternativesListProps {
  currentService: Service;
  onAlternativeClick: (altId: string) => void;
}

export function AlternativesList({ currentService, onAlternativeClick }: AlternativesListProps) {
  const serviceMap = createServiceMap();

  if (!currentService.alternatives || currentService.alternatives.length === 0) {
    return null;
  }

  return (
    <>
      <Separator className="my-6" />
      <div className="mt-6">
        <h3 className="mb-3 font-semibold text-gray-900">Explore Alternatives</h3>
        <div className="grid gap-2">
          {currentService.alternatives
            .filter((altId) => serviceMap[altId])
            .map((altId) => {
              const alt = serviceMap[altId];
              return (
                <button
                  key={alt.id}
                  onClick={() => onAlternativeClick(alt.id)}
                  className="cursor-pointer rounded-lg border border-dashed border-purple-200 p-3 text-left transition-all duration-300 hover:border-purple-400 hover:bg-purple-50"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-purple-700">{alt.name}</span>
                    </div>
                    <ArrowRight size={14} className="text-purple-400" />
                  </div>
                </button>
              );
            })}
        </div>
      </div>
    </>
  );
}
