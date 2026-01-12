const Footer = () => {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-black-light to-black-deep overflow-hidden">
      
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Decorative element */}
        <div className="mb-8">
          <span className="text-gold text-3xl">♥</span>
        </div>
        
        {/* Main text */}
        <p className="font-serif text-2xl md:text-2xl text-white/80 italic mb-6 leading-relaxed max-w-xl mx-auto">
          "Celebrar la vida es agradecer cada momento vivido y compartido con quienes amamos"
        </p>
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-gold/30"></span>
          <span className="text-gold/40 text-xs">◆</span>
          <span className="w-12 h-[1px] bg-gold/30"></span>
        </div>
        
        {/* Name */}
        <p className="font-display text-3xl md:text-4xl text-gold mb-2">
          Lidia
        </p>
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-white/40">
          90 Años
        </p>
        
        {/* Date */}
        <p className="font-sans text-xs text-white/30 mt-8">
          21 de Febrero de 2026
        </p>
        
        {/* Bottom ornament */}
        <div className="mt-8">
          <span className="text-gold/30 text-xl italic inline-block">Invitarly</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
