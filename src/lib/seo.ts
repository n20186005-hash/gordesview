import type { Metadata } from 'next';

const baseUrl = 'https://www.gordesview.com';
const locales = ['fr', 'en', 'de', 'zh-Hant'];

// Helper function to ensure consistent trailing slashes
const formatPath = (path: string) => {
  if (path === '' || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
};

export function getSEOMetadata(locale: string, path: string = ''): Metadata {
  // 所有语言都包含前缀，保持与物理路由一致
  const currentPath = formatPath(`/${locale}${path}`);
  const canonicalUrl = `${baseUrl}${currentPath}`;

  // 构建所有语言的备用链接
  const languages: Record<string, string> = {};
  
  locales.forEach((l) => {
    const langPath = formatPath(`/${l}${path}`);
    languages[l] = `${baseUrl}${langPath}`;
  });

  // 添加 x-default，指向根目录
  languages['x-default'] = `${baseUrl}${formatPath(path)}`;

  return {
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  };
}