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
  return [{ locale: 'fr' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'fr') {
    return {};
  }

  return {
    title: parkingGuideContent.fr.metadataTitle,
    description: parkingGuideContent.fr.metadataDescription,
    ...getSEOMetadata('fr', '', PARKING_GUIDE_PATHS),
  };
}

export default async function FrenchParkingGuidePage({ params }: Props) {
  const { locale } = await params;

  if (locale !== 'fr') {
    notFound();
  }

  setRequestLocale(locale);

  return <ParkingGuidePage locale="fr" path={PARKING_GUIDE_PATHS.fr} />;
}
