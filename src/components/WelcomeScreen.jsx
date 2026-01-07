import { useState } from 'react';

const WelcomeScreen = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = (withMusic) => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter(withMusic);
    }, 800);
  };

  const [particles] = useState(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      delay: `${Math.random() * 5}s`,
      x: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 4}s`
    }))
  );

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-black-deep via-black-light to-black-deep flex justify-center items-center z-[1000] overflow-hidden transition-all duration-800 ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1.5 h-1.5 bg-gold rounded-full opacity-0 blur-[1px] animate-float-up"
            style={{
              left: particle.x,
              bottom: '-10px',
              '--delay': particle.delay,
              '--duration': particle.duration,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center px-8 max-w-[700px] animate-fade-in-up">
        
        {/* Top Section */}
        <div>
          <div className="text-gold text-3xl drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
            ♥
          </div>
          
          <p className="font-sans text-sm md:text-base font-light tracking-[4px] uppercase text-white opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards', marginTop: '24px' }}>
            Te invito a celebrar
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.8s', animationFillMode: 'forwards', marginTop: '16px' }}>
            Lidia Zulian
          </h1>
          
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards', marginTop: '24px' }}>
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"></span>
          </div>
          
          <p className="font-serif text-3xl md:text-4xl font-light text-white tracking-[8px] opacity-0 animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards', marginTop: '24px' }}>
            90 Años
          </p>
        </div>
        
        {/* Music Recommendation */}
        <div className="opacity-0 animate-fade-in-up max-w-[320px] md:max-w-full mx-auto" style={{ animationDelay: '1.7s', animationFillMode: 'forwards', marginTop: '30px' }}>
          <div className="p-6 md:p-5 border border-gold/30 rounded bg-gold/5">
            <p className="font-sans text-xs md:text-sm font-light text-white/70 leading-relaxed">
              Te recomendamos disfrutar esta invitación con sonido para una experiencia completa
            </p>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="opacity-0 animate-fade-in-up max-w-[320px] md:max-w-full mx-auto" style={{ animationDelay: '2s', animationFillMode: 'forwards', marginTop: '30px' }}>
          <button 
            onClick={() => handleEnter(true)}
            className="w-full font-sans text-sm font-normal tracking-[1px] uppercase px-8 border border-gold rounded text-gold bg-transparent cursor-pointer transition-all duration-300 hover:bg-gold hover:text-black-deep"
            style={{ paddingTop: '18px', paddingBottom: '18px' }}
          >
            Ingresar con música
          </button>
          
          <button 
            onClick={() => handleEnter(false)}
            className="w-full font-sans text-sm font-light tracking-[1px] uppercase px-8 bg-transparent text-white/50 border border-white/20 rounded cursor-pointer transition-all duration-300 hover:text-white/70 hover:border-white/30"
            style={{ marginTop: '16px', paddingTop: '18px', paddingBottom: '18px' }}
          >
            Ingresar sin música
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
