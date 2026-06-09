import React, { useEffect, useState } from 'react';

// Custom CountUp hook
function useCountUp(target, duration, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

const StatItem = ({ target, suffix, label, active }) => {
  const count = useCountUp(target, 2000, active);
  const display = target >= 1000 ? count.toLocaleString() : count;

  return (
    <div className="text-center md:text-left py-3 md:py-0 md:border-r border-navy/10 last:border-0 md:px-8 first:pl-0">
      <div className="font-sans font-bold tracking-tighter text-3xl lg:text-4xl text-navy mb-1 flex items-baseline justify-center md:justify-start gap-0.5">
        {display}
        {suffix && <span className="text-xl lg:text-2xl text-green-light">{suffix}</span>}
      </div>
      <div className="text-[9px] lg:text-[10px] font-semibold tracking-wider text-muted uppercase mt-0.5">
        {label}
      </div>
    </div>
  );
};

// Handpicked selection from all 3 categories — shuffled for variety
const productImages = [
  // Confectionery & Snacks
  { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015432.png'), alt: 'Confectionery' },
  { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015530.png'), alt: 'Snacks' },
  { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015547.png'), alt: 'Confectionery' },
  { src: encodeURI('/CONFECTIONARY & SNACKS/Screenshot 2026-06-10 015603.png'), alt: 'Snacks' },
  // Healthy Living
  { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020154.png'), alt: 'Healthy Living' },
  { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020210.png'), alt: 'Healthy Living' },
  { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020323.png'), alt: 'Healthy Living' },
  { src: encodeURI('/HEALTHY LIVING/Screenshot 2026-06-10 020346.png'), alt: 'Healthy Living' },
  // Pantry
  { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015730.png'), alt: 'Pantry' },
  { src: encodeURI('/PANTRY/Screenshot 2026-06-10 015846.png'), alt: 'Pantry' },
  { src: encodeURI('/PANTRY/Screenshot 2026-06-10 020012.png'), alt: 'Pantry' },
  { src: encodeURI('/PANTRY/Screenshot 2026-06-10 020050.png'), alt: 'Pantry' },
];
// Shuffle randomly then duplicate for seamless loop
const shuffled = [...productImages].sort(() => Math.random() - 0.5);
const tickerItems = [...shuffled, ...shuffled];

const StatsBar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById('stats-bar');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="stats-bar" className="bg-white border-b border-border shadow-sm pt-4 md:pt-5 pb-3 md:pb-4 -mt-12 md:-mt-20 relative z-30 mx-4 md:mx-8 max-w-7xl lg:mx-auto rounded-sm overflow-hidden">
      
      {/* Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0 gap-x-4 px-4 md:px-8 mb-4 md:mb-5">
        <StatItem target={5} suffix="" label="Continents Served" active={active} />
        <StatItem target={22} suffix="+" label="Years FMCG" active={active} />
        <StatItem target={24} suffix="/7" label="Monitoring" active={active} />
        <StatItem target={100} suffix="%" label="QA Checked" active={active} />
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="pt-3 border-t border-navy/5 relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex w-max animate-scroll items-center gap-4 px-4">
          {tickerItems.map((item, index) => (
            <div
              key={index}
              className="w-20 h-12 md:w-24 md:h-14 flex-shrink-0 bg-off rounded overflow-hidden opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-contain p-1"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default StatsBar;
