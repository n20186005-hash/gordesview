'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState, useEffect } from 'react';

export default function Gallery() {
  const t = useTranslations('gallery');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Generate array of 33 images from the gallery folder
  const photos = Array.from({ length: 33 }, (_, i) => ({
    src: `/gallery/images (${i + 1}).jpg`,
    alt: `Gordes View Gallery Image ${i + 1}`
  }));

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Use a small buffer (e.g., 2px) to account for rounding errors
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="photos" className="py-20 md:py-28 relative" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="max-w-6xl mx-auto px-4 relative">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>
        
        <div className="relative mt-8 group">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-gray-200 dark:border-neutral-700 text-gray-800 dark:text-gray-200 transition-all ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'}`}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((photo, i) => (
              <div key={i} className="flex-none w-72 md:w-80 snap-center relative overflow-hidden rounded-xl group/item">
                <a href={photo.src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover/item:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                      {t('openOriginal')}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-gray-200 dark:border-neutral-700 text-gray-800 dark:text-gray-200 transition-all ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'}`}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
