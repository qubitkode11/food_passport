import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './GlobalReach.css';
import { useLanguage } from '../i18n/LanguageContext';

const GlobalReach = () => {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="reach-belt">
      <div className="container reach-inner">
        <div className="reveal" ref={leftRef}>
          <div className="eyebrow">{t.globalReach.eyebrow}</div>
          <h3 className="reach-title">
            {t.globalReach.heading.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </h3>
          <p className="reach-body">
            {t.globalReach.body}
          </p>
        </div>

        <div className="reveal" ref={rightRef}>
          <div className="region-tags">
            {t.globalReach.regions.map((r) => (
              <span className="region-tag" key={r}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
