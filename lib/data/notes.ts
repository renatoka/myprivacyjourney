import { Service } from '../types';

export const notesServices: Service[] = [
  // Primary
  {
    id: 'standard-notes',
    name: 'Standard Notes',
    category: 'notes',
    isPrimary: true,
    website: 'https://standardnotes.com/',
    description:
      'Simple and private notes app with cross-platform sync, featuring end-to-end encryption on every platform and a powerful desktop experience with themes and custom editors. Now owned by Proton AG.',
    logo: '',
    facts: {
      encryption: 'XChaCha20-Poly1305 (one of strongest available)',
      openSource: 'Yes, multiple independent audits completed',
      synchronization: 'Cross-platform automatic sync',
      offline: 'Full offline access',
      ownership: 'Joined Proton AG in April 2024',
    },
    pricing: {
      free: true,
      startingPrice: 'Productivity $90/year, Professional $120/year',
    },
    pros: [
      'Multiple independent security audits',
      'Strong XChaCha20-Poly1305 encryption',
      'Zero-knowledge architecture',
      'Owned by privacy-focused Proton AG',
    ],
    cons: [
      'Many advanced features locked behind paywall',
      'Relatively expensive compared to competitors',
      'Lacks some modern features on free plan',
    ],
    alternatives: ['notesnook', 'joplin', 'cryptee', 'org-mode'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Might take time to migrate existing notes',
    },
    guides: {
      docs: 'https://standardnotes.com/help/self-hosting/getting-started',
      migrationGuide: null,
      platforms: {
        windows: null,
        macos: null,
        linux: 'https://standardnotes.com/help/self-hosting/docker',
        ios: null,
        android: null,
      },
    },
  },

  // Alternatives
  {
    id: 'notesnook',
    name: 'Notesnook',
    category: 'notes',
    website: 'https://notesnook.com/',
    description:
      'Free, open-source, easy-to-use end-to-end encrypted note-taking app focused on user privacy with sync functionality and verifiable encryption implementation.',
    logo: '',
    facts: {
      encryption: 'XChaCha20-Poly1305 & Argon2',
      verification: "Open source tool 'Vericrypt' to verify encryption",
      synchronization: 'Real-time encrypted sync across devices',
      offline: 'Full offline functionality',
      openSource: 'Yes (since 2022)',
    },
    pricing: {
      free: true,
      startingPrice: 'Pro $49.99/year or $4.49/month ($9.99/year for students)',
    },
    pros: [
      'Strong encryption with verifiable implementation',
      'Open source and auditable',
      'Zero-knowledge architecture',
      'Affordable pricing (30% cheaper than Evernote)',
    ],
    cons: [
      'Free version very limited (no rich text, file attachments)',
      'Not yet independently audited (unlike Standard Notes)',
      'Relatively new to open source (2022)',
    ],
    alternatives: ['standard-notes', 'joplin', 'cryptee', 'org-mode'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Might take time to migrate existing notes',
    },
    guides: {
      docs: 'https://help.notesnook.com/',
      migrationGuide: 'https://help.notesnook.com/importing-notes/',
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
    id: 'joplin',
    name: 'Joplin',
    category: 'notes',
    website: 'https://joplinapp.org/',
    description:
      'Free, open-source, fully-featured end-to-end encrypted note-taking application handling Markdown notes with offline-first design and multiple sync options.',
    logo: '',
    facts: {
      encryption: 'AES-256 end-to-end encryption (for sync only)',
      architecture: 'Offline first - all data always available locally',
      synchronization: 'Nextcloud, Dropbox, OneDrive, Joplin Cloud',
      localStorage: 'Notes stored unencrypted locally',
      jurisdiction: 'Based in France (EU privacy laws)',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers (optional donations)',
    },
    pros: [
      'Completely free and open source',
      'Strong community development model',
      'EU-based (French privacy law protection)',
      'Offline-first design with no vendor lock-in',
    ],
    cons: [
      'No PIN/password protection for app',
      'Local notes stored unencrypted on device',
      'Manual encryption setup process',
      'Performance issues with large databases',
    ],
    alternatives: ['standard-notes', 'notesnook', 'cryptee', 'org-mode'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Might take time to migrate existing notes',
    },
    guides: {
      docs: 'https://joplinapp.org/help/install/',
      migrationGuide: null,
      platforms: {
        windows: 'https://joplinapp.org/help/install/',
        macos: 'https://joplinapp.org/help/install/',
        linux: 'https://joplinapp.org/help/install/',
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'cryptee',
    name: 'Cryptee',
    category: 'notes',
    website: 'https://crypt.ee/',
    description:
      'Open-source, web-based end-to-end encrypted document editor and photo storage application with unique ghost folders for plausible deniability, operating as PWA.',
    logo: '',
    facts: {
      encryption: 'AES-256 client-side encryption',
      jurisdiction: 'Estonia (outside 14-eyes jurisdiction)',
      ghostFolders: 'Ghost folders for plausible deniability',
      pwa: 'Works as PWA without native apps',
      signup: 'No email/PII required for signup',
    },
    pricing: {
      free: true,
      startingPrice: '€3/month for 10GB, up to €27/month for 2TB',
    },
    pros: [
      'Based in Estonia (strong privacy jurisdiction)',
      'No email/PII required for signup',
      'Unique ghost folders for coercion protection',
      'Client-side encryption ensures zero access',
    ],
    cons: [
      'Only frontend is open source (backend proprietary)',
      'Limited free storage (100MB)',
      'Less mature ecosystem compared to alternatives',
    ],
    alternatives: ['standard-notes', 'notesnook', 'joplin', 'org-mode'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Might take time to migrate existing notes',
    },
    guides: {
      docs: 'https://crypt.ee/faq',
      migrationGuide: null,
      platforms: {
        windows: 'https://crypt.ee/download#desktops',
        macos: 'https://crypt.ee/download#desktops',
        linux: 'https://crypt.ee/download#desktops',
        ios: 'https://crypt.ee/download#ios',
        android: 'https://crypt.ee/download#android',
      },
    },
  },

  {
    id: 'org-mode',
    name: 'Org-mode',
    category: 'notes',
    website: 'https://orgmode.org/',
    description:
      'Major mode for GNU Emacs for keeping notes, maintaining to-do lists, planning projects, and authoring documents with a fast and effective plain-text system providing complete local control.',
    logo: '',
    facts: {
      encryption: 'None by default (plain text files)',
      synchronization: 'File sync tools like Syncthing',
      offline: 'Fully offline (local files only)',
      format: 'Highly portable plain text format',
      maturity: 'Mature and stable (20+ years development)',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Complete local control of data',
      'No cloud dependencies',
      'Highly portable plain text format',
      'Extremely powerful and extensible',
    ],
    cons: [
      'No encryption by default (files are plain text)',
      'Steep learning curve (requires Emacs knowledge)',
      'No built-in sync (requires external tools)',
      'Not suitable for non-technical users',
    ],
    alternatives: ['standard-notes', 'notesnook', 'joplin', 'cryptee'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Might take time to migrate existing notes',
    },
    guides: {
      docs: 'https://orgmode.org/org.html',
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
