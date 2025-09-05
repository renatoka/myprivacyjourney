import { Service } from '../types';

export const storageServices: Service[] = [
  // Primary
  {
    id: 'proton-drive',
    name: 'Proton Drive',
    category: 'storage',
    isPrimary: true,
    website: 'https://proton.me/drive/',
    description:
      'End-to-end encrypted cloud storage from the Proton team, offering zero-knowledge encryption for files and metadata with integration into the comprehensive Proton ecosystem.',
    logo: '',
    facts: {
      encryption: 'End-to-end encryption, zero-knowledge',
      jurisdiction: 'Switzerland (strong privacy laws)',
      audits: 'Web app audited by Securitum (2021)',
      integration: 'Part of Proton ecosystem (Mail, VPN, Calendar, Pass)',
      sharing: 'Encrypted links with expiration/password options',
    },
    pricing: {
      free: false,
      startingPrice: 'Mail Plus 15GB €4.99/month, Unlimited 500GB €9.99/month',
    },
    pros: [
      'Strong zero-knowledge encryption',
      'Swiss jurisdiction with excellent privacy laws',
      'Integration with full Proton ecosystem',
      'No file size limits (only storage capacity)',
    ],
    cons: [
      'Limited free storage compared to mainstream providers',
      'Newer service with fewer features than competitors',
      'Upload speeds can be slower due to encryption',
    ],
    alternatives: ['tresorit', 'peergos'],
  },

  // Alternatives
  {
    id: 'tresorit',
    name: 'Tresorit',
    category: 'storage',
    website: 'https://tresorit.com/',
    description:
      'Swiss-Hungarian encrypted cloud storage provider founded in 2011, owned by Swiss Post, focused on business and enterprise use with multiple security audits.',
    logo: '',
    facts: {
      encryption: 'End-to-end encryption, zero-knowledge',
      jurisdiction: 'Switzerland/Hungary (Swiss Post owned)',
      audits: 'Multiple independent audits (Computest, Ernst & Young)',
      compliance: 'ISO/IEC 27001:2013 certified',
      certification: 'Digital Trust Label from Swiss Digital Initiative',
    },
    pricing: {
      free: false,
      startingPrice: 'Personal 500GB €8.33/month, Premium 1TB €12.50/month',
    },
    pros: [
      'Multiple independent security audits',
      'Strong enterprise features and compliance',
      'Swiss privacy protections',
      'Granular permission controls',
    ],
    cons: [
      'Expensive compared to alternatives',
      'Small free tier (3GB)',
      'Low file size limits on free plan (500MB)',
    ],
    alternatives: ['proton-drive', 'peergos'],
  },

  {
    id: 'peergos',
    name: 'Peergos',
    category: 'storage',
    website: 'https://peergos.org/',
    description:
      'Decentralized, open-source platform built on IPFS providing storage, social media, and applications with quantum-resistant encryption and complete user control.',
    logo: '',
    facts: {
      encryption: 'Quantum-resistant end-to-end encryption',
      architecture: 'Decentralized, peer-to-peer via IPFS',
      audits: 'Radically Open Security (Nov 2024), Cure53 (June 2019)',
      socialFeatures: 'Built-in social network, calendar, tasks',
      selfHostable: 'Yes (Java-based server)',
    },
    pricing: {
      free: true,
      startingPrice: 'Cloud service £5/month for 50GB, £25/month for 500GB',
    },
    pros: [
      'Fully decentralized and censorship-resistant',
      'Open source and independently audited',
      'Quantum-resistant encryption',
      'Can self-host for complete control',
    ],
    cons: [
      'Complex setup for self-hosting',
      'Requires Java runtime environment',
      'Cloud service pricing not competitive',
      'Technical complexity may deter average users',
    ],
    alternatives: ['proton-drive', 'tresorit'],
  },
];
