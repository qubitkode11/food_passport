import React from 'react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col gap-3 md:gap-4 animate-[fadeUp_0.8s_ease_forwards] animation-delay-1000">
      {/* Email Button */}
      <a 
        href="mailto:tina@foodpassport.com.au" 
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white text-navy rounded-full shadow-xl hover:bg-green-light hover:text-white hover:border-green-light transition-all duration-300 hover:scale-110 border border-gray-100"
        aria-label="Email Us"
      >
        <span className="absolute right-full mr-4 bg-navy text-white text-[10px] font-bold tracking-widest uppercase px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
          Email Us
        </span>
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      </a>

      {/* Phone Button */}
      <a 
        href="tel:+61460019597" 
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-navy text-white rounded-full shadow-2xl hover:bg-green-light transition-all duration-300 hover:scale-110"
        aria-label="Call Us"
      >
        <span className="absolute right-full mr-4 bg-navy text-white text-[10px] font-bold tracking-widest uppercase px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
          Call Us
        </span>
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      </a>
    </div>
  );
};

export default FloatingContact;
