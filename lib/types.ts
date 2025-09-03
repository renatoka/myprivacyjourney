export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  website: string;
  description: string;
  logo?: string;
  facts: ServiceFacts;
  pricing: BasicPricing;
  pros: string[];
  cons: string[];
  alternatives?: string[];
}

export interface ServiceFacts {
  [key: string]: string;
}
export interface BasicPricing {
  free: boolean;
  startingPrice?: string | null;
  businessModel?: BusinessModel;
}

export interface ComparisonPair {
  service1: Service;
  service2: Service;
  categoryMatch: boolean;
  winner?: 'service1' | 'service2' | 'tie';
  scoreDifference: number;
}

export type ServiceCategory =
  | 'email'
  | 'search'
  | 'browser'
  | 'vpn'
  | 'messaging'
  | 'storage'
  | 'social'
  | 'video-call'
  | 'password'
  | 'notes'
  | 'calendar'
  | 'file-sharing'
  | 'productivity'
  | 'analytics'
  | 'ads'
  | 'ecommerce'
  | 'health'
  | 'entertainment'
  | 'news'
  | 'education'
  | 'dns'
  | 'mobile-os'
  | 'other';

export type ComplianceLevel = 'compliant' | 'partial' | 'concerning';

export type BusinessModel = 'free' | 'freemium' | 'paid' | 'ads';

export interface ServiceDatabase {
  services: Service[];
  categories: CategoryInfo[];
  lastUpdated: string;
  version: string;
}

export interface CategoryInfo {
  id: ServiceCategory;
  name: string;
  description: string;
  icon: string;
  popularServices: string[];
}

export interface ServiceFilters {
  category?: ServiceCategory;
  euCompliant?: boolean;
  freeOption?: boolean;
  minPrivacyScore?: number;
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
