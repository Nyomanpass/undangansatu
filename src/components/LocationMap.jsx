import React from "react";

export default function LocationMap() {
  return (
    <section id="location" className="py-10 px-6" data-aos="fade-up">
      <h4 className="text-center text-3xl sm:text-4xl font-serif mb-6 tracking-wide">
        Lokasi Acara
      </h4>

      <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
        {/* MAP */}
        <div className="aspect-video">
          <iframe
            title="map"
            className="w-full h-full border-0"
            src="https://www.google.com/maps?q=Bali&output=embed"
            allowFullScreen
          />
        </div>

        {/* TEXT & BUTTON */}
        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h5 className="font-semibold text-white text-lg">
              Gedung / Tempat Pernikahan
            </h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              Alamat lengkap, Kecamatan, Kota
            </p>
          </div>

          <a
            href="https://www.google.com/maps?q=Bali"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-white text-gray-900 font-medium rounded-full shadow hover:bg-gray-200 transition"
          >
            Buka di Maps
          </a>
        </div>
      </div>
    </section>
  );
}
