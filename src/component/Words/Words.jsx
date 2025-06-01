import React, { useState, useEffect, useRef } from 'react';
import './Words.css';

const Words = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const words = [
    "Perfection", "is", "achieved,", "not", "when",
    "there", "is", "nothing", "more", "to", "add,", "but",
    "when", "there", "is", "nothing", "left", "to", "take",
    "away."
  ];

  return (
    <section className={`words-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="words-container">
        <div className="sound-wave">
          <svg viewBox="0 0 200 50" className="wave-svg">
            <path 
              d="M10,25 Q20,10 30,25 T50,25 T70,25 T90,25 T110,25 T130,25 T150,25 T170,25 T190,25" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              className="wave-path"
            />
          </svg>
        </div>

        <div className={`quote-text ${isVisible ? 'animate' : ''}`}>
          {words.map((word, index) => (
            <span 
              key={index}
              className="word"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="dots-pattern">
          {Array.from({ length: 50 }, (_, i) => (
            <div 
              key={i} 
              className="dot"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 20}%`,
                animationDelay: `${i * 0.05}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Words;
