import { Service } from '../types';

export const vpnServices: Service[] = [
  // Primary
  {
    id: 'proton-vpn',
    name: 'Proton VPN',
    category: 'vpn',
    isPrimary: true,
    website: 'https://protonvpn.com/',
    description:
      'Swiss-based VPN service with strong focus on privacy, security, and transparency, offering both excellent free and premium tiers with advanced features like Secure Core architecture.',
    logo: '',
    facts: {
      jurisdiction: 'Switzerland (outside 14 Eyes)',
      servers: '4,900+ servers in 112 countries',
      protocols: 'WireGuard, OpenVPN, IKEv2',
      audits: 'Independently audited (SEC Consult 2020, Securitum 2021)',
      logging: 'Verified no-logs policy',
      specialFeatures: 'Secure Core, NetShield ad-blocker, Tor over VPN',
    },
    pricing: {
      free: false,
      startingPrice: 'VPN Plus €4.49-9.99/month, Unlimited €9.99-12.99/month',
    },
    pros: [
      'Excellent free plan with unlimited data',
      'Swiss privacy laws protection with Secure Core',
      'Regular independent security audits',
      'Accepts anonymous payments (cash, Bitcoin)',
    ],
    cons: [
      'Higher prices for short-term plans',
      'Limited IPv6 support',
      'Ephemeral port forwarding only (60-second leases)',
    ],
    alternatives: ['ivpn', 'mullvad-vpn'],
  },

  // Alternatives
  {
    id: 'ivpn',
    name: 'IVPN',
    category: 'vpn',
    website: 'https://www.ivpn.net/',
    description:
      'Gibraltar-based premium VPN provider focused on privacy and transparency, offering high-quality service with strong security auditing and ethical practices.',
    logo: '',
    facts: {
      jurisdiction: 'Gibraltar (outside 5/9/14 Eyes surveillance alliances)',
      servers: '140+ servers in 37 countries across 48 locations',
      protocols: 'WireGuard (default), OpenVPN',
      audits: 'Multiple independent audits (verified no logging)',
      features: 'AntiTracker with Hardcore Mode, multi-hop routing',
    },
    pricing: {
      free: false,
      startingPrice: 'Standard $6/month, Pro $10/month, Weekly $2 for testing',
    },
    pros: [
      'Strong no-logs policy with multiple audits',
      'Privacy-friendly Gibraltar jurisdiction',
      'Anonymous account creation (no email required)',
      'Accepts cash and Monero payments',
    ],
    cons: [
      'Higher pricing compared to competitors',
      'Smaller server network',
      'No free trial (only money-back guarantee)',
      'Port forwarding removed in 2023',
    ],
    alternatives: ['proton-vpn', 'mullvad-vpn'],
  },

  {
    id: 'mullvad-vpn',
    name: 'Mullvad VPN',
    category: 'vpn',
    website: 'https://mullvad.net/',
    description:
      'Swedish VPN service renowned for transparency, security, and simple pricing. Focuses on privacy and anonymity with innovative account system and consistent flat-rate pricing.',
    logo: '',
    facts: {
      jurisdiction: 'Sweden (subject to 14 Eyes, but verified no-logs policy)',
      servers: '690+ servers in 49 countries across 80+ locations',
      protocols: 'WireGuard (preferred), OpenVPN',
      audits: 'Multiple independent audits (Cure53, Assured AB, ROS)',
      accounts: 'Anonymous account numbers (no email required)',
    },
    pricing: {
      free: false,
      startingPrice: '€5/month flat rate regardless of subscription length',
    },
    pros: [
      'Anonymous account numbers (no email required)',
      'Consistent flat-rate pricing since 2009',
      'Multiple security audits with published results',
      'Cash payment option for complete anonymity',
    ],
    cons: [
      'Port forwarding removed in 2023',
      'Smaller server network than major competitors',
      'No free plan available',
      'Based in 14 Eyes country (though audited no-logs policy)',
    ],
    alternatives: ['proton-vpn', 'ivpn'],
  },
];
