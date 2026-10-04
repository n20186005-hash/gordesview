import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-data';

const locales = ['fr', 'en', 'de', 'zh-Hant'];

// Helper function to ensure consistent trailing slashes
const formatPath = (path: string) => {
  if (path === '' || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
};

export function getSEOMetadata(
  locale: string,
  path: string = '',
  localizedPaths?: Partial<Record<string, string>>
): Metadata {
  const currentPath = localizedPaths?.[locale] ? formatPath(localizedPaths[locale]!) : formatPath(`/${locale}${path}`);
  const canonicalUrl = `${SITE_URL}${currentPath}`;

  // 构建所有语言的备用链接
  const languages: Record<string, string> = {};
  
  locales.forEach((l) => {
    if (localizedPaths) {
      if (localizedPaths[l]) {
        languages[l] = `${SITE_URL}${formatPath(localizedPaths[l]!)}`;
      }
      return;
    }

    const langPath = formatPath(`/${l}${path}`);
    languages[l] = `${SITE_URL}${langPath}`;
  });

  // 首页 x-default 指向根目录，其余页面指向默认法语版本
  languages['x-default'] = path === '' && !localizedPaths
    ? `${SITE_URL}${formatPath(path)}`
    : `${SITE_URL}${formatPath(localizedPaths?.fr ?? `/fr${path}`)}`;

  return {
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  };
}
