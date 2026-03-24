import { useTranslations } from 'next-intl';

const MAPS_LINK = 'https://maps.app.goo.gl/umLVuP6GABSLL3dN9';
const EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.5861010030521!2d5.197331002098652!3d43.90816896620646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca0dda4d71fdf7%3A0x386a52a5fb62468f!2sTown%20View%20Point%20Gordes!5e0!3m2!1sen!2sus!4v1774320436204!5m2!1sen!2sus';

export default function MapEmbed() {
  const t = useTranslations('map');

  const infoItems = [
    { label: t('hours_label'), value: t('hours_value'), note: t('hours_note') },
    { label: t('light_label'), value: t('light_value'), note: t('light_note') },
    { label: t('rule_label'), value: t('rule_value'), note: t('rule_note') },
  ];

  return (
    <section id="map" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>

        {/* Map */}
        <div className="map-container mb-6">
          <iframe
            src={EMBED_SRC}
            width="600"
            height="450"
            style={{ border: 0, width: '100%', height: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Town View Point Gordes"
          />
        </div>

        {/* Open Maps CTA */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex mb-10"
        >
          {t('openMaps')}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>

        {/* Info cards */}
        <div className="max-w-2xl">
          {infoItems.map((item, i) => (
            <div key={i} className="info-card">
              <div className="flex-shrink-0 w-28">
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {item.label}
                </p>
                <p className="font-semibold text-sm mt-0.5" style={{ color: 'var(--text-primary)' }}>
                  {item.value}
                </p>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {item.note}
              </p>
            </div>
          ))}
        </div>

        {/* Full details link */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm mt-6 inline-block"
          style={{ color: 'var(--accent)' }}
        >
          {t('fullDetails')}
        </a>
      </div>
    </section>
  );
}
