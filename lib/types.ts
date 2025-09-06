export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  isPrimary?: boolean;
  website: string;
  description: string;
  logo?: string;
  facts: ServiceFacts;
  pricing: BasicPricing;
  pros: string[];
  cons: string[];
  alternatives?: string[];
  difficulty?: DifficultyLevel;
  setupTime?: SetupTime;
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

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface SetupTime {
  minutes?: number;
  hours?: number;
  description?: string;
  undetermined?: boolean;
}

export type ServiceCategory =
  | 'dns'
  | 'vpn'
  | 'browser'
  | 'search'
  | 'email'
  | 'messaging'
  | 'video-call'
  | 'social'
  | 'storage'
  | 'file-sharing'
  | 'password'
  | 'notes'
  | 'calendar'
  | 'productivity'
  | 'analytics'
  | 'ads'
  | 'ecommerce'
  | 'health'
  | 'entertainment'
  | 'news'
  | 'education'
  | 'mobile-os'
  | 'other';

export type BusinessModel = 'free' | 'freemium' | 'paid' | 'ads';
