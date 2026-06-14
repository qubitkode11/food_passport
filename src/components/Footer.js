import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
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

  return (
    <footer className="relative bg-navy text-white overflow-hidden pt-24 pb-8 border-t border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-green-light/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        
        {/* Top Section: CTA */}
        <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 group cursor-pointer" onClick={() => handleNavClick('contact')}>
          <div className="max-w-2xl transition-transform duration-500 group-hover:translate-x-2">
            <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-[1.1] transition-colors duration-500 group-hover:text-green-light">
              Ready to take your brand <span className="italic text-white">global?</span>
            </h2>
            <p className="text-white/60 text-lg font-sans max-w-md leading-relaxed group-hover:text-white/80 transition-colors duration-500">
              Partner with Food Passport for seamless export, consolidation, and labelling solutions from Australia to the world.
            </p>
          </div>
          <button 
            className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 group-hover:border-green-light group-hover:bg-green-light transition-all duration-500 flex-shrink-0"
          >
            <svg className="w-6 h-6 text-white transition-transform duration-500 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20 md:border-t md:border-white/10 md:pt-16">
          
          {/* Logo & About */}
          <div className="lg:col-span-4">
            <Link 
              to="/" 
              className="cursor-pointer group inline-block mb-6" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="/food_passport_logo.png"
                alt="Food Passport — Your Global Food Partner"
                className="h-14 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
                style={{ maxWidth: '220px' }}
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Sourcing, consolidating, labelling, and shipping premium Australian FMCG to over 5 continents since 2002.
            </p>
          </div>

          {/* Categories */}
          <div className="hidden md:block lg:col-span-3">
            <h4 className="font-sans font-bold text-white tracking-[0.2em] uppercase mb-8 text-xs">Categories</h4>
            <ul className="space-y-4">
              <li>
                <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/category/confectionery" className="text-white/60 hover:text-green-light transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-3 h-[1px] bg-white/20 transition-all duration-300 group-hover:w-6 group-hover:bg-green-light"></span>
                  Confectionery & Snacks
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/category/pantry" className="text-white/60 hover:text-green-light transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-3 h-[1px] bg-white/20 transition-all duration-300 group-hover:w-6 group-hover:bg-green-light"></span>
                  Pantry Essentials
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/category/healthy" className="text-white/60 hover:text-green-light transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-3 h-[1px] bg-white/20 transition-all duration-300 group-hover:w-6 group-hover:bg-green-light"></span>
                  Healthy Living
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block lg:col-span-2">
            <h4 className="font-sans font-bold text-white tracking-[0.2em] uppercase mb-8 text-xs">Explore</h4>
            <ul className="space-y-4">
              <li><button onClick={() => handleNavClick('story')} className="text-white/60 hover:text-green-light transition-colors duration-300 text-sm">Our Story</button></li>
              <li><button onClick={() => handleNavClick('services')} className="text-white/60 hover:text-green-light transition-colors duration-300 text-sm">Services</button></li>
              <li><button onClick={() => handleNavClick('facilities')} className="text-white/60 hover:text-green-light transition-colors duration-300 text-sm">Logistics</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-bold text-white tracking-[0.2em] uppercase mb-8 text-xs">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="text-white/60 text-sm flex items-start gap-4">
                <svg className="w-5 h-5 text-green-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Derrimut VIC 3026,<br/>Melbourne, Australia</span>
              </li>
              <li className="text-white/60 text-sm flex items-center gap-4">
                <svg className="w-5 h-5 text-green-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:info@foodpassport.com.au" className="hover:text-white transition-colors border-b border-white/20 pb-0.5 hover:border-white">info@foodpassport.com.au</a>
              </li>
              <li className="text-white/60 text-sm flex items-center gap-4">
                <svg className="w-5 h-5 text-green-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+61460019597" className="hover:text-white transition-colors border-b border-white/20 pb-0.5 hover:border-white">+61 460 019 597</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/40 tracking-widest font-sans uppercase">
          <p>© {new Date().getFullYear()} Food Passport Pty Ltd. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-6 md:mt-0 flex items-center gap-2 hover:text-white transition-colors duration-300 group"
          >
            Back to top
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
