import { useTranslations } from 'next-intl';

export default function Overview() {
  const t = useTranslations('overview');

  const highlights = [
    { icon: t('highlight1_icon'), title: t('highlight1_title'), desc: t('highlight1_desc') },
    { icon: t('highlight2_icon'), title: t('highlight2_title'), desc: t('highlight2_desc') },
    { icon: t('highlight3_icon'), title: t('highlight3_title'), desc: t('highlight3_desc') },
  ];

  return (
    <section id="overview" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>
        <p className="text-base md:text-lg max-w-3xl mb-12" style={{ color: 'var(--text-secondary)' }}>
          {t('description')}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="card">
              <div className="text-3xl mb-3">{h.icon}</div>
              <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {h.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
