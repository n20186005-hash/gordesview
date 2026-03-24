import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const baseUrl = 'https://gordesview.com';

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'fr' ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        fr: baseUrl,
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
        'zh-Hant': `${baseUrl}/zh-Hant`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = (await import(`@/i18n/locales/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="fr" href="https://gordesview.com" />
        <link rel="alternate" hrefLang="en" href="https://gordesview.com/en" />
        <link rel="alternate" hrefLang="de" href="https://gordesview.com/de" />
        <link rel="alternate" hrefLang="zh-Hant" href="https://gordesview.com/zh-Hant" />
        <link rel="alternate" hrefLang="x-default" href="https://gordesview.com" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
