import { Service } from '../types';

export const searchServices: Service[] = [
  // Primary
  {
    id: 'startpage',
    name: 'Startpage',
    category: 'search',
    isPrimary: true,
    website: 'https://startpage.com/',
    description:
      'Netherlands-based private search engine that provides Google search results without tracking. Features Anonymous View for additional privacy protection when visiting result pages.',
    logo: '',
    facts: {
      sources: 'Google and Microsoft Bing results',
      anonymousView: 'Anonymous View proxy feature',
      logging: 'No IP address logging or tracking',
      jurisdiction: 'Netherlands-based (European privacy standards)',
      torSupport: 'Tor hidden service available',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Provides Google-quality results without tracking',
      'Anonymous View adds extra privacy layer',
      'Strong European privacy protections',
      'Good balance of privacy and result quality',
    ],
    cons: [
      'Owned by System1 (advertising company)',
      'Dependent on Google/Bing for all results',
      "May inherit Google's algorithmic biases",
    ],
    alternatives: ['brave-search', 'duckduckgo', 'searxng'],
    difficulty: 'easy',
    setupTime: { minutes: 5, description: 'Simply start using the search engine' },
    guides: {
      docs: 'https://www.startpage.com/',
      migrationGuide: null,
      platforms: {
        windows: null,
        macos: null,
        linux: null,
        ios: null,
        android: null,
      },
    },
  },

  // Alternatives
  {
    id: 'brave-search',
    name: 'Brave Search',
    category: 'search',
    isPrimary: false,
    website: 'https://search.brave.com/',
    description:
      'Independent search engine with own index,  focusing on privacy while providing high-quality results through Web Discovery Project without relying on Google or Bing.',
    logo: '',
    facts: {
      index: 'Independent index with 20+ billion pages',
      tracking: 'No user tracking or profile building',
      features: 'Goggles for customizable result ranking, Discussions feature',
      torSupport: 'Tor hidden service available',
      openSource: 'Web Discovery Project for anonymous data contribution',
    },
    pricing: {
      free: true,
      startingPrice: 'Premium $3/month (removes ads, early access)',
    },
    pros: [
      'Truly independent index not reliant on Google/Bing',
      'Strong privacy protections with no tracking',
      'Innovative features like Discussions and Goggles',
      'High-quality, contextually relevant results',
    ],
    cons: [
      'Smaller index compared to Google but growing rapidly',
      'Premium account may enable query correlation',
      'Some specialized searches may have fewer results',
    ],
    alternatives: ['duckduckgo', 'startpage', 'searxng'],
    difficulty: 'easy',
    setupTime: { minutes: 5, description: 'Simply start using the search engine' },
    guides: {
      docs: 'https://search.brave.com/',
      migrationGuide: null,
      platforms: {
        windows: 'https://search.brave.com/default',
        macos: 'https://search.brave.com/default',
        linux: 'https://search.brave.com/default',
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    category: 'search',
    website: 'https://duckduckgo.com/',
    description:
      'One of the most mainstream private search engines, operating since 2008. Provides privacy-focused search using primarily Microsoft Bing results with Bang shortcuts.',
    logo: '',
    facts: {
      sources: 'Primarily Microsoft Bing results',
      tracking: 'No user tracking or personalization',
      features: 'Bangs feature for direct site searches',
      torSupport: 'Tor hidden service available',
      javascript: 'JavaScript-free versions available (/lite, /html)',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Well-established with mainstream adoption',
      'Excellent privacy protection (no tracking)',
      'Useful Bang shortcuts for quick searches',
      'Strong mobile app ecosystem',
    ],
    cons: [
      'Dependent on Microsoft Bing for core results',
      'Quality limited by underlying Bing index',
      "Results may show Bing's biases or censorship",
    ],
    alternatives: ['brave-search', 'startpage', 'searxng'],
    difficulty: 'easy',
    setupTime: { minutes: 5, description: 'Simply start using the search engine' },
    guides: {
      docs: 'https://duckduckgo.com/',
      migrationGuide: null,
      platforms: {
        windows:
          'https://duckduckgo.com/duckduckgo-help-pages/desktop/adding-duckduckgo-to-your-browser',
        macos:
          'https://duckduckgo.com/duckduckgo-help-pages/desktop/adding-duckduckgo-to-your-browser',
        linux:
          'https://duckduckgo.com/duckduckgo-help-pages/desktop/adding-duckduckgo-to-your-browser',
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'searxng',
    name: 'SearXNG',
    category: 'search',
    website: 'https://github.com/searxng/searxng/',
    description:
      'Open-source, self-hostable metasearch engine that aggregates results from 70+ search engines. Fork of original SearX project with enhanced features and active maintenance.',
    logo: '',
    facts: {
      openSource: 'Yes, can audit all code',
      selfHostable: 'Docker support for self-hosting',
      sources: 'Aggregates from 230+ search engines and databases',
      tracking: 'No user tracking or data collection',
      customization: 'Highly customizable (themes, engines, results)',
    },
    pricing: {
      free: true,
      startingPrice: 'VPS costs typically €5-20/month depending on usage',
    },
    pros: [
      'Complete transparency through open-source code',
      'Full control over data and privacy when self-hosted',
      'Extremely customizable and hackable',
      'No corporate ownership or advertising dependencies',
    ],
    cons: [
      'Requires technical knowledge to self-host properly',
      'Performance depends on hosting setup',
      'Results quality varies depending on configured engines',
    ],
    alternatives: ['brave-search', 'duckduckgo', 'startpage'],
    difficulty: 'easy',
    setupTime: { minutes: 5, description: 'Simply start using the search engine' },
    guides: {
      docs: 'https://searxng.org/',
      migrationGuide: null,
      platforms: {
        windows: 'https://docs.searxng.org/admin/installation-searxng.html',
        macos: 'https://docs.searxng.org/admin/installation-searxng.html',
        linux: 'https://docs.searxng.org/admin/installation-searxng.html',
        ios: null,
        android: null,
      },
    },
  },
];
