import { Service } from '../types';

export const analyticsServices: Service[] = [
  // Primary
  {
    id: 'plausible-analytics',
    name: 'Plausible Analytics',
    category: 'analytics',
    isPrimary: true,
    website: 'https://plausible.io/',
    description:
      'Simple, privacy-friendly Google Analytics alternative. GDPR compliant without cookie banners, offering essential metrics with a lightweight script and EU data residency.',
    logo: '',
    facts: {
      compliance: '100% GDPR, CCPA, PECR compliant',
      cookies: 'No cookies - uses daily rotating hashes',
      scriptSize: '<1KB script (75x smaller than GA)',
      dataRetention: '5 years on Business plan',
      openSource: 'Yes, AGPL v3 license',
      hosting: 'EU data centers, self-hostable',
    },
    pricing: {
      free: false,
      startingPrice: 'Growth $9/month (10K views), Business $39/month (100K views)',
    },
    pros: [
      'No consent banners required',
      'Simple, focused metrics dashboard',
      'Lightweight script improves performance',
      'EU data residency by default',
    ],
    cons: [
      'Limited advanced features vs Google Analytics',
      'Self-hosting requires ClickHouse expertise',
      'No free cloud tier',
      'No user flow or behavior tracking',
    ],
    alternatives: ['umami-analytics', 'matomo-analytics'],
    difficulty: 'easy',
    setupTime: { minutes: 15, description: 'Simple script installation' },
    guides: {
      docs: 'https://plausible.io/docs',
      migrationGuide: 'https://plausible.io/docs/google-analytics-import',
      platforms: {
        windows: null,
        macos: null,
        linux: 'https://plausible.io/docs/self-hosting',
        ios: null,
        android: null,
      },
    },
  },

  // Alternatives
  {
    id: 'umami-analytics',
    name: 'Umami',
    category: 'analytics',
    website: 'https://umami.is/',
    description:
      'Open-source, privacy-focused analytics platform. Simple, fast, and privacy-compliant with no cookies and visitor anonymization by default.',
    logo: '',
    facts: {
      compliance: 'GDPR compliant by default',
      cookies: 'No cookies, anonymized tracking',
      scriptSize: 'Sub-2KB tracking script',
      database: 'PostgreSQL or MySQL required',
      openSource: 'Yes, MIT license',
      features: 'Real-time data, unlimited websites',
    },
    pricing: {
      free: true,
      startingPrice: 'Cloud hosting from $9/month (100K events)',
    },
    pros: [
      'Completely free when self-hosted',
      'MIT license allows commercial use',
      'Clean, modern interface',
      'Unlimited websites and users',
    ],
    cons: [
      'Requires technical knowledge to self-host',
      'Fewer features than Matomo',
      'Limited data export options',
      'No built-in A/B testing',
    ],
    alternatives: ['plausible-analytics', 'matomo-analytics'],
    difficulty: 'medium',
    setupTime: { hours: 1, description: 'Server setup and configuration' },
    guides: {
      docs: 'https://umami.is/docs',
      migrationGuide: 'https://umami.is/docs/migrate-from-universal-analytics',
      platforms: {
        windows: 'https://umami.is/docs/install',
        macos: 'https://umami.is/docs/install',
        linux: 'https://umami.is/docs/install',
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'matomo-analytics',
    name: 'Matomo',
    category: 'analytics',
    website: 'https://matomo.org/',
    description:
      'Most comprehensive open-source analytics platform. Full Google Analytics alternative with advanced features including heatmaps, session recordings, and A/B testing.',
    logo: '',
    facts: {
      compliance: 'GDPR compliant with privacy features',
      cookies: 'Optional cookieless tracking',
      features: 'Heatmaps, session recordings, A/B testing',
      database: 'MySQL required, PHP 8.0+',
      openSource: 'Yes, GPL v3 license',
      maturity: 'Since 2007 (formerly Piwik)',
    },
    pricing: {
      free: true,
      startingPrice: 'Cloud from €19/month (50K hits)',
    },
    pros: [
      'Most feature-complete GA alternative',
      'Extensive plugin ecosystem',
      '100% data ownership',
      'Mature platform with long track record',
    ],
    cons: [
      'Complex setup and maintenance',
      'Resource intensive (2GB RAM minimum)',
      'Steeper learning curve',
      'Premium features can be expensive',
    ],
    alternatives: ['plausible-analytics', 'umami-analytics'],
    difficulty: 'hard',
    setupTime: { hours: 2, description: 'Complex setup with many options' },
    guides: {
      docs: 'https://matomo.org/guide/',
      migrationGuide: 'https://matomo.org/guide/installation-maintenance/import-google-analytics/',
      platforms: {
        windows: 'https://matomo.org/faq/on-premise/installing-matomo-windows/',
        macos: null,
        linux: 'https://matomo.org/faq/on-premise/how-to-install-matomo/',
        ios: null,
        android: null,
      },
    },
  },
];
