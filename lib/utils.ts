import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import {
  Service,
  ComplianceLevel,
  ServiceCategory,
  ComparisonPair,
  ExportData,
} from './types';
import { createComparison } from './services';

// ===================================================================
// PRIVACY SCORE UTILITIES
// ===================================================================

export function getPrivacyScoreColor(score: number): string {
  if (score >= 8) return 'text-green-600';
  if (score >= 6) return 'text-yellow-600';
  if (score >= 4) return 'text-orange-600';
  return 'text-red-600';
}

export function getPrivacyScoreLabel(score: number): string {
  if (score >= 9) return 'Excellent Privacy';
  if (score >= 7) return 'Good Privacy';
  if (score >= 5) return 'Moderate Privacy';
  if (score >= 3) return 'Poor Privacy';
  return 'Privacy Concerns';
}

export function getPrivacyScoreBadge(score: number): string {
  if (score >= 8) return '🛡️ Excellent';
  if (score >= 6) return '✅ Good';
  if (score >= 4) return '⚠️ Moderate';
  return '⚡ Concerning';
}

// ===================================================================
// EU COMPLIANCE UTILITIES
// ===================================================================

export function getComplianceColor(level: ComplianceLevel): string {
  switch (level) {
    case 'compliant':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'partial':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'concerning':
      return 'text-red-600 bg-red-50 border-red-200';
  }
}

export function getComplianceIcon(level: ComplianceLevel): string {
  switch (level) {
    case 'compliant':
      return '🇪🇺 ✅';
    case 'partial':
      return '🇪🇺 ⚠️';
    case 'concerning':
      return '🇪🇺 ❌';
  }
}

export function getComplianceLabel(level: ComplianceLevel): string {
  switch (level) {
    case 'compliant':
      return 'EU Privacy Friendly';
    case 'partial':
      return 'Partial EU Compliance';
    case 'concerning':
      return 'EU Privacy Concerns';
  }
}

// ===================================================================
// CATEGORY UTILITIES
// ===================================================================

export function getCategoryIcon(category: ServiceCategory): string {
  const icons: Record<ServiceCategory, string> = {
    email: '📧',
    search: '🔍',
    browser: '🌐',
    vpn: '🔒',
    messaging: '💬',
    storage: '☁️',
    social: '📱',
    'video-call': '📹',
  };

  return icons[category] || '🔧';
}

export function getCategoryName(category: ServiceCategory): string {
  const names: Record<ServiceCategory, string> = {
    email: 'Email Services',
    search: 'Search Engines',
    browser: 'Web Browsers',
    vpn: 'VPN Services',
    messaging: 'Messaging Apps',
    storage: 'Cloud Storage',
    social: 'Social Media',
    'video-call': 'Video Conferencing',
  };

  return names[category] || 'Other Services';
}

// ===================================================================
// STRING FORMATTING UTILITIES
// ===================================================================

export function formatServiceId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatPricing(pricing: Service['pricing']): string {
  if (pricing.free && pricing.businessModel === 'free') {
    return 'Free';
  }

  if (pricing.free && pricing.businessModel === 'freemium') {
    return `Free tier available${
      pricing.startingPrice ? ` • ${pricing.startingPrice}` : ''
    }`;
  }

  if (pricing.businessModel === 'ads') {
    return 'Free with ads';
  }

  return pricing.startingPrice || 'Paid';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ===================================================================
// COMPARISON UTILITIES
// ===================================================================

export function getWinnerInsight(comparison: ComparisonPair): string {
  if (!comparison.winner || comparison.winner === 'tie') {
    return `Both services have similar privacy scores (${comparison.service1.privacyScore} vs ${comparison.service2.privacyScore})`;
  }

  const winner =
    comparison.winner === 'service1'
      ? comparison.service1
      : comparison.service2;
  const loser =
    comparison.winner === 'service1'
      ? comparison.service2
      : comparison.service1;

  return `${winner.name} scores ${comparison.scoreDifference} points higher than ${loser.name} in privacy`;
}

export function getKeyDifferences(comparison: ComparisonPair): Array<{
  aspect: string;
  service1: string;
  service2: string;
  advantage: 'service1' | 'service2' | 'neutral';
}> {
  const { service1, service2 } = comparison;
  const differences: Array<{
    aspect: string;
    service1: string;
    service2: string;
    advantage: 'service1' | 'service2' | 'neutral';
  }> = [];

  // Compare common fact keys
  const allKeys = new Set([
    ...Object.keys(service1.facts),
    ...Object.keys(service2.facts),
  ]);

  allKeys.forEach((key) => {
    const value1 = service1.facts[key] || 'Not specified';
    const value2 = service2.facts[key] || 'Not specified';

    if (value1 !== value2) {
      differences.push({
        aspect: key,
        service1: value1,
        service2: value2,
        advantage: 'neutral', // Could be enhanced with smart comparison logic
      });
    }
  });

  return differences.slice(0, 5); // Top 5 most important differences
}

// ===================================================================
// EXPORT UTILITIES
// ===================================================================

export function exportComparison(
  comparison: ComparisonPair,
  format: 'json' | 'markdown' = 'json'
): string {
  const exportData: ExportData = {
    comparison,
    exportedAt: new Date().toISOString(),
    format,
  };

  if (format === 'json') {
    return JSON.stringify(exportData, null, 2);
  }

  // Markdown format
  const { service1, service2 } = comparison;
  return `
# Privacy Comparison: ${service1.name} vs ${service2.name}

**Generated:** ${new Date().toLocaleDateString()}
**Category:** ${getCategoryName(service1.category)}

## Privacy Scores
- **${service1.name}:** ${service1.privacyScore}/10
- **${service2.name}:** ${service2.privacyScore}/10

## EU Compliance
- **${service1.name}:** ${getComplianceLabel(service1.euCompliance)}
- **${service2.name}:** ${getComplianceLabel(service2.euCompliance)}

## Key Differences
${getKeyDifferences(comparison)
  .map(
    (diff) =>
      `- **${diff.aspect}:** ${service1.name}: ${diff.service1} | ${service2.name}: ${diff.service2}`
  )
  .join('\n')}

---
*Generated by MyPrivacyJourney.com*
  `.trim();
}

// ===================================================================
// VALIDATION UTILITIES
// ===================================================================

export function isValidPrivacyScore(score: number): boolean {
  return Number.isInteger(score) && score >= 1 && score <= 10;
}

export function isValidServiceId(id: string): boolean {
  return /^[a-z0-9-]+$/.test(id) && id.length > 0;
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// ===================================================================
// RANDOM UTILITIES FOR MVP FEATURES
// ===================================================================

export function getRandomComparison(
  services: Service[]
): ComparisonPair | null {
  if (services.length < 2) return null;

  // Group by category for better comparisons
  const categories = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<ServiceCategory, Service[]>);

  // Find categories with at least 2 services
  const comparableCategories = Object.entries(categories).filter(
    ([_, services]) => services.length >= 2
  );

  if (comparableCategories.length === 0) {
    // Fallback to any two random services
    const service1 =
      services[Math.floor(Math.random() * services.length)];
    const service2 =
      services[Math.floor(Math.random() * services.length)];
    return createComparison(service1, service2);
  }

  // Pick random category with multiple services
  const [_, categoryServices] =
    comparableCategories[
      Math.floor(Math.random() * comparableCategories.length)
    ];

  const service1 = categoryServices[0];
  const service2 = categoryServices[1];

  return createComparison(service1, service2);
}

// ===================================================================
// URL AND SHARING UTILITIES
// ===================================================================

export function generateComparisonUrl(
  service1Id: string,
  service2Id: string
): string {
  const params = new URLSearchParams({
    s1: service1Id,
    s2: service2Id,
  });
  return `/compare?${params.toString()}`;
}

export function parseComparisonUrl(searchParams: URLSearchParams): {
  service1Id: string | null;
  service2Id: string | null;
} {
  return {
    service1Id: searchParams.get('s1'),
    service2Id: searchParams.get('s2'),
  };
}

export function generateShareableInsight(
  comparison: ComparisonPair
): string {
  const winner =
    comparison.winner === 'service1'
      ? comparison.service1
      : comparison.service2;
  const loser =
    comparison.winner === 'service1'
      ? comparison.service2
      : comparison.service1;

  if (comparison.winner === 'tie') {
    return `${comparison.service1.name} vs ${comparison.service2.name}: Similar privacy scores (${comparison.service1.privacyScore}/10 vs ${comparison.service2.privacyScore}/10)`;
  }

  return `${winner.name} (${winner.privacyScore}/10) beats ${loser.name} (${loser.privacyScore}/10) for privacy by ${comparison.scoreDifference} points`;
}

// ===================================================================
// DATE & TIME UTILITIES
// ===================================================================

export function formatLastUpdated(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365)
    return `${Math.floor(diffDays / 30)} months ago`;

  return `${Math.floor(diffDays / 365)} years ago`;
}

export function isDataStale(
  isoDate: string,
  maxAgeMonths: number = 6
): boolean {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMonths = diffMs / (1000 * 60 * 60 * 24 * 30);

  return diffMonths > maxAgeMonths;
}

// ===================================================================
// SEARCH AND RANKING UTILITIES
// ===================================================================

export function rankServicesByPrivacy(
  services: Service[]
): Service[] {
  return [...services].sort(
    (a, b) => b.privacyScore - a.privacyScore
  );
}

export function getServicesInCategory(
  services: Service[],
  category: ServiceCategory
): Service[] {
  return services.filter((service) => service.category === category);
}

export function findBestAlternative(
  currentService: Service,
  allServices: Service[]
): Service | null {
  const alternatives = allServices.filter(
    (service) =>
      service.category === currentService.category &&
      service.id !== currentService.id &&
      service.privacyScore > currentService.privacyScore
  );

  if (alternatives.length === 0) return null;

  // Return the highest privacy score alternative
  return alternatives.reduce((best, current) =>
    current.privacyScore > best.privacyScore ? current : best
  );
}

// ===================================================================
// DATA TRANSFORMATION UTILITIES
// ===================================================================

export function serviceToSearchableText(service: Service): string {
  return [
    service.name,
    service.description,
    service.category,
    ...service.pros,
    ...service.cons,
    ...Object.values(service.facts),
  ]
    .join(' ')
    .toLowerCase();
}

export function extractFactKeys(services: Service[]): string[] {
  const allKeys = new Set<string>();

  services.forEach((service) => {
    Object.keys(service.facts).forEach((key) => allKeys.add(key));
  });

  return Array.from(allKeys).sort();
}

// ===================================================================
// CLIPBOARD AND SHARING
// ===================================================================

export async function copyToClipboard(
  text: string
): Promise<boolean> {
  if (!navigator.clipboard) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch {
      document.body.removeChild(textArea);
      return false;
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function downloadAsFile(
  content: string,
  filename: string,
  mimeType: string = 'text/plain'
): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = filename;
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

// ===================================================================
// LOCAL STORAGE ALTERNATIVES (NO BROWSER STORAGE)
// ===================================================================

// For MVP, we'll use simple in-memory storage
let userPreferences: {
  favoriteServices: string[];
  recentComparisons: ComparisonPair[];
  defaultFilters: Partial<import('./types').ServiceFilters>;
} = {
  favoriteServices: [],
  recentComparisons: [],
  defaultFilters: {},
};

export function addFavoriteService(serviceId: string): void {
  if (!userPreferences.favoriteServices.includes(serviceId)) {
    userPreferences.favoriteServices.push(serviceId);
  }
}

export function removeFavoriteService(serviceId: string): void {
  userPreferences.favoriteServices =
    userPreferences.favoriteServices.filter((id) => id !== serviceId);
}

export function getFavoriteServices(): string[] {
  return [...userPreferences.favoriteServices];
}

export function addRecentComparison(
  comparison: ComparisonPair
): void {
  // Keep only last 10 comparisons
  userPreferences.recentComparisons = [
    comparison,
    ...userPreferences.recentComparisons.slice(0, 9),
  ];
}

export function getRecentComparisons(): ComparisonPair[] {
  return [...userPreferences.recentComparisons];
}

// ===================================================================
// ERROR HANDLING UTILITIES
// ===================================================================

export class ServiceNotFoundError extends Error {
  constructor(serviceId: string) {
    super(`Service with ID '${serviceId}' not found`);
    this.name = 'ServiceNotFoundError';
  }
}

export class InvalidComparisonError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidComparisonError';
  }
}

export function safeParseInt(
  value: string | null,
  defaultValue: number
): number {
  if (!value) return defaultValue;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

export function safeGetService(
  services: Service[],
  id: string
): Service {
  const service = services.find((s) => s.id === id);
  if (!service) {
    throw new ServiceNotFoundError(id);
  }
  return service;
}

// ===================================================================
// ANALYTICS HELPERS
// ===================================================================

export function calculateCategoryAverages(
  services: Service[]
): Record<ServiceCategory, number> {
  const categoryGroups = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service.privacyScore);
    return acc;
  }, {} as Record<ServiceCategory, number[]>);

  const averages: Record<ServiceCategory, number> = {} as any;

  Object.entries(categoryGroups).forEach(([category, scores]) => {
    averages[category as ServiceCategory] = Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length
    );
  });

  return averages;
}

export function getTopPrivacyServices(
  services: Service[],
  count: number = 5
): Service[] {
  return rankServicesByPrivacy(services).slice(0, count);
}

export function getWorstPrivacyServices(
  services: Service[],
  count: number = 5
): Service[] {
  return [...services]
    .sort((a, b) => a.privacyScore - b.privacyScore)
    .slice(0, count);
}
