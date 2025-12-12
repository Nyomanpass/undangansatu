import { useEffect, useState } from "react";
import heroSatu from "../assets/images/herosatu.webp"; // IMPORT GAMBAR

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date("2025-12-29T14:00:00").getTime();

    const tick = () => {
      const now = Date.now();
      let diff = Math.max(0, target - now);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= d * (1000 * 60 * 60 * 24);
      const h = Math.floor(diff / (1000 * 60 * 60));
      diff -= h * (1000 * 60 * 60);
      const m = Math.floor(diff / (1000 * 60));
      diff -= m * (1000 * 60);
      const s = Math.floor(diff / 1000);

      const pad = (n) => String(n).padStart(2, "0");

      setTimeLeft({
        days: pad(d),
        hours: pad(h),
        minutes: pad(m),
        seconds: pad(s),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { key: "days", label: "Hari" },
    { key: "hours", label: "Jam" },
    { key: "minutes", label: "Menit" },
    { key: "seconds", label: "Detik" },
  ];

  return (
    <section className="py-10">

      {/* HEADER BACKGROUND FIX */}
      <header
        className="relative md:h-[60vh] h-[30vh] bg-cover bg-center flex items-end justify-center"
        style={{ backgroundImage: `url(${heroSatu})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </header>

      {/* JUDUL */}
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-3xl px-5 font-serif italic text-white">
          Menuju Hari Bahagia
        </h2>
      </div>

      {/* BOX COUNTDOWN */}
      <div
        className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 px-6"
        data-aos="zoom-in"
      >
        {items.map((it) => (
          <div
            key={it.key}
            className="border border-gray-300 rounded-2xl bg-white py-4 px-2 flex flex-col items-center shadow-sm"
          >
            <div className="text-4xl font-semibold text-gray-800 font-serif">
              {timeLeft[it.key]}
            </div>
            <div className="text-sm text-gray-700 mt-1 font-serif italic">
              {it.label}
            </div>
          </div>
        ))}
      </div>

      {/* DOA */}
      <div className="max-w-2xl mx-auto text-center mt-10 px-6 font-serif italic text-gray-300 leading-relaxed">
        <p className="mb-4">
          " Om Ihaiva stam ma vi yustham, Visnam ayur vyasnutam, Kridantau
          putrair naptrbhih, Modamanan sve ghre "
        </p>
        <p className="mb-6">(Reg Weda X.85.42)</p>
        <p>
          Ya Tuhanku Yang Maha Pengasih,  
          Anugerahkanlah Kepada Pasangan Ini Senantiasa Berbahagia Keduanya Tidak
          Terpisahkan, Panjang Umur, Semoga Pengantin Ini Dianugerahkan Putra –
          Putri Dan Cucu Yang Memberikan Penghiburan, Tinggal Di Rumah Yang
          Penuh Kebahagiaan.
        </p>
      </div>
    </section>
  );
}
