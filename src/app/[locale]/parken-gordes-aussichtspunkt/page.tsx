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
  return [{ locale: 'de' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'de') {
    return {};
  }

  return {
    title: parkingGuideContent.de.metadataTitle,
    description: parkingGuideContent.de.metadataDescription,
    ...getSEOMetadata('de', '', PARKING_GUIDE_PATHS),
  };
}

export default async function GermanParkingGuidePage({ params }: Props) {
  const { locale } = await params;

  if (locale !== 'de') {
    notFound();
  }

  setRequestLocale(locale);

  return <ParkingGuidePage locale="de" path={PARKING_GUIDE_PATHS.de} />;
}
