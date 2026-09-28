import type messages from '@/i18n/locales/fr.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
  }
}