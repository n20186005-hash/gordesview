import { useTranslations } from 'next-intl';

export default function Sources() {
  const t = useTranslations('sources');

  return (
    <section className="py-20 md:py-28" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('intro')}
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          <div className="card">
            <h4 className="font-serif font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {t('google_title')}
            </h4>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('google_desc')}
            </p>
          </div>
          <div className="card">
            <h4 className="font-serif font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {t('unsplash_title')}
            </h4>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('unsplash_desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
