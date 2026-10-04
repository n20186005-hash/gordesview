import { homeIntentContent, type AppLocale, getParkingGuidePath } from '@/lib/guide-content';
import {
  ADDRESS,
  GOOGLE_MAPS_LINK,
  GOOGLE_RATING_VALUE,
  GOOGLE_REVIEW_COUNT,
  PLACE_ALT_NAME,
  PLACE_NAME,
  SITE_URL,
} from '@/lib/site-data';

type Props = {
  locale: AppLocale;
  description: string;
};

export default function HomeStructuredData({ locale, description }: Props) {
  const content = homeIntentContent[locale];
  const localePath = `/${locale}/`;
  const parkingUrl = `${SITE_URL}${getParkingGuidePath(locale)}`;

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: PLACE_NAME,
      alternateName: PLACE_ALT_NAME,
      description,
      url: `${SITE_URL}${localePath}`,
      image: `${SITE_URL}/gallery/images (33).jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS,
        addressLocality: 'Gordes',
        postalCode: '84220',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.90816896620646,
        longitude: 5.197331002098652,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: GOOGLE_RATING_VALUE,
        reviewCount: GOOGLE_REVIEW_COUNT,
        bestRating: 5,
      },
      sameAs: [GOOGLE_MAPS_LINK],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: content.photoQuestion,
          acceptedAnswer: {
            '@type': 'Answer',
            text: content.photoAnswer,
          },
        },
        {
          '@type': 'Question',
          name: content.parkingTitle,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${content.parkingText} ${parkingUrl}`,
          },
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
