import type { Metadata } from 'next';

const baseUrl = 'https://www.gordesview.com';
const locales = ['fr', 'en', 'de', 'zh-Hant'];
const defaultLocale = 'fr';

export function getSEOMetadata(locale: string, path: string = ''): Metadata {
  // 构建当前语言的完整路径，默认语言(fr)在根目录
  const currentPath = locale === defaultLocale ? path : `/${locale}${path}`;
  const canonicalUrl = `${baseUrl}${currentPath}`;

  // 构建所有语言的备用链接
  const languages: Record<string, string> = {};
  
  locales.forEach((l) => {
    const langPath = l === defaultLocale ? path : `/${l}${path}`;
    languages[l] = `${baseUrl}${langPath}`;
  });

  // 添加 x-default，指向默认语言版本
  languages['x-default'] = `${baseUrl}${path}`;

  return {
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  };
}