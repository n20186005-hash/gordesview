import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const prefix = locale === 'fr' ? '' : `/${locale}`;

  return (
    <footer className="py-12" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Links */}
        <div className="flex flex-wrap gap-6 mb-6 text-sm">
          <a href={`${prefix}/privacy-policy`} style={{ color: 'var(--text-muted)' }} className="hover:underline">
            {t('privacy')}
          </a>
          <a href={`${prefix}/terms-of-service`} style={{ color: 'var(--text-muted)' }} className="hover:underline">
            {t('terms')}
          </a>
          <a href={`${prefix}/cookie-settings`} style={{ color: 'var(--text-muted)' }} className="hover:underline">
            {t('cookies')}
          </a>
        </div>

        {/* Support */}
        <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
          {t('support')}{' '}
          <a href="mailto:claritleonelmnicol@gmail.com" style={{ color: 'var(--accent)' }}>
            claritleonelmnicol@gmail.com
          </a>
        </p>

        {/* Copyright */}
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('rights')}
        </p>
      </div>
    </footer>
  );
}
