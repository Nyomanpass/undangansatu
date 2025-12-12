import React, { useState, useEffect } from "react"; // Tambahkan useEffect

// IMPORT GAMBAR
import bgHero from "../assets/images/hero.jpg";
import borderAtas from "../assets/images/Border_Kanan_Atas.png";
import borderBawah from "../assets/images/Border_Kiri_Bawah.png";

// Fungsi untuk mendapatkan nama tamu dari query parameter 'to'
const getRecipientName = () => {
  // Mengambil query string dari URL (misal: ?to=pastika)
  const params = new URLSearchParams(window.location.search);
  
  // Mengambil nilai dari parameter 'to'
  const name = params.get('to');
  
  if (name) {
    // 1. Ganti underscore atau strip dengan spasi
    const formattedName = name.replace(/_|-/g, ' '); 
    
    // 2. Mengubah huruf pertama setiap kata menjadi kapital (Camel Case)
    return formattedName
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Nilai default jika parameter 'to' tidak ditemukan
  return "Tamu Undangan"; 
};

export default function Opening({ onOpen }) {
  const [slideOut, setSlideOut] = useState(false);
  // State baru untuk menyimpan nama tamu yang akan ditampilkan
  const [recipientName, setRecipientName] = useState("Tamu Undangan"); 

  useEffect(() => {
    // Jalankan sekali saat komponen dimuat untuk mengambil nama dari URL
    setRecipientName(getRecipientName());
  }, []); // Dependency array kosong agar hanya berjalan saat mount

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
      {/* Ornamen Kanan Atas (TIDAK BERUBAH) */}
      <img
        src={borderAtas}
        alt="Border Atas"
        className="absolute top-0 right-0 w-42 sm:w-40 pointer-events-none select-none"
        style={{ zIndex: 10, transform: "translateY(-20px) translateX(20px)" }}
      />

      {/* Ornamen Kiri Bawah (TIDAK BERUBAH) */}
      <img
        src={borderBawah}
        alt="Border Bawah"
        className="absolute bottom-0 left-0 w-42 sm:w-40 pointer-events-none select-none"
        style={{ zIndex: 10, transform: "translateY(15px) translateX(-20px)" }}
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* =================== BAGIAN ATAS (TIDAK BERUBAH) =================== */}
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

      {/* =================== BAGIAN BAWAH (MODIFIKASI NAMA TAMU) =================== */}
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
          {/* MENGGANTI NAMA STATIS DENGAN STATE */}
          <h3 className="mt-1 text-xl font-medium">{recipientName}</h3> 
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