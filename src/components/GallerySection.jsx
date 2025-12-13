// GallerySection.jsx

import React, { useState, useEffect } from 'react';


// --- Komponen Pembantu untuk Galeri (Diperbarui untuk Tampilan Paling Smooth) ---
const GalleryItem = ({ src, alt, onOpen }) => (
    // PENYESUAIAN: MENGHILANGKAN SEMUA BORDER
    // Menggunakan group dan shadow halus pada hover untuk kesan smooth
    <button
        type="button"
        onClick={onOpen}
        className="w-full overflow-hidden group focus:outline-none"
        aria-label={`Buka detail: ${alt}`}
    >
        <img 
            src={src} 
            alt={alt} 
            // Efek transisi diperhalus dengan duration-700
            // Efek shadow hanya muncul saat hover (shadow-xl hover:shadow-2xl)
            className="w-[400px] h-[200px] object-cover 
                       transition-all duration-700 ease-in-out 
                       group-hover:scale-[1.03] 
                       group-hover:shadow-2xl rounded-lg" 
                       
            loading="lazy"
        />
    </button>
);

// --- Data Galeri Mockup (Tetap sama) ---
const galleryData = [
    { id: 1, src: "/galerry1.jpg"},
    { id: 2, src: "/galerry4.jpg"},
    { id: 3, src: "/galerry7.jpg"},
    { id: 4, src: "/galerry16.jpg"},
    { id: 5, src: "/galerry9.jpg"},
    { id: 6, src: "/galerry12.jpg"},
    { id: 7, src: "/galerry14.jpg"},
    { id: 8, src: "/galerry22.jpg"},
    { id: 9, src: "/galerry3.jpg"},
    { id: 10, src: "/galerry8.jpg"},
    { id: 11, src: "/galerry11.jpg"},
    { id: 12, src: "/galerry23.jpg"},
    { id: 14, src: "/galerry19.jpg"},
    { id: 15, src: "/galerry18.jpg"},
    { id: 15, src: "/galerry17.jpg"},
    { id: 15, src: "/galerry21.jpg"},
    { id: 15, src: "/galerry20.jpg"},
    { id: 15, src: "/galerry15.jpg"},
    { id: 15, src: "/galerry24.jpg"},
    { id: 15, src: "/galerry25.jpg"}
];

// --- Komponen Utama Galeri ---
const GallerySection = ({ ACCENT_COLOR }) => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setOpenIndex(null);
            if (e.key === 'ArrowRight' && openIndex !== null) {
                setOpenIndex((i) => (i + 1) % galleryData.length);
            }
            if (e.key === 'ArrowLeft' && openIndex !== null) {
                setOpenIndex((i) => (i - 1 + galleryData.length) % galleryData.length);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [openIndex]);

    const openAt = (idx) => setOpenIndex(idx);
    const close = () => setOpenIndex(null);
    const next = (e) => { e.stopPropagation(); setOpenIndex((i) => (i + 1) % galleryData.length); };
    const prev = (e) => { e.stopPropagation(); setOpenIndex((i) => (i - 1 + galleryData.length) % galleryData.length); };

    return (
      <section id="galeri" className="w-full md:max-w-5xl mx-auto text-white py-16">
      
      {/* --- Header Galeri: MOMENT Bahagia --- */}
      <div className="text-center mb-10 pt-4 pb-8" data-aos="fade-up">
        <h2 className="text-4xl font-serif tracking-widest uppercase opacity-90">
          MOMENT
        </h2>
        <p
          style={{ fontFamily: "'Dancing Script', 'Brush Script MT', 'Pacifico', cursive" }}
          className={`text-5xl font-light italic ${ACCENT_COLOR} -mt-3`}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Bahagia
        </p>
      </div>

      {/* --- Grid Foto 2 Kolom --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-6">
        {galleryData.map((photo, idx) => (
          <div
            key={photo.id}
            data-aos="fade-up"
            data-aos-delay={idx * 100} // delay bertahap tiap foto
          >
            <GalleryItem
              src={photo.src}
              alt={photo.alt}
              onOpen={() => openAt(idx)}
            />
          </div>
        ))}
      </div>

      {/* --- Lightbox Modal --- */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Detail gambar ${galleryData[openIndex].alt}`}
          data-aos="fade-in"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {/* Tombol Tutup */}
            <button
              onClick={close}
              className="absolute top-3 right-3 text-white bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-60 focus:outline-none"
              aria-label="Tutup"
            >
              ✕
            </button>

            {/* Gambar Utama */}
            <img
              src={galleryData[openIndex].src}
              alt={galleryData[openIndex].alt}
              className="mx-auto object-contain max-h-[80vh] rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            />

            {/* Caption dan Navigasi */}
            <div className="mt-4 text-center" data-aos="fade-up" data-aos-delay="400">
              <p className={`text-lg ${ACCENT_COLOR} font-medium`}>
                {galleryData[openIndex].alt}
              </p>

              <div className="mt-3 flex items-center justify-center gap-4">
                <button
                  onClick={prev}
                  className="px-3 py-2 bg-opacity-10 rounded hover:bg-opacity-20 focus:outline-none"
                  aria-label="Sebelumnya"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="px-3 py-2 bg-opacity-10 rounded hover:bg-opacity-20 focus:outline-none"
                  aria-label="Berikutnya"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    );
};

export default GallerySection;