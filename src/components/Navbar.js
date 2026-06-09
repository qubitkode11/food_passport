import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Our Story', href: 'story' },
  { name: 'Services', href: 'services' },
  { name: 'Value-Added', href: 'value-added' },
  { name: 'Customers', href: 'customers' },
  { name: 'Categories', href: 'categories' },
  { name: 'Logistics', href: 'facilities' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      // Navigate to home, then scroll after a tiny delay to let DOM render
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

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
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-green-light rounded flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12">
              <span className="font-serif text-white font-bold text-xl leading-none">F</span>
            </div>
            <span className="font-sans font-bold text-white tracking-widest uppercase text-lg hidden sm:block">
              Food Passport
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === 'Categories') {
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
                        <Link to="/category/confectionery" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Confectionery & Snacks</Link>
                        <Link to="/category/pantry" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Pantry Essentials</Link>
                        <Link to="/category/healthy" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Healthy Living</Link>
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

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <Link 
              to="/contact"
              className="hidden sm:block relative overflow-hidden bg-white text-navy px-6 py-2.5 font-sans text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-white group"
            >
              <span className="absolute inset-0 bg-green-light transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10">Contact Us</span>
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
          {navLinks.map((link) => {
            if (link.name === 'Categories') {
              return (
                <div key={link.name} className="flex flex-col items-center gap-4 border-y border-white/10 py-4 my-2 w-full">
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white text-2xl font-serif font-medium tracking-wide"
                  >
                    {link.name}
                  </button>
                  <div className="flex flex-col items-center gap-4 mt-2">
                    <Link onClick={() => setMobileMenuOpen(false)} to="/category/confectionery" className="text-green-light text-lg font-sans tracking-wide">Confectionery & Snacks</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/category/pantry" className="text-green-light text-lg font-sans tracking-wide">Pantry Essentials</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/category/healthy" className="text-green-light text-lg font-sans tracking-wide">Healthy Living</Link>
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
          <Link 
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 bg-green-light text-white px-8 py-4 font-sans text-sm font-bold tracking-widest uppercase text-center block w-full max-w-[250px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
