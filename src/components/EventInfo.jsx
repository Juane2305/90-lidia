const EventInfo = () => {
  const eventDetails = {
    date: ' de Febrero, ',
    time: ' hs',
    venue: 'Club Hípico Mendoza',
    address: 'Mendoza, Argentina'
  };

  const handleDirections = () => {
    // Club Hípico Mendoza Google Maps link
    window.open('https://maps.google.com/?q=Club+Hipico+Mendoza', '_blank');
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black-deep via-black-light to-black-deep overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-gold mt-4 mb-6">
            Te Espero
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gold"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gold"></span>
          </div>
        </div>

        {/* Event Card */}
        <div className="relative bg-gradient-to-b from-black-light/80 to-black-deep/80 backdrop-blur-sm border border-gold/30 rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
          
          {/* Corner decorations */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-gold"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-gold"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold"></div>

          {/* Date */}
          <div className="text-center mb-8 pb-8 border-b border-gold/20">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-white/50">Fecha</span>
            </div>
            <p className="  text-white">
              <span className="text-xl md:text-2xl">21</span> <span className="font-serif text-2xl md:text-3xl">{eventDetails.date}</span> <span className="text-xl md:text-2xl">2026</span>
            </p>
          </div>

          {/* Time */}
          <div className="text-center mb-8 pb-8 border-b border-gold/20">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-white/50">Hora</span>
            </div>
            <p className=" text-white">
              <span className="text-xl md:text-2xl">20:45</span> <span className="font-serif text-2xl md:text-3xl">{eventDetails.time}</span>
            </p>
          </div>

          {/* Venue */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-white/50">Lugar</span>
            </div>
            <p className="font-serif text-2xl md:text-3xl text-white mb-2">
              {eventDetails.venue}
            </p>
            <p className="font-sans text-sm text-white/50">
              {eventDetails.address}
            </p>
          </div>

          {/* Directions Button */}
          <div className="text-center">
            <button
              onClick={handleDirections}
              className="group relative inline-flex items-center gap-3 font-sans text-sm uppercase tracking-[0.2em] py-4 px-8 bg-transparent border border-gold text-gold rounded transition-all duration-400 hover:bg-gold hover:text-black-deep hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Cómo Llegar
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventInfo;
