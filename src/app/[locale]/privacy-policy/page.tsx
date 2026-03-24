import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = { params: { locale: string } };

export default function PrivacyPolicy({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('privacy');

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h1>
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('data_title')}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('data_text')}</p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('cookies_title')}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('cookies_text')}</p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('thirdparty_title')}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('thirdparty_text')}</p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('contact_title')}</h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('contact_text')}{' '}
              <a href="mailto:claritleonelmnicol@gmail.com" style={{ color: 'var(--accent)' }}>claritleonelmnicol@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
