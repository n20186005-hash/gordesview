import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Gallery from '@/components/Gallery';
import Tips from '@/components/Tips';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Sources from '@/components/Sources';
import SearchIntentSection from '@/components/SearchIntentSection';
import HomeStructuredData from '@/components/HomeStructuredData';
import { getSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import type { AppLocale } from '@/lib/guide-content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getSEOMetadata(locale, '');
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'overview' });

  return (
    <>
      <HomeStructuredData locale={locale as AppLocale} description={t('description')} />
      <Hero />
      <div className="section-divider" />
      <Overview />
      <div className="section-divider" />
      <SearchIntentSection locale={locale as AppLocale} />
      <div className="section-divider" />
      <Gallery />
      <div className="section-divider" />
      <Tips />
      <div className="section-divider" />
      <Reviews />
      <div className="section-divider" />
      <MapEmbed />
      <div className="section-divider" />
      <Sources />
    </>
  );
}
