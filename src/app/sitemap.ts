import { MetadataRoute } from 'next';

const baseUrl = 'https://www.gordesview.com';
const locales = ['fr', 'en', 'de', 'zh-Hant'];
const defaultLocale = 'fr';

const staticPages = [
  '',
  '/about',
  '/cookie-settings',
  '/privacy-policy',
  '/terms-of-service',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  staticPages.forEach((page) => {
    // 默认语言的 URL
    const defaultUrl = `${baseUrl}${page}`;
    
    // 构建所有语言的 alternateRefs
    const alternateRefs = locales.map((locale) => {
      const localePath = locale === defaultLocale ? page : `/${locale}${page}`;
      return {
        href: `${baseUrl}${localePath}`,
        hreflang: locale,
      };
    });

    // 添加 x-default
    alternateRefs.push({
      href: defaultUrl,
      hreflang: 'x-default',
    });

    // 为每个语言生成一个 entry
    locales.forEach((locale) => {
      const localePath = locale === defaultLocale ? page : `/${locale}${page}`;
      sitemapEntries.push({
        url: `${baseUrl}${localePath}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: alternateRefs.reduce((acc, curr) => {
            acc[curr.hreflang] = curr.href;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });

  return sitemapEntries;
}