import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'tor-browser',
    name: 'Tor Browser',
    category: 'browser',
    website: 'https://www.torproject.org/',
    description:
      'The gold standard for anonymous browsing, routing traffic through the Tor network via three layers of encryption for maximum anonymity and censorship circumvention.',
    // privacyScore: 10,
    facts: {
      encryption: 'Three-layer onion routing encryption',
      jurisdiction: 'United States (nonprofit)',
      // openSource: true,
      // audited: true,
      // noLogs: true,
      // anonymousSignup: true,
    },
    // euCompliance: 'partial',
    pricing: {
      free: true,
      // paidPlans: [],
    },
    pros: [
      'Maximum anonymity and privacy protection',
      'Access to .onion hidden services',
      'Blocks trackers and fingerprinting by default',
      'Circumvents censorship effectively',
      'Regular security audits',
    ],
    cons: [
      'Slower browsing speeds due to Tor network',
      'Some websites may not work properly',
      'May draw attention from ISPs or authorities',
    ],
    alternatives: ['mullvad-browser', 'firefox', 'brave-browser'],
  },
  {
    id: 'firefox',
    name: 'Firefox',
    category: 'browser',
    website: 'https://www.mozilla.org/firefox/',
    description:
      "Mozilla's privacy-focused browser with Enhanced Tracking Protection, extensive customization options, and strong balance between privacy and usability.",
    // privacyScore: 8,
    facts: {
      encryption: 'HTTPS by default, DNS over HTTPS',
      jurisdiction: 'United States (Mozilla Foundation nonprofit)',
      // openSource: true,
      // audited: true,
      trackingProtection: 'Enhanced Tracking Protection',
      customizable: 'Highly customizable with Arkenfox',
    },
    // euCompliance: 'partial',
    pricing: {
      free: true,
      // paidPlans: [],
    },
    pros: [
      'Excellent balance of privacy and usability',
      'Highly customizable for advanced users',
      'Strong extension ecosystem',
      'Non-profit organization behind development',
    ],
    cons: [
      'Requires manual configuration for optimal privacy',
      'Collects telemetry by default',
      'Some privacy features need to be enabled manually',
    ],
  },
  {
    id: 'brave-browser',
    name: 'Brave Browser',
    category: 'browser',
    website: 'https://brave.com/',
    description:
      'Chromium-based privacy browser with built-in ad blocking, tracker protection, and optional cryptocurrency rewards system.',
    // privacyScore: 7,
    facts: {
      encryption: 'HTTPS upgrading, fingerprint protection',
      jurisdiction: 'United States',
      // openSource: true,
      // audited: true,
      adBlocking: 'Built-in Brave Shields',
      cryptoIntegration: 'BAT rewards and Web3 features',
    },
    // euCompliance: 'partial',
    pricing: {
      free: true,
      // paidPlans: [],
    },
    pros: [
      'Good privacy defaults out of the box',
      'Chromium compatibility for website support',
      'Built-in ad and tracker blocking',
      'Integrated cryptocurrency features',
    ],
    cons: [
      'Complex features may increase fingerprinting',
      'Controversial business model and past incidents',
      'US jurisdiction with potential privacy concerns',
    ],
  },
  {
    id: 'startpage',
    name: 'Startpage',
    category: 'search',
    website: 'https://startpage.com/',
    description:
      'Privacy proxy for Google Search results with Anonymous View feature and European privacy law protection.',
    // privacyScore: 7,
    facts: {
      resultSource: 'Google Search results without tracking',
      jurisdiction: 'Netherlands (EU)',
      // openSource: false,
      // audited: true,
      businessModel: 'Privacy-safe contextual advertising',
      anonymousView: 'Proxy browsing of search results',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: []
    },
    pros: [
      'High-quality Google results without tracking',
      'EU privacy law protection',
      'Anonymous View proxy feature',
      'European Privacy Seal certification',
    ],
    cons: [
      'Owned by System1 (ad-tech company)',
      'Dependency on Google for results',
      'Potentially slower than direct Google search',
    ],
    alternatives: ['duckduckgo', 'brave-search', 'searxng'],
  },
  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    category: 'search',
    website: 'https://duckduckgo.com/',
    description:
      'Privacy-focused search engine with no tracking, logging, or user profiling, plus comprehensive privacy tools.',
    // privacyScore: 8,
    facts: {
      tracking: 'No tracking or search history storage',
      jurisdiction: 'United States',
      // openSource: false,
      // audited: false,
      businessModel: 'Contextual advertising',
      torSupport: 'Tor hidden service available',
    },
    // euCompliance: 'partial',
    pricing: {
      free: true,
      // paidPlans: [
      //   { name: "Privacy Pro", price: "$9.99/month", features: ["VPN", "Email protection", "Identity theft restoration"] }
      // ]
    },
    pros: [
      'User-friendly interface familiar to most users',
      'Comprehensive privacy protection tools',
      'Wide browser integration support',
      'No search history tracking',
    ],
    cons: [
      'US-based jurisdiction',
      'Results dependent on Bing',
      'Past incidents with Microsoft trackers',
    ],
  },
  {
    id: 'brave-search',
    name: 'Brave Search',
    category: 'search',
    website: 'https://search.brave.com/',
    description:
      'Independent search engine with its own web index, no user profiling, and genuine independence from Big Tech.',
    // privacyScore: 8,
    facts: {
      indexing: 'Independent web crawler and index',
      jurisdiction: 'United States',
      // openSource: false,
      // audited: false,
      businessModel: 'Advertising with privacy-safe methods',
      dataCollection: 'No IP address retention or profiling',
    },
    // euCompliance: 'partial',
    pricing: {
      free: true,
      // paidPlans: [
      // { name: "Premium", price: "Available", features: ["Ad-free experience"] }
      // ]
    },
    pros: [
      'True independence from Big Tech search',
      'Own web crawling and indexing',
      'Growing result quality and coverage',
      'Innovative features like AI answers',
    ],
    cons: [
      'US jurisdiction',
      'Newer service with occasional result gaps',
      'Smaller index than established competitors',
    ],
  },
  {
    id: 'mullvad-vpn',
    name: 'Mullvad',
    category: 'vpn',
    website: 'https://mullvad.net/',
    description:
      'Swedish VPN service with anonymous accounts, flat-rate pricing, and strong commitment to user privacy with no-logs policy.',
    // privacyScore: 9,
    facts: {
      encryption: 'WireGuard and OpenVPN protocols',
      jurisdiction: 'Sweden',
      // openSource: true,
      // audited: true,
      noLogs: 'Independently audited no-logs policy',
      anonymousPayments: 'Cash and cryptocurrency accepted',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: false,
      // paidPlans: [
      //   {
      //     name: 'Single Plan',
      //     price: '€5/month',
      //     features: [
      //       '5 devices',
      //       '49+ countries',
      //       'No long-term discounts',
      //     ],
      //   },
      // ],
    },
    pros: [
      'Transparent flat-rate pricing',
      'Anonymous account numbers instead of usernames',
      'Accepts anonymous payments (cash/crypto)',
      'Strong technical privacy features',
    ],
    cons: [
      'Removed port forwarding in 2023',
      'No streaming optimization',
      'Sweden is part of 14 Eyes alliance',
    ],
  },
  {
    id: 'proton-vpn',
    name: 'Proton VPN',
    category: 'vpn',
    website: 'https://protonvpn.com/',
    description:
      'Swiss-based VPN service from Proton AG offering free and paid tiers with Secure Core servers and strong privacy protection.',
    // privacyScore: 8,
    facts: {
      encryption: 'WireGuard, OpenVPN protocols',
      jurisdiction: 'Switzerland',
      // openSource: true,
      // audited: true,
      noLogs: 'Independently audited no-logs policy',
      secureCoreServers: 'Multi-hop server architecture',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: [
      //   {
      //     name: 'Plus',
      //     price: '€4.99/month',
      //     features: ['112+ countries', '10 devices', 'Secure Core'],
      //   },
      //   {
      //     name: 'Unlimited',
      //     price: '€9.99/month',
      //     features: ['All Proton services', '500GB storage'],
      //   },
      // ],
    },
    pros: [
      'Swiss privacy law protection',
      'Free tier available',
      'Secure Core multi-hop servers',
      'Integrated with Proton ecosystem',
    ],
    cons: [
      'Limited IPv6 support',
      'Smaller server network than competitors',
      'Free tier has speed limitations',
    ],
    alternatives: ['mullvad-vpn', 'ivpn'],
  },
  {
    id: 'ivpn',
    name: 'IVPN',
    category: 'vpn',
    website: 'https://www.ivpn.net/',
    description:
      'Gibraltar-based premium VPN focused on privacy transparency with anonymous account creation and multi-hop servers.',
    // privacyScore: 9,
    facts: {
      encryption: 'WireGuard, OpenVPN, IPSec protocols',
      jurisdiction: 'Gibraltar',
      // openSource: true,
      // audited: true,
      noLogs: 'Strict no-logs policy',
      anonymousSignup: 'No email required for accounts',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: false,
      // paidPlans: [
      //   {
      //     name: 'Standard',
      //     price: '$6/month',
      //     features: ['2 devices', '37 countries'],
      //   },
      //   {
      //     name: 'Pro',
      //     price: '$10/month',
      //     features: ['7 devices', 'Multi-hop', 'Port forwarding'],
      //   },
      // ],
    },
    pros: [
      'No personal information required for signup',
      'Accepts cash and Monero payments',
      'Regular independent security audits',
      'Multi-hop server support',
    ],
    cons: [
      'More expensive than competitors',
      'Smaller server network (37 countries)',
      'No guaranteed streaming service access',
    ],
  },
  {
    id: 'proton-mail',
    name: 'Proton Mail',
    category: 'email',
    website: 'https://proton.me/',
    description:
      'Swiss encrypted email service with zero-access architecture, end-to-end encryption, and comprehensive privacy protection.',
    // privacyScore: 9,
    facts: {
      encryption: 'Zero-access end-to-end encryption',
      jurisdiction: 'Switzerland',
      // openSource: true,
      // audited: true,
      storage: '500MB-500GB+ depending on plan',
      bridge: 'ProtonMail Bridge for desktop clients',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: [
      //   { name: "Mail Plus", price: "€4.99/month", features: ["15GB storage", "Custom domains"] },
      //   { name: "Unlimited", price: "€12.99/month", features: ["All Proton services", "500GB storage"] }
      // ]
    },
    pros: [
      'Strong Swiss privacy laws protection',
      'Zero-access encryption architecture',
      'Comprehensive Proton ecosystem integration',
      'Good free tier with 1GB storage',
    ],
    cons: [
      'Bridge requires paid subscription',
      'Limited free storage compared to competitors',
      'Can be expensive for advanced features',
    ],
    alternatives: ['tuta', 'mailbox-org'],
  },
  {
    id: 'tuta',
    name: 'Tuta',
    category: 'email',
    website: 'https://tuta.com/',
    description:
      'German end-to-end encrypted email service with post-quantum cryptography and comprehensive metadata encryption.',
    // privacyScore: 9,
    facts: {
      encryption: 'Post-quantum cryptography (TutaCrypt)',
      jurisdiction: 'Germany (Hanover)',
      // openSource: true,
      // audited: true,
      metadataEncryption: 'Encrypts subject lines and contacts',
      anonymousSignup: 'Anonymous account creation possible',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: [
      //   { name: "Revolutionary", price: "€3/month", features: ["20GB storage", "15 addresses"]  },
      //   { name: "Legend", price: "€8/month", features: ["500GB storage", "30 addresses"]  }
      // ]
    },
    pros: [
      'Post-quantum encryption for future-proofing',
      'Very affordable pricing',
      'Encrypts metadata including subject lines',
      'Strong German privacy laws',
    ],
    cons: [
      'Smaller ecosystem than Proton',
      'No IMAP Bridge on free plan',
      'Learning curve for some users',
    ],
  },
  {
    id: 'mailbox-org',
    name: 'Mailbox.org',
    category: 'email',
    website: 'https://mailbox.org/',
    description:
      'German privacy-focused email provider with office suite, sustainable energy, and affordable pricing.',
    // privacyScore: 7,
    facts: {
      encryption: 'PGP encryption support',
      jurisdiction: 'Germany (Berlin)',
      openSource: 'Partially open source',
      // audited: true,
      sustainability: '100% renewable energy powered',
      officeIntegration: 'Full office suite included',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: false,
      // paidPlans: [
      //   { name: "Light", price: "€1/month", features: ["2GB mail", "Calendar/contacts"]  },
      //   { name: "Standard", price: "€3/month", features: ["10GB mail + 5GB cloud", "Office suite"]  }
      // ]
    },
    pros: [
      'Very affordable pricing',
      'Comprehensive office suite included',
      'Environmentally conscious (renewable energy)',
      'German privacy law protection',
    ],
    cons: [
      'Interface less modern than competitors',
      'Manual PGP setup required',
      'Limited storage on basic plans',
    ],
  },
  {
    id: 'signal',
    name: 'Signal',
    category: 'messaging',
    website: 'https://signal.org/',
    description:
      'Industry-leading encrypted messaging app with end-to-end encryption by default and minimal metadata collection.',
    // privacyScore: 9,
    facts: {
      encryption: 'Signal Protocol end-to-end encryption',
      jurisdiction: 'United States (nonprofit)',
      // openSource: true,
      // audited: true,
      businessModel: 'Donations and grants',
      metadataProtection: 'Sealed Sender feature',
    },
    // euCompliance: 'partial',
    pricing: {
      free: true,
      // paidPlans: []
    },
    pros: [
      'Industry-standard encryption protocol',
      'User-friendly interface',
      'Widely adopted and trusted',
      'Nonprofit organization',
    ],
    cons: [
      'Requires phone number for registration',
      'Centralized architecture',
      'US jurisdiction may concern some users',
    ],
    alternatives: ['simplex-chat'],
  },
  {
    id: 'simplex-chat',
    name: 'SimpleX Chat',
    category: 'messaging',
    website: 'https://simplex.chat/',
    description:
      'First messaging platform with no user identifiers, offering maximum privacy through decentralized architecture and quantum-resistant encryption.',
    // privacyScore: 10,
    facts: {
      encryption: 'Quantum-resistant double ratchet encryption',
      jurisdiction: 'Open source project',
      // openSource: true,
      // audited: true,
      userIdentifiers: 'No user IDs or phone numbers required',
      decentralized: 'Decentralized network of relay servers',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: []
    },
    pros: [
      'No user identifiers whatsoever',
      'Quantum-resistant encryption',
      'Strong metadata protection',
      'Decentralized architecture',
    ],
    cons: [
      'Less user-friendly than Signal',
      'Smaller user base',
      'More complex for average users',
    ],
  },
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    category: 'password',
    website: 'https://bitwarden.com/',
    description:
      'Open-source password manager with excellent free tier, self-hosting options, and cross-platform synchronization.',
    // privacyScore: 8,
    facts: {
      encryption: 'AES-256 end-to-end encryption',
      jurisdiction: 'United States',
      // openSource: true,
      // audited: true,
      selfHosting: 'Self-hosting option available',
      businessModel: 'Freemium subscription model',
    },
    // euCompliance: 'partial',
    pricing: {
      free: true,
      // paidPlans: [
      //   {
      //     name: 'Premium',
      //     price: '$10/year',
      //     features: ['Advanced 2FA', 'File attachments'],
      //   },
      //   {
      //     name: 'Family',
      //     price: '$40/year',
      //     features: ['Up to 6 users', 'Shared collections'],
      //   },
      // ],
    },
    pros: [
      'Excellent free tier with unlimited passwords',
      'Open source with self-hosting option',
      'Very affordable premium features',
      'Cross-platform availability',
    ],
    cons: [
      'Interface could be more polished',
      'US jurisdiction',
      'Limited customer support for free users',
    ],
  },
  {
    id: 'proton-pass',
    name: 'Proton Pass',
    category: 'password',
    website: 'https://proton.me/pass',
    description:
      'End-to-end encrypted password manager from Proton with integrated email alias generation and Swiss privacy protection.',
    // privacyScore: 9,
    facts: {
      encryption: 'End-to-end encryption with zero-access',
      jurisdiction: 'Switzerland',
      // openSource: true,
      // audited: true,
      emailAliases: 'Integrated alias generation',
      ecosystem: 'Part of Proton ecosystem',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: [
      //   {
      //     name: 'Pass Plus',
      //     price: 'Included with Proton plans',
      //     features: ['Unlimited aliases', 'Advanced features'],
      //   },
      // ],
    },
    pros: [
      'Swiss privacy law protection',
      'Email alias generation included',
      'Integrated with Proton ecosystem',
      'Independent security audits',
    ],
    cons: [
      'Newer service with fewer features',
      'Full feature set requires Proton subscription',
      'Smaller ecosystem than established competitors',
    ],
    alternatives: ['bitwarden', '1password'],
  },
  {
    id: 'proton-drive',
    name: 'Proton Drive',
    category: 'storage',
    website: 'https://proton.me/drive',
    description:
      'End-to-end encrypted cloud storage with zero-access encryption protecting files, names, and metadata.',
    // privacyScore: 9,
    facts: {
      encryption: 'Zero-access end-to-end encryption',
      jurisdiction: 'Switzerland',
      // openSource: true,
      // audited: true,
      metadataEncryption: 'File names and metadata encrypted',
      crossPlatform: 'Windows, macOS, Android, iOS support',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: [
      // { name: "Mail Plus", price: "$3.99/month", features: ["200GB storage"] },
      // { name: "Unlimited", price: "$7.99/month", features: ["500GB + full Proton suite"] }
      // ]
    },
    pros: [
      'Strong Swiss privacy law protection',
      'Complete zero-access encryption',
      'Integration with Proton ecosystem',
      'Cross-platform synchronization',
    ],
    cons: [
      'Limited free storage (2GB expandable to 5GB)',
      'Fewer collaboration features than mainstream alternatives',
      'Newer service with evolving feature set',
    ],
    alternatives: ['tresorit', 'nextcloud'],
  },
  {
    id: 'mullvad-dns',
    name: 'Mullvad DNS',
    category: 'dns',
    website:
      'https://mullvad.net/en/help/dns-over-https-and-dns-over-tls',
    description:
      'Privacy-focused DNS service with strict no-logs policy and content filtering options, available to all users.',
    // privacyScore: 9,
    facts: {
      logging: 'Strict no-logs policy',
      jurisdiction: 'Sweden',
      // openSource: true,
      // audited: true,
      protocols: 'DoH, DoT, DNSCrypt support',
      filtering: 'Multiple filtering levels available',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: []
    },
    pros: [
      'Clear no-logs commitment',
      'Multiple content filtering options',
      'Available to non-VPN users',
      'Strong Swedish privacy laws',
    ],
    cons: [
      'Limited customization compared to commercial services',
      'Newer DNS service with smaller track record',
      'Sweden is part of 14 Eyes alliance',
    ],
    alternatives: ['quad9', 'nextdns'],
  },
  {
    id: 'quad9',
    name: 'Quad9',
    category: 'dns',
    website: 'https://quad9.net/',
    description:
      'Security-focused DNS service with malware blocking, Swiss jurisdiction, and strong privacy protection.',
    // privacyScore: 8,
    facts: {
      logging: 'No IP logging or personal data retention',
      jurisdiction: 'Switzerland',
      // openSource: true,
      // audited: true,
      malwareBlocking: '97% malware blocking effectiveness',
      globalNetwork: '259 server locations in 106 countries',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: []
    },
    pros: [
      'Excellent malware and phishing protection',
      'Swiss privacy law protection',
      'Global network for good performance',
      'Non-profit organizational structure',
    ],
    cons: [
      'Limited customization options',
      'Potential false positives with security blocking',
      'Focused primarily on security rather than privacy',
    ],
  },
  {
    id: 'cryptpad',
    name: 'CryptPad',
    category: 'productivity',
    website: 'https://cryptpad.org/',
    description:
      'End-to-end encrypted collaborative office suite with zero-knowledge encryption and anonymous account creation.',
    // privacyScore: 9,
    facts: {
      encryption: 'Zero-knowledge end-to-end encryption',
      jurisdiction: 'France (EU)',
      // openSource: true,
      // audited: true,
      anonymousSignup: 'No email required for accounts',
      applications:
        'Rich text, spreadsheets, presentations, forms, Kanban',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: [
      //   {
      //     name: 'Premium',
      //     price: '€5/month',
      //     features: ['5GB storage'],
      //   },
      //   {
      //     name: 'Teams',
      //     price: '€25/month',
      //     features: ['50GB storage', 'Team features'],
      //   },
      // ],
    },
    pros: [
      'True zero-knowledge encryption',
      'Full office suite functionality',
      'Real-time collaboration support',
      'EU jurisdiction with strong privacy laws',
    ],
    cons: [
      'Learning curve from Google/Microsoft tools',
      'Limited offline capabilities',
      'Smaller ecosystem than mainstream alternatives',
    ],
    alternatives: ['onlyoffice', 'libreoffice'],
  },
  {
    id: 'grapheneos',
    name: 'GrapheneOS',
    category: 'mobile-os',
    website: 'https://grapheneos.org/',
    description:
      'Security and privacy-hardened Android alternative with sandboxed Google Play Services and enhanced permission controls.',
    // privacyScore: 10,
    facts: {
      platform: 'Google Pixel devices only',
      jurisdiction: 'Open source project',
      // openSource: true,
      // audited: true,
      hardening: 'Extensive security hardening',
      googleServices: 'Optional sandboxed Google Play Services',
    },
    // euCompliance: 'compliant',
    pricing: {
      free: true,
      // paidPlans: []
    },
    pros: [
      'Strongest mobile security and privacy model',
      'Regular security updates within days of AOSP',
      'Maintains app compatibility with sandboxed services',
      'Extensive privacy and security hardening',
    ],
    cons: [
      'Limited to Google Pixel devices only',
      'Requires technical knowledge for installation',
      'Some advanced features need configuration',
    ],
    alternatives: ['calyxos', 'lineageos'],
  },
];

export { SERVICES as defaultServices };
