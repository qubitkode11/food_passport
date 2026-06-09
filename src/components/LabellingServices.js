import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const LabellingServices = () => {
  const contentRef = useScrollReveal();
  const cardsRef = useScrollReveal(0.3);

  return (
    <section className="relative py-32 bg-navy overflow-hidden" id="value-added">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out hover:scale-105"
          style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/07/01/23/18/cartridges-828195_1280.jpg)' }}
        />
        {/* Cinematic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
      </div>

      <div className="container relative z-10 mx-auto px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Content */}
          <div ref={contentRef} className="reveal lg:col-span-6">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-amber mb-6">
              04
              <div className="w-8 h-[2px] bg-amber"></div>
              Value-Added Services
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-tight mb-8">
              In-House Labelling & <br />
              <span className="italic text-green-light">Ink-Jetting</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                We offer professional label translation and printing services, capable of translating English ingredients into languages such as Arabic and many others. Our specialist team can apply labels to individual items across all categories (ambient, chilled, frozen), ensuring that products are ready for their intended destinations.
              </p>
              <p>
                Additionally, we provide inkjet printing for manufacturing and best before dates on every product, carton, sleeve, and box as required. Our labeling and inkjet services can be customized to meet the specific needs of each client.
              </p>
            </div>
          </div>

          {/* Right Glassmorphism Cards */}
          <div ref={cardsRef} className="reveal lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center text-green-light mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-xl text-white mb-3">Multi-Language</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Arabic, and many other languages available. Expert translation of complex ingredient lists.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center text-amber mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-xl text-white mb-3">Date Coding</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                High-precision inkjet printing for manufacturing & best before dates on all packaging types.
              </p>
            </div>
            
            <div className="sm:col-span-2 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-white mb-2">Custom Solutions</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Tailored to each client's specific regulatory requirements and destination market standards.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LabellingServices;
