import { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 'solo',
    companionNames: '',
    attendance: 'yes',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Replace with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwr81ucqXsu6m9po4EzQNrx2xxJy1XCNEnHM34fxkM_qDm-IBPZZJJe7njSPMbpl2fm/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.name,
          acompanantes: formData.guests,
          nombresAcompanantes: formData.companionNames || 'N/A',
          asistencia: formData.attendance === 'yes' ? 'Sí, asistiré' : 'No podré asistir',
          mensaje: formData.message,
          fecha: new Date().toLocaleString('es-AR')
        })
      });

      setIsSubmitted(true);
    } catch {
      setError('Hubo un error al enviar tu confirmación. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-black-deep via-black-light to-black-deep overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
          <div className="bg-gradient-to-b from-black-light/60 to-black-deep/60 backdrop-blur-sm border border-gold/30 rounded-lg p-10 md:p-12">
            <div className="text-gold text-5xl mb-6">✓</div>
            <h3 className="font-display text-3xl md:text-4xl text-gold mb-4">
              ¡Gracias!
            </h3>
            <p className="font-serif text-lg text-white/70 leading-relaxed">
              Tu confirmación ha sido recibida. ¡Nos vemos en la celebración!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black-deep via-black-light to-black-deep overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-2xl">✦</span>
          <h2 className="font-display text-4xl md:text-5xl text-gold mt-4 mb-6">
            Confirmar Asistencia
          </h2>
          <p className="font-serif text-2xl text-white/80 italic max-w-md mx-auto leading-relaxed">
            Tu presencia es muy importante para mí. Por favor, confirma tu asistencia para poder recibirte como mereces.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gold"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gold"></span>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative bg-gradient-to-b from-black-light/60 to-black-deep/60 backdrop-blur-sm border border-gold/30 rounded-lg p-8 md:p-10">
          
          {/* Corner decorations */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black-deep/50 border border-gold/30 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-white/30"
                placeholder="Tu nombre"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                ¿Podrás asistir? *
              </label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="p-4 text-center border border-gold/30 rounded transition-all peer-checked:bg-gold/20 peer-checked:border-gold hover:border-gold/60">
                    <span className="text-2xl mb-2 block">🎉</span>
                    <span className="font-sans text-sm text-white">Sí, asistiré</span>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="p-4 text-center border border-gold/30 rounded transition-all peer-checked:bg-gold/20 peer-checked:border-gold hover:border-gold/60">
                    <span className="text-2xl mb-2 block">😢</span>
                    <span className="font-sans text-sm text-white">No podré</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Number of guests */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="block font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                  Cantidad de acompañantes
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-black-deep/50 border border-gold/30 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23D4AF37'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5rem'
                  }}
                >
                  <option value="solo">Solo yo</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">+5</option>
                </select>
              </div>
            )}

            {/* Companion Names */}
            {formData.attendance === 'yes' && formData.guests !== 'solo' && (
              <div>
                <label className="block font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                  Nombres de los acompañantes *
                </label>
                <textarea
                  name="companionNames"
                  value={formData.companionNames}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full bg-black-deep/50 border border-gold/30 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-white/30 resize-none"
                  placeholder="Escribe los nombres de tus acompañantes..."
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                Mensaje (opcional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full bg-black-deep/50 border border-gold/30 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-white/30 resize-none"
                placeholder="Especifica restricciones alimentarias o escribe un mensaje para Lidia..."
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-400 text-sm text-center p-3 bg-red-400/10 rounded">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full font-sans text-sm uppercase tracking-[0.2em] py-4 px-8 bg-gradient-to-r from-gold via-gold-light to-gold text-black-deep rounded transition-all duration-400 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
            >
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-700"></span>
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Confirmar Asistencia'
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default RSVP;
