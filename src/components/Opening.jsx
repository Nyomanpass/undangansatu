import React, { useState } from "react";

export default function Opening({ onOpen }) {
  const [slideOut, setSlideOut] = useState(false);

  const handleOpen = () => {
    setSlideOut(true);
    setTimeout(() => {
      onOpen && onOpen();
    }, 700); // durasi animasi
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-cover bg-center relative transition-transform duration-700 ${
        slideOut ? "animate-slideOutDown" : ""
      }`}
      style={{ backgroundImage: "url('src/assets/images/hero.jpg')" }} // ganti path jika perlu
      data-aos="zoom-in"
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center px-6 py-12 max-w-lg text-gray-100">
        <p className="text-sm text-gray-300 tracking-widest mb-2">OM SWASTYASTU</p>
        <p className="text-sm text-gray-300 uppercase mb-1">The Wedding of</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold leading-tight">
          Aris & Saras
        </h1>
        <p className="mt-3 text-lg text-gray-300">Senin, 14 April 2025</p>
        <div className="mt-6">
          <p className="text-sm text-gray-300">Kepada Yth</p>
          <h3 className="mt-1 text-xl font-medium">Tamu Undangan</h3>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleOpen}
            className="px-6 py-2 rounded-full bg-white text-gray-900 font-medium shadow-lg hover:scale-105 transform transition flex items-center gap-2"
            aria-label="Buka undangan"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Buka Undangan
          </button>
        </div>
        <p className="mt-6 text-xs text-gray-400">Ketuk tombol untuk memulai undangan digital</p>
      </div>
    </div>
  );
}

// Tambahkan di src/index.css atau App.css:
/*

*/
