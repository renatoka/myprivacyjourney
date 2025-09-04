import { Service } from './types'

const PRIMARY_SERVICES: Service[] = [
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
    },
    {
        id: 'startpage',
        name: 'Startpage',
        category: 'search',
        isPrimary: true,
        website: 'https://startpage.com/',
        description:
            'Netherlands-based private search engine that provides Google search results without tracking. Features Anonymous View for additional privacy protection when visiting result pages.',
        logo: '',
        facts: {
            sources: 'Google and Microsoft Bing results',
            anonymousView: 'Anonymous View proxy feature',
            logging: 'No IP address logging or tracking',
            jurisdiction: 'Netherlands-based (European privacy standards)',
            torSupport: 'Tor hidden service available',
        },
        pricing: {
            free: true,
            startingPrice: 'No paid tiers',
        },
        pros: [
            'Provides Google-quality results without tracking',
            'Anonymous View adds extra privacy layer',
            'Strong European privacy protections',
            'Good balance of privacy and result quality',
        ],
        cons: [
            'Owned by System1 (advertising company)',
            'Dependent on Google/Bing for all results',
            "May inherit Google's algorithmic biases",
        ],
        alternatives: ['brave-search', 'duckduckgo', 'searxng'],
    },
    {
        id: 'mullvad-browser',
        name: 'Mullvad Browser',
        category: 'browser',
        isPrimary: true,
        website: 'https://mullvad.net/en/browser',
        description:
            "A version of Tor Browser with Tor network integrations removed, designed to provide Tor Browser's anti-fingerprinting technologies to VPN users with strongest privacy protections out of the box.",
        logo: '',
        facts: {
            basedOn: 'Tor Browser architecture',
            fingerprinting: 'Identical browser fingerprints for all users',
            extensions:
                'Pre-installed: uBlock Origin, NoScript, Mullvad Extension',
            privacy: 'Permanent private browsing mode, no telemetry',
            securityLevels: 'Three levels: Standard, Safer, Safest',
        },
        pricing: {
            free: true,
            startingPrice: 'No premium features or subscriptions',
        },
        pros: [
            'Strongest anti-fingerprinting protection available',
            'No modification needed - works out of the box',
            'Erases data every session for privacy',
            'Developed by privacy experts (Tor Project)',
        ],
        cons: [
            'Less flexible than other browsers',
            'Some website functionality may break',
            'Must restart browser when changing security levels',
            'DNS over HTTPS not enabled by default',
        ],
        alternatives: ['firefox', 'brave-browser', 'arkenfox'],
    },
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
            startingPrice:
                'VPN Plus €4.49-9.99/month, Unlimited €9.99-12.99/month',
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
    },
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
            startingPrice:
                'Mail Plus 15GB €4.99/month, Unlimited 500GB €9.99/month',
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
            startingPrice:
                'Self-hosting costs ~$8/month for basic managed hosting',
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
        pricing: {
            free: true,
            startingPrice:
                'Premium $10/year, Family $40/year, Business $3/user/month',
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
    },
    {
        id: 'proton-calendar',
        name: 'Proton Calendar',
        category: 'calendar',
        isPrimary: true,
        website: 'https://proton.me/calendar/',
        description:
            'Encrypted calendar service for Proton members with automatic end-to-end encryption, sharing features, and import/export functionality, integrated with the comprehensive Proton ecosystem.',
        logo: '',
        facts: {
            encryption:
                'End-to-end with elliptic curve cryptography (ECC Curve25519)',
            openSource:
                'Web client only (mobile apps proprietary as of Aug 2024)',
            synchronization: 'Real-time sync across Proton ecosystem',
            integration: 'Deep integration with Proton Mail and ecosystem',
            jurisdiction: 'Switzerland (Swiss privacy laws)',
        },
        pricing: {
            free: true,
            startingPrice: 'Mail Plus €4.99/month, Unlimited €9.99/month',
        },
        pros: [
            'Based in Switzerland (excellent privacy jurisdiction)',
            'Strong elliptic curve cryptography',
            'Web client is open source and audited',
            'Integrated with comprehensive privacy ecosystem',
        ],
        cons: [
            'Mobile apps not open source (as of August 2024)',
            'Only Android app has been audited',
            'Extended sharing limited to paid subscribers',
        ],
        alternatives: ['tuta-calendar'],
    },
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
    },
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
            blocking:
                'Blocks malware, phishing, and malicious domains (97% effectiveness)',
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
        alternatives: [
            'cloudflare-dns',
            'mullvad-dns',
            'adguard-dns',
            'control-d-free',
        ],
    },
]

const ALTERNATIVE_SERVICES: Service[] = [
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
            startingPrice:
                'Light €1/month, Standard €3/month, Premium €9/month',
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
    },
    {
        id: 'brave-search',
        name: 'Brave Search',
        category: 'search',
        isPrimary: false,
        website: 'https://search.brave.com/',
        description:
            'Independent search engine with own index,  focusing on privacy while providing high-quality results through Web Discovery Project without relying on Google or Bing.',
        logo: '',
        facts: {
            index: 'Independent index with 20+ billion pages',
            tracking: 'No user tracking or profile building',
            features:
                'Goggles for customizable result ranking, Discussions feature',
            torSupport: 'Tor hidden service available',
            openSource: 'Web Discovery Project for anonymous data contribution',
        },
        pricing: {
            free: true,
            startingPrice: 'Premium $3/month (removes ads, early access)',
        },
        pros: [
            'Truly independent index not reliant on Google/Bing',
            'Strong privacy protections with no tracking',
            'Innovative features like Discussions and Goggles',
            'High-quality, contextually relevant results',
        ],
        cons: [
            'Smaller index compared to Google but growing rapidly',
            'Premium account may enable query correlation',
            'Some specialized searches may have fewer results',
        ],
        alternatives: ['duckduckgo', 'startpage', 'searxng'],
    },
    {
        id: 'duckduckgo',
        name: 'DuckDuckGo',
        category: 'search',
        website: 'https://duckduckgo.com/',
        description:
            'One of the most mainstream private search engines, operating since 2008. Provides privacy-focused search using primarily Microsoft Bing results with Bang shortcuts.',
        logo: '',
        facts: {
            sources: 'Primarily Microsoft Bing results',
            tracking: 'No user tracking or personalization',
            features: 'Bangs feature for direct site searches',
            torSupport: 'Tor hidden service available',
            javascript: 'JavaScript-free versions available (/lite, /html)',
        },
        pricing: {
            free: true,
            startingPrice: 'No paid tiers',
        },
        pros: [
            'Well-established with mainstream adoption',
            'Excellent privacy protection (no tracking)',
            'Useful Bang shortcuts for quick searches',
            'Strong mobile app ecosystem',
        ],
        cons: [
            'Dependent on Microsoft Bing for core results',
            'Quality limited by underlying Bing index',
            "Results may show Bing's biases or censorship",
        ],
        alternatives: ['brave-search', 'startpage', 'searxng'],
    },
    {
        id: 'searxng',
        name: 'SearXNG',
        category: 'search',
        website: 'https://github.com/searxng/searxng/',
        description:
            'Open-source, self-hostable metasearch engine that aggregates results from 70+ search engines. Fork of original SearX project with enhanced features and active maintenance.',
        logo: '',
        facts: {
            openSource: 'Yes, can audit all code',
            selfHostable: 'Docker support for self-hosting',
            sources: 'Aggregates from 230+ search engines and databases',
            tracking: 'No user tracking or data collection',
            customization: 'Highly customizable (themes, engines, results)',
        },
        pricing: {
            free: true,
            startingPrice: 'VPS costs typically €5-20/month depending on usage',
        },
        pros: [
            'Complete transparency through open-source code',
            'Full control over data and privacy when self-hosted',
            'Extremely customizable and hackable',
            'No corporate ownership or advertising dependencies',
        ],
        cons: [
            'Requires technical knowledge to self-host properly',
            'Performance depends on hosting setup',
            'Results quality varies depending on configured engines',
        ],
        alternatives: ['brave-search', 'duckduckgo', 'startpage'],
    },
    {
        id: 'firefox',
        name: 'Firefox',
        category: 'browser',
        website: 'https://www.firefox.com/',
        description:
            "Mozilla's open-source browser providing strong privacy settings like Enhanced Tracking Protection, serving as an excellent alternative to Google Chrome for casual users.",
        logo: '',
        facts: {
            openSource: 'Yes (Mozilla Public License)',
            tracking:
                'Enhanced Tracking Protection blocks trackers, fingerprinting',
            cookieProtection:
                'Total Cookie Protection (isolates cookies per site)',
            dns: 'DNS over HTTPS capability, Encrypted Client Hello (ECH)',
            telemetry: 'Can be disabled',
        },
        pricing: {
            free: true,
            startingPrice: 'No premium tiers',
        },
        pros: [
            "Avoid Google's browser monopoly",
            'Highly customizable privacy settings',
            'Strong default privacy protections',
            'Regular security updates from non-profit Mozilla',
        ],
        cons: [
            'Requires manual configuration for optimal privacy',
            'Includes download tokens and telemetry by default',
            'Not as fingerprint-resistant as Mullvad Browser',
        ],
        alternatives: ['mullvad-browser', 'brave-browser', 'arkenfox'],
    },
    {
        id: 'brave-browser',
        name: 'Brave',
        category: 'browser',
        website: 'https://brave.com/',
        description:
            'A Chromium-based browser with built-in privacy protections and content blocking functionality, offering Chromium compatibility with enhanced privacy features.',
        logo: '',
        facts: {
            basedOn: "Chromium (Google's open source project)",
            blocking: 'Built-in ad and tracker blocking (Brave Shields)',
            fingerprinting: 'Fingerprinting protection',
            torIntegration:
                'Tor integration available (Private Window with Tor)',
            rewards: 'Brave Rewards system with BAT cryptocurrency',
        },
        pricing: {
            free: true,
            startingPrice:
                'Brave Premium $9.99/month (includes VPN, ad-free search)',
        },
        pros: [
            'Chromium compatibility with familiar interface',
            'Strong privacy protections enabled by default',
            'Built-in content blocker',
            'Fast browsing (3x-6x faster page loads)',
        ],
        cons: [
            "Still built on Google's Chromium base",
            'Cryptocurrency focus may not appeal to all users',
            'Less fingerprint protection than Mullvad Browser',
        ],
        alternatives: ['mullvad-browser', 'firefox', 'arkenfox'],
    },
    {
        id: 'arkenfox',
        name: 'Arkenfox user.js',
        category: 'browser',
        website: 'https://github.com/arkenfox/user.js/',
        description:
            'A comprehensive set of carefully considered Firefox configuration options for advanced users seeking maximum privacy customization and control.',
        logo: '',
        facts: {
            configuration: 'Firefox configuration file (user.js)',
            settings: 'Hundreds of privacy-focused settings',
            fingerprinting: 'Canvas randomization for fingerprint protection',
            containers: 'Container support enabled',
            maintenance: 'Requires manual setup and maintenance',
        },
        pricing: {
            free: true,
            startingPrice: 'No paid tiers',
        },
        pros: [
            'Maximum customization and control',
            'Very flexible with per-site exceptions',
            'Container support for session isolation',
            'Active community development',
        ],
        cons: [
            'Requires technical expertise',
            'Time-intensive setup and maintenance',
            'Can break websites without proper configuration',
            'Not as effective as Mullvad Browser against advanced fingerprinting',
        ],
        alternatives: ['mullvad-browser', 'firefox', 'brave-browser'],
    },
    {
        id: 'ivpn',
        name: 'IVPN',
        category: 'vpn',
        website: 'https://www.ivpn.net/',
        description:
            'Gibraltar-based premium VPN provider focused on privacy and transparency, offering high-quality service with strong security auditing and ethical practices.',
        logo: '',
        facts: {
            jurisdiction:
                'Gibraltar (outside 5/9/14 Eyes surveillance alliances)',
            servers: '140+ servers in 37 countries across 48 locations',
            protocols: 'WireGuard (default), OpenVPN',
            audits: 'Multiple independent audits (verified no logging)',
            features: 'AntiTracker with Hardcore Mode, multi-hop routing',
        },
        pricing: {
            free: false,
            startingPrice:
                'Standard $6/month, Pro $10/month, Weekly $2 for testing',
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
            jurisdiction:
                'Sweden (subject to 14 Eyes, but verified no-logs policy)',
            servers: '690+ servers in 49 countries across 80+ locations',
            protocols: 'WireGuard (preferred), OpenVPN',
            audits: 'Multiple independent audits (Cure53, Assured AB, ROS)',
            accounts: 'Anonymous account numbers (no email required)',
        },
        pricing: {
            free: false,
            startingPrice:
                '€5/month flat rate regardless of subscription length',
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
    },
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
            startingPrice:
                'Personal 500GB €8.33/month, Premium 1TB €12.50/month',
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
            startingPrice:
                'Cloud service £5/month for 50GB, £25/month for 500GB',
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
            startingPrice:
                'Element Cloud $3/user/month, Enterprise $6/user/month',
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
            startingPrice:
                'Plus $23.88/year, Family $59.88/year, Unlimited $119.88/year',
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
            startingPrice:
                'Individual $35.88/year, Family $59.88/year, Business $95.88/user/year',
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
            startingPrice:
                'Pro $49.99/year or $4.49/month ($9.99/year for students)',
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
    },
    {
        id: 'tuta-calendar',
        name: 'Tuta Calendar',
        category: 'calendar',
        website: 'https://tuta.com/calendar/',
        description:
            'Free encrypted calendar with automatic end-to-end encryption using post-quantum cryptography, seamlessly integrated with Tuta Mail and offering strong German privacy protections.',
        logo: '',
        facts: {
            encryption:
                'Post-quantum cryptography (TutaCrypt protocol as of March 2024)',
            integration: 'Seamlessly integrated with Tuta Mail',
            jurisdiction: 'Germany (GDPR compliant)',
            metadata: 'Encrypts subject lines and metadata',
            audits: 'Fully audited and open source',
        },
        pricing: {
            free: true,
            startingPrice: 'Revolutionary €3/month, Legend €8/month',
        },
        pros: [
            'Post-quantum encryption (future-proof security)',
            'Based in Germany (strong EU privacy laws)',
            'Encrypts subject lines and metadata',
            'Completely open source and audited',
        ],
        cons: [
            'Calendar sharing limited to other Tuta users',
            'Blocked in some countries (Egypt, Russia)',
            'Smaller ecosystem compared to major providers',
        ],
        alternatives: ['proton-calendar'],
    },
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
    },
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
        cons: [
            'Limited filtering capabilities',
            'Commercial entity (not non-profit)',
        ],
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
        cons: [
            'Limited filtering options',
            'Smaller network compared to others',
        ],
        alternatives: [
            'quad9',
            'cloudflare-dns',
            'adguard-dns',
            'control-d-free',
        ],
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
        cons: [
            'Some data collection for threat intelligence',
            'Commercial entity',
        ],
        alternatives: [
            'quad9',
            'cloudflare-dns',
            'mullvad-dns',
            'control-d-free',
        ],
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
        pros: [
            'Customizable filtering',
            'Multiple configuration options',
            'Good performance',
        ],
        cons: ['Advanced features require paid plans'],
        alternatives: ['quad9', 'cloudflare-dns', 'mullvad-dns', 'adguard-dns'],
    },
]

export const OLD_PRIMARY_SERVICES: Service[] = [
    {
        id: 'tor-browser',
        name: 'Tor Browser',
        category: 'browser',
        isPrimary: true,
        website: 'https://www.torproject.org/',
        description:
            'The gold standard for anonymous browsing, routing traffic through the Tor network via three layers of encryption for maximum anonymity and censorship circumvention.',
        // privacyScore: 10,
        facts: {
            encryption: 'Three-layer onion routing encryption',
            jurisdiction: 'United States (nonprofit)',
            // openSource: true,
            // audited: true,
            // noLogs: true,
            // anonymousSignup: true,
        },
        // euCompliance: 'partial',
        pricing: {
            free: true,
            // paidPlans: [],
        },
        pros: [
            'Maximum anonymity and privacy protection',
            'Access to .onion hidden services',
            'Blocks trackers and fingerprinting by default',
            'Circumvents censorship effectively',
            'Regular security audits',
        ],
        cons: [
            'Slower browsing speeds due to Tor network',
            'Some websites may not work properly',
            'May draw attention from ISPs or authorities',
        ],
        alternatives: ['mullvad-browser', 'firefox', 'brave-browser'],
    },
    {
        id: 'startpage',
        name: 'Startpage',
        category: 'search',
        isPrimary: true,
        website: 'https://startpage.com/',
        description:
            'Privacy proxy for Google Search results with Anonymous View feature and European privacy law protection.',
        // privacyScore: 7,
        facts: {
            resultSource: 'Google Search results without tracking',
            jurisdiction: 'Netherlands (EU)',
            // openSource: false,
            // audited: true,
            businessModel: 'Privacy-safe contextual advertising',
            anonymousView: 'Proxy browsing of search results',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: []
        },
        pros: [
            'High-quality Google results without tracking',
            'EU privacy law protection',
            'Anonymous View proxy feature',
            'European Privacy Seal certification',
        ],
        cons: [
            'Owned by System1 (ad-tech company)',
            'Dependency on Google for results',
            'Potentially slower than direct Google search',
        ],
        alternatives: ['duckduckgo', 'brave-search', 'searxng'],
    },
    {
        id: 'proton-vpn',
        name: 'Proton VPN',
        category: 'vpn',
        isPrimary: true,
        website: 'https://protonvpn.com/',
        description:
            'Swiss-based VPN service from Proton AG offering free and paid tiers with Secure Core servers and strong privacy protection.',
        // privacyScore: 8,
        facts: {
            encryption: 'WireGuard, OpenVPN protocols',
            jurisdiction: 'Switzerland',
            // openSource: true,
            // audited: true,
            noLogs: 'Independently audited no-logs policy',
            secureCoreServers: 'Multi-hop server architecture',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: [
            //   {
            //     name: 'Plus',
            //     price: '€4.99/month',
            //     features: ['112+ countries', '10 devices', 'Secure Core'],
            //   },
            //   {
            //     name: 'Unlimited',
            //     price: '€9.99/month',
            //     features: ['All Proton services', '500GB storage'],
            //   },
            // ],
        },
        pros: [
            'Swiss privacy law protection',
            'Free tier available',
            'Secure Core multi-hop servers',
            'Integrated with Proton ecosystem',
        ],
        cons: [
            'Limited IPv6 support',
            'Smaller server network than competitors',
            'Free tier has speed limitations',
        ],
        alternatives: ['mullvad-vpn', 'ivpn'],
    },
    {
        id: 'proton-mail',
        name: 'Proton Mail',
        category: 'email',
        isPrimary: true,
        website: 'https://proton.me/',
        description:
            'Swiss encrypted email service with zero-access architecture, end-to-end encryption, and comprehensive privacy protection.',
        // privacyScore: 9,
        facts: {
            encryption: 'Zero-access end-to-end encryption',
            jurisdiction: 'Switzerland',
            // openSource: true,
            // audited: true,
            storage: '500MB-500GB+ depending on plan',
            bridge: 'ProtonMail Bridge for desktop clients',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: [
            //   { name: "Mail Plus", price: "€4.99/month", features: ["15GB storage", "Custom domains"] },
            //   { name: "Unlimited", price: "€12.99/month", features: ["All Proton services", "500GB storage"] }
            // ]
        },
        pros: [
            'Strong Swiss privacy laws protection',
            'Zero-access encryption architecture',
            'Comprehensive Proton ecosystem integration',
            'Good free tier with 1GB storage',
        ],
        cons: [
            'Bridge requires paid subscription',
            'Limited free storage compared to competitors',
            'Can be expensive for advanced features',
        ],
        alternatives: ['tuta', 'mailbox-org'],
    },
    {
        id: 'signal',
        name: 'Signal',
        category: 'messaging',
        isPrimary: true,
        website: 'https://signal.org/',
        description:
            'Industry-leading encrypted messaging app with end-to-end encryption by default and minimal metadata collection.',
        // privacyScore: 9,
        facts: {
            encryption: 'Signal Protocol end-to-end encryption',
            jurisdiction: 'United States (nonprofit)',
            // openSource: true,
            // audited: true,
            businessModel: 'Donations and grants',
            metadataProtection: 'Sealed Sender feature',
        },
        // euCompliance: 'partial',
        pricing: {
            free: true,
            // paidPlans: []
        },
        pros: [
            'Industry-standard encryption protocol',
            'User-friendly interface',
            'Widely adopted and trusted',
            'Nonprofit organization',
        ],
        cons: [
            'Requires phone number for registration',
            'Centralized architecture',
            'US jurisdiction may concern some users',
        ],
        alternatives: ['simplex-chat'],
    },
    {
        id: 'proton-pass',
        name: 'Proton Pass',
        category: 'password',
        isPrimary: true,
        website: 'https://proton.me/pass',
        description:
            'End-to-end encrypted password manager from Proton with integrated email alias generation and Swiss privacy protection.',
        // privacyScore: 9,
        facts: {
            encryption: 'End-to-end encryption with zero-access',
            jurisdiction: 'Switzerland',
            // openSource: true,
            // audited: true,
            emailAliases: 'Integrated alias generation',
            ecosystem: 'Part of Proton ecosystem',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: [
            //   {
            //     name: 'Pass Plus',
            //     price: 'Included with Proton plans',
            //     features: ['Unlimited aliases', 'Advanced features'],
            //   },
            // ],
        },
        pros: [
            'Swiss privacy law protection',
            'Email alias generation included',
            'Integrated with Proton ecosystem',
            'Independent security audits',
        ],
        cons: [
            'Newer service with fewer features',
            'Full feature set requires Proton subscription',
            'Smaller ecosystem than established competitors',
        ],
        alternatives: ['bitwarden', '1password'],
    },
    {
        id: 'proton-drive',
        name: 'Proton Drive',
        category: 'storage',
        isPrimary: true,
        website: 'https://proton.me/drive',
        description:
            'End-to-end encrypted cloud storage with zero-access encryption protecting files, names, and metadata.',
        // privacyScore: 9,
        facts: {
            encryption: 'Zero-access end-to-end encryption',
            jurisdiction: 'Switzerland',
            // openSource: true,
            // audited: true,
            metadataEncryption: 'File names and metadata encrypted',
            crossPlatform: 'Windows, macOS, Android, iOS support',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: [
            // { name: "Mail Plus", price: "$3.99/month", features: ["200GB storage"] },
            // { name: "Unlimited", price: "$7.99/month", features: ["500GB + full Proton suite"] }
            // ]
        },
        pros: [
            'Strong Swiss privacy law protection',
            'Complete zero-access encryption',
            'Integration with Proton ecosystem',
            'Cross-platform synchronization',
        ],
        cons: [
            'Limited free storage (2GB expandable to 5GB)',
            'Fewer collaboration features than mainstream alternatives',
            'Newer service with evolving feature set',
        ],
        alternatives: ['tresorit', 'nextcloud'],
    },
    {
        id: 'mullvad-dns',
        name: 'Mullvad DNS',
        category: 'dns',
        isPrimary: true,
        website: 'https://mullvad.net/en/help/dns-over-https-and-dns-over-tls',
        description:
            'Privacy-focused DNS service with strict no-logs policy and content filtering options, available to all users.',
        // privacyScore: 9,
        facts: {
            logging: 'Strict no-logs policy',
            jurisdiction: 'Sweden',
            // openSource: true,
            // audited: true,
            protocols: 'DoH, DoT, DNSCrypt support',
            filtering: 'Multiple filtering levels available',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: []
        },
        pros: [
            'Clear no-logs commitment',
            'Multiple content filtering options',
            'Available to non-VPN users',
            'Strong Swedish privacy laws',
        ],
        cons: [
            'Limited customization compared to commercial services',
            'Newer DNS service with smaller track record',
            'Sweden is part of 14 Eyes alliance',
        ],
        alternatives: ['quad9', 'nextdns'],
    },
    {
        id: 'cryptpad',
        name: 'CryptPad',
        category: 'productivity',
        isPrimary: true,
        website: 'https://cryptpad.org/',
        description:
            'End-to-end encrypted collaborative office suite with zero-knowledge encryption and anonymous account creation.',
        // privacyScore: 9,
        facts: {
            encryption: 'Zero-knowledge end-to-end encryption',
            jurisdiction: 'France (EU)',
            // openSource: true,
            // audited: true,
            anonymousSignup: 'No email required for accounts',
            applications:
                'Rich text, spreadsheets, presentations, forms, Kanban',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: [
            //   {
            //     name: 'Premium',
            //     price: '€5/month',
            //     features: ['5GB storage'],
            //   },
            //   {
            //     name: 'Teams',
            //     price: '€25/month',
            //     features: ['50GB storage', 'Team features'],
            //   },
            // ],
        },
        pros: [
            'True zero-knowledge encryption',
            'Full office suite functionality',
            'Real-time collaboration support',
            'EU jurisdiction with strong privacy laws',
        ],
        cons: [
            'Learning curve from Google/Microsoft tools',
            'Limited offline capabilities',
            'Smaller ecosystem than mainstream alternatives',
        ],
        alternatives: ['onlyoffice', 'libreoffice'],
    },
    {
        id: 'grapheneos',
        name: 'GrapheneOS',
        category: 'mobile-os',
        isPrimary: true,
        website: 'https://grapheneos.org/',
        description:
            'Security and privacy-hardened Android alternative with sandboxed Google Play Services and enhanced permission controls.',
        // privacyScore: 10,
        facts: {
            platform: 'Google Pixel devices only',
            jurisdiction: 'Open source project',
            // openSource: true,
            // audited: true,
            hardening: 'Extensive security hardening',
            googleServices: 'Optional sandboxed Google Play Services',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: []
        },
        pros: [
            'Strongest mobile security and privacy model',
            'Regular security updates within days of AOSP',
            'Maintains app compatibility with sandboxed services',
            'Extensive privacy and security hardening',
        ],
        cons: [
            'Limited to Google Pixel devices only',
            'Requires technical knowledge for installation',
            'Some advanced features need configuration',
        ],
        alternatives: ['calyxos', 'lineageos'],
    },
]

export const OLD_ALTERNATIVE_SERVICES: Service[] = [
    {
        id: 'firefox',
        name: 'Firefox',
        category: 'browser',
        isPrimary: false,
        website: 'https://www.mozilla.org/firefox/',
        description:
            "Mozilla's privacy-focused browser with Enhanced Tracking Protection, extensive customization options, and strong balance between privacy and usability.",
        // privacyScore: 8,
        facts: {
            encryption: 'HTTPS by default, DNS over HTTPS',
            jurisdiction: 'United States (Mozilla Foundation nonprofit)',
            // openSource: true,
            // audited: true,
            trackingProtection: 'Enhanced Tracking Protection',
            customizable: 'Highly customizable with Arkenfox',
        },
        // euCompliance: 'partial',
        pricing: {
            free: true,
            // paidPlans: [],
        },
        pros: [
            'Excellent balance of privacy and usability',
            'Highly customizable for advanced users',
            'Strong extension ecosystem',
            'Non-profit organization behind development',
        ],
        cons: [
            'Requires manual configuration for optimal privacy',
            'Collects telemetry by default',
            'Some privacy features need to be enabled manually',
        ],
    },
    {
        id: 'brave-browser',
        name: 'Brave Browser',
        category: 'browser',
        isPrimary: false,
        website: 'https://brave.com/',
        description:
            'Chromium-based privacy browser with built-in ad blocking, tracker protection, and optional cryptocurrency rewards system.',
        // privacyScore: 7,
        facts: {
            encryption: 'HTTPS upgrading, fingerprint protection',
            jurisdiction: 'United States',
            // openSource: true,
            // audited: true,
            adBlocking: 'Built-in Brave Shields',
            cryptoIntegration: 'BAT rewards and Web3 features',
        },
        // euCompliance: 'partial',
        pricing: {
            free: true,
            // paidPlans: [],
        },
        pros: [
            'Good privacy defaults out of the box',
            'Chromium compatibility for website support',
            'Built-in ad and tracker blocking',
            'Integrated cryptocurrency features',
        ],
        cons: [
            'Complex features may increase fingerprinting',
            'Controversial business model and past incidents',
            'US jurisdiction with potential privacy concerns',
        ],
    },
    {
        id: 'duckduckgo',
        name: 'DuckDuckGo',
        category: 'search',
        isPrimary: false,
        website: 'https://duckduckgo.com/',
        description:
            'Privacy-focused search engine with no tracking, logging, or user profiling, plus comprehensive privacy tools.',
        // privacyScore: 8,
        facts: {
            tracking: 'No tracking or search history storage',
            jurisdiction: 'United States',
            // openSource: false,
            // audited: false,
            businessModel: 'Contextual advertising',
            torSupport: 'Tor hidden service available',
        },
        // euCompliance: 'partial',
        pricing: {
            free: true,
            // paidPlans: [
            //   { name: "Privacy Pro", price: "$9.99/month", features: ["VPN", "Email protection", "Identity theft restoration"] }
            // ]
        },
        pros: [
            'User-friendly interface familiar to most users',
            'Comprehensive privacy protection tools',
            'Wide browser integration support',
            'No search history tracking',
        ],
        cons: [
            'US-based jurisdiction',
            'Results dependent on Bing',
            'Past incidents with Microsoft trackers',
        ],
    },
    {
        id: 'brave-search',
        name: 'Brave Search',
        category: 'search',
        isPrimary: false,
        website: 'https://search.brave.com/',
        description:
            'Independent search engine with its own web index, no user profiling, and genuine independence from Big Tech.',
        // privacyScore: 8,
        facts: {
            indexing: 'Independent web crawler and index',
            jurisdiction: 'United States',
            // openSource: false,
            // audited: false,
            businessModel: 'Advertising with privacy-safe methods',
            dataCollection: 'No IP address retention or profiling',
        },
        // euCompliance: 'partial',
        pricing: {
            free: true,
            // paidPlans: [
            // { name: "Premium", price: "Available", features: ["Ad-free experience"] }
            // ]
        },
        pros: [
            'True independence from Big Tech search',
            'Own web crawling and indexing',
            'Growing result quality and coverage',
            'Innovative features like AI answers',
        ],
        cons: [
            'US jurisdiction',
            'Newer service with occasional result gaps',
            'Smaller index than established competitors',
        ],
    },
    {
        id: 'mullvad-vpn',
        name: 'Mullvad',
        category: 'vpn',
        isPrimary: false,
        website: 'https://mullvad.net/',
        description:
            'Swedish VPN service with anonymous accounts, flat-rate pricing, and strong commitment to user privacy with no-logs policy.',
        // privacyScore: 9,
        facts: {
            encryption: 'WireGuard and OpenVPN protocols',
            jurisdiction: 'Sweden',
            // openSource: true,
            // audited: true,
            noLogs: 'Independently audited no-logs policy',
            anonymousPayments: 'Cash and cryptocurrency accepted',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: false,
            // paidPlans: [
            //   {
            //     name: 'Single Plan',
            //     price: '€5/month',
            //     features: [
            //       '5 devices',
            //       '49+ countries',
            //       'No long-term discounts',
            //     ],
            //   },
            // ],
        },
        pros: [
            'Transparent flat-rate pricing',
            'Anonymous account numbers instead of usernames',
            'Accepts anonymous payments (cash/crypto)',
            'Strong technical privacy features',
        ],
        cons: [
            'Removed port forwarding in 2023',
            'No streaming optimization',
            'Sweden is part of 14 Eyes alliance',
        ],
    },
    {
        id: 'ivpn',
        name: 'IVPN',
        category: 'vpn',
        isPrimary: false,
        website: 'https://www.ivpn.net/',
        description:
            'Gibraltar-based premium VPN focused on privacy transparency with anonymous account creation and multi-hop servers.',
        // privacyScore: 9,
        facts: {
            encryption: 'WireGuard, OpenVPN, IPSec protocols',
            jurisdiction: 'Gibraltar',
            // openSource: true,
            // audited: true,
            noLogs: 'Strict no-logs policy',
            anonymousSignup: 'No email required for accounts',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: false,
            // paidPlans: [
            //   {
            //     name: 'Standard',
            //     price: '$6/month',
            //     features: ['2 devices', '37 countries'],
            //   },
            //   {
            //     name: 'Pro',
            //     price: '$10/month',
            //     features: ['7 devices', 'Multi-hop', 'Port forwarding'],
            //   },
            // ],
        },
        pros: [
            'No personal information required for signup',
            'Accepts cash and Monero payments',
            'Regular independent security audits',
            'Multi-hop server support',
        ],
        cons: [
            'More expensive than competitors',
            'Smaller server network (37 countries)',
            'No guaranteed streaming service access',
        ],
    },
    {
        id: 'tuta',
        name: 'Tuta',
        category: 'email',
        isPrimary: false,
        website: 'https://tuta.com/',
        description:
            'German end-to-end encrypted email service with post-quantum cryptography and comprehensive metadata encryption.',
        // privacyScore: 9,
        facts: {
            encryption: 'Post-quantum cryptography (TutaCrypt)',
            jurisdiction: 'Germany (Hanover)',
            // openSource: true,
            // audited: true,
            metadataEncryption: 'Encrypts subject lines and contacts',
            anonymousSignup: 'Anonymous account creation possible',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: [
            //   { name: "Revolutionary", price: "€3/month", features: ["20GB storage", "15 addresses"]  },
            //   { name: "Legend", price: "€8/month", features: ["500GB storage", "30 addresses"]  }
            // ]
        },
        pros: [
            'Post-quantum encryption for future-proofing',
            'Very affordable pricing',
            'Encrypts metadata including subject lines',
            'Strong German privacy laws',
        ],
        cons: [
            'Smaller ecosystem than Proton',
            'No IMAP Bridge on free plan',
            'Learning curve for some users',
        ],
    },
    {
        id: 'mailbox-org',
        name: 'Mailbox.org',
        category: 'email',
        isPrimary: false,
        website: 'https://mailbox.org/',
        description:
            'German privacy-focused email provider with office suite, sustainable energy, and affordable pricing.',
        // privacyScore: 7,
        facts: {
            encryption: 'PGP encryption support',
            jurisdiction: 'Germany (Berlin)',
            openSource: 'Partially open source',
            // audited: true,
            sustainability: '100% renewable energy powered',
            officeIntegration: 'Full office suite included',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: false,
            // paidPlans: [
            //   { name: "Light", price: "€1/month", features: ["2GB mail", "Calendar/contacts"]  },
            //   { name: "Standard", price: "€3/month", features: ["10GB mail + 5GB cloud", "Office suite"]  }
            // ]
        },
        pros: [
            'Very affordable pricing',
            'Comprehensive office suite included',
            'Environmentally conscious (renewable energy)',
            'German privacy law protection',
        ],
        cons: [
            'Interface less modern than competitors',
            'Manual PGP setup required',
            'Limited storage on basic plans',
        ],
    },
    {
        id: 'simplex-chat',
        name: 'SimpleX Chat',
        category: 'messaging',
        isPrimary: false,
        website: 'https://simplex.chat/',
        description:
            'First messaging platform with no user identifiers, offering maximum privacy through decentralized architecture and quantum-resistant encryption.',
        // privacyScore: 10,
        facts: {
            encryption: 'Quantum-resistant double ratchet encryption',
            jurisdiction: 'Open source project',
            // openSource: true,
            // audited: true,
            userIdentifiers: 'No user IDs or phone numbers required',
            decentralized: 'Decentralized network of relay servers',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: []
        },
        pros: [
            'No user identifiers whatsoever',
            'Quantum-resistant encryption',
            'Strong metadata protection',
            'Decentralized architecture',
        ],
        cons: [
            'Less user-friendly than Signal',
            'Smaller user base',
            'More complex for average users',
        ],
    },
    {
        id: 'bitwarden',
        name: 'Bitwarden',
        category: 'password',
        isPrimary: false,
        website: 'https://bitwarden.com/',
        description:
            'Open-source password manager with excellent free tier, self-hosting options, and cross-platform synchronization.',
        // privacyScore: 8,
        facts: {
            encryption: 'AES-256 end-to-end encryption',
            jurisdiction: 'United States',
            // openSource: true,
            // audited: true,
            selfHosting: 'Self-hosting option available',
            businessModel: 'Freemium subscription model',
        },
        // euCompliance: 'partial',
        pricing: {
            free: true,
            // paidPlans: [
            //   {
            //     name: 'Premium',
            //     price: '$10/year',
            //     features: ['Advanced 2FA', 'File attachments'],
            //   },
            //   {
            //     name: 'Family',
            //     price: '$40/year',
            //     features: ['Up to 6 users', 'Shared collections'],
            //   },
            // ],
        },
        pros: [
            'Excellent free tier with unlimited passwords',
            'Open source with self-hosting option',
            'Very affordable premium features',
            'Cross-platform availability',
        ],
        cons: [
            'Interface could be more polished',
            'US jurisdiction',
            'Limited customer support for free users',
        ],
    },
    {
        id: 'quad9',
        name: 'Quad9',
        category: 'dns',
        isPrimary: false,
        website: 'https://quad9.net/',
        description:
            'Security-focused DNS service with malware blocking, Swiss jurisdiction, and strong privacy protection.',
        // privacyScore: 8,
        facts: {
            logging: 'No IP logging or personal data retention',
            jurisdiction: 'Switzerland',
            // openSource: true,
            // audited: true,
            malwareBlocking: '97% malware blocking effectiveness',
            globalNetwork: '259 server locations in 106 countries',
        },
        // euCompliance: 'compliant',
        pricing: {
            free: true,
            // paidPlans: []
        },
        pros: [
            'Excellent malware and phishing protection',
            'Swiss privacy law protection',
            'Global network for good performance',
            'Non-profit organizational structure',
        ],
        cons: [
            'Limited customization options',
            'Potential false positives with security blocking',
            'Focused primarily on security rather than privacy',
        ],
    },
]

export const ALL_SERVICES: Service[] = [
    ...PRIMARY_SERVICES,
    ...ALTERNATIVE_SERVICES,
]

export const SERVICES = ALL_SERVICES
export { PRIMARY_SERVICES as PRIVACY_JOURNEY }

const CATEGORY_ORDER = [
    'dns',
    'vpn',
    'browser',
    'search',
    'email',
    'messaging',
    'video-call',
    'social',
    'storage',
    'file-sharing',
    'password',
    'notes',
    'calendar',
    'productivity',
    'analytics',
    'ads',
    'ecommerce',
    'health',
    'entertainment',
    'news',
    'education',
    'mobile-os',
    'other',
]

function sortServicesByCategory(services: Service[]): Service[] {
    return [...services].sort((a, b) => {
        const aIndex = CATEGORY_ORDER.indexOf(a.category)
        const bIndex = CATEGORY_ORDER.indexOf(b.category)
        if (aIndex === -1 && bIndex === -1) return 0
        if (aIndex === -1) return 1
        if (bIndex === -1) return -1
        return aIndex - bIndex
    })
}

export const getPrimaryServices = (): Service[] => {
    return sortServicesByCategory(PRIMARY_SERVICES)
}

export const getAlternativeServices = (): Service[] => {
    return sortServicesByCategory(ALTERNATIVE_SERVICES)
}

export const getServicesByCategory = (category: string): Service[] => {
    return ALL_SERVICES.filter((service) => service.category === category)
}

export const getPrimaryServicesByCategory = (category: string): Service[] => {
    return PRIMARY_SERVICES.filter((service) => service.category === category)
}

export const createServiceMap = (): Record<string, Service> => {
    return ALL_SERVICES.reduce(
        (map, service) => {
            map[service.id] = service
            return map
        },
        {} as Record<string, Service>
    )
}
