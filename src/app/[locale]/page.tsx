import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Gallery from '@/components/Gallery';
import Tips from '@/components/Tips';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Sources from '@/components/Sources';
import { getSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  return getSEOMetadata(locale, '');
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Overview />
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
