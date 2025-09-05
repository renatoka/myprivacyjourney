import { Service } from '../types';

export const passwordServices: Service[] = [
  // Primary
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    category: 'password',
    isPrimary: true,
    website: 'https://bitwarden.com/',
    description:
      'Open-source password manager offering both cloud sync and self-hosted options. Provides comprehensive password management with strong encryption and excellent value.',
    logo: '',
    facts: {
      encryption: 'AES-256 bit encryption, PBKDF2/Argon2 KDF',
      architecture: 'Zero-knowledge',
      openSource: 'Yes (client and server)',
      selfHostable: 'Yes (Vaultwarden alternative)',
      audits: 'Regular third-party security audits',
      compliance: 'GDPR, HIPAA, SOC2 compliant',
    },
    // Primary (continued)
    pricing: {
      free: true,
      startingPrice: 'Premium $10/year, Family $40/year, Business $3/user/month',
    },
    pros: [
      'Completely free core features with no device limits',
      'Open source with transparency',
      'Self-hosting option available',
      'Excellent value for families and teams',
    ],
    cons: [
      'Interface less polished than some competitors',
      'Self-hosted setup requires technical knowledge',
      'Some advanced features require premium',
    ],
    alternatives: ['proton-pass', 'onepassword', 'psono', 'keepassxc'],
  },

  // Alternatives
  {
    id: 'proton-pass',
    name: 'Proton Pass',
    category: 'password',
    website: 'https://proton.me/pass/',
    description:
      'Password manager from Swiss privacy company Proton, featuring end-to-end encryption, integrated email aliases, and 2FA authentication with Proton ecosystem integration.',
    logo: '',
    facts: {
      encryption: 'AES-256-GCM encryption',
      jurisdiction: 'Switzerland (Swiss-based servers)',
      audits: 'Cure53 security audit completed',
      integration: 'Works with Proton ecosystem',
      emailAliases: 'Integrated SimpleLogin',
      twoFactor: 'Built-in TOTP authenticator',
    },
    pricing: {
      free: true,
      startingPrice: 'Plus $23.88/year, Family $59.88/year, Unlimited $119.88/year',
    },
    pros: [
      'Strong free tier with unlimited storage',
      'Swiss privacy laws protection',
      'Integrated email alias generation',
      'Built-in 2FA authenticator',
    ],
    cons: [
      'Relatively new to password management market',
      'Limited advanced features compared to competitors',
      'No self-hosting option',
    ],
    alternatives: ['bitwarden', 'onepassword', 'psono', 'keepassxc'],
  },

  {
    id: 'onepassword',
    name: '1Password',
    category: 'password',
    website: 'https://1password.com/',
    description:
      'Premium password manager focused on user experience and security, offering comprehensive features for individuals and businesses with strong customer support and dual-key protection.',
    logo: '',
    facts: {
      encryption: 'AES-256 encryption with Secret Key',
      architecture: 'Zero-knowledge with 34-character Secret Key',
      audits: 'Regular third-party security audits',
      compliance: 'SOC2, ISO27001 certified',
      travelMode: 'Travel Mode to hide sensitive vaults',
    },
    pricing: {
      free: false,
      startingPrice: 'Individual $35.88/year, Family $59.88/year, Business $95.88/user/year',
    },
    pros: [
      'Exceptional user experience and interface',
      'Strong security with dual-key protection',
      'Comprehensive platform support',
      'Excellent customer support',
    ],
    cons: [
      'No free tier available',
      'Higher pricing than competitors',
      'Closed source software',
      'No self-hosting option',
    ],
    alternatives: ['bitwarden', 'proton-pass', 'psono', 'keepassxc'],
  },

  {
    id: 'psono',
    name: 'Psono',
    category: 'password',
    website: 'https://psono.com/',
    description:
      'German-based open-source password manager focused on team collaboration, offering both cloud and self-hosted options with enterprise features and strong privacy protections.',
    logo: '',
    facts: {
      encryption: 'Curve25519 + Salsa20 (NaCl cryptography)',
      jurisdiction: 'Germany (German privacy laws)',
      selfHostable: 'Yes, Docker support',
      integration: 'LDAP, SAML integration',
      twoFactor: 'Google Authenticator, Duo, YubiKey support',
    },
    pricing: {
      free: true,
      startingPrice: 'Enterprise €2/user/month, SaaS €3/user/month',
    },
    pros: [
      'Completely free community edition',
      'Open source with full transparency',
      'Strong focus on team collaboration',
      'German privacy laws protection',
    ],
    cons: [
      'Smaller user base and community',
      'Interface less polished than major competitors',
      'Limited third-party integrations',
    ],
    alternatives: ['bitwarden', 'proton-pass', 'onepassword', 'keepassxc'],
  },

  {
    id: 'keepassxc',
    name: 'KeePassXC',
    category: 'password',
    website: 'https://keepassxc.org/',
    description:
      'Cross-platform community fork of KeePassX, offering a modern interface for the KeePass database format with enhanced features and security for local password storage.',
    logo: '',
    facts: {
      encryption: 'AES-256 or ChaCha20 encryption',
      architecture: 'Local storage, no cloud dependency',
      audits: 'Community-reviewed, security audit completed 2022',
      format: 'KDBX (KeePass compatible)',
      browserIntegration: 'Chrome, Firefox, Edge, Safari',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers (donations accepted)',
    },
    pros: [
      'Completely free with all features',
      'No cloud dependency or subscription',
      'Strong encryption and security',
      'Cross-platform compatibility',
    ],
    cons: [
      'Manual sync between devices required',
      'More complex setup than cloud solutions',
      'No automatic backup (user responsibility)',
      'Learning curve for beginners',
    ],
    alternatives: ['bitwarden', 'proton-pass', 'onepassword', 'psono'],
  },
];
