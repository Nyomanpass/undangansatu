import React, { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "src/assets/images/galerry2.png",
    "src/assets/images/hero.jpg",
    "src/assets/images/herotiga.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen flex items-end justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000`}
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === i ? 1 : 0,
            }}
          ></div>
        ))}
      </div>

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Isi Konten */}
      <div
        className="relative z-10 text-center px-6 mb-36"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <p className="text-sm text-gray-300 mb-2 animate-fadeInDown">
          The Wedding
        </p>

        <h1 className="text-7xl font-abuget tracking-wide mb-2 animate-fadeInUp">
          Toing & Nia
        </h1>

        <p
          className="mt-3 text-lg text-gray-200 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          29 Desember 2025 • Bali
        </p>
      </div>

      {/* Ornamen Kiri & Kanan */}
      <img
        src="src/assets/images/Artboard_1.png"
        alt="Ornamen Kiri"
        className="absolute right-50 bottom-17 sm:bottom-20 w-76 sm:w-76 pointer-events-none select-none"
        style={{ zIndex: 11 }}
      />
      <img
        src="src/assets/images/Artboard_2.png"
        alt="Ornamen Kanan"
        className="absolute left-50 bottom-16 sm:bottom-20 w-76 sm:w-76 pointer-events-none select-none"
        style={{ zIndex: 11 }}
      />
    </header>
  );
}
