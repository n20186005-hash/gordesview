import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = { params: { locale: string } };

export default function TermsOfService({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('terms');

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h1>
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('use_title')}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('use_text')}</p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('ip_title')}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('ip_text')}</p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('liability_title')}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('liability_text')}</p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('contact_title')}</h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              <a href="mailto:claritleonelmnicol@gmail.com" style={{ color: 'var(--accent)' }}>claritleonelmnicol@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
