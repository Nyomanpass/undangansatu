import React, { useState } from "react";

// IMPORT GAMBAR
import bgHero from "../assets/images/hero.jpg";
import borderAtas from "../assets/images/Border_Kanan_Atas.png";
import borderBawah from "../assets/images/Border_Kiri_Bawah.png";

export default function Opening({ onOpen }) {
  const [slideOut, setSlideOut] = useState(false);

  const handleOpen = () => {
    setSlideOut(true);
    setTimeout(() => {
      onOpen && onOpen();
    }, 700);
  };

  return (
    <div
      className={`h-screen flex flex-col justify-between bg-cover bg-center relative transition-transform duration-700 overflow-hidden ${
        slideOut ? "animate-slideOutDown" : ""
      }`}
      style={{ backgroundImage: `url(${bgHero})` }}
      data-aos="zoom-in"
    >
      {/* Ornamen Kanan Atas */}
      <img
        src={borderAtas}
        alt="Border Atas"
        className="absolute top-0 right-0 w-42 sm:w-40 pointer-events-none select-none"
        style={{ zIndex: 10, transform: "translateY(-20px) translateX(20px)" }}
      />

      {/* Ornamen Kiri Bawah */}
      <img
        src={borderBawah}
        alt="Border Bawah"
        className="absolute bottom-0 left-0 w-42 sm:w-40 pointer-events-none select-none"
        style={{ zIndex: 10, transform: "translateY(15px) translateX(-20px)" }}
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* =================== BAGIAN ATAS =================== */}
      <div className="relative z-10 text-center px-6 pt-20 text-gray-100">
        <p className="text-sm font-bold text-gray-300 tracking-widest">
          OM SWASTYASTU
        </p>

        <img
          className="w-36 max-w-[200px] mx-auto"
          src="/pawiwahan.png"
          alt="Pawiwahan"
        />
      </div>

      {/* =================== BAGIAN BAWAH =================== */}
      <div className="relative z-10 text-center px-6 pb-12 text-gray-100">
        <p className="text-sm text-gray-300 uppercase">
          The Wedding of
        </p>

        <h1 className="text-6xl font-abuget leading-tight">
          Toing & Nia
        </h1>

        <p className="text-lg text-gray-300">Senin, 29 Desember 2025</p>

        <div className="mt-4">
          <p className="text-sm text-gray-300">Kepada Yth</p>
          <h3 className="mt-1 text-xl font-medium">Tamu Undangan</h3>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleOpen}
            className="px-6 py-2 rounded-full bg-white text-gray-900 font-medium shadow-lg hover:scale-105 transform transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Buka Undangan
          </button>
        </div>
      </div>
      {/* =================== END BAGIAN BAWAH =================== */}
    </div>
  );
}
