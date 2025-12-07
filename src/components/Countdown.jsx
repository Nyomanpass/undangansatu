import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date("2026-01-14T00:00:00").getTime();

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
        days: String(d).padStart(2, "0"),
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
    <section className="py-8" data-aos="fade-up">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-serif mb-4">Hitung Mundur</h3>
        <p className="text-sm text-gray-400 mb-6">Menuju hari bahagia kami</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((it) => (
            <div
              key={it.key}
              className="flex flex-col items-center bg-gray-800 backdrop-blur-sm border border-white/6 rounded-xl p-4 shadow-md transition-transform transform hover:-translate-y-1"
            >
              <div
                className="bg-linear-to-br from-white/5 to-white/3 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-serif font-semibold text-white drop-shadow"
                aria-live="polite"
                aria-atomic="true"
              >
                {timeLeft[it.key]}
              </div>
              <div className="mt-3 text-xs uppercase text-gray-300">{it.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-gray-500">
          <span className="italic">Catatan:</span> Waktu ditampilkan dalam zona waktu perangkat Anda.
        </div>
      </div>
    </section>
  );
}
