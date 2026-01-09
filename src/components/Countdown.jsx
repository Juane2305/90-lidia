import { useState, useEffect } from 'react';

const Countdown = () => {
  const eventDate = new Date('2026-02-21T20:45:00');
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = eventDate - new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black-deep via-black-light to-black-deep overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold text-2xl">✦</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-4 mb-3">
            Preparate
          </h2>
          <p className="font-serif text-2xl text-white/70 mb-4">
            En
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold"></span>
          </div>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <div 
              key={unit.label}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-b from-black-light to-black-deep border border-gold/30 rounded-lg p-6 md:p-8 text-center transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/50 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/50 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/50 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/50 rounded-br-lg"></div>
                
                {/* Number */}
                <span 
                  className="block font-numbers text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold-light to-gold transition-transform duration-300 group-hover:scale-110"
                  style={{
                    textShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  {String(unit.value).padStart(2, '0')}
                </span>
                
                {/* Label */}
                <span className="block font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 mt-4">
                  {unit.label}
                </span>
              </div>
              
              {/* Separator (except last) */}
              {index < 3 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 md:-right-5 -translate-y-1/2 text-gold/40 text-3xl">
                  :
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="font-serif text-2xl text-white/50 italic">
            Será este día tan especial
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
