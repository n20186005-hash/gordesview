import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import { getSEOMetadata } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: t('title'),
    ...getSEOMetadata(locale, '/about'),
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('about');
  const tFooter = useTranslations('footer');

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h1>
        <div className="space-y-8">
          <div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {tFooter('disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
