import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './CtaSection.css';
import { useLanguage } from '../i18n/LanguageContext';

const CtaSection = () => {
  const topRef     = useScrollReveal();
  const contactRef = useScrollReveal();
  const { t } = useLanguage();

  const contactItems = [
    { label: t.cta.contactLabel, value: 'Mrs Tina Koutroumanis', link: null },
    { label: t.cta.mobileLabel,  value: '+61 460 019 597',       link: 'tel:+61460019597' },
    { label: t.cta.emailLabel,   value: 'tina@foodpassport.com.au', link: 'mailto:tina@foodpassport.com.au' },
    { label: t.cta.addressLabel, value: '11/45 Hunter Rd, Derrimut VIC, Australia', link: null },
  ];

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-top reveal" ref={topRef}>
          <div className="eyebrow eyebrow--light cta-eyebrow">{t.cta.eyebrow}</div>
          <h2 className="cta-h2">
            {t.cta.heading1} <em>{t.cta.headingEm}</em>
          </h2>
          <p className="cta-sub">
            {t.cta.subtitle}
          </p>
          <div className="cta-buttons">
            <a href="mailto:tina@foodpassport.com.au" className="btn btn-white">
              {t.cta.btnQuote}
            </a>
            <button className="btn btn-white-outline">{t.cta.btnCatalogue}</button>
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
