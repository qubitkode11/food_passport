import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Facilities.css';

const facilities = [
  {
    badge: 'AMBIENT',
    badgeClass: 'badge-amber',
    title: 'Dry Goods Storage',
    desc: 'Temperature-controlled at +18°C constant. Protects chips, biscuits, and confectionery from Australian seasonal extremes.',
    specs: [
      { value: '400',   key: 'Pallet Capacity' },
      { value: '+18°C', key: 'Constant Temp' },
    ],
  },
  {
    badge: 'CHILLED & FROZEN',
    badgeClass: 'badge-blue',
    title: 'Cold Chain Storage',
    desc: '24/7 online temp monitoring. Certified for meat, poultry, dairy, and everyday chilled/frozen lines.',
    specs: [
      { value: '3,500', key: 'Pallet Capacity' },
      { value: '24/7',  key: 'Monitoring' },
    ],
  },
];

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

  return (
    <section className="facilities-section" id="facilities">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="eyebrow">Our Infrastructure</div>
          <h2 className="section-title">Infrastructure Built for Export</h2>
          <p className="section-body">
            Purpose-built facilities in Derrimut, Victoria — engineered for the
            demands of international FMCG logistics.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((f) => (
            <FacilityCard key={f.title} facility={f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
