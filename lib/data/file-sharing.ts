import { Service } from '../types';

export const fileSharingServices: Service[] = [
  // Primary
  {
    id: 'onionshare',
    name: 'OnionShare',
    category: 'file-sharing',
    isPrimary: true,
    website: 'https://onionshare.org/',
    description:
      'Open-source tool for securely and anonymously sharing files of any size using the Tor network. Creates temporary onion services for maximum anonymity in file sharing.',
    logo: '',
    facts: {
      network: 'Uses Tor network for anonymity',
      architecture: 'Creates temporary .onion addresses',
      serverless: 'No central servers - direct peer-to-peer sharing',
      features: 'File sharing, receiving, website hosting, chat',
      platforms: 'Windows, macOS, Linux, Android, iOS',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Complete anonymity through Tor',
      'No file size limits',
      'No third-party servers involved',
      'Multiple modes (share, receive, host, chat)',
    ],
    cons: [
      'Requires Tor Browser for recipients',
      'Can be slow due to Tor routing',
      'Sender must keep computer online during transfers',
    ],
    alternatives: ['send', 'syncthing', 'nextcloud'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Time varies based on data migration needs',
    },
    guides: {
      docs: 'https://docs.onionshare.org/2.6.3/en/install.html',
      migrationGuide: null,
      platforms: {
        windows: 'https://onionshare.org/',
        macos: 'https://onionshare.org/',
        linux: 'https://flathub.org/apps/details/org.onionshare.OnionShare',
        ios: 'https://apps.apple.com/app/onionshare/id1601890129',
        android: null,
      },
    },
  },

  // Alternatives
  {
    id: 'send',
    name: 'Send (Firefox Send Fork)',
    category: 'file-sharing',
    website: 'https://send.vis.ee/',
    description:
      "A fork of Mozilla's discontinued Firefox Send service that allows secure file sharing through encrypted links with client-side encryption before upload.",
    logo: '',
    facts: {
      encryption: 'End-to-end encryption (client-side encryption)',
      selfHostable: 'Self-hostable open source software',
      passwordProtection: 'Optional password protection',
      cli: 'Supports CLI tool (ffsend) for command-line usage',
      registration: 'No account registration required',
    },
    pricing: {
      free: true,
      startingPrice: 'Self-hosting costs vary',
    },
    pros: [
      'Strong client-side encryption',
      'Open source and self-hostable',
      'No account registration required',
      'Command line interface available',
    ],
    cons: [
      'Depends on public instances for convenience',
      'Limited file size on public instances',
      'No built-in file management features',
    ],
    alternatives: ['onionshare', 'syncthing', 'nextcloud'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Time varies based on data migration needs',
    },
    guides: {
      docs: 'https://github.com/syncthing/syncthing/blob/main/docs/installation.md',
      migrationGuide: null,
      platforms: {
        windows:
          'https://github.com/syncthing/syncthing/releases/latest/download/syncthing-windows-amd64.exe',
        macos:
          'https://github.com/syncthing/syncthing/releases/latest/download/syncthing-macos-amd64.zip',
        linux: 'https://flathub.org/apps/details/org.syncthing.Syncthing',
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'syncthing',
    name: 'Syncthing',
    category: 'file-sharing',
    website: 'https://syncthing.net/',
    description:
      'Open-source peer-to-peer continuous file synchronization utility that synchronizes files between devices without centralized servers using encrypted transfers.',
    logo: '',
    facts: {
      architecture: 'Peer-to-peer using Block Exchange Protocol',
      encryption: 'TLS encryption for all data transfer',
      discovery: 'Local and global device discovery',
      platforms: 'Windows, macOS, Linux, Android, FreeBSD',
      realTime: 'Real-time file synchronization',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'No third-party servers required',
      'End-to-end encrypted transfers',
      'Real-time synchronization',
      'Highly configurable with cross-platform support',
    ],
    cons: [
      'Steeper learning curve than cloud solutions',
      'Requires technical setup',
      'All devices must be configured manually',
      'Can be resource intensive',
    ],
    alternatives: ['onionshare', 'send', 'nextcloud'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Time varies based on data migration needs',
    },
    guides: {
      docs: 'https://github.com/syncthing/syncthing/blob/main/docs/installation.md',
      migrationGuide: null,
      platforms: {
        windows:
          'https://github.com/syncthing/syncthing/releases/latest/download/syncthing-windows-amd64.exe',
        macos:
          'https://github.com/syncthing/syncthing/releases/latest/download/syncthing-macos-amd64.zip',
        linux: 'https://flathub.org/apps/details/org.syncthing.Syncthing',
        ios: null,
        android: null,
      },
    },
  },

  {
    id: 'nextcloud',
    name: 'Nextcloud',
    category: 'file-sharing',
    website: 'https://nextcloud.com/',
    description:
      'Free and open-source client-server software suite for creating private file hosting services, providing cloud storage with full user control and extensive features.',
    logo: '',
    facts: {
      selfHosted: 'Self-hosted solution',
      webdav: 'WebDAV support',
      encryption: 'End-to-end encryption app available (experimental)',
      plugins: 'Extensive plugin ecosystem',
      platforms: 'Client applications for all platforms',
    },
    pricing: {
      free: true,
      startingPrice: 'Managed hosting available from third parties',
    },
    pros: [
      'Complete control over data',
      'Feature-rich with apps/plugins',
      'Professional collaboration features',
      'Active development with large community',
    ],
    cons: [
      'Requires server management knowledge',
      'E2EE app is experimental and not recommended',
      'Can be complex to set up and maintain',
      'Third-party hosting providers not recommended',
    ],
    alternatives: ['onionshare', 'send', 'syncthing'],
    difficulty: 'medium',
    setupTime: {
      undetermined: true,
      description: 'Time varies based on data migration needs',
    },
    guides: {
      docs: 'https://docs.nextcloud.com/server/latest/admin_manual/installation/index.html',
      migrationGuide: null,
      platforms: {
        windows: 'https://docs.nextcloud.com/server/latest/admin_manual/installation/windows.html',
        macos: 'https://docs.nextcloud.com/server/latest/admin_manual/installation/macos.html',
        linux: 'https://docs.nextcloud.com/server/latest/admin_manual/installation/linux.html',
        ios: 'https://apps.apple.com/app/nextcloud/id1125422120',
        android:
          'https://play.google.com/store/apps/details?id=com.nextcloud.client&hl=en_US&gl=US',
      },
    },
  },
];
