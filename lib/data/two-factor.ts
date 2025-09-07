import { Service } from '../types';

export const twoFactorServices: Service[] = [
  // Primary
  {
    id: 'ente-auth',
    name: 'Ente Auth',
    category: 'two-factor',
    isPrimary: true,
    website: 'https://ente.io/auth/',
    description:
      'Open-source 2FA authenticator with end-to-end encrypted cloud backups across all platforms. Offers zero-knowledge architecture with free encrypted sync forever, making it the most versatile option for privacy-conscious users.',
    logo: '',
    facts: {
      encryption: 'End-to-end encryption with zero-knowledge architecture',
      platforms: 'iOS, Android, Web, Desktop (Windows, macOS, Linux)',
      backup: 'Free encrypted cloud backups forever',
      openSource: 'Yes, audited by Cure53, Symbolic Software, Fallible',
      migration: 'One-click import from Google Authenticator and others',
      offline: 'Works offline, account creation optional',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers - all features free',
    },
    pros: [
      'True cross-platform support including web and desktop',
      'Free encrypted cloud backups with no premium required',
      'Multiple independent security audits',
      'Zero-knowledge architecture ensures privacy',
    ],
    cons: [
      'Newer to market compared to established alternatives',
      'Requires account for sync features',
      'Smaller community compared to Aegis',
    ],
    alternatives: ['aegis-authenticator', 'twofas', 'raivo-otp'],
    difficulty: 'easy',
    setupTime: { minutes: 10, description: 'Quick setup with import wizard' },
    guides: {
      docs: 'https://help.ente.io/auth/',
      migrationGuide: 'https://help.ente.io/auth/migration-guides/import',
      platforms: {
        windows: 'https://ente.io/download/desktop',
        macos: 'https://ente.io/download/desktop',
        linux: 'https://ente.io/download/desktop',
        ios: 'https://apps.apple.com/app/ente-auth/id6444121398',
        android: 'https://play.google.com/store/apps/details?id=io.ente.auth',
      },
    },
  },

  // Alternatives
  {
    id: 'aegis-authenticator',
    name: 'Aegis Authenticator',
    category: 'two-factor',
    website: 'https://getaegis.app/',
    description:
      'Android-only open-source authenticator focused on security and privacy. Features strong encryption, biometric unlock, and complete local control over data without requiring cloud services.',
    logo: '',
    facts: {
      encryption: 'AES-256-GCM encryption for vault',
      platforms: 'Android only',
      backup: 'Local encrypted backups via Storage Access Framework',
      openSource: 'Yes, actively maintained on GitHub',
      features: 'Biometric unlock, automatic backups, icon packs',
      permissions: 'No internet permission required',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers - completely free',
    },
    pros: [
      'Strong local encryption with no cloud dependency',
      'Active development with regular updates',
      'Comprehensive backup options without cloud',
      'No internet permission ensures offline-only operation',
    ],
    cons: [
      'Android exclusive - no iOS version',
      'No built-in cloud sync',
      'Manual backup management required',
    ],
    alternatives: ['ente-auth', 'twofas', 'andotp'],
    difficulty: 'easy',
    setupTime: { minutes: 10, description: 'Simple setup with QR code scanning' },
    guides: {
      docs: 'https://github.com/beemdevelopment/Aegis/wiki',
      migrationGuide: 'https://github.com/beemdevelopment/Aegis/wiki/Migrating-from-other-apps',
      platforms: {
        windows: null,
        macos: null,
        linux: null,
        ios: null,
        android: 'https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis',
      },
    },
  },

  {
    id: 'twofas',
    name: '2FAS',
    category: 'two-factor',
    website: 'https://2fas.com/',
    description:
      'Cross-platform authenticator with focus on user experience and security. Offers encrypted cloud sync between iOS and Android with browser extension for desktop convenience.',
    logo: '',
    facts: {
      encryption: 'AES-256 encryption for backups',
      platforms: 'iOS, Android, Browser Extension',
      backup: 'Encrypted iCloud/Google Drive sync',
      openSource: 'Yes, client apps are open source',
      features: 'Browser extension, push notifications, widgets',
      sync: 'Cross-platform sync between mobile devices',
    },
    pricing: {
      free: true,
      startingPrice: 'Premium $10/year for extended backup storage',
    },
    pros: [
      'Cross-platform sync between iOS and Android',
      'Browser extension for desktop convenience',
      'User-friendly interface with modern design',
      'Push notification support for quick approval',
    ],
    cons: [
      'Limited features on free tier',
      'Requires cloud services for sync',
      'No dedicated desktop application',
    ],
    alternatives: ['ente-auth', 'aegis-authenticator', 'raivo-otp'],
    difficulty: 'easy',
    setupTime: { minutes: 10, description: 'Quick setup with automatic backup' },
    guides: {
      docs: 'https://support.2fas.com/',
      migrationGuide: 'https://support.2fas.com/guides/how-to-migrate-from-google-authenticator',
      platforms: {
        windows: null,
        macos: null,
        linux: null,
        ios: 'https://apps.apple.com/app/2fa-authenticator-2fas/id1217793794',
        android: 'https://play.google.com/store/apps/details?id=com.twofasapp',
      },
    },
  },

  {
    id: 'raivo-otp',
    name: 'Raivo OTP',
    category: 'two-factor',
    website: 'https://raivo-otp.com/',
    description:
      'iOS-exclusive authenticator with native design and iCloud sync. Note: Acquired by Mobime in 2023, raising concerns about future privacy direction.',
    logo: '',
    facts: {
      encryption: 'AES-256 encryption',
      platforms: 'iOS only',
      backup: 'iCloud sync with encryption',
      openSource: 'Was open source, status uncertain post-acquisition',
      acquisition: 'Acquired by Mobime in 2023',
      features: 'Native iOS design, search, archive',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers currently',
    },
    pros: [
      'Native iOS design and integration',
      'iCloud sync for Apple ecosystem',
      'Clean, intuitive interface',
    ],
    cons: [
      'iOS exclusive - no Android version',
      'Uncertain future after Mobime acquisition',
      'Open source status unclear',
      'Privacy concerns post-acquisition',
    ],
    alternatives: ['ente-auth', 'twofas', 'tofu-authenticator'],
    difficulty: 'easy',
    setupTime: { minutes: 10, description: 'Simple iOS setup' },
    guides: {
      docs: 'https://github.com/raivo-otp/ios-application/wiki',
      migrationGuide: null,
      platforms: {
        windows: null,
        macos: null,
        linux: null,
        ios: 'https://apps.apple.com/app/raivo-otp/id1459042137',
        android: null,
      },
    },
  },
];
