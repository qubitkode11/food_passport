import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

/* ── Icons ─────────────────────────────────────────────────────────── */
const ExportIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ImportIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const stepIcons = {
  source: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  consolidate: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  label: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  ship: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  partner: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  qa: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  distribute: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 16l4.553-2.276A1 1 0 0021 19.382V8.618a1 1 0 00-.553-.894L15 5m0 16V5m0 0L9 7" />
    </svg>
  ),
  comply: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

const Services = () => {
  const headerRef = useScrollReveal();
  const exportRef = useScrollReveal(0.1);
  const importRef = useScrollReveal(0.2);
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-8">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-5">
            <div className="w-8 h-[2px] bg-green" />
            {t.services.eyebrow}
            <div className="w-8 h-[2px] bg-green" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-5">
            {t.services.heading}
          </h2>
          <p className="text-muted text-[16px] leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Two-Track Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden">

          {/* ── EXPORT TRACK ── */}
          <div ref={exportRef} className="reveal relative bg-navy overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 40px)'
              }} />
            <div className="relative z-10 p-10 lg:p-14">
              {/* Track badge */}
              <div className="inline-flex items-center gap-3 bg-green/15 border border-green/30 px-5 py-2 rounded-full mb-8">
                <div className="text-green-light"><ExportIcon /></div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-green-light">
                  {t.services.exportLabel}
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
                {t.services.exportHeading}
              </h3>
              <p className="text-white/60 text-[15px] leading-relaxed mb-10">
                {t.services.exportSubtitle}
              </p>

              {/* Steps */}
              <div className="space-y-0">
                {t.services.exportSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    {/* Connector line */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-green-light shrink-0 group-hover:bg-green/20 transition-colors duration-300">
                        {stepIcons[step.icon]}
                      </div>
                      {idx < t.services.exportSteps.length - 1 && (
                        <div className="w-[1px] flex-1 bg-white/10 my-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="text-xs font-bold tracking-widest text-green-light uppercase mb-1">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h4 className="font-sans font-semibold text-white text-[15px] mb-1">{step.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Markets */}
              <div className="mt-4 pt-8 border-t border-white/10">
                <div className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
                  {t.services.exportMarketsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.services.exportMarkets.map((m) => (
                    <span key={m} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── IMPORT TRACK ── */}
          <div ref={importRef} className="reveal relative bg-off overflow-hidden border-t lg:border-t-0 lg:border-l border-border">
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage: 'radial-gradient(circle, #c8d5c8 1px, transparent 1px)',
                backgroundSize: '28px 28px'
              }} />
            <div className="relative z-10 p-10 lg:p-14">
              {/* Track badge */}
              <div className="inline-flex items-center gap-3 bg-navy/8 border border-navy/15 px-5 py-2 rounded-full mb-8">
                <div className="text-navy"><ImportIcon /></div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-navy">
                  {t.services.importLabel}
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4 leading-tight">
                {t.services.importHeading}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed mb-10">
                {t.services.importSubtitle}
              </p>

              {/* Steps */}
              <div className="space-y-0">
                {t.services.importSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-navy/8 border border-navy/15 flex items-center justify-center text-navy shrink-0 group-hover:bg-green/15 group-hover:border-green/30 transition-colors duration-300">
                        {stepIcons[step.icon]}
                      </div>
                      {idx < t.services.importSteps.length - 1 && (
                        <div className="w-[1px] flex-1 bg-navy/10 my-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="text-xs font-bold tracking-widest text-green uppercase mb-1">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h4 className="font-sans font-semibold text-navy text-[15px] mb-1">{step.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Origin markets */}
              <div className="mt-4 pt-8 border-t border-navy/10">
                <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">
                  {t.services.importOriginsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.services.importOrigins.map((m) => (
                    <span key={m} className="px-3 py-1 bg-white border border-border rounded-full text-xs text-navy font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Bottom connector bar */}
        <div className="flex">
          <div className="flex-1 h-1 bg-navy" />
          <div className="flex-1 h-1 bg-green" />
        </div>

      </div>
    </section>
  );
};

export default Services;
