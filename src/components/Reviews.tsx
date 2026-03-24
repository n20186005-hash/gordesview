import { useTranslations } from 'next-intl';

const MAPS_LINK = 'https://maps.app.goo.gl/umLVuP6GABSLL3dN9';

export default function Reviews() {
  const t = useTranslations('reviews');

  const items = [
    { name: t('items.0.name'), role: t('items.0.role'), date: t('items.0.date'), text: t('items.0.text') },
    { name: t('items.1.name'), role: t('items.1.role'), date: t('items.1.date'), text: t('items.1.text') },
    { name: t('items.2.name'), role: t('items.2.role'), date: t('items.2.date'), text: t('items.2.text') },
    { name: t('items.3.name'), role: t('items.3.role'), date: t('items.3.date'), text: t('items.3.text') },
    { name: t('items.4.name'), role: t('items.4.role'), date: t('items.4.date'), text: t('items.4.text') },
    { name: t('items.5.name'), role: t('items.5.role'), date: t('items.5.date'), text: t('items.5.text') },
    { name: t('items.6.name'), role: t('items.6.role'), date: t('items.6.date'), text: t('items.6.text') },
    { name: t('items.7.name'), role: t('items.7.role'), date: t('items.7.date'), text: t('items.7.text') },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>

        {/* Rating summary */}
        <div className="flex items-center gap-4 mb-6">
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer"
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

        {/* Review cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {items.map((item, i) => (
            <div key={i} className="review-card">
              <div className="flex items-start gap-3 mb-3">
                <div className="review-avatar">{item.name.charAt(0)}</div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{item.name}</h4>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {item.role} · {item.date}
                  </p>
                </div>
              </div>
              <div className="star text-sm mb-2">★★★★★</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &ldquo;{item.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* More link */}
        <a
          href={MAPS_LINK}
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
