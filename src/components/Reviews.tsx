import { useTranslations } from 'next-intl';
import { GOOGLE_MAPS_LINK } from '@/lib/site-data';

export default function Reviews() {
  const t = useTranslations('reviews');


  return (
    <section id="reviews" className="py-20 md:py-28" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>

        {/* Rating summary */}
        <div className="flex items-center gap-4 mb-6">
          <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer"
            className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {t('rating')}
          </a>
          <div>
            <div className="star text-xl">★★★★★</div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>({t('count')})</p>
          </div>
        </div>

        {/* Declaration */}
        <p className="text-sm max-w-3xl mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('declaration')}
        </p>

        {/* More link */}
        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
        >
          {t('moreLink')}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
