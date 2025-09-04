"use client";

import {
  ArrowRight,
  CheckCircle,
  Circle,
  ExternalLink,
  Shield,
  Undo2,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { createServiceMap, getPrimaryServices } from "@/lib/services";

export default function PrivacyJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedAlternative, setSelectedAlternative] = useState<string | null>(
    null,
  );

  const primaryServices = getPrimaryServices();
  const serviceMap = createServiceMap();

  useEffect(() => {
    const stored = sessionStorage.getItem("privacy-journey-completed-steps");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCompletedSteps(parsed);
        }
      } catch (error) {
        console.error("Error loading completed steps:", error);
      }
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "privacy-journey-completed-steps",
      JSON.stringify(completedSteps),
    );
  }, [completedSteps]);

  const currentService = selectedAlternative
    ? serviceMap[selectedAlternative]
    : primaryServices[currentStep];

  const handleStepClick = (index: number) => {
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
          <AlertDescription style={{ fontWeight: "bold" }}>
            The EU is considering legislation that could impact the use of
            encrypted messaging apps like Signal and ProtonMail. Stay informed
            and consider alternatives if necessary. Learn more at
            https://fightchatcontrol.eu/
          </AlertDescription>
        </Alert>
      </header>

      <Alert variant="default" className="mb-6">
        <AlertDescription style={{ color: "black" }}>
          Embark on your privacy journey with a curated list of services
          designed to enhance your online security and data protection. Each
          step introduces privacy-focused alternatives to mainstream platforms,
          complete with detailed insights and key features to help you make
          informed decisions. This list is thoughtfully ordered to follow the
          natural flow of how we access and use the internet — starting from
          your browser, moving to your search engine, VPN, and then to essential
          tools like email, messaging apps, cloud storage, and social media.
          Remember, improving your privacy is a journey, not a destination —
          take it one step at a time.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-6">
            {primaryServices.map((service, index) => (
              <div key={service.id} className="relative flex items-start group">
                <button
                  onClick={() => handleStepClick(index)}
                  className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                    completedSteps.includes(index)
                      ? "bg-green-500 border-green-500 text-white"
                      : currentStep === index
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "bg-white border-gray-300 text-gray-400 hover:border-blue-400"
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
                        ? "bg-white border border-gray-200"
                        : "hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600 capitalize">
                          {service.category}
                        </p>
                        {/* <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                              {service.privacyScore}/10 Privacy Score
                            </span>
                            <span className={`text-xs ${getComplianceDisplay(service.euCompliance).color}`}>
                              {getComplianceDisplay(service.euCompliance).text}
                            </span>
                          </div> */}
                      </div>
                      <ArrowRight
                        size={16}
                        className={`text-gray-400 transition-transform ${
                          currentStep === index ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {service.alternatives && service.alternatives.length > 0 && (
                    <div className="ml-8 mt-3 space-y-2">
                      {service.alternatives
                        .filter((altId) => serviceMap[altId])
                        .map((altId) => {
                          const alt = serviceMap[altId];
                          return (
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
                                  ? "bg-purple-50 border-purple-300"
                                  : "border-gray-200 hover:border-purple-200 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="font-medium text-gray-700">
                                    {alt.name}
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
                          );
                        })}
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
                    {currentService.name}
                  </h2>
                  <p className="text-sm text-gray-600 tracking-wide capitalize">
                    {currentService.category}
                    {selectedAlternative && (
                      <span className="text-purple-600 ml-2">
                        (Alternative Option)
                      </span>
                    )}
                  </p>
                  {/* <div className="flex items-center gap-3 mt-2">
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                        Privacy Score: {currentService.privacyScore}/10
                      </span>
                      <span className={`text-sm font-medium ${getComplianceDisplay(currentService.euCompliance).color}`}>
                        {getComplianceDisplay(currentService.euCompliance).text}
                      </span>
                    </div> */}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  About {currentService.name}
                </h3>
                <p className="text-gray-700">{currentService.description}</p>
              </div>

              {/* Service Facts */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Service Details
                </h3>
                <div className="grid gap-2">
                  {Object.entries(currentService.facts).map(
                    ([key, value], index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-sm font-medium text-gray-600 capitalize min-w-[100px]">
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
                        </span>
                        <span className="text-sm text-gray-700 ml-2">
                          {typeof value === "boolean"
                            ? value
                              ? "Yes"
                              : "No"
                            : value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Pricing Information */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Pricing</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-600 min-w-[80px]">
                      Free Plan:
                    </span>
                    <span className="text-sm text-gray-700 ml-2">
                      {currentService.pricing.free
                        ? "Available"
                        : "Not Available"}
                    </span>
                  </div>
                  {currentService.pricing.startingPrice && (
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-600 min-w-[80px]">
                        Starting:
                      </span>
                      <span className="text-sm text-gray-700 ml-2">
                        {currentService.pricing.startingPrice}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Pros */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {currentService.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        size={16}
                        className="text-green-500 mt-0.5 mr-2 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Considerations
                </h3>
                <ul className="space-y-2">
                  {currentService.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <Circle
                        size={16}
                        className="text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{con}</span>
                    </li>
                  ))}
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
                    if (currentStep < primaryServices.length - 1) {
                      setCurrentStep(currentStep + 1);
                      setSelectedAlternative(null);
                    }
                  }}
                  disabled={currentStep === primaryServices.length - 1}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Explore Alternatives
                      </h3>
                      <div className="grid gap-2">
                        {primaryServices[currentStep].alternatives
                          .filter((altId) => serviceMap[altId])
                          .map((altId) => {
                            const alt = serviceMap[altId];
                            return (
                              <button
                                key={alt.id}
                                onClick={() => handleAlternativeClick(alt.id)}
                                className="text-left p-3 rounded-lg border border-dashed border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="font-medium text-purple-700">
                                      {alt.name}
                                    </span>
                                    {/* <div className="text-xs text-purple-600 mt-1">
                                        {alt.privacyScore}/10 Privacy Score
                                      </div> */}
                                  </div>
                                  <ArrowRight
                                    size={14}
                                    className="text-purple-400"
                                  />
                                </div>
                              </button>
                            );
                          })}
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
                      ← Back to {primaryServices[currentStep].name}
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center">
              <Shield size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Start Your Privacy Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Click on any step to learn about privacy-focused alternatives to
                mainstream services.
              </p>

              <div className="text-sm text-gray-500">
                Progress: {completedSteps.length} of {primaryServices.length}{" "}
                steps completed
                {completedSteps.length > 0 && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            (completedSteps.length / primaryServices.length) *
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
  );
}
