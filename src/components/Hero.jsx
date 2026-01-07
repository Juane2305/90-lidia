const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black-deep via-black-light to-black-deep">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gold/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gold/10 to-transparent"></div>
      
      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 md:w-32 md:h-32">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-transparent"></div>
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-gold to-transparent"></div>
      </div>
      <div className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-gold to-transparent"></div>
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-gold to-transparent"></div>
      </div>
      <div className="absolute bottom-8 left-8 w-24 h-24 md:w-32 md:h-32">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-gold to-transparent"></div>
      </div>
      <div className="absolute bottom-8 right-8 w-24 h-24 md:w-32 md:h-32">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-gold to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-gold to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 py-20">
        
        {/* Top Ornament */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-gold"></span>
          <span className="text-gold text-3xl">♥</span>
          <span className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-gold to-gold"></span>
        </div>
        
        {/* Number 90 */}
        <div className="relative mb-6 flex justify-center">
          <div className="relative inline-block">
            <span className="font-numbers text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold-light to-gold drop-shadow-2xl block" style={{
              textShadow: '0 0 60px rgba(212, 175, 55, 0.4)'
            }}>
              90
            </span>
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-gold/20 rounded-lg"></div>
          </div>
        </div>
        
        {/* Years text */}
        <p className="font-sans text-lg md:text-xl tracking-[0.5em] uppercase text-white/80 mb-8">
          años
        </p>
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-8 h-[1px] bg-gold/50"></span>
          <span className="text-gold animate-pulse-gold">◆</span>
          <span className="w-8 h-[1px] bg-gold/50"></span>
        </div>
        
        {/* Name */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-gold mb-4" style={{
          textShadow: '0 0 40px rgba(212, 175, 55, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
          Lidia
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-xl md:text-2xl text-white/60 italic">
          Una vida para celebrar
        </p>
        
        {/* Bottom Ornament */}
        {/* <div className="flex justify-center items-center gap-4 mt-12">
          <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-gold"></span>
          <span className="text-gold text-3xl rotate-180">♥</span>
          <span className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-gold to-gold"></span>
        </div> */}
        
        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce-subtle w-full mt-20">
          <span className="font-sans text-xs uppercase tracking-widest text-white/40">Desliza</span>
          <svg className="w-6 h-6 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
