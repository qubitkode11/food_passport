import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

// Static product data (not translated — product names stay as-is)
const categoryDatabase = {
  'confectionery': {
    heroImage: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=2000&auto=format&fit=crop',
    products: [
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015424.png'), name: 'Cadbury' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015432.png'), name: 'OREO' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015440.png'), name: 'SOUR PATCH KIDS' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015446.png'), name: 'MARS WRIGLEY' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015458.png'), name: 'SNACK BRANDS AUSTRALIA' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015506.png'), name: 'THE NATURAL CONFECTIONERY CO.' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015520.png'), name: "ALLEN'S" },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015530.png'), name: 'KITKAT' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015538.png'), name: 'NESTLE' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015547.png'), name: 'LOTUS BISCOFF' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015556.png'), name: 'COBS' },
      { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015603.png'), name: "ARNOTT'S" },
    ]
  },
  'pantry': {
    heroImage: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2000&auto=format&fit=crop',
    products: [
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015707.png'), name: 'SANDHURST' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015713.png'), name: "MCKENZIE'S" },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015724.png'), name: 'SPC' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015730.png'), name: 'SPIRAL FOODS' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015738.png'), name: "LEGGO'S" },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015745.png'), name: 'CHICKEN TONIGHT' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015752.png'), name: 'WELL & GOOD' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015803.png'), name: 'RIVERINA GROVE' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015822.png'), name: 'SLENDIER' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015835.png'), name: 'MINGLE' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015846.png'), name: "GREEN'S" },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015855.png'), name: 'TABASCO' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015907.png'), name: 'BEERENBERG' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015915.png'), name: "MAYVER'S" },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015929.png'), name: 'EBO' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015938.png'), name: 'PURE HARVEST' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015951.png'), name: "TAYLOR'S" },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015959.png'), name: 'LOTUS' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 020012.png'), name: 'MAJANS BHUJA' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 020019.png'), name: 'CALBEE' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 020026.png'), name: "DIEGO'S" },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 020033.png'), name: 'INFUZIONS' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 020041.png'), name: 'ALTIMATE' },
      { src: encodeURI('/PANTRY/Screenshot 2026-06-10 020050.png'), name: 'SMOOVI' },
    ]
  },
  'healthy': {
    heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000&auto=format&fit=crop',
    products: [
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020154.png'), name: 'Product Name' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020200.png'), name: 'NOSHU' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020210.png'), name: 'LOCA KO.' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020219.png'), name: 'LOCA KO.' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020227.png'), name: 'RED TRACKTORS' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020236.png'), name: 'PIRANHA' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020247.png'), name: 'FOOD FOR HEALTH' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020257.png'), name: 'FOOD FOR HEALTH' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020304.png'), name: 'DJ & A' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020311.png'), name: 'FODMAPPED' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020323.png'), name: 'BROOKFARM' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020331.png'), name: 'BAINS' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020339.png'), name: 'ORGRAN' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020346.png'), name: 'SPLITS' },
      { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020353.png'), name: 'ORGRAN' },
    ]
  },
  'fadefit': {
    heroImage: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2000&auto=format&fit=crop',
    products: []
  },
  'burjbites': {
    heroImage: 'https://images.unsplash.com/photo-1581006509951-e12484a929fb?q=80&w=2000&auto=format&fit=crop',
    products: []
  }
};

const CategoryPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const category = categoryDatabase[id];
  const contentRef = useScrollReveal();

  // Translated hero text from i18n
  const categoryHero = t.categoryPage.categories[id] || { title: id, subtitle: '' };

  if (!category) {
    return <div className="h-screen flex items-center justify-center text-2xl font-serif">Category Not Found</div>;
  }

  return (
    <div className="bg-off min-h-screen pb-24">
      {/* Cinematic Hero — text is translated */}
      <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.heroImage})` }}
        />
        <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-8 max-w-4xl animate-[fadeUp_0.8s_ease_forwards]">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-green-light mb-6">
            <div className="w-8 h-[2px] bg-green-light"></div>
            {t.categoryPage.premiumAssortment}
            <div className="w-8 h-[2px] bg-green-light"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            {categoryHero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-sans max-w-2xl mx-auto">
            {categoryHero.subtitle}
          </p>
        </div>
      </div>

      {/* Product Grid — product card names stay in English (brand names) */}
      <div className="container mx-auto px-8 max-w-7xl -mt-16 relative z-20">
        <div ref={contentRef} className="reveal">
          {category.products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.map((prod, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border"
                >
                  <div className="aspect-[4/3] bg-off2 overflow-hidden relative p-4 flex items-center justify-center">
                    <img 
                      src={prod.src} 
                      alt={prod.name} 
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
                  </div>
                  <div className="p-6 text-center border-t border-border">
                    <h3 className="font-sans font-bold text-navy text-sm tracking-wider uppercase">
                      {prod.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-border">
              <h3 className="font-serif text-2xl text-navy mb-4">Products Coming Soon</h3>
              <p className="text-muted font-sans">We are currently updating our catalogue for this category.</p>
            </div>
          )}
        </div>
        
        {/* CTA — text translated, category name from i18n */}
        <div className="mt-24 bg-navy text-white rounded-2xl p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c50a58?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t.categoryPage.ctaHeading} {categoryHero.title}?</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              {t.categoryPage.ctaSubtitle}
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/" className="bg-transparent border border-white/50 hover:bg-white hover:text-navy px-8 py-3 font-sans text-sm font-bold tracking-widest uppercase transition-colors duration-300">
                {t.categoryPage.backToHome}
              </Link>
              <Link to="/contact" className="bg-green-light text-navy hover:bg-white px-8 py-3 font-sans text-sm font-bold tracking-widest uppercase transition-colors duration-300">
                {t.categoryPage.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
