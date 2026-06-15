import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Facilities.css';
import { useLanguage } from '../i18n/LanguageContext';

/* Each card gets its own component so the hook is called at the top level */
const FacilityCard = ({ facility }) => {
  const cardRef = useScrollReveal();
  return (
    <article className="facility-card reveal" ref={cardRef}>
      <span className={`facility-badge ${facility.badgeClass}`}>{facility.badge}</span>
      <h3 className="facility-title">{facility.title}</h3>
      <p className="facility-desc">{facility.desc}</p>
      <div className="spec-grid">
        {facility.specs.map((s) => (
          <div className="spec-item" key={s.key}>
            <div className="spec-value">{s.value}</div>
            <div className="spec-key">{s.key}</div>
          </div>
        ))}
      </div>
    </article>
  );
};

const Facilities = () => {
  const headerRef = useScrollReveal();
  const { t } = useLanguage();

  const facilitiesData = t.facilities.items.map((item, idx) => ({
    ...item,
    badgeClass: idx === 0 ? 'badge-amber' : 'badge-blue',
  }));

  return (
    <section className="facilities-section" id="facilities">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="eyebrow">{t.facilities.eyebrow}</div>
          <h2 className="section-title">{t.facilities.heading}</h2>
          <p className="section-body">
            {t.facilities.body}
          </p>
        </div>

        <div className="facilities-grid">
          {facilitiesData.map((f) => (
            <FacilityCard key={f.title} facility={f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
