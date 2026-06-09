import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const ContactSection = () => {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal(0.2);

  return (
    <section className="py-24 bg-off" id="contact">
      <div className="container mx-auto px-8">
        
        <div className="bg-white border border-border shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Left side: Content & Details */}
            <div ref={leftRef} className="reveal lg:col-span-2 bg-navy p-12 md:p-16 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-green-light mb-6">
                  <div className="w-8 h-[2px] bg-green-light"></div>
                  Get in Touch
                </div>
                <h2 className="font-serif text-4xl font-medium leading-tight mb-6">
                  Let's Work <br /><span className="italic text-green-light">Together</span>
                </h2>
                <p className="text-white/70 text-[15px] leading-relaxed mb-12">
                  Whether you need a single product or a full container — we'll make it happen. Talk to our export specialists today.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mb-2">Direct Contact</div>
                  <div className="text-lg font-medium">Mrs Tina Koutroumanis</div>
                </div>
                
                <div>
                  <div className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mb-2">Phone</div>
                  <a href="tel:+61460019597" className="text-lg text-green-light hover:text-white transition-colors duration-300">
                    +61 460 019 597
                  </a>
                </div>

                <div>
                  <div className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mb-2">Email</div>
                  <a href="mailto:tina@foodpassport.com.au" className="text-lg text-green-light hover:text-white transition-colors duration-300">
                    tina@foodpassport.com.au
                  </a>
                </div>

                <div>
                  <div className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mb-2">Facility Location</div>
                  <div className="text-[15px] text-white/80 leading-relaxed">
                    11/45 Hunter Rd,<br />
                    Derrimut VIC, Australia
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form (UI only) */}
            <div ref={rightRef} className="reveal lg:col-span-3 p-12 md:p-16 lg:pl-20 bg-white">
              <h3 className="font-serif text-3xl text-navy mb-8">Send an Enquiry</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-2">First Name</label>
                    <input type="text" className="w-full bg-off border border-border px-4 py-3 text-navy focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full bg-off border border-border px-4 py-3 text-navy focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-2">Company</label>
                    <input type="text" className="w-full bg-off border border-border px-4 py-3 text-navy focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors" placeholder="Your Business" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-2">Email Address</label>
                    <input type="email" className="w-full bg-off border border-border px-4 py-3 text-navy focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-2">Region of Interest</label>
                  <select className="w-full bg-off border border-border px-4 py-3 text-navy focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors appearance-none">
                    <option>Middle East</option>
                    <option>Asia Pacific</option>
                    <option>Europe</option>
                    <option>Africa</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-2">How can we help?</label>
                  <textarea rows="4" className="w-full bg-off border border-border px-4 py-3 text-navy focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors resize-none" placeholder="Tell us about your sourcing needs..."></textarea>
                </div>

                <button type="submit" className="bg-green hover:bg-green-light text-white px-8 py-4 font-sans text-sm font-semibold tracking-wide transition-colors duration-300 w-full md:w-auto">
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
