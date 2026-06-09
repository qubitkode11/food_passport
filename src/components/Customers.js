import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Customers = () => {
  const contentRef = useScrollReveal();

  return (
    <section className="py-24 bg-white border-t border-border" id="customers">
      <div className="container mx-auto px-8">
        
        <div ref={contentRef} className="reveal text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6">
            <div className="w-8 h-[2px] bg-green"></div>
            Our Customers
            <div className="w-8 h-[2px] bg-green"></div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-12">
            Trusted by Global Retailers & Distributors
          </h2>
          
          <p className="text-muted text-lg leading-relaxed mb-16 italic font-serif">
            "Food Passport's ability to consolidate top-tier Australian brands into single shipments has completely transformed our supply chain. Their attention to multi-language labelling and QA ensures our stock hits the shelves immediately."
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using placeholder logos */}
            <div className="flex items-center justify-center p-6 border border-border bg-off">
              <span className="font-sans font-bold text-xl text-navy tracking-widest uppercase">Gourmet Asia</span>
            </div>
            <div className="flex items-center justify-center p-6 border border-border bg-off">
              <span className="font-sans font-bold text-xl text-navy tracking-widest uppercase">EuroFoods</span>
            </div>
            <div className="flex items-center justify-center p-6 border border-border bg-off">
              <span className="font-sans font-bold text-xl text-navy tracking-widest uppercase">Desert Retail</span>
            </div>
            <div className="flex items-center justify-center p-6 border border-border bg-off">
              <span className="font-sans font-bold text-xl text-navy tracking-widest uppercase">Pacific Mart</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Customers;
