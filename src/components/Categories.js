import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

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

const categoryData = [
  {
    id: 'CAT-01',
    route: 'confectionery',
    title: 'Confectionery & Snacks',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=2000&auto=format&fit=crop',
    marqueeImages: [...confectioneryImages, ...confectioneryImages]
  },
  {
    id: 'CAT-02',
    route: 'pantry',
    title: 'Pantry Essentials',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2000&auto=format&fit=crop',
    marqueeImages: [...pantryImages, ...pantryImages]
  },
  {
    id: 'CAT-03',
    route: 'healthy',
    title: 'Healthy Living',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000&auto=format&fit=crop',
    marqueeImages: [...healthyImages, ...healthyImages]
  }
];

const Categories = () => {
  const headerRef = useScrollReveal();
  
  return (
    <section className="py-24 bg-off2" id="categories">
      <div className="container mx-auto px-8">
        
        <div ref={headerRef} className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              <div className="w-8 h-[2px] bg-green"></div>
              Our Product Range
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy">
              Premium <span className="italic text-green">Categories</span>
            </h2>
          </div>
          <p className="text-muted text-[15px] max-w-md pb-2">
            Three core categories, dozens of brands — all Australian-made and ready for global export.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categoryData.map((cat, index) => {
            const cardRef = useScrollReveal(0.1 + (index * 0.1)); // eslint-disable-line
            return (
              <Link to={`/category/${cat.route}`} key={cat.id} ref={cardRef} className="reveal group relative h-[500px] overflow-hidden bg-navy cursor-pointer rounded-sm shadow-sm block">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="font-mono text-xs text-green-light mb-3 block">{cat.id}</span>
                  <h3 className="font-serif text-3xl text-white mb-6 leading-tight flex items-center justify-between">
                    {cat.title}
                    <svg className="w-6 h-6 text-green-light opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </h3>
                  
                  {/* Images slide up on hover */}
                  <div className="transform translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-semibold tracking-wider text-white/60 uppercase mb-4">Featured Products</p>
                    
                    <div className="relative flex items-center overflow-hidden">
                      {/* Gradients */}
                      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-navy/80 to-transparent z-10" />
                      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-navy/80 to-transparent z-10" />
                      
                      <div className="flex w-max animate-scroll items-center gap-4">
                        {cat.marqueeImages.map((src, idx) => (
                          <div key={idx} className="w-20 h-14 bg-white/90 rounded flex-shrink-0 p-1 overflow-hidden">
                            <img src={src} alt="Product Thumbnail" className="w-full h-full object-contain" />
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
