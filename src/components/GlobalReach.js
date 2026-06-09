import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './GlobalReach.css';

const regions = [
  'Asia Pacific',
  'Middle East',
  'Africa',
  'Europe',
  'Australia',
  'New Zealand',
];

const GlobalReach = () => {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section className="reach-belt">
      <div className="container reach-inner">
        <div className="reveal" ref={leftRef}>
          <div className="eyebrow">Global Network</div>
          <h3 className="reach-title">
            Australian Goods,<br />Delivered Globally
          </h3>
          <p className="reach-body">
            With 22+ years of export experience and a 5-continent distribution
            network, Food Passport connects Australian producers with buyers across
            the world's most diverse and demanding markets. From Melbourne to Milan,
            Dubai to Dakar — we handle the complexity so you don't have to.
          </p>
        </div>

        <div className="reveal" ref={rightRef}>
          <div className="region-tags">
            {regions.map((r) => (
              <span className="region-tag" key={r}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
