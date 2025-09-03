'use client';

import {
  ArrowRight,
  CheckCircle,
  Circle,
  ExternalLink,
  Shield,
} from 'lucide-react';
import { useState } from 'react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useEffect } from 'react';
import { SERVICES } from '@/lib/services';
interface JourneyStep {
  id: string;
  title: string;
  category: string;
  description: string;
  whyImportant: string;
  privacyScore: number;
  website: string;
  keyFeatures: string[];
  alternatives?: JourneyStep[];
}

// const PRIVACY_JOURNEY: JourneyStep[] = [
//   {
//     id: 'brave',
//     title: 'Brave Browser',
//     category: 'Private Browsing',
//     description:
//       'Browser that blocks ads and trackers by default. Built-in privacy protection without need for extensions.',
//     whyImportant:
//       'Your browser is your window to the internet. Most privacy violations happen through web tracking.',
//     privacyScore: 9.2,
//     website: 'https://brave.com',
//     keyFeatures: [
//       'Blocks ads and trackers by default',
//       'Tor integration for anonymity',
//       'Ranked #1 for privacy by Trinity College',
//       'Optional private ads with rewards',
//     ],
//     alternatives: [
//       {
//         id: 'firefox',
//         title: 'Mozilla Firefox',
//         category: 'Alternative Browser',
//         description:
//           'Open source browser by non-profit Mozilla with Enhanced Tracking Protection.',
//         whyImportant:
//           'Fully open source and backed by privacy-focused non-profit organization.',
//         privacyScore: 8.1,
//         website: 'https://firefox.com',
//         keyFeatures: [
//           'Enhanced Tracking Protection',
//           'Fully open source',
//           'Non-profit Mozilla Foundation',
//           'Total Cookie Protection',
//         ],
//       },
//     ],
//   },
//   {
//     id: 'duckduckgo',
//     title: 'DuckDuckGo',
//     category: 'Private Search',
//     description:
//       "Search engine that doesn't track you or create user profiles. Get unbiased results without filter bubbles.",
//     whyImportant:
//       'Your searches reveal your thoughts, interests, and intentions. Private search prevents profiling and manipulation.',
//     privacyScore: 8.2,
//     website: 'https://duckduckgo.com',
//     keyFeatures: [
//       'No tracking or user profiling',
//       'Unbiased search results',
//       'Built-in tracker blocking',
//       'Instant answers without clicking',
//     ],
//     alternatives: [
//       {
//         id: 'startpage',
//         title: 'Startpage',
//         category: 'Alternative Search',
//         description:
//           'Get Google results without Google tracking. Acts as an anonymous proxy.',
//         whyImportant:
//           "Best of both worlds - Google's search quality with privacy protection.",
//         privacyScore: 7.8,
//         website: 'https://startpage.com',
//         keyFeatures: [
//           'Google results without tracking',
//           'EU jurisdiction (Netherlands)',
//           'Anonymous View feature',
//           'No search history storage',
//         ],
//       },
//     ],
//   },
//   {
//     id: 'protonmail',
//     title: 'ProtonMail',
//     category: 'Secure Email',
//     description:
//       'End-to-end encrypted email service based in Switzerland. Zero-knowledge architecture means even ProtonMail cannot read your emails.',
//     whyImportant:
//       'Your email is the gateway to your entire digital life. Most services use email for password resets and verification.',
//     privacyScore: 9.5,
//     website: 'https://protonmail.com',
//     keyFeatures: [
//       'Zero-knowledge end-to-end encryption',
//       'Swiss jurisdiction with strongest privacy laws',
//       'Open source clients for transparency',
//       'No email scanning for ads',
//     ],
//     alternatives: [
//       {
//         id: 'tutanota',
//         title: 'Tutanota',
//         category: 'Alternative Email',
//         description:
//           'German-based encrypted email with quantum-resistant cryptography. Very affordable and privacy-focused.',
//         whyImportant:
//           'First email provider with quantum-resistant encryption features.',
//         privacyScore: 9.0,
//         website: 'https://tutanota.com',
//         keyFeatures: [
//           'Quantum-resistant encryption',
//           'EU jurisdiction (Germany)',
//           'Anonymous signup available',
//           'Very affordable pricing',
//         ],
//       },
//     ],
//   },
//   {
//     id: 'signal',
//     title: 'Signal',
//     category: 'Encrypted Messaging',
//     description:
//       'Gold standard for private messaging. Open source with minimal data collection and the strongest encryption.',
//     whyImportant:
//       'Your private conversations should stay private. Most messaging apps scan your messages.',
//     privacyScore: 9.2,
//     website: 'https://signal.org',
//     keyFeatures: [
//       'Signal Protocol encryption (industry gold standard)',
//       'Open source and independently audited',
//       'Minimal data collection',
//       'Non-profit organization',
//     ],
//     alternatives: [
//       {
//         id: 'threema',
//         title: 'Threema',
//         category: 'Alternative Messaging',
//         description:
//           "Swiss messaging app that doesn't require phone number. Maximum anonymity.",
//         whyImportant:
//           'Anonymous messaging without phone number requirement.',
//         privacyScore: 8.5,
//         website: 'https://threema.ch',
//         keyFeatures: [
//           'No phone number required',
//           'Swiss jurisdiction',
//           'Anonymous ID system',
//           'End-to-end encryption',
//         ],
//       },
//     ],
//   },
//   {
//     id: 'protonvpn',
//     title: 'ProtonVPN',
//     category: 'Secure VPN',
//     description:
//       'Swiss-based VPN with proven no-logs policy and open source apps. Court-tested privacy protection.',
//     whyImportant:
//       'VPNs hide your internet traffic from ISPs and governments. Essential for true online privacy.',
//     privacyScore: 9.0,
//     website: 'https://protonvpn.com',
//     keyFeatures: [
//       'Swiss privacy laws protection',
//       'Proven no-logs in court cases',
//       'Fully open source applications',
//       'Secure Core routing',
//     ],
//     alternatives: [
//       {
//         id: 'mullvad',
//         title: 'Mullvad VPN',
//         category: 'Alternative VPN',
//         description:
//           'Swedish VPN with ultimate anonymity. No email required, cash payments accepted.',
//         whyImportant:
//           'Maximum anonymity - proven in police raids to have no user data.',
//         privacyScore: 8.8,
//         website: 'https://mullvad.net',
//         keyFeatures: [
//           'No personal info required',
//           'Cash payments accepted',
//           'Proven in police raids',
//           'Open source applications',
//         ],
//       },
//     ],
//   },
//   {
//     id: 'protondrive',
//     title: 'ProtonDrive',
//     category: 'Encrypted Storage',
//     description:
//       "Zero-knowledge cloud storage where your files are encrypted before leaving your device. Even Proton can't see them.",
//     whyImportant:
//       'Your files in the cloud should be as private as files on your computer. Most providers can access everything.',
//     privacyScore: 9.2,
//     website: 'https://proton.me/drive',
//     keyFeatures: [
//       'Zero-knowledge encryption',
//       'Swiss privacy protections',
//       'Open source applications',
//       'No content scanning possible',
//     ],
//     alternatives: [
//       {
//         id: 'tresorit',
//         title: 'Tresorit',
//         category: 'Alternative Storage',
//         description:
//           'Enterprise-focused encrypted storage with rigorous security audits.',
//         whyImportant:
//           'Ernst & Young audited security with proven zero-knowledge architecture.',
//         privacyScore: 8.7,
//         website: 'https://tresorit.com',
//         keyFeatures: [
//           'Ernst & Young security audit',
//           'Enterprise-grade compliance',
//           'Swiss Post backing',
//           'Zero-knowledge encryption',
//         ],
//       },
//     ],
//   },
//   {
//     id: 'signal',
//     title: 'Signal',
//     category: 'Encrypted Messaging',
//     description:
//       'Gold standard for private messaging. Open source with minimal data collection and the strongest encryption.',
//     whyImportant:
//       'Your private conversations should stay private. Most messaging apps scan your messages.',
//     privacyScore: 9.2,
//     website: 'https://signal.org',
//     keyFeatures: [
//       'Signal Protocol encryption (industry gold standard)',
//       'Open source and independently audited',
//       'Minimal data collection',
//       'Non-profit organization',
//     ],
//     alternatives: [
//       {
//         id: 'threema',
//         title: 'Threema',
//         category: 'Alternative Messaging',
//         description:
//           "Swiss messaging app that doesn't require phone number. Maximum anonymity.",
//         whyImportant:
//           'Anonymous messaging without phone number requirement.',
//         privacyScore: 8.5,
//         website: 'https://threema.ch',
//         keyFeatures: [
//           'No phone number required',
//           'Swiss jurisdiction',
//           'Anonymous ID system',
//           'End-to-end encryption',
//         ],
//       },
//     ],
//   },
// ];

export default function PrivacyJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedAlternative, setSelectedAlternative] = useState<
    string | null
  >(null);

  useEffect(() => {
    const stored = localStorage.getItem('completedSteps');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCompletedSteps(parsed);
        }
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'completedSteps',
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

  const handleAlternativeClick = (altId: string) => {
    setSelectedAlternative(
      selectedAlternative === altId ? null : altId
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <Alert variant="destructive" className="mb-6">
            <AlertDescription style={{ fontWeight: 'bold' }}>
              The EU is considering legislation that could impact the
              use of encrypted messaging apps like Signal and
              ProtonMail. Stay informed and consider alternatives if
              necessary. Learn more at https://fightchatcontrol.eu/.
            </AlertDescription>
          </Alert>
        </header>

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
                            onClick={() =>
                              handleAlternativeClick(alt.id)
                            }
                            className={`text-left block w-full p-2 rounded-lg text-sm transition-all duration-300 border-2 border-dashed ${
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
                                <div className="text-xs text-gray-500 mt-1">
                                  {alt.privacyScore}/10 Privacy Score
                                </div>
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
                    </p>
                  </div>
                  <div className="text-right">
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
                  </div>
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

                <div className="flex gap-3">
                  <a
                    href={currentService.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Visit Website
                    <ExternalLink size={14} />
                  </a>

                  <button
                    onClick={markStepComplete}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    Done, Next Step →
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
                                  <div className="text-xs text-purple-600 mt-1">
                                    {alt.privacyScore}/10 Privacy
                                    Score
                                  </div>
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
                <p className="text-gray-600">
                  Click on any step to learn about privacy-focused
                  alternatives to mainstream services.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
