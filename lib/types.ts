export interface Service {
    id: string
    name: string
    category: ServiceCategory
    isPrimary?: boolean
    website: string
    description: string
    logo?: string
    facts: ServiceFacts
    pricing: BasicPricing
    pros: string[]
    cons: string[]
    alternatives?: string[]
}

export interface ServiceFacts {
    [key: string]: string
}
export interface BasicPricing {
    free: boolean
    startingPrice?: string | null
    businessModel?: BusinessModel
}

export interface ComparisonPair {
    service1: Service
    service2: Service
    categoryMatch: boolean
    winner?: 'service1' | 'service2' | 'tie'
    scoreDifference: number
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
    | 'other'

export type BusinessModel = 'free' | 'freemium' | 'paid' | 'ads'
