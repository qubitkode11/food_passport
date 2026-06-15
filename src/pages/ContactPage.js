import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

const ContactPage = () => {
  const cardsRef = useScrollReveal();
  const formRef = useScrollReveal(0.2);
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Cinematic Hero */}
      <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden flex-shrink-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-[slowZoom_20s_ease-out_forwards]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-8 max-w-4xl animate-[fadeUp_0.8s_ease_forwards] mt-16">
          <div className="flex items-center justify-center gap-4 text-xs font-bold tracking-[0.3em] uppercase text-green-light mb-8">
            <div className="w-12 h-[1px] bg-green-light"></div>
            {t.contact.heroEyebrow}
            <div className="w-12 h-[1px] bg-green-light"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight">
            {t.contact.heroHeading1} <span className="italic text-white/50">{t.contact.heroHeadingEm}</span>
          </h1>
          <p className="text-xl text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Contact Cards - Full Width, Flush with Hero */}
      <div className="w-full bg-off border-b border-border flex-shrink-0">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
          <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-white border border-border shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.directContact}</div>
              <div className="text-xl font-medium font-serif text-navy">Mrs Tina Koutroumanis</div>
            </div>

            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-white border border-border shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.emailUs}</div>
              <a href="mailto:tina@foodpassport.com.au" className="text-lg text-navy font-medium hover:text-green-light transition-colors">tina@foodpassport.com.au</a>
            </div>

            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-white border border-border shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.callUs}</div>
              <a href="tel:+61460019597" className="text-lg text-navy font-medium hover:text-green-light transition-colors">+61 460 019 597</a>
            </div>

            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-navy shadow-lg rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.headquarters}</div>
              <div className="text-sm text-navy leading-relaxed font-medium">11/45 Hunter Rd,<br/>Derrimut VIC 3026</div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content: Form & Map - Flex container */}
      <div className="w-full flex-grow flex flex-col lg:flex-row mb-16 lg:mb-24">
        
        {/* Form Side - Fills available space on left */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <div ref={formRef} className="reveal w-full max-w-3xl p-8 md:p-16 lg:py-24 lg:pr-24">
            <div className="mb-12">
              <h2 className="font-serif text-4xl text-navy mb-4">{t.contact.formHeading}</h2>
              <p className="text-navy/60 font-sans text-lg">{t.contact.formSubtitle}</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="fname" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-navy focus:outline-none focus:border-green-light transition-colors placeholder-transparent" placeholder={t.contact.firstName} />
                  <label htmlFor="fname" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-muted uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-green-light">{t.contact.firstName}</label>
                </div>
                <div className="relative">
                  <input type="text" id="lname" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-navy focus:outline-none focus:border-green-light transition-colors placeholder-transparent" placeholder={t.contact.lastName} />
                  <label htmlFor="lname" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-muted uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-green-light">{t.contact.lastName}</label>
                </div>
              </div>

              <div className="relative">
                <input type="text" id="company" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-navy focus:outline-none focus:border-green-light transition-colors placeholder-transparent" placeholder={t.contact.company} />
                <label htmlFor="company" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-muted uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-green-light">{t.contact.company}</label>
              </div>

              <div className="relative">
                <input type="email" id="email" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-navy focus:outline-none focus:border-green-light transition-colors placeholder-transparent" placeholder={t.contact.email} />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-muted uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-green-light">{t.contact.email}</label>
              </div>

              <div className="relative">
                <label className="block text-xs font-bold tracking-widest text-muted uppercase mb-4">{t.contact.regionLabel}</label>
                <select className="w-full border-b border-gray-300 bg-transparent py-2 text-navy focus:outline-none focus:border-green-light transition-colors cursor-pointer appearance-none">
                  <option value="" disabled selected hidden>{t.contact.regionPlaceholder}</option>
                  {t.contact.regions.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <svg className="absolute right-0 bottom-4 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>

              <div className="relative mt-12">
                <textarea id="message" rows="4" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-navy focus:outline-none focus:border-green-light transition-colors resize-none placeholder-transparent" placeholder={t.contact.messageLabel}></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-muted uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-green-light">{t.contact.messageLabel}</label>
              </div>

              <button type="submit" className="group relative overflow-hidden bg-navy text-white px-10 py-4 font-sans text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-navy w-full mt-8 rounded-sm">
                <span className="absolute inset-0 bg-green-light transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t.contact.submit}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Side - Fills available space on right, stretches full height, touches footer */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-off2 relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4844622158654!2d144.75702221531853!3d-37.79410197975618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68a2e5d9c2e0f%3A0xc6c4f3c4c9e78280!2s11%2F45%20Hunter%20Rd%2C%20Derrimut%20VIC%203026%2C%20Australia!5e0!3m2!1sen!2sus!4v1714498305886!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) opacity(0.9)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Food Passport Location"
            className="absolute inset-0 h-full transition-all duration-700 group-hover:filter-none"
          ></iframe>
          
          {/* Floating Tag on Map */}
          <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-md p-6 shadow-2xl z-20 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <h4 className="font-serif text-2xl text-navy mb-2">{t.contact.visitUs}</h4>
            <p className="text-sm font-sans text-navy/70 leading-relaxed">
              11/45 Hunter Rd,<br/>
              Derrimut VIC 3026
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
