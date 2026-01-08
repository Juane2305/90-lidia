const AddToCalendar = () => {
  const eventDetails = {
    title: '90 Años de Lidia',
    description: 'Celebración de los 90 años de Lidia',
    location: 'Club Hípico Mendoza, Mendoza, Argentina',
    startDate: '2026-02-21T20:45:00',
    endDate: '2026-02-22T02:00:00'
  };

  const handleAddToCalendar = () => {
    // Format dates for Google Calendar (YYYYMMDDTHHmmss)
    const formatDate = (dateStr) => {
      return dateStr.replace(/[-:]/g, '').replace('.000', '');
    };

    const startDate = formatDate(eventDetails.startDate.replace('T', 'T'));
    const endDate = formatDate(eventDetails.endDate.replace('T', 'T'));

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-black-deep via-black-light to-black-deep overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30">
            <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <p className="font-serif text-2xl md:text-2xl text-white/70 mb-8 max-w-lg mx-auto leading-relaxed">
          No olvides esta fecha tan especial, agrégala a tu calendario
        </p>

        {/* Button */}
        <button
          onClick={handleAddToCalendar}
          className="group relative inline-flex items-center gap-3 font-sans text-sm uppercase tracking-[0.2em] py-4 px-10 bg-gradient-to-r from-gold via-gold-light to-gold text-black-deep rounded transition-all duration-400 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 overflow-hidden"
        >
          <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-700"></span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Agregar a Google Calendar
        </button>

        {/* Decorative */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/30"></span>
          <span className="text-gold/40 text-sm">◆</span>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/30"></span>
        </div>
      </div>
    </section>
  );
};

export default AddToCalendar;
