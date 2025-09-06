import { Service } from '../types';

export const messagingServices: Service[] = [
  // Primary
  {
    id: 'signal',
    name: 'Signal Messenger',
    category: 'messaging',
    isPrimary: true,
    website: 'https://signal.org/',
    description:
      'Mobile app providing instant messaging and calls secured with the Signal Protocol, featuring forward secrecy and post-compromise security. Developed by Signal Messenger LLC, a nonprofit organization.',
    logo: '',
    facts: {
      encryption: 'Signal Protocol with forward secrecy',
      openSource: 'Yes (client and protocol)',
      jurisdiction: 'United States (nonprofit)',
      audits: 'Independently audited (2016)',
      metadata: 'Minimal with Sealed Sender enabled',
      funding: 'Donations and grants (nonprofit model)',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers or premium features',
    },
    pros: [
      'Battle-tested encryption protocol used by other apps',
      'Strong privacy protections with encrypted contact lists',
      'Private groups with no server records',
      'Active development with regular security updates',
    ],
    cons: [
      'Requires phone number for registration',
      'Centralized servers (though encrypted)',
      "Limited to Signal's ecosystem",
    ],
    alternatives: ['molly-android', 'simplex-chat', 'briar-messenger'],
    difficulty: 'medium',
    setupTime: {
      minutes: 30,
      description:
        'Could take longer if migrating from another application (contacts, groups, etc.)',
    },
  },

  // Alternatives
  {
    id: 'molly-android',
    name: 'Molly',
    category: 'messaging',
    website: 'https://molly.im/',
    description:
      "Enhanced Android fork of Signal with additional security and usability features. Connects to Signal's network while providing extra privacy protections like database encryption.",
    logo: '',
    facts: {
      encryption: 'Same Signal Protocol as Signal',
      databaseEncryption: 'Passphrase protection for local storage',
      ramShredding: 'Securely clears sensitive data from memory',
      unifiedPush: 'Alternative to Google notifications',
      versions: 'Molly (with Google) and Molly-FOSS (fully open)',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'All Signal features plus enhanced security',
      'Local database passphrase encryption',
      'Automatic app locking and RAM shredding',
      'UnifiedPush for Google-free notifications',
    ],
    cons: [
      'Android only',
      'Third-party development introduces complexity',
      'Setup complexity for UnifiedPush features',
    ],
    alternatives: ['signal', 'simplex-chat', 'briar-messenger'],
    difficulty: 'medium',
    setupTime: {
      minutes: 30,
      description:
        'Could take longer if migrating from another application (contacts, groups, etc.)',
    },
  },

  {
    id: 'simplex-chat',
    name: 'SimpleX Chat',
    category: 'messaging',
    website: 'https://simplex.chat/',
    description:
      'Decentralized messaging platform without any user identifiers, using temporary anonymous pairwise identifiers for maximum privacy and metadata protection.',
    logo: '',
    facts: {
      encryption: 'SimpleX Messaging Protocol with double ratchet',
      identifiers: 'No user identifiers (truly anonymous)',
      quantumResistant: 'Yes',
      audits: 'Trail of Bits (July 2024), Cure53 (October 2022)',
      network: 'Decentralized with temporary message queues',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'No user identifiers of any kind',
      'Strong metadata protection via simplex queues',
      'Quantum-resistant encryption',
      'Multiple independent audits',
    ],
    cons: [
      'Smaller user base (network effects)',
      'Connection setup requires QR codes or links',
      'Message delivery dependent on recipient being online',
    ],
    alternatives: ['signal', 'molly-android', 'briar-messenger'],
    difficulty: 'medium',
    setupTime: {
      minutes: 30,
      description:
        'Could take longer if migrating from another application (contacts, groups, etc.)',
    },
  },

  {
    id: 'briar-messenger',
    name: 'Briar',
    category: 'messaging',
    website: 'https://briarproject.org/',
    description:
      'Peer-to-peer encrypted messaging app designed for activists and journalists, works via Tor, WiFi, or Bluetooth without internet connection for crisis situations.',
    logo: '',
    facts: {
      encryption: 'Bramble Transport Protocol with forward secrecy',
      network: 'Peer-to-peer, no central servers',
      offlineCapability: 'Yes (Bluetooth, WiFi, removable storage)',
      torSupport: 'Built-in via Tor network',
      platforms: 'Android only (desktop in beta)',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Works without internet (Bluetooth/WiFi)',
      'Truly peer-to-peer (no servers)',
      'Censorship resistant',
      'Designed for crisis situations',
    ],
    cons: [
      'Android only (desktop in beta)',
      'Higher battery usage',
      'Limited user base',
      "Can't communicate with non-Briar users",
    ],
    alternatives: ['signal', 'molly-android', 'simplex-chat'],
    difficulty: 'medium',
    setupTime: {
      minutes: 30,
      description:
        'Could take longer if migrating from another application (contacts, groups, etc.)',
    },
  },
];
