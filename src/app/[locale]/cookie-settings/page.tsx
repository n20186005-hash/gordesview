import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import { getSEOMetadata } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'cookieSettings' });
  
  return {
    title: t('title'),
    ...getSEOMetadata(locale, '/cookie-settings'),
  };
}

export default function CookieSettings({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('cookieSettings');

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h1>
        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
          {t('lastUpdate')}
        </p>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t('intro')}
        </p>
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('necessary_title')}</h2>
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: 'var(--tag-bg-section)', color: 'var(--tag-text-section)' }}>{t('necessary_status')}</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('necessary_text')}</p>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('analytics_title')}</h2>
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: 'var(--border-color)', color: 'var(--text-muted)' }}>{t('analytics_status')}</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('analytics_text')}</p>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('marketing_title')}</h2>
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: 'var(--border-color)', color: 'var(--text-muted)' }}>{t('marketing_status')}</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('marketing_text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}