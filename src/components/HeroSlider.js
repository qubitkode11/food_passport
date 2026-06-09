import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?q=80&w=2070&auto=format&fit=crop',
    title: 'Your Global Food Partner',
    subtitle: 'Premium Australian FMCG — sourced, consolidated, labelled, and shipped to Europe, the Middle East, Africa, Asia, and beyond.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop',
    title: 'Seamless Global Logistics',
    subtitle: 'From Melbourne to Milan, Dubai to Dakar — we handle the complexity of global supply chains so you don\'t have to.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    title: 'Premium Quality Assured',
    subtitle: 'Consolidating Australia\'s finest brands with meticulous quality control, multi-language labelling, and careful handling.',
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-navy" id="hero">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with slight zoom animation */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${
              index === current ? 'scale-105' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-8 h-full flex items-center">
        <div className="max-w-2xl text-white pt-20">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-green-light mb-6 opacity-0 translate-y-4 animate-[fadeUp_0.8s_ease_forwards_0.2s]">
            <div className="w-8 h-[2px] bg-green-light"></div>
            Est. 2002 · Melbourne, Australia
          </div>

          {/* We use a key on a wrapper to force re-animation when slide changes */}
          <div key={current}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease_forwards_0.1s]">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease_forwards_0.3s] max-w-xl">
              {slides[current].subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease_forwards_0.6s]">
            <button 
              onClick={() => scrollTo('categories')}
              className="bg-green hover:bg-green-light text-white px-8 py-4 font-sans text-sm font-semibold tracking-wide transition-colors duration-300"
            >
              View Catalogue
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-transparent border border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 font-sans text-sm font-semibold tracking-wide transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-8 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 transition-all duration-500 ${
                index === current ? 'w-12 bg-green-light' : 'w-6 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
