import { Service } from '../types';

export const emailServices: Service[] = [
  // Primary
  {
    id: 'proton-mail',
    name: 'Proton Mail',
    category: 'email',
    isPrimary: true,
    website: 'https://proton.me/mail/',
    description:
      'Swiss-based secure email service with zero-access encryption, offering full end-to-end encryption with OpenPGP support and Web Key Directory (WKD) standard compliance for cross-provider encrypted messaging.',
    logo: '',
    facts: {
      encryption: 'Zero-access encryption with OpenPGP/WKD support',
      jurisdiction: 'Switzerland',
      openSource: 'Yes, apps audited by Securitum (2021)',
      twoFactor: 'TOTP and hardware security keys (FIDO2/U2F)',
      onionService: 'Yes, Tor .onion service available',
      protocols: 'IMAP/SMTP via Proton Mail Bridge (paid plans)',
    },
    pricing: {
      free: false,
      startingPrice: 'Mail Plus €4.99/month, Unlimited €9.99/month',
    },
    pros: [
      'Strong zero-knowledge encryption with OpenPGP compatibility',
      'Excellent security track record with independent audits',
      'Swiss privacy jurisdiction with anonymous payments',
      'Comprehensive ecosystem including VPN, Calendar, Drive',
    ],
    cons: [
      'Bridge required for desktop email clients (paid only)',
      'Free plan has message limits and restricted features',
      'Higher cost for full feature access',
    ],
    alternatives: ['mailbox-org', 'tuta-mail'],
    difficulty: 'medium',
    setupTime: { undetermined: true, description: 'Time varies based on data migration needs' },
    guides: {
      docs: 'https://proton.me/support/knowledge-base/getting-started',
      migrationGuide: 'https://proton.me/support/switch-from-gmail-to-proton',
      platforms: {
        windows: 'https://proton.me/support/protonmail-bridge-install',
        macos: 'https://proton.me/support/protonmail-bridge-install',
        linux: 'https://proton.me/support/protonmail-bridge-install',
        ios: null,
        android: null,
      },
    },
  },

  // Alternatives
  {
    id: 'mailbox-org',
    name: 'Mailbox.org',
    category: 'email',
    website: 'https://mailbox.org/',
    description:
      'German-based secure email provider operating since 2014, powered by 100% renewable energy. Focuses on privacy, ad-free communication, and GDPR compliance with integrated OpenPGP encryption.',
    logo: '',
    facts: {
      encryption: 'OpenPGP/WKD support for cross-provider E2EE',
      jurisdiction: 'Germany with GDPR compliance',
      energy: '100% renewable energy powered',
      twoFactor: 'TOTP and YubiKey 2FA support',
      protocols: 'Standard email protocols (IMAP/SMTP/POP3)',
    },
    pricing: {
      free: false,
      startingPrice: 'Light €1/month, Standard €3/month, Premium €9/month',
    },
    pros: [
      'Excellent value for money',
      'Full-featured online office suite included',
      'Strong environmental commitment (100% green energy)',
      'GDPR compliant with German privacy protections',
    ],
    cons: [
      'No cryptocurrency payment options',
      'Limited 2FA support',
      'Calendar/contacts encryption not available',
    ],
    alternatives: ['proton-mail', 'tuta-mail'],
    difficulty: 'medium',
    setupTime: { undetermined: true, description: 'Time varies based on data migration needs' },
    guides: {
      docs: 'https://kb.mailbox.org/',
      migrationGuide:
        'https://kb.mailbox.org/en/private/account-article/move-away-from-gmail-to-mailbox-org-step-by-step/',
      platforms: {
        windows: null,
        macos: null,
        linux: null,
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'tuta-mail',
    name: 'Tuta',
    category: 'email',
    website: 'https://tuta.com/',
    description:
      'German-based encrypted email service operating since 2011. Uses proprietary encryption system with automatic end-to-end encryption for all data including subject lines and metadata.',
    logo: '',
    facts: {
      encryption: 'Proprietary encryption (not OpenPGP compatible)',
      quantumResistant: 'Quantum-resistant encryption algorithms',
      jurisdiction: 'Germany with GDPR compliance',
      protocols: 'Proprietary protocol only (no IMAP/SMTP)',
      twoFactor: 'TOTP and U2F two-factor authentication',
    },
    pricing: {
      free: true,
      startingPrice: 'Revolutionary €3/month, Legend €8/month',
    },
    pros: [
      'Very affordable pricing',
      'Automatic encryption including subject lines',
      'Quantum-resistant encryption',
      'Strong German privacy laws protection',
    ],
    cons: [
      'No OpenPGP support (incompatible with other providers)',
      'No IMAP/SMTP support',
      'Limited email import/export capabilities',
    ],
    alternatives: ['proton-mail', 'mailbox-org'],
    difficulty: 'medium',
    setupTime: { undetermined: true, description: 'Time varies based on data migration needs' },
    guides: {
      docs: 'https://tuta.com/',
      migrationGuide: 'https://tuta.com/blog/kickoff-import',
      platforms: {
        windows: 'https://tuta.com/blog/desktop-clients-tutanota',
        macos: 'https://tuta.com/blog/desktop-clients-tutanota',
        linux: 'https://tuta.com/blog/desktop-clients-tutanota',
        ios: null,
        android: null,
      },
    },
  },
];
