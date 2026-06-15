import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.ourStory, href: 'story' },
    { name: t.nav.services, href: 'services' },
    { name: t.nav.valueAdded, href: 'value-added' },
    { name: t.nav.customers, href: 'customers' },
    { name: t.nav.categories, href: 'categories' },
    { name: t.nav.logistics, href: 'facilities' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // Language switcher button
  const LangSwitcher = ({ className = '' }) => (
    <button
      onClick={toggleLanguage}
      className={`lang-switcher ${className}`}
      aria-label="Switch language"
    >
      <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span className={`lang-option ${language === 'en' ? 'lang-active' : ''}`}>EN</span>
      <span className="lang-sep">|</span>
      <span className={`lang-option ${language === 'ar' ? 'lang-active' : ''}`}>AR</span>
    </button>
  );

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || location.pathname !== '/'
            ? 'bg-navy/95 backdrop-blur-md shadow-lg py-4' 
            : 'bg-gradient-to-b from-navy/80 to-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-8 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex-shrink-0"
          >
            <img
              src="/food_passport_logo.png"
              alt="Food Passport — Your Global Food Partner"
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-md"
              style={{ maxWidth: '200px' }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === t.nav.categories) {
                return (
                  <div key={link.name} className="group relative">
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/80 hover:text-white font-sans text-sm font-semibold tracking-wider uppercase transition-colors duration-300 flex items-center gap-1"
                    >
                      {link.name}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-green-light origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-6 w-56 bg-navy/95 backdrop-blur-md border border-white/10 rounded shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                      <div className="py-2">
                        <Link to="/category/confectionery" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">{t.nav.confectionery}</Link>
                        <Link to="/category/pantry" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">{t.nav.pantry}</Link>
                        <Link to="/category/healthy" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">{t.nav.healthy}</Link>
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="group relative text-white/80 hover:text-white font-sans text-sm font-semibold tracking-wider uppercase transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-green-light origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </button>
              );
            })}
          </div>

          {/* CTA, Lang Switcher & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Switcher — desktop */}
            <LangSwitcher className="hidden sm:flex" />

            <Link 
              to="/contact"
              className="hidden sm:block relative overflow-hidden bg-white text-navy px-6 py-2.5 font-sans text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-white group"
            >
              <span className="absolute inset-0 bg-green-light transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10">{t.nav.contactUs}</span>
            </Link>

            {/* Hamburger */}
            <button 
              className="lg:hidden text-white p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`} />
                <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-5'}`} />
                <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-4'}`} />
              </div>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-navy z-40 lg:hidden transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-6 p-8 overflow-y-auto pt-20">
          <img src="/food_passport_logo.png" alt="Food Passport" className="h-14 w-auto object-contain mb-4 opacity-90" />
          {navLinks.map((link) => {
            if (link.name === t.nav.categories) {
              return (
                <div key={link.name} className="flex flex-col items-center gap-4 border-y border-white/10 py-4 my-2 w-full">
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white text-2xl font-serif font-medium tracking-wide"
                  >
                    {link.name}
                  </button>
                  <div className="flex flex-col items-center gap-4 mt-2">
                    <Link onClick={() => setMobileMenuOpen(false)} to="/category/confectionery" className="text-green-light text-lg font-sans tracking-wide">{t.nav.confectionery}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/category/pantry" className="text-green-light text-lg font-sans tracking-wide">{t.nav.pantry}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/category/healthy" className="text-green-light text-lg font-sans tracking-wide">{t.nav.healthy}</Link>
                  </div>
                </div>
              );
            }
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-white text-2xl font-serif font-medium tracking-wide"
              >
                {link.name}
              </button>
            );
          })}

          {/* Language switcher — mobile */}
          <LangSwitcher className="mt-2" />

          <Link 
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-green-light text-white px-8 py-4 font-sans text-sm font-bold tracking-widest uppercase text-center block w-full max-w-[250px]"
          >
            {t.nav.contactUs}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
