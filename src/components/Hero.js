import React from 'react';
import './Hero.css';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const flowSteps = t.hero.flow.map((step, i) => ({
    num: i + 1,
    color: ['green', 'navy', 'green', 'amber', 'navy'][i],
    title: step.title,
    sub: step.sub,
  }));

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="about">
      <div className="container hero-inner">

        {/* ── Left column ── */}
        <div className="hero-left">
          <div className="eyebrow hero-eyebrow">{t.hero.eyebrow}</div>

          <h1 className="hero-h1">
            {t.hero.heading1} <em>{t.hero.headingEm}</em><br />
            {t.hero.heading2}
          </h1>

          <p className="hero-sub">
            {t.hero.subtitle}
          </p>

          <div className="hero-buttons">
            <button className="btn btn-green" onClick={() => scrollTo('products')}>
              {t.hero.btnCatalogue}
            </button>
            <button className="btn btn-navy-outline" onClick={() => scrollTo('contact')}>
              {t.hero.btnContact}
            </button>
          </div>
        </div>

        {/* ── Right column — Order flow ── */}
        <div className="hero-right">
          <div className="flow-label">{t.hero.flowLabel}</div>

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
