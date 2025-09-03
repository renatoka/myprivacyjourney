import {
  Service,
  ServiceCategory,
  ComplianceLevel,
  BusinessModel,
  ServiceDatabase,
  CategoryInfo,
  ComparisonPair,
  ServiceFilters,
  SearchOptions,
  CategoryStats,
  ServiceLookup,
} from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'email',
    name: 'Email',
    description: 'Email services and providers',
    icon: '📧',
    popularServices: ['gmail', 'proton-mail', 'outlook'],
  },
  {
    id: 'search',
    name: 'Search Engines',
    description: 'Web search and discovery',
    icon: '🔍',
    popularServices: ['google-search', 'ecosia', 'duckduckgo'],
  },
  {
    id: 'browser',
    name: 'Web Browsers',
    description: 'Internet browsers and web navigation',
    icon: '🌐',
    popularServices: ['chrome', 'firefox', 'safari'],
  },
  {
    id: 'vpn',
    name: 'VPN Services',
    description: 'Virtual private networks and anonymity',
    icon: '🔒',
    popularServices: ['nordvpn', 'protonvpn', 'mullvad'],
  },
  {
    id: 'messaging',
    name: 'Messaging',
    description: 'Chat and communication platforms',
    icon: '💬',
    popularServices: ['whatsapp', 'signal', 'telegram'],
  },
  {
    id: 'storage',
    name: 'Cloud Storage',
    description: 'File storage and synchronization',
    icon: '☁️',
    popularServices: ['google-drive', 'tresorit', 'proton-drive'],
  },
  {
    id: 'social',
    name: 'Social Media',
    description: 'Social networking platforms',
    icon: '📱',
    popularServices: ['twitter', 'mastodon', 'linkedin'],
  },
  {
    id: 'video-call',
    name: 'Video Calls',
    description: 'Video conferencing and calls',
    icon: '📹',
    popularServices: ['zoom', 'jitsi', 'teams'],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'protonmail',
    name: 'ProtonMail',
    category: 'email',
    website: 'https://protonmail.com',
    description:
      'End-to-end encrypted email service based in Switzerland with zero-knowledge architecture',
    privacyScore: 9.5,
    facts: {
      encryption:
        'Zero-knowledge end-to-end encryption using OpenPGP',
      jurisdiction: 'Switzerland - strongest privacy laws globally',
      audits:
        'Multiple independent security audits by Securitum and Cure53',
      dataCollection: 'No email content access even by ProtonMail',
      openSource: 'Client applications are open source',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: '$4/month',
    },
    pros: [
      'Zero-knowledge architecture prevents any data access',
      'Swiss jurisdiction with strong legal protections',
      'Subject line encryption (unique feature)',
      'Extensive independent security audits',
      'Open source clients for transparency',
    ],
    cons: [
      'Limited integration with third-party email clients',
      'More expensive than traditional email services',
      'Smaller feature set compared to mainstream providers',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'signal',
    name: 'Signal',
    category: 'messaging',
    website: 'https://signal.org',
    description:
      'Open source encrypted messaging app with minimal data collection',
    privacyScore: 9.2,
    facts: {
      encryption: 'Signal Protocol with perfect forward secrecy',
      jurisdiction: 'USA (non-profit foundation)',
      audits:
        'Multiple academic audits including Oxford/QUT/McMaster',
      dataCollection: 'Minimal metadata collection',
      openSource: 'Fully open source applications and protocol',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Gold standard Signal Protocol encryption',
      'Minimal data collection and retention',
      'Fully open source for transparency',
      'Non-profit operation independent of surveillance capitalism',
      'Extensive academic security validation',
    ],
    cons: [
      'Requires phone number for registration',
      'Limited feature set compared to mainstream messaging apps',
      'Smaller user base than competitors',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'brave-browser',
    name: 'Brave',
    category: 'browser',
    website: 'https://brave.com',
    description:
      'Privacy-focused browser with built-in ad blocking and tracker prevention',
    privacyScore: 9.2,
    facts: {
      trackingProtection:
        'Advanced Shields block ads, trackers, and fingerprinting',
      jurisdiction: 'USA with strong privacy policies',
      audits: 'Trinity College Dublin ranked #1 for privacy',
      dataCollection: 'Minimal data collection for security only',
      openSource: 'Open source under Mozilla Public License',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Strongest default privacy protections',
      'Built-in ad and tracker blocking',
      'Optional privacy-respecting ads with BAT rewards',
      'Tor integration for anonymous browsing',
      'Consistently rated #1 in privacy studies',
    ],
    cons: [
      'Smaller extension ecosystem than Chrome',
      'Some websites may not work properly with strict privacy settings',
      'Cryptocurrency integration may not appeal to all users',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    category: 'vpn',
    website: 'https://expressvpn.com',
    description:
      'Premium VPN service with extensive security audits and proven no-logs policy',
    privacyScore: 9.1,
    facts: {
      noLogsVerified:
        'Three separate KPMG audits verify no-logs policy',
      jurisdiction: 'British Virgin Islands - no data retention laws',
      audits: '23+ published security audits - most in industry',
      infrastructure: 'TrustedServer RAM-only architecture',
      realWorldProof:
        '2017 Turkish server seizure yielded no user data',
    },
    euCompliance: 'compliant',
    pricing: {
      free: false,
      startingPrice: '$8.32/month',
    },
    pros: [
      'Most audited VPN provider with 23+ security audits',
      'Proven no-logs policy through real-world server seizures',
      'TrustedServer RAM-only infrastructure',
      'Strong British Virgin Islands jurisdiction',
      'Biannual transparency reports',
    ],
    cons: [
      'Premium pricing compared to competitors',
      'Not open source',
      'Limited cryptocurrency payment options',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'protondrive',
    name: 'ProtonDrive',
    category: 'storage',
    website: 'https://proton.me/drive',
    description:
      'Zero-knowledge encrypted cloud storage with client-side encryption',
    privacyScore: 9.2,
    facts: {
      encryption:
        'Client-side end-to-end encryption with zero-knowledge',
      jurisdiction: 'Switzerland with strongest privacy protections',
      audits: 'Regular security audits by Securitum',
      dataAccess:
        'Proton cannot access user files even under legal compulsion',
      openSource: 'Open source applications for transparency',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: '$4/month',
    },
    pros: [
      'True zero-knowledge encryption architecture',
      'Swiss jurisdiction with strong legal protections',
      'Open source code for transparency',
      'No content scanning possible',
      'HIPAA, GDPR, CCPA compliant without compromising encryption',
    ],
    cons: [
      'Limited collaboration features',
      'Smaller storage capacity in free tier',
      'Newer service with smaller user base',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    category: 'search',
    website: 'https://duckduckgo.com',
    description:
      'Privacy-focused search engine with no user tracking or profiling',
    privacyScore: 8.2,
    facts: {
      dataCollection:
        'No IP address storage or search history tracking',
      jurisdiction: 'USA with strong privacy policies',
      audits:
        'Academic study found significantly better privacy than competitors',
      businessModel: 'Contextual advertising without user profiling',
      tracking: 'Strong anti-tracking measures across web',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'No user profiling or search history storage',
      'Strong anti-tracking measures',
      'Contextual ads without personal data',
      'Consistently recommended by privacy experts',
      'Additional privacy tools and browser extensions',
    ],
    cons: [
      'US jurisdiction raises some privacy concerns',
      '2022 Microsoft tracker controversy (resolved)',
      'Search results less personalized than competitors',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'mastodon',
    name: 'Mastodon',
    category: 'social',
    website: 'https://joinmastodon.org',
    description:
      'Decentralized open source social network with user-controlled instances',
    privacyScore: 8.1,
    facts: {
      architecture:
        'Decentralized federation prevents single point of control',
      jurisdiction:
        'Varies by instance - enables jurisdiction shopping',
      dataCollection:
        'Minimal collection, no behavioral profiling for advertising',
      openSource: 'Fully open source under AGPL license',
      businessModel:
        'No advertising - funded through donations and hosting',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Decentralized architecture prevents corporate control',
      'No advertising or behavioral profiling',
      'Fully open source and auditable',
      'Instance selection allows jurisdiction choice',
      'Strong user control over content and privacy',
    ],
    cons: [
      'Smaller user base than mainstream platforms',
      'Learning curve for federation concepts',
      'Instance admin has access to user data on their server',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'facetime',
    name: 'FaceTime',
    category: 'video-call',
    website: 'https://www.apple.com/facetime/',
    description:
      'End-to-end encrypted video calling service by Apple',
    privacyScore: 8.7,
    facts: {
      encryption: 'True end-to-end encryption with AES-256',
      jurisdiction: 'USA but privacy-focused business model',
      dataStorage: 'No call content stored by Apple',
      audits: 'EFF ranked as best mass-market video calling option',
      businessModel:
        'Hardware sales - not dependent on data collection',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'True end-to-end encryption for all calls',
      'No call content stored by Apple',
      'Privacy-focused business model not dependent on ads',
      'Simple consumer interface',
      'Deep device security integration',
    ],
    cons: [
      'Limited to Apple ecosystem only',
      'No enterprise features or admin controls',
      'No HIPAA compliance available',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'gmail',
    name: 'Gmail',
    category: 'email',
    website: 'https://gmail.com',
    description:
      "Google's email service with extensive features and Google ecosystem integration",
    privacyScore: 4.0,
    facts: {
      dataCollection:
        'Extensive data collection for advertising and profiling',
      jurisdiction: 'USA - member of Five Eyes alliance',
      encryption: 'TLS in transit, AES at rest - Google holds keys',
      audits: 'SOC/ISO certifications but limited privacy audits',
      businessModel: 'Advertising-based - users are the product',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: '$6/month',
    },
    pros: [
      'Excellent spam filtering and security features',
      'Large storage capacity and reliable service',
      'Strong integration with Google ecosystem',
      'Advanced search capabilities',
      'Good mobile and desktop applications',
    ],
    cons: [
      'Extensive data collection and profiling',
      'No end-to-end encryption - Google can read emails',
      'Subject to US government surveillance requests',
      'Privacy policies complex and frequently changing',
      'Email content used for advertising targeting',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'tutanota',
    name: 'Tutanota',
    category: 'email',
    website: 'https://tutanota.com',
    description:
      'German-based encrypted email service with quantum-resistant cryptography',
    privacyScore: 9.0,
    facts: {
      encryption:
        'End-to-end encryption with quantum-resistant features',
      jurisdiction: 'Germany - strong EU privacy protections',
      audits: 'Regular security reviews and penetration testing',
      dataCollection:
        'Zero-knowledge architecture with minimal collection',
      openSource: 'Client applications open source under GPLv3',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: '$1/month',
    },
    pros: [
      'First provider with quantum-resistant cryptography',
      'Strong EU jurisdiction and GDPR compliance',
      'Open source clients for transparency',
      'Very affordable pricing',
      'Anonymous signup without personal information',
    ],
    cons: [
      'Proprietary encryption protocol (not PGP)',
      'No IMAP/POP3 support to maintain encryption',
      'German legal challenges regarding monitoring capabilities',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'fastmail',
    name: 'FastMail',
    category: 'email',
    website: 'https://fastmail.com',
    description:
      'Privacy-focused email service with strong user data ownership principles',
    privacyScore: 7.0,
    facts: {
      dataCollection:
        'Minimal data collection for service operation only',
      jurisdiction: 'Australia - member of Five Eyes alliance',
      encryption: 'TLS/AES encryption - FastMail holds keys',
      audits: 'SSL Labs A+ rating, bug bounty program',
      businessModel: 'Subscription-based without advertising',
    },
    euCompliance: 'compliant',
    pricing: {
      free: false,
      startingPrice: '$3/month',
    },
    pros: [
      'Strong user data ownership principles',
      'No email scanning for advertising',
      'Excellent spam filtering and reliability',
      'Good calendar and contact management',
      'Masked email feature for privacy',
    ],
    cons: [
      'No end-to-end encryption offered',
      'Australia Five Eyes jurisdiction concerns',
      'Servers located in United States',
      'Not open source',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'outlook',
    name: 'Microsoft Outlook',
    category: 'email',
    website: 'https://outlook.com',
    description:
      "Microsoft's email service with enterprise features and Office integration",
    privacyScore: 5.5,
    facts: {
      dataCollection: 'Telemetry and cross-service data integration',
      jurisdiction: 'USA with some EU data centers',
      encryption: 'TLS in transit, BitLocker at rest',
      audits: 'SOC 2, ISO certifications, FedRAMP authorized',
      businessModel: 'Subscription-based for most users',
    },
    euCompliance: 'concerning',
    pricing: {
      free: true,
      startingPrice: '$6/month',
    },
    pros: [
      'Strong enterprise security and compliance features',
      'Excellent Office ecosystem integration',
      'Advanced threat protection available',
      'Good collaboration tools',
      'Enterprise-level admin controls',
    ],
    cons: [
      'German regulators found GDPR compliance issues',
      'Employee surveillance capabilities in enterprise versions',
      'No end-to-end encryption available',
      'Telemetry and diagnostic data collection',
      'Subject to US government data requests',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'google-search',
    name: 'Google Search',
    category: 'search',
    website: 'https://www.google.com',
    description:
      'Dominant search engine with extensive personalization and data collection',
    privacyScore: 3.8,
    facts: {
      dataCollection:
        'Massive data collection across all Google services',
      jurisdiction: 'USA - extensive government cooperation',
      audits: 'SOC certifications but extensive EFF criticism',
      businessModel: 'Advertising-driven surveillance capitalism',
      tracking: 'Extensive cross-platform tracking and profiling',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Comprehensive search results and accuracy',
      'Advanced search features and operators',
      'Fast and reliable service',
      'Integrated with many other services',
      'Good spam and malware protection',
    ],
    cons: [
      'Massive surveillance and data collection',
      'Search history tied to user profiles',
      'Extensive personalization and manipulation',
      'Subject to government surveillance requests',
      'Privacy controls complex and frequently changing',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'ecosia',
    name: 'Ecosia',
    category: 'search',
    website: 'https://www.ecosia.org',
    description:
      'Environmental search engine that uses profits to plant trees',
    privacyScore: 6.8,
    facts: {
      dataCollection:
        'Collects search data, shares with Microsoft and Google',
      jurisdiction: 'Germany - strong EU privacy protections',
      audits: 'B Corporation certified, limited privacy audits',
      businessModel: 'Ad revenue sharing for tree planting',
      tracking:
        'Partners with Microsoft/Google creates tracking exposure',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Environmental mission - profits fund tree planting',
      'Strong EU jurisdiction and GDPR compliance',
      'B Corporation certification for social responsibility',
      'Transparent financial reporting',
      'Data anonymized after 7 days',
    ],
    cons: [
      'Data sharing with Microsoft Bing and Google',
      'Limited privacy protections due to partner dependencies',
      'Environmental benefits come at privacy cost',
      'Not open source',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'bing',
    name: 'Microsoft Bing',
    category: 'search',
    website: 'https://www.bing.com',
    description:
      "Microsoft's search engine with Office and Windows integration",
    privacyScore: 5.2,
    facts: {
      dataCollection:
        'Extensive data collection for advertising and personalization',
      jurisdiction: 'USA with some EU compliance measures',
      audits: 'SOC certifications, limited privacy audits',
      businessModel:
        'Advertising-driven with Microsoft ecosystem integration',
      tracking: 'Cross-platform tracking within Microsoft services',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Good integration with Microsoft ecosystem',
      'Rewards program for search usage',
      'Less data collection than Google',
      'Strong enterprise security features',
      'GDPR compliance tools for EU users',
    ],
    cons: [
      'Extensive data collection for personalization',
      '6-month IP address retention policy',
      'US jurisdiction with government data sharing',
      'Limited privacy controls',
      'Cross-service data integration with Office/Windows',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'startpage',
    name: 'Startpage',
    category: 'search',
    website: 'https://www.startpage.com',
    description:
      'Privacy-focused search engine serving Google results without tracking',
    privacyScore: 7.8,
    facts: {
      dataCollection: 'Acts as anonymous proxy for Google searches',
      jurisdiction: 'Netherlands - strong EU privacy protections',
      audits: 'Limited formal audits available',
      businessModel: 'Contextual advertising without user profiling',
      tracking: 'Anonymous View proxy feature blocks trackers',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Google results without Google tracking',
      'Strong EU jurisdiction with GDPR protections',
      'Anonymous View proxy feature',
      'No search history storage',
      'Contextual ads without profiling',
    ],
    cons: [
      '2019 acquisition by System1 raised privacy concerns',
      'Not open source',
      'Limited independent auditing',
      'Some features require enabling tracking',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'firefox',
    name: 'Mozilla Firefox',
    category: 'browser',
    website: 'https://www.firefox.com',
    description:
      'Open source browser with enhanced tracking protection and privacy features',
    privacyScore: 8.1,
    facts: {
      trackingProtection:
        'Enhanced Tracking Protection blocks trackers by default',
      jurisdiction: 'USA - non-profit Mozilla Foundation',
      audits: 'Extensive open source review and Mozilla research',
      dataCollection: 'Optional telemetry - can be fully disabled',
      openSource: 'Fully open source under Mozilla Public License',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Strong Enhanced Tracking Protection by default',
      'Fully open source for transparency',
      'Non-profit organization focused on user rights',
      'Total Cookie Protection prevents cross-site tracking',
      'Extensive privacy research published by Mozilla',
    ],
    cons: [
      'Some telemetry collection by default',
      'Smaller extension ecosystem than Chrome',
      'Revenue dependence on Google search partnership',
      'Less market share means some sites optimize for other browsers',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'safari',
    name: 'Safari',
    category: 'browser',
    website: 'https://www.apple.com/safari/',
    description:
      "Apple's browser with Intelligent Tracking Prevention and privacy features",
    privacyScore: 7.5,
    facts: {
      trackingProtection:
        'Intelligent Tracking Prevention blocks cross-site tracking',
      jurisdiction: 'USA - privacy-focused business model',
      audits: 'Trinity College study found persistent identifiers',
      dataCollection:
        'Some data sharing with Apple and third parties',
      businessModel: 'Hardware sales - not advertising dependent',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Strong Intelligent Tracking Prevention',
      'Good fingerprinting defense',
      'Privacy Report shows blocked trackers',
      'Hardware-focused business model',
      'Regular WebKit security updates',
    ],
    cons: [
      'Closed source - limited auditability',
      'Default integrations with social media platforms',
      'Some privacy features require manual activation',
      'Trinity College study found data sharing concerns',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'chrome',
    name: 'Google Chrome',
    category: 'browser',
    website: 'https://www.google.com/chrome/',
    description:
      "Google's browser with extensive features and Google ecosystem integration",
    privacyScore: 4.8,
    facts: {
      trackingProtection:
        'Privacy Sandbox replaces third-party cookies with Topics API',
      jurisdiction: 'USA - advertising-driven business model',
      audits: 'SOC certifications but extensive privacy criticism',
      dataCollection:
        'Extensive data collection for advertising purposes',
      businessModel: 'Advertising revenue through user data',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Fast performance and regular updates',
      'Extensive extension ecosystem',
      'Good security features and malware protection',
      'Excellent developer tools',
      'Strong integration with Google services',
    ],
    cons: [
      'Extensive data collection and profiling',
      'Privacy Sandbox still enables tracking',
      "Default settings favor Google's advertising business",
      'Trinity College study found persistent tracking',
      'Complex privacy controls',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'edge',
    name: 'Microsoft Edge',
    category: 'browser',
    website: 'https://www.microsoft.com/edge',
    description:
      "Microsoft's browser with security features and Windows integration",
    privacyScore: 3.9,
    facts: {
      trackingProtection:
        'Three levels of tracking prevention available',
      jurisdiction: 'USA with enterprise focus',
      audits: 'Trinity College ranked worst for privacy',
      dataCollection: 'Sends hardware UUID and extensive telemetry',
      businessModel: 'Enterprise services and Microsoft ecosystem',
    },
    euCompliance: 'concerning',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Good enterprise security features',
      'Microsoft Defender integration',
      'Enhanced Security Mode available',
      'Strong performance on Windows',
      'Application Guard for untrusted sites',
    ],
    cons: [
      'Sends persistent hardware identifiers to Microsoft',
      'Trinity College study found worst privacy practices',
      'Extensive Microsoft ecosystem data integration',
      'Poor default privacy settings',
      'Limited transparency in data practices',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'protonvpn',
    name: 'ProtonVPN',
    category: 'vpn',
    website: 'https://protonvpn.com',
    description:
      'Swiss-based VPN service with strong legal protections and open source clients',
    privacyScore: 9.0,
    facts: {
      noLogsVerified:
        'Three consecutive annual no-logs audits by Securitum',
      jurisdiction: 'Switzerland - strongest privacy laws globally',
      audits: 'Regular comprehensive security audits',
      openSource: 'First VPN to be fully open source',
      courtTested: '2019 Swiss court case confirmed no logs existed',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: '$4.99/month',
    },
    pros: [
      'Swiss jurisdiction with strongest privacy laws',
      'Fully open source for transparency',
      'Proven no-logs policy in court',
      'Secure Core routing through owned servers',
      'Strong academic and security community backing',
    ],
    cons: [
      'Requires email for account creation',
      'Smaller server network than some competitors',
      'Free tier has limited server access',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'nordvpn',
    name: 'NordVPN',
    category: 'vpn',
    website: 'https://nordvpn.com',
    description:
      'Popular VPN service with extensive audit history and no-logs verification',
    privacyScore: 8.7,
    facts: {
      noLogsVerified: 'Five independent no-logs audits by Deloitte',
      jurisdiction: 'Panama - no data retention laws',
      audits: 'Multiple Cure53 security audits',
      infrastructure: 'RAM-only servers prevent data persistence',
      realWorldProof: '2018 breach revealed no user logs stored',
    },
    euCompliance: 'compliant',
    pricing: {
      free: false,
      startingPrice: '$3.49/month',
    },
    pros: [
      'Extensive audit history with five no-logs verifications',
      'Panama jurisdiction outside surveillance alliances',
      'RAM-only servers and advanced security features',
      'Proven no-logs claims through real-world breach',
      'Comprehensive transparency reporting',
    ],
    cons: [
      'Not open source',
      'Recent transition from warrant canary to transparency reports',
      'Premium pricing for full feature set',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'mullvad',
    name: 'Mullvad VPN',
    category: 'vpn',
    website: 'https://mullvad.net',
    description:
      'Swedish VPN service focused on maximum user anonymity and privacy',
    privacyScore: 8.8,
    facts: {
      anonymity: 'No email or personal information required',
      jurisdiction: 'Sweden - strong privacy protections',
      audits: 'Regular security audits by X41 D-Sec and others',
      realWorldProof: '2023 Swedish police raid found no usable data',
      openSource: 'Fully open source applications',
    },
    euCompliance: 'compliant',
    pricing: {
      free: false,
      startingPrice: '€5/month',
    },
    pros: [
      'Ultimate anonymity - no personal information required',
      'Cash payment accepted for complete anonymity',
      'Proven in police raids - no data found',
      'System Transparency for server integrity verification',
      'Fully open source applications',
    ],
    cons: [
      'Sweden is part of 14 Eyes alliance',
      'Limited streaming service compatibility',
      'No formal no-logs audit due to technical impossibility',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'surfshark',
    name: 'Surfshark',
    category: 'vpn',
    website: 'https://surfshark.com',
    description:
      'Netherlands-based VPN service with strong audit verification and affordable pricing',
    privacyScore: 8.2,
    facts: {
      noLogsVerified: 'Two Deloitte no-logs audits',
      jurisdiction: 'Netherlands - EU privacy protections',
      audits: 'Cure53 security audits of infrastructure',
      infrastructure: 'RAM-only servers across entire network',
      compliance: 'GDPR compliance provides additional protections',
    },
    euCompliance: 'compliant',
    pricing: {
      free: false,
      startingPrice: '$2.49/month',
    },
    pros: [
      'Affordable pricing with strong security',
      'Big Four audit verification by Deloitte',
      'EU jurisdiction with GDPR protections',
      'RAM-only servers prevent data persistence',
      'Unlimited simultaneous connections',
    ],
    cons: [
      'Least comprehensive audit program of top VPNs',
      'Not open source',
      'Newer company with less track record',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: 'messaging',
    website: 'https://www.whatsapp.com',
    description:
      'Popular messaging app with Signal Protocol encryption but Meta integration',
    privacyScore: 6.5,
    facts: {
      encryption:
        'Signal Protocol with end-to-end encryption by default',
      jurisdiction: 'USA - owned by Meta',
      audits:
        'NCC Group audit of backup encryption, key transparency audits',
      dataCollection:
        'Extensive metadata collection and sharing with Meta',
      businessModel:
        'Data integration with Meta advertising ecosystem',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Strong Signal Protocol encryption',
      'End-to-end encryption by default',
      'Key transparency implementation',
      'Large user base and cross-platform availability',
      'Regular security audits',
    ],
    cons: [
      'Extensive metadata collection and sharing with Meta',
      'Data used for advertising across Facebook ecosystem',
      'Closed source applications',
      "Subject to Meta's surveillance capitalism model",
      'Government data requests for metadata',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'messaging',
    website: 'https://telegram.org',
    description:
      'Feature-rich messaging app with optional end-to-end encryption',
    privacyScore: 5.8,
    facts: {
      encryption:
        'Custom MTProto protocol with known vulnerabilities',
      jurisdiction: 'UAE - privacy protections unclear',
      audits: 'Academic analysis found multiple cryptographic issues',
      dataCollection: 'Extensive server-side storage by default',
      businessModel:
        'Limited revenue model, primarily founder-funded',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: '$4.99/month',
    },
    pros: [
      'Excellent features and user experience',
      'Secret chats offer end-to-end encryption',
      'Client code is open source',
      'Large file sharing capabilities',
      'Good privacy settings when configured properly',
    ],
    cons: [
      'End-to-end encryption not enabled by default',
      'Custom MTProto protocol has known vulnerabilities',
      'Regular chats stored on servers unencrypted',
      'UAE jurisdiction with unclear legal protections',
      'Mixed record on government cooperation',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'imessage',
    name: 'iMessage',
    category: 'messaging',
    website: 'https://support.apple.com/imessage',
    description:
      "Apple's messaging service with end-to-end encryption and Apple ecosystem integration",
    privacyScore: 7.1,
    facts: {
      encryption:
        'Custom E2EE protocol with PQ3 quantum-resistant features',
      jurisdiction: 'USA - privacy-focused business model',
      audits:
        'Limited independent audits, Apple security research published',
      dataCollection: 'Limited collection but iCloud backup concerns',
      businessModel: 'Hardware sales - not advertising dependent',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Strong end-to-end encryption with quantum resistance',
      'Privacy-focused business model',
      'Deep integration with Apple security ecosystem',
      'Contact Key Verification system',
      'No advertising or data monetization',
    ],
    cons: [
      'Limited to Apple ecosystem only',
      'iCloud backup makes messages accessible to Apple by default',
      'Centralized key management through Apple servers',
      'Not HIPAA compliant for enterprise use',
      'Proprietary implementation limits auditability',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'messaging',
    website: 'https://discord.com',
    description:
      'Gaming-focused communication platform with voice, video, and text chat',
    privacyScore: 4.2,
    facts: {
      encryption:
        'TLS in transit only - no end-to-end encryption for messages',
      jurisdiction: 'USA with standard legal framework',
      audits:
        'Limited security audits, no comprehensive privacy assessments',
      dataCollection:
        'Extensive data collection for platform functionality',
      businessModel: 'Freemium subscriptions and gaming partnerships',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: '$4.99/month',
    },
    pros: [
      'Excellent gaming and community features',
      'Good granular privacy settings for social platform',
      'Strong voice and video quality',
      'Active moderation and safety tools',
      'Subscription model not dependent on advertising',
    ],
    cons: [
      'No end-to-end encryption for text messages',
      'Extensive data collection and retention',
      'Designed as social platform, not secure communication',
      'Limited transparency in security practices',
      'Standard cooperation with law enforcement',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'tresorit',
    name: 'Tresorit',
    category: 'storage',
    website: 'https://tresorit.com',
    description:
      'Swiss-based encrypted cloud storage with enterprise focus and rigorous audits',
    privacyScore: 8.7,
    facts: {
      encryption:
        'End-to-end encryption with zero-knowledge architecture',
      jurisdiction:
        'Switzerland/Hungary - strong EU privacy protections',
      audits: 'Ernst & Young comprehensive security assessment',
      dataAccess:
        'Cannot decrypt user files even under legal compulsion',
      businessModel: 'Enterprise-focused subscription model',
    },
    euCompliance: 'compliant',
    pricing: {
      free: false,
      startingPrice: '$8.50/month',
    },
    pros: [
      'Rigorous third-party security audits by Ernst & Young',
      'True zero-knowledge encryption architecture',
      'Strong enterprise features and compliance',
      '50,000 hacking contest with no successful breaches',
      'Swiss Post majority ownership provides stability',
    ],
    cons: [
      'Higher cost than mainstream alternatives',
      'Smaller user base and ecosystem',
      'Limited free tier availability',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'icloud',
    name: 'iCloud',
    category: 'storage',
    website: 'https://www.icloud.com',
    description:
      "Apple's cloud storage service with optional advanced data protection",
    privacyScore: 6.8,
    facts: {
      encryption:
        'Two-tier system - standard vs Advanced Data Protection',
      jurisdiction:
        'USA - privacy-focused business model but government pressure',
      audits: 'ISO certifications and regular security assessments',
      dataAccess:
        'Apple can access standard data, E2EE available with Advanced protection',
      businessModel:
        'Device sales and services - less data dependency',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: '$0.99/month',
    },
    pros: [
      'Advanced Data Protection offers strong encryption',
      'Privacy-focused business model',
      'Seamless Apple ecosystem integration',
      'Regular security updates and patches',
      'Limited content scanning compared to competitors',
    ],
    cons: [
      'US jurisdiction subject to government requests',
      'Advanced Data Protection removed in UK due to pressure',
      'Some data categories never encrypted',
      'Will not sign HIPAA agreements',
      "Default settings don't enable strongest protections",
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    category: 'storage',
    website: 'https://www.dropbox.com',
    description:
      'Popular cloud storage service with extensive enterprise features and compliance',
    privacyScore: 5.4,
    facts: {
      encryption:
        'AES-256 server-side encryption - Dropbox holds keys',
      jurisdiction: 'USA with some EU compliance measures',
      audits: 'Multiple ISO certifications and SOC compliance',
      dataAccess: 'Can decrypt all user files when legally required',
      businessModel:
        'Freemium subscription model with enterprise focus',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: '$10/month',
    },
    pros: [
      'Extensive compliance certifications',
      'Strong enterprise features and admin controls',
      'HIPAA compliance available for healthcare',
      'Good collaboration and sharing features',
      'Regular third-party security assessments',
    ],
    cons: [
      'Server-side encryption - Dropbox can access files',
      'History of data breaches including 2024 incident',
      'US jurisdiction with government data sharing',
      'Content scanning capabilities',
      'No zero-knowledge encryption option',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'google-drive',
    name: 'Google Drive',
    category: 'storage',
    website: 'https://drive.google.com',
    description:
      "Google's cloud storage service with extensive features and Google ecosystem integration",
    privacyScore: 4.1,
    facts: {
      encryption: 'AES-256 with Google-controlled keys',
      jurisdiction: 'USA - extensive government cooperation',
      audits: 'SOC/ISO certifications but privacy concerns',
      dataAccess:
        'Full access for ads, AI training, and content analysis',
      businessModel: 'Data mining and advertising primary revenue',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: '$1.99/month',
    },
    pros: [
      'Excellent integration with Google Workspace',
      'Advanced collaboration features',
      'Large free storage capacity',
      'Good search and organization capabilities',
      'Strong spam and malware protection',
    ],
    cons: [
      'Extensive content scanning for ads and AI training',
      'No client-side encryption option',
      'Used for behavioral profiling across Google services',
      'PRISM program participant',
      'Complex privacy controls that frequently change',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'twitter-x',
    name: 'Twitter/X',
    category: 'social',
    website: 'https://x.com',
    description:
      'Social media platform with reduced privacy protections under current ownership',
    privacyScore: 4.2,
    facts: {
      dataCollection:
        'Extensive data collection with increased monetization focus',
      jurisdiction: 'USA with various international operations',
      audits: 'Basic transparency reports, reduced academic access',
      businessModel: 'Advertising and subscription services',
      compliance:
        'EU Digital Services Act subject, multiple regulatory actions',
    },
    euCompliance: 'concerning',
    pricing: {
      free: true,
      startingPrice: '$8/month',
    },
    pros: [
      'Real-time information and news updates',
      'Large user base and global reach',
      'Some privacy controls available',
      'Transparency reports published',
      'Account deletion options available',
    ],
    cons: [
      'Reduced privacy protections under current management',
      'Extensive cross-platform tracking',
      'Complex privacy settings',
      'Recent regulatory complaints for illegal microtargeting',
      '30-day retention period for deleted accounts',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'social',
    website: 'https://instagram.com',
    description:
      'Meta-owned photo and video sharing platform with extensive data collection',
    privacyScore: 2.8,
    facts: {
      dataCollection:
        'Extensive collection including biometric data and behavior analysis',
      jurisdiction: "USA with Meta's surveillance capitalism model",
      audits: 'Limited transparency, closed source platform',
      businessModel: 'Advertising-based revenue through user data',
      compliance: 'Multiple GDPR violations and regulatory fines',
    },
    euCompliance: 'concerning',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Popular platform with large user base',
      'Good content creation and sharing features',
      'Some basic privacy settings available',
      'Content reporting and safety features',
      'Data download tools available',
    ],
    cons: [
      'Extensive behavioral profiling and data collection',
      'Cross-platform tracking with Facebook ecosystem',
      'Biometric data collection including face recognition',
      "Part of Meta's €1.3 billion GDPR fine",
      'Teen mental health data collection controversies',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    category: 'social',
    website: 'https://linkedin.com',
    description:
      'Professional networking platform with extensive professional data collection',
    privacyScore: 3.9,
    facts: {
      dataCollection:
        'Extensive professional and behavioral data collection',
      jurisdiction: 'USA with Microsoft ownership',
      audits: 'Limited algorithmic transparency',
      businessModel:
        'Advertising, recruitment, and premium subscriptions',
      compliance: '€310 million GDPR fine in 2024',
    },
    euCompliance: 'concerning',
    pricing: {
      free: true,
      startingPrice: '$29.99/month',
    },
    pros: [
      'Professional networking and career opportunities',
      'Some professional visibility controls',
      'Industry-specific content and insights',
      'Recruitment and business networking features',
      'Account deletion available',
    ],
    cons: [
      '€310 million GDPR fine for behavioral analysis violations',
      'Extensive professional data mining',
      'Data sharing with advertising partners',
      'Failed to obtain valid consent for profiling',
      'Complex privacy settings across multiple menus',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'social',
    website: 'https://tiktok.com',
    description:
      'Short-form video platform with extensive data collection and Chinese ownership concerns',
    privacyScore: 2.1,
    facts: {
      dataCollection:
        'Extremely extensive including biometric data collection',
      jurisdiction:
        'China/UAE/Singapore - Chinese National Intelligence Law concerns',
      audits:
        'Limited transparency, ongoing regulatory investigations',
      businessModel:
        'Advertising revenue with potential data sharing with Chinese authorities',
      compliance:
        'Multiple regulatory violations and ongoing investigations',
    },
    euCompliance: 'concerning',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Popular short-form video platform',
      'Creative content creation tools',
      'Account deletion available in 2 clicks',
      'Some content visibility controls',
      'Appeals process for content decisions',
    ],
    cons: [
      'Chinese ownership raises data access concerns',
      '€600 million EU fine for failing to protect user data',
      'Extensive biometric data collection',
      '$5.7 million FTC COPPA violation fine',
      'Potential data sharing with Chinese government under law',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'video-call',
    website: 'https://zoom.us',
    description:
      'Popular video conferencing platform with optional end-to-end encryption',
    privacyScore: 6.0,
    facts: {
      encryption: 'AES-256 with optional E2EE for paid accounts',
      jurisdiction: 'USA with some China-based development concerns',
      audits: 'SOC 2 certified with regular third-party audits',
      dataCollection:
        'Meeting metadata retained, cloud recording storage',
      businessModel: 'Freemium with enterprise subscriptions',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: '$14.99/month',
    },
    pros: [
      'Comprehensive enterprise features',
      'End-to-end encryption available for paid accounts',
      'Good security controls and admin dashboard',
      'Regular security updates',
      'Waiting rooms and password protection',
    ],
    cons: [
      'E2EE only for paid accounts',
      'Multiple security incidents including Zoombombing',
      'China-based development raised key routing concerns',
      'Meeting metadata collection and retention',
      'Complex privacy settings',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'jitsi-meet',
    name: 'Jitsi Meet',
    category: 'video-call',
    website: 'https://meet.jit.si',
    description:
      'Open source video conferencing platform with self-hosting options',
    privacyScore: 7.5,
    facts: {
      encryption: 'AES-GCM with E2EE using Double Ratchet protocol',
      jurisdiction: 'USA but open source allows self-hosting',
      audits: 'Academic research and community auditing',
      dataCollection:
        'Minimal data collection, meetings destroyed when empty',
      businessModel: 'Open source with commercial hosting options',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: null,
    },
    pros: [
      'Fully open source for transparency',
      'Self-hosting eliminates third-party jurisdiction issues',
      'No persistent storage of meeting content',
      'Strong academic security research backing',
      'No surveillance or attention tracking features',
    ],
    cons: [
      'E2EE limited to 20 participants',
      'Academic research found some vulnerabilities',
      'Requires technical knowledge for self-hosting',
      'Smaller feature set compared to enterprise solutions',
    ],
    // confidenceLevel: 'medium',
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    category: 'video-call',
    website: 'https://teams.microsoft.com',
    description:
      'Enterprise video conferencing with extensive compliance and security features',
    privacyScore: 7.2,
    facts: {
      encryption: 'SRTP with TLS 1.2+, AES-256 for data at rest',
      jurisdiction: 'USA with EU data residency options',
      audits: 'SOC 2, ISO, FedRAMP certifications',
      dataCollection:
        'Advanced audit logs and Microsoft 365 integration',
      businessModel: 'Enterprise subscription model',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: '$4/month',
    },
    pros: [
      'Extensive enterprise compliance certifications',
      'Strong integration with Microsoft security ecosystem',
      'Advanced admin controls and audit capabilities',
      'Government versions available for high security',
      'Regular third-party security audits',
    ],
    cons: [
      'Deep Microsoft ecosystem integration affects data scope',
      'Complex privacy settings across enterprise features',
      'Advanced audit logging may concern privacy-focused users',
      'US jurisdiction despite EU data centers',
    ],
    // confidenceLevel: 'high',
  },
  {
    id: 'google-meet',
    name: 'Google Meet',
    category: 'video-call',
    website: 'https://meet.google.com',
    description:
      "Google's video conferencing service with good privacy practices for enterprise",
    privacyScore: 7.8,
    facts: {
      encryption: 'DTLS-SRTP with client-side encryption option',
      jurisdiction: 'USA with strong EU operations',
      audits: 'SOC 2/3 compliance with public reports',
      dataCollection:
        'Minimal metadata collection, no attention tracking',
      businessModel:
        'Google Workspace integration, no meeting-specific ads',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: '$6/month',
    },
    pros: [
      'No attention tracking or behavioral monitoring',
      'Strong educational sector compliance',
      'Clear data ownership policies',
      'Regular transparency reporting',
      'Good anti-hijacking protections',
    ],
    cons: [
      'Part of Google ecosystem with cross-service data sharing',
      'US jurisdiction with government cooperation',
      'Limited enterprise features compared to competitors',
      'Privacy controls can be complex',
    ],
    // confidenceLevel: 'high',
  },
];

export function createServiceLookup(
  services: Service[]
): ServiceLookup {
  return services.reduce((lookup, service) => {
    lookup[service.id] = service;
    return lookup;
  }, {} as ServiceLookup);
}

export function getServicesByCategory(
  services: Service[],
  category: ServiceCategory
): Service[] {
  return services.filter((service) => service.category === category);
}

export function findService(
  services: Service[],
  id: string
): Service | undefined {
  return services.find((service) => service.id === id);
}

export function createComparison(
  service1: Service,
  service2: Service
): ComparisonPair {
  const scoreDifference = Math.abs(
    service1.privacyScore - service2.privacyScore
  );

  let winner: ComparisonPair['winner'] = 'tie';
  if (service1.privacyScore > service2.privacyScore) {
    winner = 'service1';
  } else if (service2.privacyScore > service1.privacyScore) {
    winner = 'service2';
  }

  return {
    service1,
    service2,
    categoryMatch: service1.category === service2.category,
    winner,
    scoreDifference,
  };
}

export function getComparisonInsight(
  comparison: ComparisonPair
): string {
  const { service1, service2, winner, scoreDifference } = comparison;

  if (winner === 'tie') {
    return `Both ${service1.name} and ${service2.name} have similar privacy scores`;
  }

  const winningService = winner === 'service1' ? service1 : service2;
  const losingService = winner === 'service1' ? service2 : service1;

  if (scoreDifference >= 6) {
    return `${winningService.name} is significantly more private than ${losingService.name}`;
  } else if (scoreDifference >= 3) {
    return `${winningService.name} offers better privacy than ${losingService.name}`;
  } else {
    return `${winningService.name} has slightly better privacy than ${losingService.name}`;
  }
}

export function filterServices(
  services: Service[],
  filters: ServiceFilters
): Service[] {
  return services.filter((service) => {
    if (filters.category && service.category !== filters.category) {
      return false;
    }

    if (filters.euCompliant && service.euCompliance !== 'compliant') {
      return false;
    }

    if (filters.freeOption && !service.pricing.free) {
      return false;
    }

    if (
      filters.minPrivacyScore &&
      service.privacyScore < filters.minPrivacyScore
    ) {
      return false;
    }

    return true;
  });
}

export function searchServices(
  services: Service[],
  options: SearchOptions
): Service[] {
  let results = services;

  // Apply filters first
  if (options.filters) {
    results = filterServices(results, options.filters);
  }

  // Apply search query
  if (options.query) {
    const query = options.query.toLowerCase();
    results = results.filter(
      (service) =>
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query)
    );
  }

  // Apply sorting
  if (options.sortBy) {
    results.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (options.sortBy) {
        case 'privacyScore':
          aValue = a.privacyScore;
          bValue = b.privacyScore;
          break;
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'category':
          aValue = a.category;
          bValue = b.category;
          break;
        default:
          return 0;
      }

      if (options.sortOrder === 'desc') {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      } else {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      }
    });
  }

  return results;
}

export function getCategoryStats(
  services: Service[]
): CategoryStats[] {
  const categories = CATEGORIES.map((category) => {
    const categoryServices = getServicesByCategory(
      services,
      category.id
    );

    return {
      category: category.id,
      serviceCount: categoryServices.length,
      averagePrivacyScore:
        categoryServices.length > 0
          ? Math.round(
              categoryServices.reduce(
                (sum, s) => sum + s.privacyScore,
                0
              ) / categoryServices.length
            )
          : 0,
      euCompliantCount: categoryServices.filter(
        (s) => s.euCompliance === 'compliant'
      ).length,
      freeOptionsCount: categoryServices.filter((s) => s.pricing.free)
        .length,
    };
  });

  return categories;
}

export function getPopularAlternatives(
  service: Service,
  services: Service[]
): Service[] {
  return services
    .filter(
      (s) =>
        s.id !== service.id &&
        s.category === service.category &&
        s.privacyScore > service.privacyScore
    )
    .sort((a, b) => b.privacyScore - a.privacyScore)
    .slice(0, 3); // Top 3 alternatives
}

export function createServiceDatabase(
  services: Service[]
): ServiceDatabase {
  return {
    services,
    categories: CATEGORIES,
    lastUpdated: new Date().toISOString(),
    version: '1.0.0',
  };
}

export function validateService(service: Partial<Service>): boolean {
  return !!(
    service.id &&
    service.name &&
    service.category &&
    service.website &&
    typeof service.privacyScore === 'number' &&
    service.privacyScore >= 1 &&
    service.privacyScore <= 10 &&
    service.facts &&
    service.euCompliance &&
    service.pricing &&
    service.pros &&
    service.cons
  );
}

export { SERVICES as defaultServices };
export { CATEGORIES as serviceCategories };
