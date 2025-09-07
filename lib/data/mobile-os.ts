import { Service } from '../types';

export const mobileOSServices: Service[] = [
  // Primary
  {
    id: 'grapheneos',
    name: 'GrapheneOS',
    category: 'mobile-os',
    isPrimary: true,
    website: 'https://grapheneos.org/',
    description:
      'Security and privacy focused Android-based OS exclusively for Google Pixel devices. Features hardened security, sandboxed Google Play services, and regular updates often before stock Android.',
    logo: '',
    facts: {
      devices: 'Google Pixel 6 and newer',
      security: 'Hardened memory allocator, hardware memory tagging',
      updates: 'Monthly security updates, often before Google',
      playServices: 'Sandboxed Google Play (optional)',
      features: 'Network permission toggle, contact/storage scopes',
      audits: 'Regular security audits and penetration testing',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers - completely free',
    },
    pros: [
      'Strongest mobile security available',
      'Sandboxed Google Play maintains app compatibility',
      '7-year support for newer Pixels',
      'Web-based installer simplifies installation',
    ],
    cons: [
      'Pixel-only limits device choice',
      'Some banking apps may not work',
      'Learning curve for new features',
      'No microG support',
    ],
    alternatives: ['lineageos', 'calyxos-discontinued', 'divestos-discontinued'],
    difficulty: 'medium',
    setupTime: { hours: 1, description: 'Installation and initial setup' },
    guides: {
      docs: 'https://grapheneos.org/usage',
      migrationGuide: 'https://grapheneos.org/install/',
      platforms: {
        windows: 'https://grapheneos.org/install/web',
        macos: 'https://grapheneos.org/install/web',
        linux: 'https://grapheneos.org/install/cli',
        ios: null,
        android: 'https://grapheneos.org/install/',
      },
    },
  },

  // Alternatives
  {
    id: 'lineageos',
    name: 'LineageOS',
    category: 'mobile-os',
    website: 'https://lineageos.org/',
    description:
      'Most popular custom Android ROM supporting 196+ devices. Successor to CyanogenMod, offering clean AOSP experience with extended device support and privacy improvements.',
    logo: '',
    facts: {
      devices: '196+ officially supported devices',
      versions: 'LineageOS 22.1 (Android 15) for 132 devices',
      updates: 'Weekly OTA updates',
      playServices: 'Optional GApps or microG',
      features: 'Privacy Guard, Trust interface',
      community: 'Largest custom ROM community',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers - community project',
    },
    pros: [
      'Widest device compatibility',
      'Active community support',
      'Regular weekly updates',
      'Extends device lifespan significantly',
    ],
    cons: [
      'Security not as hardened as GrapheneOS',
      'Installation complexity varies by device',
      'Unofficial builds may have issues',
      'Requires unlocked bootloader',
    ],
    alternatives: ['grapheneos', 'calyxos-discontinued', 'divestos-discontinued'],
    difficulty: 'hard',
    setupTime: { hours: 2, description: 'Installation varies by device' },
    guides: {
      docs: 'https://wiki.lineageos.org/',
      migrationGuide: 'https://wiki.lineageos.org/devices/',
      platforms: {
        windows: 'https://wiki.lineageos.org/adb_fastboot_guide',
        macos: 'https://wiki.lineageos.org/adb_fastboot_guide',
        linux: 'https://wiki.lineageos.org/adb_fastboot_guide',
        ios: null,
        android: 'https://download.lineageos.org/',
      },
    },
  },
];
