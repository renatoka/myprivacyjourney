'use client';

import { Service } from '@/lib/types';
import { CheckCircle, Circle, ExternalLink, Undo2 } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { TimeEstimate } from './TimeEstimate';

interface ServiceDetailsProps {
  service: Service;
  isCompleted: boolean;
  onMarkComplete: () => void;
  onMarkUndone: () => void;
  onPreviousStep: () => void;
  onNextStep: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  selectedAlternative: boolean;
}

export function ServiceDetails({
  service,
  isCompleted,
  onMarkComplete,
  onMarkUndone,
  onPreviousStep,
  onNextStep,
  canGoPrevious,
  canGoNext,
  // selectedAlternative,
}: ServiceDetailsProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
          <p className="text-sm tracking-wide text-gray-600 uppercase">{service.category}</p>
          <div className="mt-3 flex items-center gap-3">
            {service.difficulty && <DifficultyBadge level={service.difficulty} />}
            {service.setupTime && <TimeEstimate time={service.setupTime} />}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900">About {service.name}</h3>
        <p className="text-gray-700">{service.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 font-semibold text-gray-900">Service Details</h3>
        <div className="grid gap-2">
          {Object.entries(service.facts).map(([key, value], index) => (
            <div key={index} className="flex items-start justify-between">
              <span className="min-w-[100px] text-sm font-medium text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
              </span>
              <span className="ml-2 text-sm text-gray-700">
                {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 font-semibold text-gray-900">Pricing</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="min-w-[80px] text-sm font-medium text-gray-600">Free Plan:</span>
            <span className="ml-2 text-sm text-gray-700">
              {service.pricing.free ? 'Available' : 'Not Available'}
            </span>
          </div>
          {service.pricing.startingPrice && (
            <div className="flex items-center">
              <span className="min-w-[80px] text-sm font-medium text-gray-600">Starting:</span>
              <span className="ml-2 text-sm text-gray-700">{service.pricing.startingPrice}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 font-semibold text-gray-900">Key Benefits</h3>
        <ul className="space-y-2">
          {service.pros.map((pro, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={16} className="mt-0.5 mr-2 flex-shrink-0 text-green-500" />
              <span className="text-sm text-gray-700">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 font-semibold text-gray-900">Considerations</h3>
        <ul className="space-y-2">
          {service.cons.map((con, index) => (
            <li key={index} className="flex items-start">
              <Circle size={16} className="mt-0.5 mr-2 flex-shrink-0 text-orange-500" />
              <span className="text-sm text-gray-700">{con}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 font-semibold text-gray-900">Setup & Migration Guides</h3>
        {service.guides ? (
          <div className="grid gap-2">
            {service.guides.docs && (
              <div className="flex items-center justify-between">
                <span className="min-w-[80px] text-sm font-medium text-gray-600">
                  Documentation:
                </span>
                <a
                  href={service.guides.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700"
                >
                  Official Docs
                </a>
              </div>
            )}
            {service.guides.migrationGuide && (
              <div className="flex items-center justify-between">
                <span className="min-w-[80px] text-sm font-medium text-gray-600">
                  Migration Guide:
                </span>
                <a
                  href={service.guides.migrationGuide}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:underline"
                >
                  View Guide
                </a>
              </div>
            )}
            {service.guides.platforms && (
              <div className="grid gap-2">
                {Object.entries(service.guides.platforms).map(
                  ([platform, url], index) =>
                    url && (
                      <div key={index} className="flex items-center justify-between">
                        <span className="min-w-[80px] text-sm font-medium text-gray-600">
                          {platform === 'ios'
                            ? 'iOS'
                            : platform === 'macos'
                              ? 'macOS'
                              : platform.charAt(0).toUpperCase() + platform.slice(1)}
                          :
                        </span>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-700 hover:underline"
                        >
                          View Guide
                        </a>
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        ) : (
          <span className="text-sm text-gray-500">
            No official guides available.{' '}
            <span className="text-xs">
              (prone to research error, will be reviewed again in the future)
            </span>
          </span>
        )}
      </div>

      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <a
          href={service.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Visit Website
          <ExternalLink size={16} />
        </a>

        {!isCompleted ? (
          <button
            onClick={onMarkComplete}
            className="cursor-pointer rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            Mark as Done ✓
          </button>
        ) : (
          <button
            onClick={onMarkUndone}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            <Undo2 size={16} />
            Mark as Undone
          </button>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPreviousStep}
          disabled={!canGoPrevious}
          className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          ← Previous Step
        </button>

        <button
          onClick={onNextStep}
          disabled={!canGoNext}
          className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}
