import { useState, useEffect } from 'react';

const HeroAnimation = ({ onComplete }) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  const phrases = [
    "¡90 años de vida!",
    "Hay mucho que agradecer y celebrar...",
    "Una trayectoria llena de momentos inolvidables merece compartirse con las personas más especiales y con una gran celebración...",
    "¡Y nada me haría más feliz que compartir esta alegría contigo!",
    "Tu presencia será el mejor regalo para hacer de este día un recuerdo imborrable...",
    "¡Te espero!"
  ];

  useEffect(() => {
    if (currentPhrase < phrases.length) {
      // Show phrase
      setIsVisible(true);
      
      // Calculate display time based on phrase length
      const displayTime = Math.max(3000, phrases[currentPhrase].length * 80);
      
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, displayTime);
      
      const nextTimer = setTimeout(() => {
        if (currentPhrase < phrases.length - 1) {
          setCurrentPhrase(prev => prev + 1);
        } else {
          setIsCompleted(true);
          setTimeout(() => {
            onComplete();
          }, 1000);
        }
      }, displayTime + 800);
      
      return () => {
        clearTimeout(hideTimer);
        clearTimeout(nextTimer);
      };
    }
  }, [currentPhrase, phrases.length, onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-black-deep via-black-light to-black-deep flex items-center justify-center z-50 transition-opacity duration-1000 ${isCompleted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Corner decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-gold/30"></div>
        <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-gold/30"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-gold/30"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-gold/30"></div>
        
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Phrase container */}
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        
        {/* Top ornament */}
        <div className={`text-gold text-2xl mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          ✦
        </div>
        
        {/* Main phrase */}
        <p 
          className={`font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed font-light transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          } ${
            currentPhrase === phrases.length - 1 && isVisible
              ? 'animate-pulse-scale'
              : ''
          }`}
          style={{
            textShadow: '0 0 40px rgba(212, 175, 55, 0.2)'
          }}
        >
          {phrases[currentPhrase]}
        </p>
        
        {/* Bottom ornament */}
        <div className={`text-gold text-2xl mt-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          ✦
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-12">
          {phrases.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentPhrase 
                  ? 'bg-gold w-8' 
                  : index < currentPhrase 
                    ? 'bg-gold/60' 
                    : 'bg-gold/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
