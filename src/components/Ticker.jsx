import React from 'react';

const Ticker = ({ text, colorClass = "bg-secondary-container" }) => {
  const items = Array(8).fill(text);
  
  return (
    <div className={`${colorClass} py-4 overflow-hidden border-y border-black/10`}>
      <div className="flex whitespace-nowrap gap-12 font-space-grotesk tracking-widest uppercase animate-marquee">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-on-secondary-container font-bold">{item}</span>
            <span className="text-on-secondary-container opacity-50">•</span>
          </React.Fragment>
        ))}
        {/* Loop duplication */}
        {items.map((item, idx) => (
          <React.Fragment key={`loop-${idx}`}>
            <span className="text-on-secondary-container font-bold">{item}</span>
            <span className="text-on-secondary-container opacity-50">•</span>
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
