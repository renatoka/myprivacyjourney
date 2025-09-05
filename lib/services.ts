import { Service } from './types';

import {
  browserService,
  calendarServices,
  dnsServices,
  emailServices,
  fileSharingServices,
  messagingServices,
  notesServices,
  passwordServices,
  searchServices,
  socialServices,
  storageServices,
  vpnServices,
} from './data';

const ALL_SERVICES: Service[] = [
  ...emailServices,
  ...vpnServices,
  ...browserService,
  ...searchServices,
  ...messagingServices,
  ...storageServices,
  ...passwordServices,
  ...dnsServices,
  ...socialServices,
  ...notesServices,
  ...calendarServices,
  ...fileSharingServices,
];

export const PRIMARY_SERVICES = ALL_SERVICES.filter((s) => s.isPrimary);
export const ALTERNATIVE_SERVICES = ALL_SERVICES.filter((s) => !s.isPrimary);

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
];

function sortServicesByCategory(services: Service[]): Service[] {
  return [...services].sort((a, b) => {
    const aIndex = CATEGORY_ORDER.indexOf(a.category);
    const bIndex = CATEGORY_ORDER.indexOf(b.category);
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
}

export const getPrimaryServices = (): Service[] => {
  return sortServicesByCategory(PRIMARY_SERVICES);
};

export const getAlternativeServices = (): Service[] => {
  return sortServicesByCategory(ALTERNATIVE_SERVICES);
};

export const getServicesByCategory = (category: string): Service[] => {
  return ALL_SERVICES.filter((service) => service.category === category);
};

export const getPrimaryServicesByCategory = (category: string): Service[] => {
  return PRIMARY_SERVICES.filter((service) => service.category === category);
};

export const createServiceMap = (): Record<string, Service> => {
  return ALL_SERVICES.reduce(
    (map, service) => {
      map[service.id] = service;
      return map;
    },
    {} as Record<string, Service>
  );
};
