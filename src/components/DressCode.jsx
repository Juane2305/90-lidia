const DressCode = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black-deep via-black-light to-black-deep overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-gold mt-4 mb-6">
            Código de Vestimenta
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gold"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gold"></span>
          </div>
        </div>

        {/* Dress Code Card */}
        <div className="relative max-w-md mx-auto">
          {/* Main Card */}
          <div className="relative bg-gradient-to-b from-black-light/60 to-black-deep/60 backdrop-blur-sm border border-gold/30 rounded-lg p-10 md:p-12 text-center">
            
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br"></div>

            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border border-gold/30">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>

            {/* Dress Code Text */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                Se sugiere
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">
                Elegante Sport
              </h3>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 my-6">
              <span className="w-8 h-[1px] bg-gold/40"></span>
              <span className="text-gold text-xs">◆</span>
              <span className="w-8 h-[1px] bg-gold/40"></span>
            </div>

            {/* Hint */}
            <p className="font-sans text-sm text-white/50 leading-relaxed">
              Tu elegancia hará este día aún más especial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
