import React from 'react';
import './Hero.css';

const flowSteps = [
  {
    num: 1,
    color: 'green',
    title: 'Select products',
    sub: 'Confectionery, Pantry, or Healthy Living',
  },
  {
    num: 2,
    color: 'navy',
    title: 'Choose shipping mode',
    sub: 'Air freight or sea (FCL / LCL)',
  },
  {
    num: 3,
    color: 'green',
    title: 'We consolidate & QA check',
    sub: 'AQIS-certified facility, Derrimut VIC',
  },
  {
    num: 4,
    color: 'amber',
    title: 'Label, ink-jet & dispatch',
    sub: 'Multi-language labels · date coding',
  },
  {
    num: 5,
    color: 'navy',
    title: 'Delivered to your port',
    sub: '5 continents · 22+ years experience',
  },
];

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="about">
      <div className="container hero-inner">

        {/* ── Left column ── */}
        <div className="hero-left">
          <div className="eyebrow hero-eyebrow">Est. 2002 · Melbourne, Australia</div>

          <h1 className="hero-h1">
            Your <em>Global</em><br />
            Food Partner
          </h1>

          <p className="hero-sub">
            Premium Australian FMCG — sourced, consolidated, labelled, and shipped
            to Europe, the Middle East, Africa, Asia, and beyond.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-green" onClick={() => scrollTo('products')}>
              View Catalogue
            </button>
            <button className="btn btn-navy-outline" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        {/* ── Right column — Order flow ── */}
        <div className="hero-right">
          <div className="flow-label">HOW AN ORDER WORKS</div>

          <ol className="flow-list">
            {flowSteps.map((step, i) => (
              <div className="flow-step-wrap" key={step.num}>
                {i > 0 && <div className="flow-line" />}
                <li className="flow-step">
                  <div className={`step-icon step-icon--${step.color}`}>{step.num}</div>
                  <div className="flow-step-body">
                    <div className="step-title">{step.title}</div>
                    <div className="step-sub">{step.sub}</div>
                  </div>
                  <span className="step-arrow">›</span>
                </li>
              </div>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
};

export default Hero;
