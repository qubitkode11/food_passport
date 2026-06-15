import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

const confectioneryImages = [
  encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015424.png'),
  encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015432.png'),
  encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015440.png'),
  encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015530.png'),
  encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015547.png'),
  encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015603.png'),
];

const pantryImages = [
  encodeURI('/PANTRY/Screenshot 2026-06-10 015707.png'),
  encodeURI('/PANTRY/Screenshot 2026-06-10 015730.png'),
  encodeURI('/PANTRY/Screenshot 2026-06-10 015846.png'),
  encodeURI('/PANTRY/Screenshot 2026-06-10 015907.png'),
  encodeURI('/PANTRY/Screenshot 2026-06-10 020012.png'),
  encodeURI('/PANTRY/Screenshot 2026-06-10 020050.png'),
];

const healthyImages = [
  encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020154.png'),
  encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020210.png'),
  encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020227.png'),
  encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020323.png'),
  encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020346.png'),
  encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020353.png'),
];

const categoryRoutes = ['confectionery', 'pantry', 'healthy'];
const categoryImages = [
  'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000&auto=format&fit=crop',
];
const categoryMarqueeImages = [
  [...confectioneryImages, ...confectioneryImages],
  [...pantryImages, ...pantryImages],
  [...healthyImages, ...healthyImages],
];

const Categories = () => {
  const headerRef = useScrollReveal();
  const { t } = useLanguage();

  const categoryNames = [
    t.categories.confectionery,
    t.categories.pantry,
    t.categories.healthy,
  ];
  const categoryIds = ['CAT-01', 'CAT-02', 'CAT-03'];

  return (
    <section className="py-24 bg-off2" id="categories">
      <div className="container mx-auto px-8">
        
        <div ref={headerRef} className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              <div className="w-8 h-[2px] bg-green"></div>
              {t.categories.eyebrow}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy">
              {t.categories.heading1} <span className="italic text-green">{t.categories.headingEm}</span>
            </h2>
          </div>
          <p className="text-muted text-[15px] max-w-md pb-2">
            {t.categories.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categoryRoutes.map((route, index) => {
            const cardRef = useScrollReveal(0.1 + (index * 0.1)); // eslint-disable-line
            return (
              <Link to={`/category/${route}`} key={categoryIds[index]} ref={cardRef} className="reveal group relative h-[500px] overflow-hidden bg-navy cursor-pointer rounded-sm shadow-sm block">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  style={{ backgroundImage: `url(${categoryImages[index]})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="font-mono text-xs text-green-light mb-3 block">{categoryIds[index]}</span>
                  <h3 className="font-serif text-3xl text-white mb-6 leading-tight flex items-center justify-between">
                    {categoryNames[index]}
                    <svg className="w-6 h-6 text-green-light opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </h3>
                  
                  {/* Always-visible brand images strip */}
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-white/60 uppercase mb-4">{t.categories.featuredProducts}</p>
                    
                    <div
                      className="relative flex items-center overflow-visible"
                      style={{ '--tw-overflow': 'visible' }}
                      dir="ltr"
                    >
                       <div
                         className="flex w-max items-center gap-4"
                         style={{ animation: 'scroll 40s linear infinite' }}
                         onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                         onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                       >
                         {categoryMarqueeImages[index].map((src, idx) => (
                           <div
                             key={idx}
                             className="flex-shrink-0 cursor-pointer"
                             style={{
                               width: '80px',
                               height: '56px',
                               transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, z-index 0s',
                               borderRadius: '6px',
                               background: 'rgba(255,255,255,0.92)',
                               padding: '4px',
                               overflow: 'hidden',
                               position: 'relative',
                               zIndex: 1,
                             }}
                             onMouseEnter={e => {
                               e.currentTarget.style.transform = 'scale(1.65) translateY(-6px)';
                               e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.5), 0 0 0 2px rgba(212,184,94,0.8)';
                               e.currentTarget.style.zIndex = '30';
                               e.currentTarget.style.background = 'rgba(255,255,255,1)';
                             }}
                             onMouseLeave={e => {
                               e.currentTarget.style.transform = 'scale(1) translateY(0)';
                               e.currentTarget.style.boxShadow = 'none';
                               e.currentTarget.style.zIndex = '1';
                               e.currentTarget.style.background = 'rgba(255,255,255,0.92)';
                             }}
                           >
                             <img src={src} alt="Product Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                           </div>
                         ))}
                       </div>
                     </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Categories;
