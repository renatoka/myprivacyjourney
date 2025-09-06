import { Service } from '../types';

export const browserService: Service[] = [
  // Primary
  {
    id: 'mullvad-browser',
    name: 'Mullvad Browser',
    category: 'browser',
    isPrimary: true,
    website: 'https://mullvad.net/en/browser',
    description:
      "A version of Tor Browser with Tor network integrations removed, designed to provide Tor Browser's anti-fingerprinting technologies to VPN users with strongest privacy protections out of the box.",
    logo: '',
    facts: {
      basedOn: 'Tor Browser architecture',
      fingerprinting: 'Identical browser fingerprints for all users',
      extensions: 'Pre-installed: uBlock Origin, NoScript, Mullvad Extension',
      privacy: 'Permanent private browsing mode, no telemetry',
      securityLevels: 'Three levels: Standard, Safer, Safest',
    },
    pricing: {
      free: true,
      startingPrice: 'No premium features or subscriptions',
    },
    pros: [
      'Strongest anti-fingerprinting protection available',
      'No modification needed - works out of the box',
      'Erases data every session for privacy',
      'Developed by privacy experts (Tor Project)',
    ],
    cons: [
      'Less flexible than other browsers',
      'Some website functionality may break',
      'Must restart browser when changing security levels',
      'DNS over HTTPS not enabled by default',
    ],
    alternatives: ['firefox', 'brave-browser', 'arkenfox'],
    difficulty: 'easy',
    setupTime: { minutes: 10, description: 'Download and install the browser' },
    guides: {
      docs: 'https://mullvad.net/en/help/install-mullvad-browser',
      migrationGuide: null,
      platforms: {
        windows: 'https://mullvad.net/en/download/browser/windows',
        macos: 'https://mullvad.net/en/download/browser/macos',
        linux: 'https://mullvad.net/en/download/browser/linux',
        ios: null,
        android: null,
      },
    },
  },

  // Alternatives
  {
    id: 'firefox',
    name: 'Firefox',
    category: 'browser',
    website: 'https://www.firefox.com/',
    description:
      "Mozilla's open-source browser providing strong privacy settings like Enhanced Tracking Protection, serving as an excellent alternative to Google Chrome for casual users.",
    logo: '',
    facts: {
      openSource: 'Yes (Mozilla Public License)',
      tracking: 'Enhanced Tracking Protection blocks trackers, fingerprinting',
      cookieProtection: 'Total Cookie Protection (isolates cookies per site)',
      dns: 'DNS over HTTPS capability, Encrypted Client Hello (ECH)',
      telemetry: 'Can be disabled',
    },
    pricing: {
      free: true,
      startingPrice: 'No premium tiers',
    },
    pros: [
      "Avoid Google's browser monopoly",
      'Highly customizable privacy settings',
      'Strong default privacy protections',
      'Regular security updates from non-profit Mozilla',
    ],
    cons: [
      'Requires manual configuration for optimal privacy',
      'Includes download tokens and telemetry by default',
      'Not as fingerprint-resistant as Mullvad Browser',
    ],
    alternatives: ['mullvad-browser', 'brave-browser', 'arkenfox'],
    difficulty: 'easy',
    setupTime: { minutes: 10, description: 'Download and install the browser' },
    guides: {
      docs: 'https://support.mozilla.org/en-US/kb/firefox-privacy-and-security-features',
      migrationGuide: null,
      platforms: {
        windows: 'https://www.firefox.com/en-US/',
        macos: 'https://www.firefox.com/en-US/',
        linux: 'https://www.firefox.com/en-US/',
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'brave-browser',
    name: 'Brave',
    category: 'browser',
    website: 'https://brave.com/',
    description:
      'A Chromium-based browser with built-in privacy protections and content blocking functionality, offering Chromium compatibility with enhanced privacy features.',
    logo: '',
    facts: {
      basedOn: "Chromium (Google's open source project)",
      blocking: 'Built-in ad and tracker blocking (Brave Shields)',
      fingerprinting: 'Fingerprinting protection',
      torIntegration: 'Tor integration available (Private Window with Tor)',
      rewards: 'Brave Rewards system with BAT cryptocurrency',
    },
    pricing: {
      free: true,
      startingPrice: 'Brave Premium $9.99/month (includes VPN, ad-free search)',
    },
    pros: [
      'Chromium compatibility with familiar interface',
      'Strong privacy protections enabled by default',
      'Built-in content blocker',
      'Fast browsing (3x-6x faster page loads)',
    ],
    cons: [
      "Still built on Google's Chromium base",
      'Cryptocurrency focus may not appeal to all users',
      'Less fingerprint protection than Mullvad Browser',
    ],
    alternatives: ['mullvad-browser', 'firefox', 'arkenfox'],
    difficulty: 'easy',
    setupTime: { minutes: 10, description: 'Download and install the browser' },
    guides: {
      docs: 'https://brave.com/download/',
      migrationGuide: null,
      platforms: {
        windows: 'https://support.brave.app/hc/en-us/sections/360003286112-Installing-Brave',
        macos: 'https://support.brave.app/hc/en-us/sections/360003286112-Installing-Brave',
        linux: 'https://brave.com/linux/',
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'arkenfox',
    name: 'Arkenfox user.js',
    category: 'browser',
    website: 'https://github.com/arkenfox/user.js/',
    description:
      'A comprehensive set of carefully considered Firefox configuration options for advanced users seeking maximum privacy customization and control.',
    logo: '',
    facts: {
      configuration: 'Firefox configuration file (user.js)',
      settings: 'Hundreds of privacy-focused settings',
      fingerprinting: 'Canvas randomization for fingerprint protection',
      containers: 'Container support enabled',
      maintenance: 'Requires manual setup and maintenance',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Maximum customization and control',
      'Very flexible with per-site exceptions',
      'Container support for session isolation',
      'Active community development',
    ],
    cons: [
      'Requires technical expertise',
      'Time-intensive setup and maintenance',
      'Can break websites without proper configuration',
      'Not as effective as Mullvad Browser against advanced fingerprinting',
    ],
    alternatives: ['mullvad-browser', 'firefox', 'brave-browser'],
    difficulty: 'easy',
    setupTime: { minutes: 10, description: 'Download and install the browser' },
    guides: {
      docs: 'https://github.com/arkenfox/user.js',
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
];
