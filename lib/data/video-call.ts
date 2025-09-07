import { Service } from '../types';

export const videoCallServices: Service[] = [
  // Primary
  {
    id: 'jitsi-meet',
    name: 'Jitsi Meet',
    category: 'video-call',
    isPrimary: true,
    website: 'https://jitsi.org/',
    description:
      'Open-source video conferencing solution supporting up to 100 participants with optional end-to-end encryption. No account required for meetings, with both cloud and self-hosted options available.',
    logo: '',
    facts: {
      encryption: 'E2EE available (SFrame), TLS by default',
      participants: 'Up to 100 (recommended), 500+ possible',
      architecture: 'P2P for 2 users, SFU for groups',
      openSource: 'Yes, Apache License 2.0',
      requirements: 'No account needed for participants',
      selfHostable: 'Yes, Docker or manual installation',
    },
    pricing: {
      free: true,
      startingPrice: 'JaaS (Jitsi as a Service) from $0.99/month per user',
    },
    pros: [
      'No account required for participants',
      'Free public instance available (meet.jit.si)',
      'Optional E2EE for secure meetings',
      'Self-hosting option for complete control',
    ],
    cons: [
      'E2EE limited to 25 participants',
      'Quality can vary on public instances',
      'Self-hosting requires technical expertise',
    ],
    alternatives: ['element-call', 'jami-video'],
    difficulty: 'easy',
    setupTime: { minutes: 5, description: 'Instant meetings via web browser' },
    guides: {
      docs: 'https://jitsi.github.io/handbook/',
      migrationGuide: null,
      platforms: {
        windows: 'https://github.com/jitsi/jitsi-meet-electron/releases',
        macos: 'https://github.com/jitsi/jitsi-meet-electron/releases',
        linux: 'https://github.com/jitsi/jitsi-meet-electron/releases',
        ios: 'https://apps.apple.com/app/jitsi-meet/id1165103905',
        android: 'https://play.google.com/store/apps/details?id=org.jitsi.meet',
      },
    },
  },

  // Alternatives
  {
    id: 'element-call',
    name: 'Element Call',
    category: 'video-call',
    website: 'https://element.io/element-call/',
    description:
      'Matrix-based video conferencing with end-to-end encryption by default. Supports federation across different homeservers with LiveKit SFU for scalability.',
    logo: '',
    facts: {
      encryption: 'E2EE by default (Double Ratchet/Signal Protocol)',
      participants: 'Scalable with LiveKit SFU integration',
      architecture: 'Federated via Matrix protocol',
      openSource: 'Yes, Apache License 2.0',
      requirements: 'Matrix account (free)',
      selfHostable: 'Yes, requires Matrix homeserver',
    },
    pricing: {
      free: true,
      startingPrice: 'Element Cloud from $3/user/month',
    },
    pros: [
      'End-to-end encryption by default',
      'Federated architecture - no vendor lock-in',
      'Integration with Matrix ecosystem',
      'Perfect forward secrecy',
    ],
    cons: [
      'Requires Matrix account',
      'Complex self-hosting setup',
      'Currently in beta (as of 2025)',
      'Learning curve for Matrix concepts',
    ],
    alternatives: ['jitsi-meet', 'jami-video'],
    difficulty: 'medium',
    setupTime: { minutes: 15, description: 'Requires Matrix account setup' },
    guides: {
      docs: 'https://github.com/element-hq/element-call',
      migrationGuide: null,
      platforms: {
        windows: 'https://element.io/download',
        macos: 'https://element.io/download',
        linux: 'https://element.io/download',
        ios: 'https://apps.apple.com/app/element-messenger/id1083446080',
        android: 'https://play.google.com/store/apps/details?id=im.vector.app',
      },
    },
  },

  {
    id: 'jami-video',
    name: 'Jami',
    category: 'video-call',
    website: 'https://jami.net/',
    description:
      'Truly peer-to-peer video conferencing with no servers required. Part of GNU project, offering maximum privacy through distributed hash table technology.',
    logo: '',
    facts: {
      encryption: 'End-to-end with DTLS 1.2',
      participants: 'Up to 25 recommended, 32 maximum',
      architecture: 'Pure P2P via OpenDHT',
      openSource: 'Yes, GNU GPL v3',
      requirements: 'No account or server needed',
      offline: 'Works on local networks without internet',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers - completely free',
    },
    pros: [
      'No servers - impossible to monitor',
      'Works offline on local networks',
      'No registration or phone number required',
      'Maximum privacy and anonymity',
    ],
    cons: [
      'Limited to 25 participants effectively',
      'Requires all participants to use Jami',
      'Connection can be less stable than server-based',
      'Smaller user base',
    ],
    alternatives: ['jitsi-meet', 'element-call'],
    difficulty: 'medium',
    setupTime: { minutes: 10, description: 'Download and create username' },
    guides: {
      docs: 'https://jami.net/help/',
      migrationGuide: null,
      platforms: {
        windows: 'https://jami.net/download-jami-windows/',
        macos: 'https://jami.net/download-jami-macos/',
        linux: 'https://jami.net/download-jami-linux/',
        ios: 'https://apps.apple.com/app/jami/id1306951055',
        android: 'https://play.google.com/store/apps/details?id=cx.ring',
      },
    },
  },
];
