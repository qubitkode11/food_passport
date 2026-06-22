import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

const OurStory = () => {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal(0.2);
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-off" id="story">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div ref={contentRef} className="reveal pr-4">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6">
              <div className="w-8 h-[2px] bg-green"></div>
              {t.story.eyebrow}
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy leading-[1.15] mb-8">
              {t.story.heading1}<br />
              <span className="italic text-green">{t.story.headingEm}</span>
            </h2>
            
            <div className="space-y-6 text-muted text-[15px] leading-relaxed">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
              <p>{t.story.p3}</p>
            </div>
            
            {/* Founded stats row */}
            <div className="mt-6 grid grid-cols-2 gap-8 border-t border-border pt-6">
              <div>
                <div className="font-serif text-4xl text-navy mb-1">2002</div>
                <div className="text-xs font-semibold tracking-wider text-muted uppercase">{t.story.foundedLabel}</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-navy mb-1">22+</div>
                <div className="text-xs font-semibold tracking-wider text-muted uppercase">{t.story.yearsLabel}</div>
              </div>
            </div>
          </div>
          
          {/* Cinematic Image */}
          <div ref={imageRef} className="reveal relative h-72 md:h-[400px] lg:h-[600px] w-full mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-navy/5 translate-x-4 translate-y-4 border border-border hidden md:block" />
            <img 
              src="https://cdn.pixabay.com/photo/2017/08/07/11/23/container-2602812_1280.jpg" 
              alt="Food Passport operations" 
              className="absolute inset-0 w-full h-full object-cover shadow-sm rounded-sm md:rounded-none"
            />
            {/* Floating badge on image */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 shadow-lg border border-border hidden md:flex items-center gap-4">
              <div className="flex-1 text-center border-r border-border pr-4">
                <div className="text-xs font-bold tracking-[0.15em] uppercase text-green mb-0.5">Export</div>
                <div className="text-xs text-muted">Australia → World</div>
              </div>
              <div className="flex-1 text-center pl-4">
                <div className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-0.5">Import</div>
                <div className="text-xs text-muted">World → Australia</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurStory;
