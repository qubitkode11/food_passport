import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const OurStory = () => {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal(0.2);

  return (
    <section className="py-24 bg-off" id="story">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div ref={contentRef} className="reveal pr-4">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6">
              <div className="w-8 h-[2px] bg-green"></div>
              Our Story
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy leading-[1.15] mb-8">
              Decades of FMCG <br />
              <span className="italic text-green">Expertise</span>
            </h2>
            
            <div className="space-y-6 text-muted text-[15px] leading-relaxed">
              <p>
                Founded in 2002 by Mrs. Tina Koutroumanis, Food Passport was built on a simple premise: 
                to bridge the gap between Australia's finest food producers and the complex demands of international markets.
              </p>
              <p>
                With over 30 years of personal experience in the FMCG sector, our leadership understands the nuances 
                of global food trade. What started as a modest operation in Melbourne has grown into a highly specialized 
                consolidation hub serving clients across 5 continents.
              </p>
              <p>
                We don't just ship boxes. We ensure compliance, manage multi-language ink-jetting, oversee QA, 
                and protect your brand's integrity across borders. When you partner with us, you gain an extension 
                of your own operations in Australia.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <div className="font-serif text-4xl text-navy mb-1">2002</div>
                <div className="text-xs font-semibold tracking-wider text-muted uppercase">Founded In</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-navy mb-1">22+</div>
                <div className="text-xs font-semibold tracking-wider text-muted uppercase">Years Experience</div>
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
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurStory;
