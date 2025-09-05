'use client';

import { AlternativesList } from '@/components/journey/AlternativesList';
import { EmptyState } from '@/components/journey/EmptyState';
import { JourneyTimeline } from '@/components/journey/JourneyTimeLine';
import { ServiceDetails } from '@/components/journey/ServiceDetails';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useStepMessage } from '@/hooks/useStepMessage';
import { createServiceMap, getPrimaryServices } from '@/lib/services';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedAlternative, setSelectedAlternative] = useState<string | null>(null);

  const primaryServices = getPrimaryServices();
  const serviceMap = createServiceMap();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const stored = localStorage.getItem('privacy-journey-completed-steps');
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
    localStorage.setItem('privacy-journey-completed-steps', JSON.stringify(completedSteps));
  }, [completedSteps]);

  const currentService = selectedAlternative
    ? serviceMap[selectedAlternative]
    : primaryServices[currentStep];

  const stepMessage = useStepMessage(primaryServices[currentStep]);

  const handleStepClick = (index: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(index);
    setSelectedAlternative(null);
  };

  const handleAlternativeClick = (stepIndex: number, altId: string) => {
    setCurrentStep(stepIndex);
    setSelectedAlternative(altId);
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

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedAlternative(null);
    }
  };

  const handleNextStep = () => {
    if (currentStep < primaryServices.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAlternative(null);
    }
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
        {/* Left Panel - Timeline */}
        <JourneyTimeline
          primaryServices={primaryServices}
          completedSteps={completedSteps}
          currentStep={currentStep}
          selectedAlternative={selectedAlternative}
          stepMessage={stepMessage}
          onStepClick={handleStepClick}
          onAlternativeClick={handleAlternativeClick}
        />

        {/* Right Panel - Details */}
        <div className="overscroll-none md:sticky md:top-4 md:h-[calc(100vh-2rem)] md:overflow-y-auto">
          {currentService ? (
            <>
              <ServiceDetails
                service={currentService}
                isCompleted={isCurrentStepCompleted}
                onMarkComplete={markStepComplete}
                onMarkUndone={markStepUndone}
                onPreviousStep={handlePreviousStep}
                onNextStep={handleNextStep}
                canGoPrevious={currentStep > 0}
                canGoNext={currentStep < primaryServices.length - 1}
                selectedAlternative={!!selectedAlternative}
              />

              {/* Show alternatives list only for primary services without an alternative selected */}
              {primaryServices[currentStep]?.alternatives &&
                primaryServices[currentStep].alternatives.length > 0 &&
                !selectedAlternative && (
                  <AlternativesList
                    currentService={primaryServices[currentStep]}
                    onAlternativeClick={setSelectedAlternative}
                  />
                )}
            </>
          ) : (
            <EmptyState
              completedSteps={completedSteps.length}
              totalSteps={primaryServices.length}
            />
          )}
        </div>
      </div>
    </div>
  );
}
