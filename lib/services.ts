import {
  CategoryInfo, Service
} from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'email',
    name: 'Email',
    description: 'Email services and providers',
    icon: '📧',
    popularServices: ['proton-mail', 'mailbox-org', 'tuta'],
  },
  {
    id: 'search',
    name: 'Search Engines',
    description: 'Web search and discovery',
    icon: '🔍',
    popularServices: ['duckduckgo', 'startpage', 'searxng'],
  },
  {
    id: 'browser',
    name: 'Web Browsers',
    description: 'Internet browsers and web navigation',
    icon: '🌐',
    popularServices: [
      'tor-browser',
      'mullvad-browser',
      'firefox',
      'brave-browser',
    ],
  },
  {
    id: 'vpn',
    name: 'VPN Services',
    description: 'Virtual private networks and anonymity',
    icon: '🔒',
    popularServices: ['proton-vpn', 'ivpn', 'mullvad-vpn'],
  },
  {
    id: 'messaging',
    name: 'Messaging',
    description: 'Chat and communication platforms',
    icon: '💬',
    popularServices: ['signal', 'briar', 'session'],
  },
  {
    id: 'storage',
    name: 'Cloud Storage',
    description: 'File storage and synchronization',
    icon: '☁️',
    popularServices: ['proton-drive', 'tresorit', 'peergos'],
  },
  {
    id: 'social',
    name: 'Social Media',
    description: 'Social networking platforms',
    icon: '📱',
    popularServices: ['mastodon', 'diaspora', 'pixelfed'],
  },
  {
    id: 'video-call',
    name: 'Video Calls',
    description: 'Video conferencing and calls',
    icon: '📹',
    popularServices: ['jitsi-meet', 'signal-calls', 'briar-calls'],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'tor-browser',
    name: 'Tor Browser',
    category: 'browser',
    website: 'https://www.torproject.org',
    description:
      'The top choice for anonymous browsing with access to the Tor network and onion services',
    privacyScore: 10.0,
    facts: {
      anonymity:
        'Provides true anonymity through Tor network routing',
      jurisdiction: 'USA - Non-profit Tor Project',
      audits: 'Extensively audited by security researchers globally',
      trackingProtection:
        'Ultimate anti-fingerprinting and tracking protection',
      openSource: 'Fully open source under 3-clause BSD license',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'True anonymity through onion routing',
      'Access to .onion hidden services',
      'Ultimate anti-fingerprinting protection',
      'Effective censorship circumvention',
      'Backed by established non-profit',
    ],
    cons: [
      'Extensive data collection and behavioral profiling',
      'No end-to-end encryption - Google can read all emails',
      'Subject to US government surveillance and data requests',
      'Email content analyzed for advertising targeting purposes',
      'Privacy policies frequently change and are complex',
    ],
    alternatives: ['proton-mail', 'tuta', 'mailbox-org'],
  },
  {
    id: 'google-drive',
    name: 'Google Drive',
    category: 'storage',
    website: 'https://drive.google.com',
    description:
      'Google cloud storage with extensive data mining and content analysis',
    privacyScore: 4.1,
    facts: {
      encryption:
        'AES-256 server-side encryption with Google-controlled keys',
      jurisdiction:
        'USA - extensive government cooperation and surveillance',
      audits:
        'SOC/ISO certifications but significant privacy concerns',
      dataAccess:
        'Full content access for advertising, AI training, and analysis',
      businessModel:
        'Data mining and advertising constitute primary revenue source',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: '$1.99/month',
    },
    pros: [
      'Excellent integration with Google Workspace ecosystem',
      'Advanced collaboration and sharing features',
      'Large free storage capacity (15GB shared)',
      'Sophisticated search and organization capabilities',
      'Strong spam and malware protection systems',
    ],
    cons: [
      'Extensive content scanning for advertising and AI training',
      'No client-side encryption option available',
      'Data used for behavioral profiling across Google services',
      'Participant in PRISM government surveillance program',
      'Complex and frequently changing privacy controls',
    ],
    alternatives: ['proton-drive', 'tresorit', 'peergos'],
  },
  {
    id: 'chrome',
    name: 'Google Chrome',
    category: 'browser',
    website: 'https://www.google.com/chrome/',
    description:
      'Google browser with extensive data collection and ecosystem integration',
    privacyScore: 4.8,
    facts: {
      trackingProtection:
        'Privacy Sandbox replaces cookies with Topics API tracking',
      jurisdiction: 'USA - advertising-driven business model',
      audits:
        'SOC certifications but extensive privacy advocacy criticism',
      dataCollection:
        'Massive data collection for advertising personalization',
      businessModel:
        'Advertising revenue generated through comprehensive user data',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Fast performance and frequent security updates',
      'Largest browser extension ecosystem available',
      'Advanced developer tools and debugging features',
      'Strong malware and phishing protection',
      'Seamless integration with Google services',
    ],
    cons: [
      'Extensive data collection and user profiling',
      'Privacy Sandbox still enables sophisticated tracking',
      'Default settings heavily favor Google advertising business',
      'Trinity College study confirmed persistent tracking',
      'Complex privacy controls that frequently change',
    ],
    alternatives: ['brave-browser', 'firefox', 'safari'],
  },
];

export const PRIVACY_JOURNEY = [
  {
    id: 'tor-browser',
    title: 'Tor Browser',
    category: 'Anonymous Browsing',
    description:
      'The ultimate choice for anonymous browsing with access to the Tor network. Provides true anonymity and access to .onion hidden services.',
    whyImportant:
      'Your browser is your window to the internet. For true anonymity and protection from mass surveillance, nothing beats Tor.',
    privacyScore: 10.0,
    website: 'https://www.torproject.org',
    keyFeatures: [
      'True anonymity through Tor network routing',
      'Access to .onion hidden services',
      'Ultimate anti-fingerprinting protection',
      'Effective censorship circumvention',
    ],
    alternatives: [
      {
        id: 'mullvad-browser',
        title: 'Mullvad Browser',
        category: 'Alternative Browser',
        description:
          'Tor Browser without Tor network - provides anti-fingerprinting for VPN users.',
        whyImportant:
          'Gets you Tor Browser privacy protections with better speed when using a VPN.',
        privacyScore: 9.5,
        website: 'https://mullvad.net/browser',
        keyFeatures: [
          'Tor Browser anti-fingerprinting without Tor network',
          'uBlock Origin built-in',
          'Data erased on close',
          'Optimized for VPN usage',
        ],
      },
      {
        id: 'firefox',
        title: 'Firefox',
        category: 'Alternative Browser',
        description:
          'Open source browser with strong privacy features and extensive customization.',
        whyImportant:
          'Highly customizable with strong privacy features and open source transparency.',
        privacyScore: 8.5,
        website: 'https://www.mozilla.org/firefox',
        keyFeatures: [
          'Open source with strong community support',
          'Enhanced Tracking Protection',
          'Customizable with numerous privacy-focused extensions',
          'Regular security updates',
        ],
      },
    ],
  },
  {
    id: 'proton-vpn',
    title: 'Proton VPN',
    category: 'Secure VPN',
    description:
      'Swiss-based VPN with strong privacy protections, open source clients, and a free tier available.',
    whyImportant:
      'VPNs hide your internet traffic from ISPs and provide geographic privacy. Swiss jurisdiction offers strongest legal protections.',
    privacyScore: 9.0,
    website: 'https://protonvpn.com',
    keyFeatures: [
      'Swiss jurisdiction with strongest privacy laws',
      'Free tier available (limited servers)',
      'Fully open source clients',
      'No-logs policy verified by independent audits',
    ],
    alternatives: [
      {
        id: 'mullvad-vpn',
        title: 'Mullvad VPN',
        category: 'Alternative VPN',
        description:
          'Swedish VPN requiring no personal information. Maximum anonymity with cash payments.',
        whyImportant:
          'Ultimate anonymity - no email or personal information required for signup.',
        privacyScore: 8.8,
        website: 'https://mullvad.net',
        keyFeatures: [
          'No personal information required',
          'Cash and cryptocurrency payments',
          'Transparent server ownership',
          'Advanced anti-censorship features',
        ],
      },
    ],
  },
  {
    id: 'proton-mail',
    title: 'Proton Mail',
    category: 'Secure Email',
    description:
      'Swiss encrypted email with zero-access encryption. Even Proton cannot read your emails with proper OpenPGP integration.',
    whyImportant:
      'Your email is the gateway to your digital life. Zero-knowledge encryption means absolute privacy even from the provider.',
    privacyScore: 9.5,
    website: 'https://proton.me/mail',
    keyFeatures: [
      'Zero-knowledge end-to-end encryption',
      'Swiss jurisdiction with strongest privacy laws',
      'OpenPGP support for cross-provider encryption',
      'Proton Mail Bridge for desktop clients',
    ],
    alternatives: [
      {
        id: 'tuta',
        title: 'Tuta',
        category: 'Alternative Email',
        description:
          'German encrypted email with quantum-resistant features. Very affordable with zero-access encryption.',
        whyImportant:
          'First email provider with quantum-resistant encryption, preparing for future threats.',
        privacyScore: 9.0,
        website: 'https://tuta.com',
        keyFeatures: [
          'Quantum-resistant encryption',
          'Zero-access encryption for all data',
          'Anonymous signup available',
          'Very affordable pricing',
        ],
      },
    ],
  },
  {
    id: 'signal',
    title: 'Signal',
    category: 'Encrypted Messaging',
    description:
      'Gold standard for private messaging. Open source with minimal data collection and the strongest encryption available.',
    whyImportant:
      'Your private conversations should stay private. Signal provides the strongest encryption with minimal metadata collection.',
    privacyScore: 9.2,
    website: 'https://signal.org',
    keyFeatures: [
      'Signal Protocol encryption (industry gold standard)',
      'Open source and independently audited',
      'Minimal metadata collection',
      'Non-profit organization model',
    ],
    alternatives: [
      {
        id: 'briar',
        title: 'Briar',
        category: 'Alternative Messaging',
        description:
          'Decentralized messaging that works without internet. Peer-to-peer with no central servers.',
        whyImportant:
          'Works entirely peer-to-peer without any central servers or internet dependency.',
        privacyScore: 9.0,
        website: 'https://briarproject.org',
        keyFeatures: [
          'No central servers - fully decentralized',
          'Works via Bluetooth, WiFi, or Tor',
          'Completely anonymous messaging',
          'Censorship-resistant design',
        ],
      },
    ],
  },
  {
    id: 'proton-drive',
    title: 'Proton Drive',
    category: 'Encrypted Storage',
    description:
      'Swiss zero-knowledge cloud storage where files are encrypted before leaving your device. Even Proton cannot see them.',
    whyImportant:
      'Your files in the cloud should be as private as files on your computer. Zero-knowledge encryption ensures absolute privacy.',
    privacyScore: 9.2,
    website: 'https://proton.me/drive',
    keyFeatures: [
      'Client-side zero-knowledge encryption',
      'Swiss privacy law protections',
      'Free tier with expandable storage',
      'Integration with Proton ecosystem',
    ],
    alternatives: [
      {
        id: 'tresorit',
        title: 'Tresorit',
        category: 'Alternative Storage',
        description:
          'Enterprise-grade encrypted storage with Ernst & Young security auditing.',
        whyImportant:
          'Big-four audited security with enterprise-grade compliance and Swiss backing.',
        privacyScore: 8.7,
        website: 'https://tresorit.com',
        keyFeatures: [
          'Ernst & Young comprehensive audit',
          'Enterprise-grade compliance features',
          'Swiss Post ownership stability',
          'Zero-knowledge encryption verified',
        ],
      },
    ],
  },
  {
    id: 'mastodon',
    title: 'Mastodon',
    category: 'Decentralized Social Media',
    description:
      'Open source, decentralized social network. No central authority can control your account or data.',
    whyImportant:
      'Social media should be controlled by users, not corporations. Decentralization prevents censorship and surveillance.',
    privacyScore: 8.1,
    website: 'https://joinmastodon.org',
    keyFeatures: [
      'Decentralized federation prevents corporate control',
      'No advertising or behavioral profiling',
      'Choose your instance and jurisdiction',
      'Open source and community-controlled',
    ],
    alternatives: [
      {
        id: 'diaspora',
        title: 'Diaspora',
        category: 'Alternative Social Network',
        description:
          'Decentralized social network with strong privacy focus and user control.',
        whyImportant:
          'Pioneer in decentralized social networking with strong privacy principles.',
        privacyScore: 7.8,
        website: 'https://diasporafoundation.org',
        keyFeatures: [
          'Complete user data ownership',
          'No central authority or corporate control',
          'Strong privacy and encryption features',
          'Self-hosting options available',
        ],
      },
    ],
  },
];

export { SERVICES as defaultServices, CATEGORIES as serviceCategories };

