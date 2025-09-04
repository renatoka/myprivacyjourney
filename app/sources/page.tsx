'use client'

import { ExternalLink } from 'lucide-react'

const SOURCES = [
    // Privacy Guides - Main Resource
    'https://www.privacyguides.org/en/tools/',
    'https://www.privacyguides.org/en/search-engines/',
    'https://www.privacyguides.org/en/real-time-communication/',
    'https://www.privacyguides.org/en/dns/',
    'https://www.privacyguides.org/en/mobile-phones/',
    'https://www.privacyguides.org/en/android/distributions/',

    // VPN Services Research
    'https://en.wikipedia.org/wiki/Mullvad',
    'https://digitalnomads.world/tips/mullvad-vpn-review/',
    'https://protonvpn.com/pricing',
    'https://mullvad.net/en/help/dns-over-https-and-dns-over-tls',

    // Email Services Research
    'https://en.wikipedia.org/wiki/Tuta_(email)',
    'https://mailbox.org/en/',
    'https://tuta.com/',

    // Search Engines Research
    'https://duckduckgo.com/duckduckgo-help-pages/company/how-does-duckduckgo-protect-privacy',
    'https://duckduckgo.com/privacy',
    'https://duckduckgo.com/duckduckgo-help-pages/web-browsing-privacy',
    'https://brave.com/search/',
    'https://search.brave.com/help/index',
    'https://en.wikipedia.org/wiki/Startpage',
    'https://www.searchenginejournal.com/startpage/485730/',
    'https://www.devproblems.com/startpage-search-engine-review/',

    // Messaging Applications Research
    'https://simplex.chat/',
    'https://signal.org/',

    // Password Managers Research
    'https://www.techradar.com/reviews/bitwarden',
    'https://www.cloudwards.net/bitwarden-review/',
    'https://bitwarden.com/',

    // DNS Services Research
    'https://github.com/mullvad/encrypted-dns-profiles',
    'https://avoidthehack.com/best-dns-privacy',
    'https://quad9.net/news/blog/why-should-i-switch-to-a-security-and-privacy-focused-dns-server/',
    'https://www.quad9.org/service/',
    'https://en.wikipedia.org/wiki/Quad9',
    'https://medium.com/@ericklony/enhancing-online-security-and-privacy-with-quad9-dns-service-ae99b793c4c3',

    // Operating Systems Research
    'https://grapheneos.org/',

    // Document Collaboration Research
    'https://cryptpad.org/about/',

    // Additional Technical Sources
    'https://chromewebstore.google.com/detail/brave-search-official-pri/imoinfjmpciaeboldbfaakmmjkijkeff',
    'https://www.logicweb.com/brave-search-a-new-era-of-private-and-independent-searching/',
    'https://www.astrill.com/blog/is-duckduckgo-safe/',
    'https://www.privacyjournal.net/duckduckgo-review/',
    'https://apiit.atlassian.net/wiki/spaces/ITSM/pages/2491908098/How+to+Set+Up+and+Use+Quad9+for+Enhanced+Internet+Security+and+Privacy',

    // GitHub References
    'https://github.com/privacyguides/privacyguides.org/blob/main/docs/tools.md',
]

export default function SourcesPage() {
    return (
        <div>
            <div className="space-y-3">
                {SOURCES.map((source, index) => (
                    <div
                        key={index}
                        className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                    >
                        <span className="text-sm text-gray-500 mr-3 min-w-[30px]">
                            {index + 1}.
                        </span>
                        <a
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm flex-1"
                        >
                            <span className="break-all">{source}</span>
                            <ExternalLink size={14} className="flex-shrink-0" />
                        </a>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-gray-500">
                    Total sources: {SOURCES.length}
                </p>
                <p className="text-xs text-gray-500">
                    Last updated: September 2025
                </p>
            </div>
        </div>
    )
}
