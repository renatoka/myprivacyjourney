'use client';

import { ArrowRight, CheckCircle, Circle, ExternalLink, Shield, Undo2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { createServiceMap, getPrimaryServices } from '@/lib/services';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedAlternative, setSelectedAlternative] = useState<string | null>(null);
  const [stepMessage, setStepMessage] = useState<string | null>(null);

  const primaryServices = getPrimaryServices();
  const serviceMap = createServiceMap();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const stored = sessionStorage.getItem('privacy-journey-completed-steps');
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
    sessionStorage.setItem('privacy-journey-completed-steps', JSON.stringify(completedSteps));
  }, [completedSteps]);

  useEffect(() => {
    setStepMessage(null);
    if (primaryServices[currentStep]) {
      switch (primaryServices[currentStep].category) {
        case 'dns':
          setStepMessage(
            'DNS (Domain Name System) providers resolve domain names into IP addresses. Choosing a privacy-conscious provider can reduce tracking and improve security.'
          );
          break;
        case 'browser':
          setStepMessage(
            'A browser is your gateway to the web. Privacy-focused browsers limit tracking, block invasive scripts, and prioritize user data protection.'
          );
          break;
        case 'search':
          setStepMessage(
            'Search engines index the web to help you find information. Privacy-respecting engines avoid profiling and do not log your queries.'
          );
          break;
        case 'vpn':
          setStepMessage(
            'A VPN (Virtual Private Network) encrypts your traffic and masks your IP address, protecting your identity and activity from surveillance.'
          );
          break;
        case 'email':
          setStepMessage(
            'Email remains a core communication tool. Privacy-first providers offer encryption and avoid data harvesting for advertising or profiling.'
          );
          break;
        case 'messaging':
          setStepMessage(
            'Messaging apps vary in their security. Services with end-to-end encryption and transparent policies better safeguard your conversations.'
          );
          break;
        case 'storage':
          setStepMessage(
            'Cloud storage solutions differ in how they handle your data. Privacy-focused options use encryption and ensure only you control access.'
          );
          break;
        case 'password':
          setStepMessage(
            'Password managers help create and store strong, unique passwords. Choosing a secure, privacy-conscious manager protects your credentials from breaches.'
          );
          break;
        default:
          setStepMessage(null);
      }
    }
  }, [currentStep, primaryServices]);

  const currentService = selectedAlternative
    ? serviceMap[selectedAlternative]
    : primaryServices[currentStep];

  const handleStepClick = (index: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(index);
    setSelectedAlternative(null);
  };

  const markStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    if (currentStep < primaryServices.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAlternative(null);
    }
  };

  const markStepUndone = () => {
    setCompletedSteps(completedSteps.filter((step) => step !== currentStep));
  };

  const handleAlternativeClick = (altId: string) => {
    setSelectedAlternative(altId);
  };

  const isCurrentStepCompleted = completedSteps.includes(currentStep);

  return (
    <div>
      <header className="text-center">
        <Alert variant="destructive" className="mb-6">
          <AlertDescription style={{ fontWeight: 'bold' }}>
            The EU is considering legislation that could impact the use of encrypted messaging apps
            like Signal and ProtonMail. Stay informed and consider alternatives if necessary. Learn
            more at https://fightchatcontrol.eu/
          </AlertDescription>
        </Alert>
      </header>

      <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-300"></div>

          <div className="space-y-6">
            {primaryServices.map((service, index) => (
              <div key={service.id} className="group relative flex items-start">
                <button
                  onClick={() => handleStepClick(index)}
                  className={`relative z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-4 transition-all duration-300 ${
                    completedSteps.includes(index)
                      ? 'border-green-500 bg-green-500 text-white'
                      : currentStep === index
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : 'border-gray-300 bg-white text-gray-400 hover:border-blue-400'
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
                    className={`block w-full cursor-pointer rounded-lg p-3 text-left transition-all duration-300 ${
                      currentStep === index ? 'border border-gray-200 bg-white' : 'hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-600 uppercase">{service.category}</p>
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
                                onClick={(e) => {
                                  handleStepClick(index);
                                  handleAlternativeClick(alt.id);
                                }}
                                className={`block w-full cursor-pointer rounded-lg border-2 border-dashed p-2 text-left text-sm transition-all duration-300 ${
                                  currentStep === index && selectedAlternative === alt.id
                                    ? 'border-purple-300 bg-purple-50'
                                    : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="font-medium text-gray-700">{alt.name}</span>
                                    <span className="ml-2 text-xs text-purple-600">
                                      Alternative
                                    </span>
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

        <div className="overscroll-none md:sticky md:top-4 md:h-[calc(100vh-2rem)] md:overflow-y-auto">
          {currentService ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentService.name}</h2>
                  <p className="text-sm tracking-wide text-gray-600 uppercase">
                    {currentService.category}
                    {selectedAlternative && (
                      <span className="ml-2 text-purple-600">(Alternative Option)</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">About {currentService.name}</h3>
                <p className="text-gray-700">{currentService.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-gray-900">Service Details</h3>
                <div className="grid gap-2">
                  {Object.entries(currentService.facts).map(([key, value], index) => (
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
                    <span className="min-w-[80px] text-sm font-medium text-gray-600">
                      Free Plan:
                    </span>
                    <span className="ml-2 text-sm text-gray-700">
                      {currentService.pricing.free ? 'Available' : 'Not Available'}
                    </span>
                  </div>
                  {currentService.pricing.startingPrice && (
                    <div className="flex items-center">
                      <span className="min-w-[80px] text-sm font-medium text-gray-600">
                        Starting:
                      </span>
                      <span className="ml-2 text-sm text-gray-700">
                        {currentService.pricing.startingPrice}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-gray-900">Key Benefits</h3>
                <ul className="space-y-2">
                  {currentService.pros.map((pro, index) => (
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
                  {currentService.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <Circle size={16} className="mt-0.5 mr-2 flex-shrink-0 text-orange-500" />
                      <span className="text-sm text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 flex flex-col gap-3 md:flex-row">
                <a
                  href={currentService.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Visit Website
                  <ExternalLink size={14} />
                </a>

                {!isCurrentStepCompleted ? (
                  <button
                    onClick={markStepComplete}
                    className="cursor-pointer rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Mark as Done ✓
                  </button>
                ) : (
                  <button
                    onClick={markStepUndone}
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                  >
                    <Undo2 size={14} />
                    Mark as Undone
                  </button>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => {
                    if (currentStep > 0) {
                      setCurrentStep(currentStep - 1);
                      setSelectedAlternative(null);
                    }
                  }}
                  disabled={currentStep === 0}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  ← Previous Step
                </button>

                <button
                  onClick={() => {
                    if (currentStep < primaryServices.length - 1) {
                      setCurrentStep(currentStep + 1);
                      setSelectedAlternative(null);
                    }
                  }}
                  disabled={currentStep === primaryServices.length - 1}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next Step →
                </button>
              </div>

              {primaryServices[currentStep]?.alternatives &&
                primaryServices[currentStep].alternatives.length > 0 &&
                !selectedAlternative && (
                  <>
                    <Separator className="my-6" />
                    <div className="mt-6">
                      <h3 className="mb-3 font-semibold text-gray-900">Explore Alternatives</h3>
                      <div className="grid gap-2">
                        {primaryServices[currentStep].alternatives
                          .filter((altId) => serviceMap[altId])
                          .map((altId) => {
                            const alt = serviceMap[altId];
                            return (
                              <button
                                key={alt.id}
                                onClick={() => handleAlternativeClick(alt.id)}
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
                )}
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg">
              <Shield size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Start Your Privacy Journey
              </h3>
              <p className="mb-6 text-gray-600">
                Click on any step to learn about privacy-focused alternatives to mainstream
                services.
              </p>

              <div className="text-sm text-gray-500">
                Progress: {completedSteps.length} of {primaryServices.length} steps completed
                {completedSteps.length > 0 && (
                  <div className="mt-2">
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-green-500 transition-all duration-300"
                        style={{
                          width: `${(completedSteps.length / primaryServices.length) * 100}%`,
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
  );
}
