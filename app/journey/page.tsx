'use client';

import {
  ArrowRight,
  CheckCircle,
  Circle,
  ExternalLink,
  Shield,
  Undo2,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { PRIVACY_JOURNEY } from '@/lib/services';

export default function PrivacyJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedAlternative, setSelectedAlternative] = useState<
    string | null
  >(null);

  useEffect(() => {
    const stored = localStorage.getItem(
      'privacy-journey-completed-steps'
    );
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCompletedSteps(parsed);
        }
      } catch (error) {
        console.error('Error loading completed steps:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'privacy-journey-completed-steps',
      JSON.stringify(completedSteps)
    );
  }, [completedSteps]);

  const currentService = selectedAlternative
    ? PRIVACY_JOURNEY[currentStep]?.alternatives?.find(
        (alt) => alt.id === selectedAlternative
      )
    : PRIVACY_JOURNEY[currentStep];

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setSelectedAlternative(null);
  };

  const markStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    if (currentStep < PRIVACY_JOURNEY.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAlternative(null);
    }
  };

  const markStepUndone = () => {
    setCompletedSteps(
      completedSteps.filter((step) => step !== currentStep)
    );
  };

  const handleAlternativeClick = (altId: string) => {
    setSelectedAlternative(altId);
  };

  const isCurrentStepCompleted = completedSteps.includes(currentStep);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center">
          <Alert variant="destructive" className="mb-6">
            <AlertDescription style={{ fontWeight: 'bold' }}>
              The EU is considering legislation that could impact the
              use of encrypted messaging apps like Signal and
              ProtonMail. Stay informed and consider alternatives if
              necessary. Learn more at https://fightchatcontrol.eu/.
            </AlertDescription>
          </Alert>
        </header>

        <Alert variant="default" className="mb-6">
          <AlertDescription style={{ color: 'black' }}>
            Embark on your privacy journey with a curated list of
            services designed to enhance your online security and data
            protection. Each step introduces privacy-focused
            alternatives to mainstream platforms, complete with
            detailed insights and key features to help you make
            informed decisions. This list is thoughtfully ordered to
            follow the natural flow of how we access and use the
            internet — starting from your browser, moving to your
            search engine, VPN, and then to essential tools like
            email, messaging apps, cloud storage, and social media.
            Remember, improving your privacy is a journey, not a
            destination — take it one step at a time.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-6">
              {PRIVACY_JOURNEY.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-start group"
                >
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                      completedSteps.includes(index)
                        ? 'bg-green-500 border-green-500 text-white'
                        : currentStep === index
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'bg-white border-gray-300 text-gray-400 hover:border-blue-400'
                    }`}
                  >
                    {completedSteps.includes(index) ? (
                      <CheckCircle size={20} />
                    ) : (
                      <Circle size={20} />
                    )}
                  </button>

                  <div className="ml-4 flex-1">
                    <button
                      onClick={() => handleStepClick(index)}
                      className={`text-left block w-full p-3 rounded-lg transition-all duration-300 ${
                        currentStep === index
                          ? 'bg-white border border-gray-200'
                          : 'hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {step.category}
                          </p>
                        </div>
                        <ArrowRight
                          size={16}
                          className={`text-gray-400 transition-transform ${
                            currentStep === index
                              ? 'translate-x-1'
                              : ''
                          }`}
                        />
                      </div>
                    </button>

                    {step.alternatives && (
                      <div className="ml-8 mt-3 space-y-2">
                        {step.alternatives.map((alt) => (
                          <button
                            key={alt.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStepClick(index);
                              handleAlternativeClick(alt.id);
                            }}
                            className={`text-left block w-full p-2 rounded-lg text-sm transition-all duration-300 border-2 border-dashed ${
                              currentStep === index &&
                              selectedAlternative === alt.id
                                ? 'bg-purple-50 border-purple-300'
                                : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="font-medium text-gray-700">
                                  {alt.title}
                                </span>
                                <span className="text-purple-600 ml-2 text-xs">
                                  Alternative
                                </span>
                                {/* <div className="text-xs text-gray-500 mt-1">
                                  {alt.privacyScore}/10 Privacy Score
                                </div> */}
                              </div>
                              <ArrowRight
                                size={14}
                                className="text-purple-400"
                              />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-4">
            {currentService ? (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {currentService.title}
                    </h2>
                    <p className="text-sm text-gray-600 tracking-wide">
                      {currentService.category}
                      {selectedAlternative && (
                        <span className="text-purple-600 ml-2">
                          (Alternative Option)
                        </span>
                      )}
                    </p>
                  </div>
                  {/* <div className="text-right">
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-green-100 text-green-800 cursor-default">
                          {currentService.privacyScore}/10 Privacy
                          Score
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        Privacy Score is based on factors like data
                        collection, encryption, jurisdiction, and
                        transparency.
                      </TooltipContent>
                    </Tooltip>
                  </div> */}
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why This Matters
                  </h3>
                  <p className="text-gray-700">
                    {currentService.whyImportant}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    About {currentService.title}
                  </h3>
                  <p className="text-gray-700">
                    {currentService.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Key Privacy Features
                  </h3>
                  <ul className="space-y-2">
                    {currentService.keyFeatures.map(
                      (feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle
                            size={16}
                            className="text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="flex gap-3 mb-6">
                  <a
                    href={currentService.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Visit Website
                    <ExternalLink size={14} />
                  </a>

                  {!isCurrentStepCompleted ? (
                    <button
                      onClick={markStepComplete}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Mark as Done ✓
                    </button>
                  ) : (
                    <button
                      onClick={markStepUndone}
                      className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      <Undo2 size={14} />
                      Mark as Undone
                    </button>
                  )}
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      if (currentStep > 0) {
                        setCurrentStep(currentStep - 1);
                        setSelectedAlternative(null);
                      }
                    }}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Previous Step
                  </button>

                  <button
                    onClick={() => {
                      if (currentStep < PRIVACY_JOURNEY.length - 1) {
                        setCurrentStep(currentStep + 1);
                        setSelectedAlternative(null);
                      }
                    }}
                    disabled={
                      currentStep === PRIVACY_JOURNEY.length - 1
                    }
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step →
                  </button>
                </div>

                {PRIVACY_JOURNEY[currentStep]?.alternatives &&
                  !selectedAlternative && (
                    <>
                      <Separator className="my-6" />
                      <div className="mt-6">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Explore Alternatives
                        </h3>
                        <div className="grid gap-2">
                          {PRIVACY_JOURNEY[
                            currentStep
                          ].alternatives!.map((alt) => (
                            <button
                              key={alt.id}
                              onClick={() =>
                                handleAlternativeClick(alt.id)
                              }
                              className="text-left p-3 rounded-lg border border-dashed border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="font-medium text-purple-700">
                                    {alt.title}
                                  </span>
                                  {/* <div className="text-xs text-purple-600 mt-1">
                                    {alt.privacyScore}/10 Privacy
                                    Score
                                  </div> */}
                                </div>
                                <ArrowRight
                                  size={14}
                                  className="text-purple-400"
                                />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                {selectedAlternative && (
                  <>
                    <Separator className="my-6" />
                    <div className="mt-6">
                      <button
                        onClick={() => setSelectedAlternative(null)}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
                      >
                        ← Back to {PRIVACY_JOURNEY[currentStep].title}
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center">
                <Shield
                  size={48}
                  className="text-gray-400 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Start Your Privacy Journey
                </h3>
                <p className="text-gray-600 mb-6">
                  Click on any step to learn about privacy-focused
                  alternatives to mainstream services.
                </p>

                <div className="text-sm text-gray-500">
                  Progress: {completedSteps.length} of{' '}
                  {PRIVACY_JOURNEY.length} steps completed
                  {completedSteps.length > 0 && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${
                              (completedSteps.length /
                                PRIVACY_JOURNEY.length) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
