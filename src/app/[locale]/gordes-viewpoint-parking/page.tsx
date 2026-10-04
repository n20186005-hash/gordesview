import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ParkingGuidePage from '@/components/ParkingGuidePage';
import { parkingGuideContent } from '@/lib/guide-content';
import { getSEOMetadata } from '@/lib/seo';
import { PARKING_GUIDE_PATHS } from '@/lib/site-data';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'en') {
    return {};
  }

  return {
    title: parkingGuideContent.en.metadataTitle,
    description: parkingGuideContent.en.metadataDescription,
    ...getSEOMetadata('en', '', PARKING_GUIDE_PATHS),
  };
}

export default async function EnglishParkingGuidePage({ params }: Props) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  setRequestLocale(locale);

  return <ParkingGuidePage locale="en" path={PARKING_GUIDE_PATHS.en} />;
}
