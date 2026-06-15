import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

const Logistics = () => {
  const contentRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="relative py-32 bg-navy overflow-hidden" id="facilities">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      </div>

      <div className="container relative z-10 mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div ref={contentRef} className="reveal max-w-xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-6">
              <div className="w-8 h-[2px] bg-green-light"></div>
              {t.logistics.eyebrow}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-[1.15] mb-8">
              {t.logistics.heading1} <span className="italic text-green-light">{t.logistics.headingEm}</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              {t.logistics.body}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-12">
            {/* Ambient Card */}
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <span className="inline-block px-3 py-1 bg-amber-pale text-amber text-[10px] font-bold tracking-widest uppercase mb-6">
                {t.logistics.ambient}
              </span>
              <h3 className="font-serif text-2xl text-white mb-3">{t.logistics.ambientTitle}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {t.logistics.ambientDesc}
              </p>
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-semibold text-white mb-1">400</div>
                  <div className="text-[10px] font-semibold tracking-wider text-white/40 uppercase">{t.logistics.ambientPallets}</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white mb-1">+18°C</div>
                  <div className="text-[10px] font-semibold tracking-wider text-white/40 uppercase">{t.logistics.ambientTemp}</div>
                </div>
              </div>
            </div>

            {/* Cold Chain Card */}
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 text-[10px] font-bold tracking-widest uppercase mb-6">
                {t.logistics.chilled}
              </span>
              <h3 className="font-serif text-2xl text-white mb-3">{t.logistics.chilledTitle}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {t.logistics.chilledDesc}
              </p>
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-semibold text-white mb-1">3,500</div>
                  <div className="text-[10px] font-semibold tracking-wider text-white/40 uppercase">{t.logistics.chilledPallets}</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white mb-1">24/7</div>
                  <div className="text-[10px] font-semibold tracking-wider text-white/40 uppercase">{t.logistics.chilledMonitoring}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Logistics;
