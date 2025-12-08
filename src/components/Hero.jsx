import React from 'react'
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <header
      className="relative h-screen bg-cover bg-center flex items-end justify-center"
      style={{ backgroundImage: "url('src/assets/images/hero.jpg')" }} // ganti path sesuai
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className="relative z-10 text-center px-6 mb-36"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <p className="text-sm text-gray-300 mb-2 animate-fadeInDown">Om Swastyastu</p>
        <h1 className="text-4xl sm:text-5xl font-serif tracking-wide mb-2 animate-fadeInUp">
          Agung & Putri
        </h1>
        <p className="mt-3 text-lg text-gray-200 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          29 Desember 2025 • Bali
        </p>
      </div>

    </header>
  )
}

// Tambahkan di global CSS (misal: src/index.css atau App.css):
/*

*/
