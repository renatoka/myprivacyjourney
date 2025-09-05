import { Service } from '../types';

export const calendarServices: Service[] = [
  // Primary
  {
    id: 'proton-calendar',
    name: 'Proton Calendar',
    category: 'calendar',
    isPrimary: true,
    website: 'https://proton.me/calendar/',
    description:
      'Encrypted calendar service for Proton members with automatic end-to-end encryption, sharing features, and import/export functionality, integrated with the comprehensive Proton ecosystem.',
    logo: '',
    facts: {
      encryption: 'End-to-end with elliptic curve cryptography (ECC Curve25519)',
      openSource: 'Web client only (mobile apps proprietary as of Aug 2024)',
      synchronization: 'Real-time sync across Proton ecosystem',
      integration: 'Deep integration with Proton Mail and ecosystem',
      jurisdiction: 'Switzerland (Swiss privacy laws)',
    },
    pricing: {
      free: true,
      startingPrice: 'Mail Plus €4.99/month, Unlimited €9.99/month',
    },
    pros: [
      'Based in Switzerland (excellent privacy jurisdiction)',
      'Strong elliptic curve cryptography',
      'Web client is open source and audited',
      'Integrated with comprehensive privacy ecosystem',
    ],
    cons: [
      'Mobile apps not open source (as of August 2024)',
      'Only Android app has been audited',
      'Extended sharing limited to paid subscribers',
    ],
    alternatives: ['tuta-calendar'],
  },

  // Alternative
  {
    id: 'tuta-calendar',
    name: 'Tuta Calendar',
    category: 'calendar',
    website: 'https://tuta.com/calendar/',
    description:
      'Free encrypted calendar with automatic end-to-end encryption using post-quantum cryptography, seamlessly integrated with Tuta Mail and offering strong German privacy protections.',
    logo: '',
    facts: {
      encryption: 'Post-quantum cryptography (TutaCrypt protocol as of March 2024)',
      integration: 'Seamlessly integrated with Tuta Mail',
      jurisdiction: 'Germany (GDPR compliant)',
      metadata: 'Encrypts subject lines and metadata',
      audits: 'Fully audited and open source',
    },
    pricing: {
      free: true,
      startingPrice: 'Revolutionary €3/month, Legend €8/month',
    },
    pros: [
      'Post-quantum encryption (future-proof security)',
      'Based in Germany (strong EU privacy laws)',
      'Encrypts subject lines and metadata',
      'Completely open source and audited',
    ],
    cons: [
      'Calendar sharing limited to other Tuta users',
      'Blocked in some countries (Egypt, Russia)',
      'Smaller ecosystem compared to major providers',
    ],
    alternatives: ['proton-calendar'],
  },
];
