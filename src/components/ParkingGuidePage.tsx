import { parkingGuideContent } from '@/lib/guide-content';
import type { ParkingGuideLocale } from '@/lib/site-data';
import { GOOGLE_MAPS_LINK, PLACE_NAME, SITE_URL } from '@/lib/site-data';

type Props = {
  locale: ParkingGuideLocale;
  path: string;
};

export default function ParkingGuidePage({ locale, path }: Props) {
  const content = parkingGuideContent[locale];
  const homePath = `/${locale}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.metadataDescription,
    inLanguage: locale,
    mainEntityOfPage: `${SITE_URL}${path}`,
    about: PLACE_NAME,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: content.homeLabel,
        item: `${SITE_URL}${homePath}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.title,
        item: `${SITE_URL}${path}`,
      },
    ],
  };

  return (
    <div className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4">
        <p className="section-label">{content.eyebrow}</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          {content.title}
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mb-10" style={{ color: 'var(--text-secondary)' }}>
          {content.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {content.quickFacts.map((fact) => (
            <div key={fact.label} className="card">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                {fact.label}
              </p>
              <p className="text-sm break-words" style={{ color: 'var(--text-primary)' }}>
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 items-start">
                      <span className="mt-1 text-xs" style={{ color: 'var(--accent)' }}>●</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {content.mapCta}
          </a>
          <a href={homePath} className="btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--border-color)' }}>
            {content.homeCta}
          </a>
        </div>
      </div>
    </div>
  );
}
