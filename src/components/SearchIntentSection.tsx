import { homeIntentContent, type AppLocale, getParkingGuidePath } from '@/lib/guide-content';

type Props = {
  locale: AppLocale;
};

export default function SearchIntentSection({ locale }: Props) {
  const content = homeIntentContent[locale];
  const parkingHref = getParkingGuidePath(locale);

  return (
    <section id="photo-spot" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-label">{content.label}</p>
        <h2 className="section-title">{content.title}</h2>
        <p className="text-base md:text-lg max-w-3xl mb-12" style={{ color: 'var(--text-secondary)' }}>
          {content.intro}
        </p>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6">
          <div className="card">
            <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {content.photoQuestion}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              {content.photoAnswer}
            </p>
            <ul className="space-y-3">
              {content.photoPoints.map((point) => (
                <li key={point} className="flex gap-3 items-start">
                  <span className="mt-1 text-xs" style={{ color: 'var(--accent)' }}>●</span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {content.parkingTitle}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              {content.parkingText}
            </p>
            <a href={parkingHref} className="btn-primary inline-flex">
              {content.parkingCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
