import { useTranslations } from 'next-intl';

export default function Tips() {
  const t = useTranslations('tips');

  const steps = [
    { num: 1, title: t('step1_title'), desc: t('step1_desc') },
    { num: 2, title: t('step2_title'), desc: t('step2_desc') },
    { num: 3, title: t('step3_title'), desc: t('step3_desc') },
  ];

  return (
    <section id="tips" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>
        <p className="text-base max-w-3xl mb-12" style={{ color: 'var(--text-secondary)' }}>
          {t('intro')}
        </p>

        {/* Steps */}
        <div className="max-w-2xl space-y-8 mb-12">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="step-number mt-0.5">{step.num}</div>
              <div>
                <h4 className="font-serif font-semibold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Terrain */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          <div className="card">
            <h4 className="font-serif font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {t('safety_title')}
            </h4>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('safety_desc')}
            </p>
          </div>
          <div className="card">
            <h4 className="font-serif font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {t('terrain_title')}
            </h4>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('terrain_desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
