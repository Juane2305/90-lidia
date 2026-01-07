const Gallery = () => {
  // Placeholder images - Replace with Cloudinary URLs
  const images = [
    { id: 1, url: 'https://res.cloudinary.com/dheeykiqu/image/upload/v1767800516/IMG_5965_s9a2k8.jpg', alt: 'Foto de Lidia 1' },
    { id: 2, url: 'https://res.cloudinary.com/dheeykiqu/image/upload/v1767800516/IMG_5964_gn67d8.jpg', alt: 'Foto de Lidia 2' },
    { id: 3, url: 'https://res.cloudinary.com/dheeykiqu/image/upload/v1767800516/IMG_5962_vu4ree.jpg', alt: 'Foto de Lidia 3' },
    { id: 4, url: 'https://res.cloudinary.com/dheeykiqu/image/upload/v1767800516/IMG_5963_wmncze.jpg', alt: 'Foto de Lidia 4' },
    { id: 5, url: 'https://res.cloudinary.com/dheeykiqu/image/upload/v1767815537/IMG_5977_vftavr.jpg', alt: 'Foto de Lidia 5' },
    { id: 6, url: 'https://res.cloudinary.com/dheeykiqu/image/upload/v1767815537/IMG_5978_tpju4b.jpg', alt: 'Foto de Lidia 6' },
    { id: 7, url: 'https://res.cloudinary.com/dheeykiqu/image/upload/v1767815537/7b451a04-daa3-4040-a1cf-e425dcc43103_bxauwi.jpg', alt: 'Foto de Lidia 7' },
    { id: 8, url: 'https://res.cloudinary.com/dheeykiqu/image/upload/v1767815537/562fc052-295d-4d43-95d1-a8f1f81af9a7_dsrwa0.jpg', alt: 'Foto de Lidia 8' },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black-deep via-black-light to-black-deep overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-2xl">✦</span>
          <h2 className="font-display text-4xl md:text-5xl text-gold mt-4 mb-6">
            Momentos Especiales
          </h2>
          <p className="font-serif text-xl text-white/60 italic max-w-xl mx-auto">
            90 años de amor, risas y momentos inolvidables
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gold"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gold"></span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 bg-black-light">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Border Frame */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/40 transition-all duration-500 rounded"></div>
              
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gold"></div>
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gold"></div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gold"></div>
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gold"></div>
              </div>
              <div className="absolute bottom-4 left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gold"></div>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gold"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gold"></div>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Bottom Ornament */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <span className="text-gold/40">✦</span>
          <span className="text-gold/40">✦</span>
          <span className="text-gold/40">✦</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
