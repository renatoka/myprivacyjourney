import { Service } from '@/lib/types';
import { useEffect, useState } from 'react';

export function useStepMessage(currentService: Service | undefined): string | null {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!currentService) {
      setMessage(null);
      return;
    }

    switch (currentService.category) {
      case 'dns':
        setMessage(
          'DNS (Domain Name System) providers resolve domain names into IP addresses. Choosing a privacy-conscious provider can reduce tracking and improve security.'
        );
        break;
      case 'browser':
        setMessage(
          'A browser is your gateway to the web. Privacy-focused browsers limit tracking, block invasive scripts, and prioritize user data protection.'
        );
        break;
      case 'search':
        setMessage(
          'Search engines index the web to help you find information. Privacy-respecting engines avoid profiling and do not log your queries.'
        );
        break;
      case 'vpn':
        setMessage(
          'A VPN (Virtual Private Network) encrypts your traffic and masks your IP address, protecting your identity and activity from surveillance.'
        );
        break;
      case 'email':
        setMessage(
          'Email remains a core communication tool. Privacy-first providers offer encryption and avoid data harvesting for advertising or profiling.'
        );
        break;
      case 'messaging':
        setMessage(
          'Messaging apps vary in their security. Services with end-to-end encryption and transparent policies better safeguard your conversations.'
        );
        break;
      case 'storage':
        setMessage(
          'Cloud storage solutions differ in how they handle your data. Privacy-focused options use encryption and ensure only you control access.'
        );
        break;
      case 'password':
        setMessage(
          'Password managers help create and store strong, unique passwords. Choosing a secure, privacy-conscious manager protects your credentials from breaches.'
        );
        break;
      default:
        setMessage(null);
    }
  }, [currentService]);

  return message;
}
