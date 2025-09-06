'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { createServiceMap } from '@/lib/services';
import { Service } from '@/lib/types';
import { ArrowRight, CheckCircle, Circle, Clock } from 'lucide-react';

interface JourneyTimelineProps {
  primaryServices: Service[];
  completedSteps: number[];
  currentStep: number;
  selectedAlternative: string | null;
  stepMessage: string | null;
  onStepClick: (index: number) => void;
  onAlternativeClick: (stepIndex: number, altId: string) => void;
}

export function JourneyTimeline({
  primaryServices,
  completedSteps,
  currentStep,
  selectedAlternative,
  stepMessage,
  onStepClick,
  onAlternativeClick,
}: JourneyTimelineProps) {
  const serviceMap = createServiceMap();

  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-300"></div>

      <div className="space-y-6">
        {primaryServices.map((service, index) => (
          <div key={service.id} className="group relative flex items-start">
            <button
              onClick={() => onStepClick(index)}
              className={`relative z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-4 transition-all duration-300 ${
                completedSteps.includes(index)
                  ? 'border-green-500 bg-green-500 text-white'
                  : currentStep === index
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 bg-white text-gray-400 hover:border-blue-400'
              }`}
            >
              {completedSteps.includes(index) ? <CheckCircle size={20} /> : <Circle size={20} />}
            </button>

            <div className="ml-4 flex-1">
              <button
                onClick={() => onStepClick(index)}
                className={`block w-full cursor-pointer rounded-lg p-3 text-left transition-all duration-300 ${
                  currentStep === index ? 'border border-gray-200 bg-white' : 'hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-xs text-gray-600 uppercase">{service.category}</p>
                    </div>
                    {service.difficulty && (
                      <div className="mt-3 flex items-center gap-2">
                        <span
                          className={`text-xs font-medium ${
                            service.difficulty === 'easy'
                              ? 'text-green-600'
                              : service.difficulty === 'medium'
                                ? 'text-yellow-600'
                                : 'text-red-600'
                          }`}
                        >
                          {service.difficulty === 'easy'
                            ? '● Easy setup'
                            : service.difficulty === 'medium'
                              ? '● Moderate setup'
                              : '● Complex setup'}
                        </span>
                        {service.setupTime && (
                          <span className="flex items-center text-xs text-gray-500">
                            <Clock size={10} className="mr-0.5" />
                            {service.setupTime.undetermined
                              ? 'Setup time varies'
                              : service.setupTime.hours
                                ? `${service.setupTime.hours} hr${service.setupTime.hours > 1 ? 's' : ''}`
                                : service.setupTime.minutes
                                  ? `${service.setupTime.minutes} min${service.setupTime.minutes > 1 ? 's' : ''}`
                                  : ''}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <ArrowRight
                    size={16}
                    className={`text-gray-400 transition-transform ${
                      currentStep === index ? 'translate-x-1' : ''
                    }`}
                  />
                </div>
              </button>

              {service.alternatives && service.alternatives.length > 0 && (
                <>
                  <div className="mt-3 ml-8 space-y-2">
                    {service.alternatives
                      .filter((altId) => serviceMap[altId])
                      .map((altId) => {
                        const alt = serviceMap[altId];
                        return (
                          <button
                            key={alt.id}
                            onClick={() => onAlternativeClick(index, alt.id)}
                            className={`block w-full cursor-pointer rounded-lg border-2 border-dashed p-2 text-left text-sm transition-all duration-300 ${
                              currentStep === index && selectedAlternative === alt.id
                                ? 'border-purple-300 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="font-medium text-gray-700">{alt.name}</span>
                                <span className="ml-2 text-xs text-purple-600">Alternative</span>
                              </div>
                              <ArrowRight size={14} className="text-purple-400" />
                            </div>
                          </button>
                        );
                      })}
                  </div>
                  {currentStep === index && stepMessage !== null && (
                    <Alert variant="default" className="mt-4">
                      <AlertDescription className="text-sm text-gray-700">
                        {stepMessage}
                      </AlertDescription>
                    </Alert>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
