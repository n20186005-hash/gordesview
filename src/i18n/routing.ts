import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en', 'de', 'zh-Hant'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
});
