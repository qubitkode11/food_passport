import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const servicesData = [
  {
    id: '01',
    title: 'Consolidation & Logistics',
    desc: 'Air or sea (FCL/LCL). Single or multi-product orders consolidated into one shipment to your designated port.',
    tag: 'AQIS Registered',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Quality Assurance',
    desc: 'Every order checked for product quality, expiry dates, and packaging integrity before leaving our facility.',
    tag: 'Purpose-Built Facility',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Labelling & Ink-Jetting',
    desc: 'Multi-language labels (Arabic and beyond), manufacturing and best-before ink-jetting on every item and carton.',
    tag: 'Custom Per Client',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'Custom Sourcing',
    desc: "Not in the catalogue? We source from Australia's finest manufacturers — consistency, reliability, competitive pricing.",
    tag: 'Brand Consolidation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  }
];

const Services = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.2);

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-8">
        
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-4">
            <div className="w-8 h-[2px] bg-green"></div>
            What We Do
            <div className="w-8 h-[2px] bg-green"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
            End-to-End Export Solution
          </h2>
          <p className="text-muted text-[15px]">
            From source to shelf — every step of your export journey handled under one roof.
          </p>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {servicesData.map((svc) => (
            <div key={svc.id} className="group relative bg-white p-10 lg:p-14 transition-colors duration-500 hover:bg-off overflow-hidden">
              {/* Hover highlight bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-green origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              
              <div className="flex items-start justify-between mb-8">
                <div className="text-navy group-hover:text-green transition-colors duration-300">
                  {svc.icon}
                </div>
                <span className="font-mono text-sm text-muted/60">{svc.id}</span>
              </div>
              
              <h3 className="font-sans text-xl font-semibold text-navy mb-4">{svc.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed mb-8">
                {svc.desc}
              </p>
              
              <span className="inline-block text-xs font-semibold tracking-wider text-green uppercase border-b border-green/30 pb-1">
                {svc.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
