import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './CtaSection.css';

const contactItems = [
  { label: 'Contact', value: 'Mrs Tina Koutroumanis', link: null },
  { label: 'Mobile',  value: '+61 460 019 597',       link: 'tel:+61460019597' },
  { label: 'Email',   value: 'tina@foodpassport.com.au', link: 'mailto:tina@foodpassport.com.au' },
  { label: 'Address', value: '11/45 Hunter Rd, Derrimut VIC, Australia', link: null },
];

const CtaSection = () => {
  const topRef     = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-top reveal" ref={topRef}>
          <div className="eyebrow eyebrow--light cta-eyebrow">Get in Touch</div>
          <h2 className="cta-h2">
            Let's Work <em>Together</em>
          </h2>
          <p className="cta-sub">
            Whether you need a single product or a full container — we'll make it
            happen. Talk to Tina today.
          </p>
          <div className="cta-buttons">
            <a href="mailto:tina@foodpassport.com.au" className="btn btn-white">
              Request a Quote
            </a>
            <button className="btn btn-white-outline">Download Catalogue</button>
          </div>
        </div>

        <div className="contact-row reveal" ref={contactRef}>
          {contactItems.map((item) => (
            <div className="contact-item" key={item.label}>
              <div className="contact-label">{item.label}</div>
              <div className="contact-value">
                {item.link ? (
                  <a href={item.link}>{item.value}</a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
