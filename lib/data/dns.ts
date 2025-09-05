import { Service } from '../types';

export const dnsServices: Service[] = [
  // Primary
  {
    id: 'quad9',
    name: 'Quad9',
    category: 'dns',
    isPrimary: true,
    website: 'https://quad9.net/',
    description:
      'Swiss-based non-profit DNS service that blocks malicious domains while prioritizing privacy. Offers strong protection with no IP address logging under Swiss privacy laws.',
    logo: '',
    facts: {
      blocking: 'Blocks malware, phishing, and malicious domains (97% effectiveness)',
      dnssec: 'DNSSEC validation',
      logging: 'No IP address logging',
      jurisdiction: 'Swiss privacy law protection',
      protocols: 'DoH, DoT, DNSCrypt support',
      organization: 'Non-profit organization',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Strong privacy protections (Swiss jurisdiction)',
      'No logging of personal data',
      'Effective malware blocking',
      'Non-profit organization with global anycast network',
    ],
    cons: [
      'No custom filtering options',
      'Cannot manually block specific domains',
      'Limited advanced features',
    ],
    alternatives: ['cloudflare-dns', 'mullvad-dns', 'adguard-dns', 'control-d-free'],
  },

  // Alternatives
  {
    id: 'cloudflare-dns',
    name: 'Cloudflare DNS (1.1.1.1)',
    category: 'dns',
    website: 'https://developers.cloudflare.com/1.1.1.1/',
    description:
      'Fast public DNS resolver focused on privacy and speed with global anycast network and limited logging policy for reliable performance.',
    logo: '',
    facts: {
      protocols: 'DoH and DoT support',
      dnssec: 'DNSSEC validation',
      logging: 'Limited logging (24 hours, no personal data)',
      network: 'Global anycast network',
      ipv6: 'IPv6 support',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Very fast response times',
      'Privacy-focused logging policy',
      'Reliable global infrastructure',
      'Easy to configure',
    ],
    cons: ['Limited filtering capabilities', 'Commercial entity (not non-profit)'],
    alternatives: ['quad9', 'mullvad-dns', 'adguard-dns', 'control-d-free'],
  },

  {
    id: 'mullvad-dns',
    name: 'Mullvad DNS',
    category: 'dns',
    website: 'https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/',
    description:
      'DNS service from Mullvad VPN with strict no-logging policy, available to both VPN subscribers and non-subscribers with strong privacy focus.',
    logo: '',
    facts: {
      availability: 'Available to VPN subscribers and non-subscribers',
      protocols: 'DoT support',
      logging: 'Strict no-logging policy',
      dnssec: 'DNSSEC validation',
      company: 'Privacy-focused VPN company',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Strict no-logging policy',
      'Available without VPN subscription',
      'Privacy-focused company',
    ],
    cons: ['Limited filtering options', 'Smaller network compared to others'],
    alternatives: ['quad9', 'cloudflare-dns', 'adguard-dns', 'control-d-free'],
  },

  {
    id: 'adguard-dns',
    name: 'AdGuard Public DNS',
    category: 'dns',
    website: 'https://adguard-dns.io/en/public-dns.html',
    description:
      'Public DNS service with ad-blocking capabilities and multiple filtering levels, supporting modern protocols with family-friendly options.',
    logo: '',
    facts: {
      protocols: 'DoH, DoT, DoQ, DNSCrypt support',
      filtering: 'Multiple filtering levels',
      dnssec: 'DNSSEC validation',
      dataCollection: 'Limited data collection for analysis',
      familyFriendly: 'Family-friendly filtering options',
    },
    pricing: {
      free: true,
      startingPrice: 'No paid tiers',
    },
    pros: [
      'Built-in ad blocking',
      'Multiple protocol support',
      'Family-friendly filtering options',
    ],
    cons: ['Some data collection for threat intelligence', 'Commercial entity'],
    alternatives: ['quad9', 'cloudflare-dns', 'mullvad-dns', 'control-d-free'],
  },

  {
    id: 'control-d-free',
    name: 'Control D Free DNS',
    category: 'dns',
    website: 'https://controld.com/free-dns/',
    description:
      'Free DNS service with customizable filtering options and multiple preconfigured settings, offering good performance with no logging for free tier.',
    logo: '',
    facts: {
      protocols: 'DoH, DoT, DoQ support',
      options: 'Multiple preconfigured options',
      logging: 'No logging for free tier',
      customization: 'Custom filtering available',
      performance: 'Good performance',
    },
    pricing: {
      free: true,
      startingPrice: 'Advanced features from $1.66/month',
    },
    pros: ['Customizable filtering', 'Multiple configuration options', 'Good performance'],
    cons: ['Advanced features require paid plans'],
    alternatives: ['quad9', 'cloudflare-dns', 'mullvad-dns', 'adguard-dns'],
  },
];
