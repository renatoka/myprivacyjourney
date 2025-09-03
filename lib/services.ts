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
  // EMAIL SERVICES
  {
    id: 'gmail',
    name: 'Gmail',
    category: 'email',
    website: 'https://gmail.com',
    description:
      "Google's free email service with extensive features",
    logo: '📧',
    privacyScore: 4,
    facts: {
      'Data Collection': 'Extensive - scans emails for ads',
      Encryption: 'In transit only',
      Jurisdiction: 'United States',
      'Open Source': 'No',
      'Ad Targeting': 'Yes - extensive profiling',
      'Data Retention': 'Indefinite unless deleted',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: 'Free with ads',
      businessModel: 'ads',
    },
    pros: [
      'Excellent spam filtering',
      'Large storage (15GB free)',
      'Great integration with Google services',
      'Reliable uptime',
    ],
    cons: [
      'Extensive data collection',
      'Email content scanning for ads',
      'Limited privacy controls',
      'US jurisdiction',
    ],
  },
  {
    id: 'proton-mail',
    name: 'ProtonMail',
    category: 'email',
    website: 'https://proton.me',
    description:
      'Encrypted email service focused on privacy and security',
    logo: '🔒',
    privacyScore: 9,
    facts: {
      'Data Collection': 'Minimal - no email scanning',
      Encryption: 'End-to-end encryption',
      Jurisdiction: 'Switzerland (strong privacy laws)',
      'Open Source': 'Yes - apps are open source',
      'Ad Targeting': 'None',
      'Data Retention': 'User controlled',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: 'Free tier + €5/month',
      businessModel: 'freemium',
    },
    pros: [
      'Zero-access encryption',
      'Swiss privacy laws',
      'No ads or tracking',
      'Open source apps',
    ],
    cons: [
      'Smaller storage on free tier',
      'Limited third-party integrations',
      'Learning curve for encryption features',
    ],
  },

  // SEARCH ENGINES
  {
    id: 'google-search',
    name: 'Google Search',
    category: 'search',
    website: 'https://google.com',
    description: "World's most popular search engine",
    logo: '🔍',
    privacyScore: 3,
    facts: {
      'Data Collection': 'Extensive - tracks all searches',
      'Search Personalization': 'Heavy profiling',
      Jurisdiction: 'United States',
      'Anonymous Search': 'No',
      'Search History': 'Stored indefinitely',
      'Ad Integration': 'Heavy - personalized ads',
    },
    euCompliance: 'concerning',
    pricing: {
      free: true,
      startingPrice: 'Free with ads',
      businessModel: 'ads',
    },
    pros: [
      'Most comprehensive search results',
      'Fast and accurate',
      'Rich features (images, maps, etc.)',
      'Voice search capabilities',
    ],
    cons: [
      'Extensive tracking and profiling',
      'Search history permanently stored',
      'Heavy ad integration',
      'No privacy options',
    ],
  },
  {
    id: 'ecosia',
    name: 'Ecosia',
    category: 'search',
    website: 'https://ecosia.org',
    description: 'Search engine that plants trees with ad revenue',
    logo: '🌱',
    privacyScore: 8,
    facts: {
      'Data Collection': 'Minimal - anonymized after 7 days',
      'Search Personalization': 'None',
      Jurisdiction: 'Germany (EU)',
      'Anonymous Search': 'Yes',
      'Search History': 'Deleted after 7 days',
      'Ad Integration': 'Limited - funds tree planting',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: 'Free',
      businessModel: 'ads',
    },
    pros: [
      'Plants trees with searches',
      'Strong privacy protection',
      'EU-based company',
      'Transparent financial reports',
    ],
    cons: [
      'Search results powered by Bing',
      'Fewer advanced features',
      'Limited local search in some regions',
    ],
  },

  // MESSAGING
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: 'messaging',
    website: 'https://whatsapp.com',
    description: 'Popular messaging app owned by Meta',
    logo: '💬',
    privacyScore: 5,
    facts: {
      Encryption: 'End-to-end for messages',
      'Metadata Collection': 'Extensive - shared with Meta',
      Jurisdiction: 'United States (Meta)',
      'Backup Encryption': 'Not end-to-end',
      'Phone Number': 'Required',
      'Ad Targeting': 'Via Meta integration',
    },
    euCompliance: 'partial',
    pricing: {
      free: true,
      startingPrice: 'Free',
      businessModel: 'ads',
    },
    pros: [
      'End-to-end encryption for messages',
      'Massive user base',
      'Cross-platform support',
      'Voice and video calls',
    ],
    cons: [
      'Metadata shared with Facebook',
      'Phone number requirement',
      'Backups not encrypted',
      'US jurisdiction under Meta',
    ],
  },
  {
    id: 'signal',
    name: 'Signal',
    category: 'messaging',
    website: 'https://signal.org',
    description: 'Privacy-focused messaging app by Signal Foundation',
    logo: '🔐',
    privacyScore: 10,
    facts: {
      Encryption: 'End-to-end for everything',
      'Metadata Collection': 'Minimal - phone number only',
      Jurisdiction: 'United States (non-profit)',
      'Backup Encryption': 'End-to-end encrypted',
      'Phone Number': 'Required (working on usernames)',
      'Ad Targeting': 'None',
    },
    euCompliance: 'compliant',
    pricing: {
      free: true,
      startingPrice: 'Free (donation supported)',
      businessModel: 'free',
    },
    pros: [
      'Gold standard encryption',
      'Open source and audited',
      'No data collection beyond phone number',
      'Non-profit organization',
    ],
    cons: [
      'Requires phone number',
      'Smaller user base',
      'Limited business features',
      'US-based (though non-profit)',
    ],
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
