export interface Service {
  id: string; // kebab-case: "proton-mail", "gmail", etc.
  name: string; // Display name: "ProtonMail", "Gmail"
  category: ServiceCategory;
  website: string;
  description: string;
  logo?: string; // Path to logo or emoji fallback
  privacyScore: number; // 1-10, manually researched
  facts: ServiceFacts;
  euCompliance: ComplianceLevel;
  pricing: BasicPricing;
  pros: string[];
  cons: string[];
}

export interface ServiceFacts {
  [key: string]: string;
}
export interface BasicPricing {
  free: boolean;
  startingPrice?: string; // "€5/month", "Free with ads"
  businessModel: BusinessModel;
}

export interface ComparisonPair {
  service1: Service;
  service2: Service;
  categoryMatch: boolean; // True if both services in same category
  winner?: 'service1' | 'service2' | 'tie';
  scoreDifference: number; // Absolute difference in privacy scores
}

export type ServiceCategory =
  | 'email'
  | 'search'
  | 'browser'
  | 'vpn'
  | 'messaging'
  | 'storage'
  | 'social'
  | 'video-call';

export type ComplianceLevel =
  | 'compliant' // 🟢 EU privacy friendly
  | 'partial' // 🟡 Some privacy concerns
  | 'concerning'; // 🔴 Privacy issues

export type BusinessModel =
  | 'free' // Completely free
  | 'freemium' // Free tier + paid upgrades
  | 'paid' // Paid only
  | 'ads'; // Ad-supported

export interface ServiceDatabase {
  services: Service[];
  categories: CategoryInfo[];
  lastUpdated: string; // ISO date
  version: string; // Semantic version
}

export interface CategoryInfo {
  id: ServiceCategory;
  name: string;
  description: string;
  icon: string; // Emoji or icon name
  popularServices: string[]; // Service IDs for this category
}

export interface ServiceFilters {
  category?: ServiceCategory;
  euCompliant?: boolean; // Only show EU-compliant services
  freeOption?: boolean; // Must have free tier
  minPrivacyScore?: number; // Minimum privacy score (1-10)
}

export interface SearchOptions {
  query?: string;
  filters?: ServiceFilters;
  sortBy?: 'privacyScore' | 'name' | 'category';
  sortOrder?: 'asc' | 'desc';
}

export type ServiceLookup = Record<string, Service>;

export interface CategoryStats {
  category: ServiceCategory;
  serviceCount: number;
  averagePrivacyScore: number;
  euCompliantCount: number;
  freeOptionsCount: number;
}

export interface ExportData {
  comparison: ComparisonPair;
  exportedAt: string;
  format: 'json' | 'pdf' | 'markdown';
}
