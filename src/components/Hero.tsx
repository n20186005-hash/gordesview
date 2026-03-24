import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  const tags = t('tags').split(',');
  const MAPS_LINK = 'https://maps.app.goo.gl/umLVuP6GABSLL3dN9';

  return (
    <section
      className="relative min-h-[90vh] flex items-end"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1596627116790-af6f46dddbff?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16 pt-32 w-full">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-white/80 text-sm font-medium">{t('siteType')}</span>
          <span className="text-white/60">·</span>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium hover:text-white/80"
          >
            <span className="star">★</span> {t('rating')} ({t('reviewCount')})
          </a>
          <span className="text-white/60">·</span>
          <span className="text-white/80 text-sm">{t('hours')}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-6 font-light">
          {t('subtitle')}
        </p>

        {/* CTA */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <a href="#overview" className="btn-primary">{t('discover')}</a>
          <a href="#photos" className="btn-outline">{t('seePhotos')}</a>
        </div>

        {/* Address */}
        <p className="text-white/60 text-sm mb-4">{t('address')}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag-hero px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
