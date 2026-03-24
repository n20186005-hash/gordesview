import { useTranslations } from 'next-intl';

export default function Gallery() {
  const t = useTranslations('gallery');

  // Static gallery images - Gordes / Luberon / Provence themed
  const photos = [
    { src: 'https://images.unsplash.com/photo-1596627116790-af6f46dddbff?w=800&q=80', alt: t('photos.0.alt') },
    { src: 'https://images.unsplash.com/photo-1595326053710-cbfce1bdb155?w=800&q=80', alt: t('photos.1.alt') },
    { src: 'https://images.unsplash.com/photo-1602519011692-6bc23eeda174?w=800&q=80', alt: t('photos.2.alt') },
    { src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80', alt: t('photos.3.alt') },
    { src: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80', alt: t('photos.4.alt') },
    { src: 'https://images.unsplash.com/photo-1568797629739-9a910aa31d27?w=800&q=80', alt: t('photos.5.alt') },
  ];

  return (
    <section id="photos" className="py-20 md:py-28" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('credit')}
        </p>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
