'use client';

import { useLocale, useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const homeHref = `/${locale}`;
  const aboutHref = `/${locale}/about`;

  const navItems = [
    { key: 'overview', href: `${homeHref}#overview` },
    { key: 'photos', href: `${homeHref}#photos` },
    { key: 'tips', href: `${homeHref}#tips` },
    { key: 'reviews', href: `${homeHref}#reviews` },
    { key: 'map', href: `${homeHref}#map` },
  ] as const;

  return (
    <header className="header-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={homeHref} className="font-serif font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
          Gordes<span style={{ color: 'var(--accent)' }}>View</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href={aboutHref}
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('about')}
          </a>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border-color)' }}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href={aboutHref}
            onClick={() => setMobileOpen(false)}
            className="py-2 text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('about')}
          </a>
        </nav>
      )}
    </header>
  );
}
