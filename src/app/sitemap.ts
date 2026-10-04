import { MetadataRoute } from 'next';
import { PARKING_GUIDE_PATHS } from '@/lib/site-data';

const baseUrl = 'https://www.gordesview.com';
const locales = ['fr', 'en', 'de', 'zh-Hant'];

const staticPages = [
  '',
  '/about',
  '/cookie-settings',
  '/privacy-policy',
  '/terms-of-service',
];

const formatPath = (path: string) => {
  if (path === '' || path === '/') return '';
  return path.endsWith('/') ? path : `${path}/`;
};

const localizedGuideGroups = [
  {
    paths: PARKING_GUIDE_PATHS,
    priority: 0.9,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  staticPages.forEach((page) => {
    // 默认（无语言前缀）的 URL，用作 x-default
    const defaultUrl = `${baseUrl}${formatPath(page)}`;
    
    // 构建所有语言的 alternateRefs
    const alternateRefs = locales.map((locale) => {
      const localePath = formatPath(`/${locale}${page}`);
      return {
        href: `${baseUrl}${localePath}`,
        hreflang: locale,
      };
    });

    // 添加 x-default
    alternateRefs.push({
      href: defaultUrl || `${baseUrl}/`,
      hreflang: 'x-default',
    });

    // 为每个语言生成一个 entry
    locales.forEach((locale) => {
      const localePath = formatPath(`/${locale}${page}`);
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

  localizedGuideGroups.forEach((group) => {
    const alternates = Object.entries(group.paths).reduce((acc, [locale, path]) => {
      acc[locale] = `${baseUrl}${formatPath(path)}`;
      return acc;
    }, {} as Record<string, string>);

    alternates['x-default'] = `${baseUrl}${formatPath(group.paths.fr)}`;

    Object.values(group.paths).forEach((path) => {
      sitemapEntries.push({
        url: `${baseUrl}${formatPath(path)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: group.priority,
        alternates: {
          languages: alternates,
        },
      });
    });
  });

  return sitemapEntries;
}
