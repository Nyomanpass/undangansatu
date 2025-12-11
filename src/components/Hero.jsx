import React, { useEffect, useState } from "react";

// IMPORT GAMBAR SLIDESHOW
import img1 from "../assets/images/galerry2.png";
import img2 from "../assets/images/hero.jpg";
import img3 from "../assets/images/herotiga.png";

// IMPORT ORNAMEN
import ornLeft from "../assets/images/Artboard_1.png";
import ornRight from "../assets/images/Artboard_2.png";

export default function Hero() {
  const images = [img1, img2, img3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen flex items-end justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === i ? 1 : 0,
            }}
          ></div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Konten */}
      <div
        className="relative z-10 text-center px-6 mb-36"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <p className="text-sm text-gray-300 mb-2 animate-fadeInDown">
          The Wedding
        </p>

        <h1 className="text-6xl font-abuget tracking-wide mb-2 animate-fadeInUp">
          Toing & Nia
        </h1>

        <p
          className="mt-3 text-lg text-gray-200 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          29 Desember 2025 • Bali
        </p>
      </div>

      {/* Ornamen Kiri */}
      <img
        src={ornLeft}
        alt="Ornamen Kiri"
        className="absolute right-50 opacity-80 bottom-17 sm:bottom-20 w-72 sm:w-76 pointer-events-none select-none"
        style={{ zIndex: 11 }}
      />

      {/* Ornamen Kanan */}
      <img
        src={ornRight}
        alt="Ornamen Kanan"
        className="absolute left-50 bottom-16 opacity-80 sm:bottom-20 w-72 sm:w-76 pointer-events-none select-none"
        style={{ zIndex: 11 }}
      />
    </header>
  );
}
