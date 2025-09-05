import { Service } from '../types';

export const socialServices: Service[] = [
  // Primary
  {
    id: 'mastodon',
    name: 'Mastodon',
    category: 'social',
    isPrimary: true,
    website: 'https://joinmastodon.org/',
    description:
      'Free, open-source decentralized social networking platform built on the ActivityPub protocol. Users join independent servers (instances) that federate together, allowing interaction across the network.',
    logo: '',
    facts: {
      protocol: 'ActivityPub (open standard)',
      architecture: 'Decentralized federation',
      openSource: 'Yes (AGPLv3 license)',
      encryption: 'HTTPS/TLS for transport',
      selfHostable: 'Yes',
    },
    pricing: {
      free: true,
      startingPrice: 'Self-hosting costs ~$8/month for basic managed hosting',
    },
    pros: [
      'No central authority or single point of failure',
      'No ads, data mining, or algorithmic manipulation',
      'Strong content warning and privacy controls',
      'Open source and transparent',
    ],
    cons: [
      'Learning curve for federation concepts',
      'Instance choice affects experience and policies',
      'More complex than centralized platforms',
      'Smaller user base than mainstream platforms',
    ],
    alternatives: ['element'],
  },

  // Alternative
  {
    id: 'element',
    name: 'Element',
    category: 'social',
    website: 'https://element.io/',
    description:
      'Secure, decentralized messaging and collaboration app built on the Matrix protocol. Designed for team communication with end-to-end encryption and federation capabilities.',
    logo: '',
    facts: {
      protocol: 'Matrix (open standard)',
      encryption: 'End-to-end encryption (E2EE) by default',
      selfHostable: 'Yes',
      bridges: 'Integrates with Slack, Discord, Teams, WhatsApp',
      audits: 'Regular security audits',
    },
    pricing: {
      free: true,
      startingPrice: 'Element Cloud $3/user/month, Enterprise $6/user/month',
    },
    pros: [
      'End-to-end encryption by default',
      'Decentralized architecture',
      'Bridges to other platforms',
      'Rich features (voice/video, file sharing, rooms)',
    ],
    cons: [
      'Complex setup for self-hosting',
      'Learning curve for Matrix concepts',
      'Performance can vary by homeserver',
      'Limited mainstream adoption',
    ],
    alternatives: ['mastodon'],
  },
];
