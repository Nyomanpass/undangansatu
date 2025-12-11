import React, { useState } from "react";

export default function Gifts() {
  const [copied, setCopied] = useState(false);
  const account = {
    number: "https://maps.app.goo.gl/cFSXQUWkSabcrfp67",
  };

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  const shorten = (url) => {
    try {
      const u = new URL(url);
      const parts = u.pathname.replace(/\/$/, "").split("/").filter(Boolean);
      const last = parts.length ? parts[parts.length - 1] : "";
      const shortLast = last.length > 10 ? `${last.slice(0, 8)}...` : last;
      // tampilkan hostname + tail (atau hostname saja jika tidak ada tail)
      return last ? `${u.hostname}/${shortLast}` : u.hostname;
    } catch {
      return url.length > 40 ? `${url.slice(0, 37)}...` : url;
    }
  };

  const displayText = shorten(account.number);

  return (
    <section id="gifts" className="py-8 px-6" data-aos="fade-up">
      <h4 className="text-center text-2xl sm:text-3xl font-serif mb-4">Link Alamat</h4>

      <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-6 text-center">
        <div className="bg-gray-900 p-4 rounded-md flex items-center justify-between gap-3">
          {/* teks link yang bisa diklik untuk menyalin */}
          <button
            type="button"
            onClick={() => copy(account.number)}
            className="text-sm text-gray-100 text-left truncate"
            title="Klik untuk menyalin alamat"
            aria-label="Salin alamat"
            style={{ maxWidth: "100%" }}
          >
            {displayText}
          </button>

          {/* tombol buka di tab baru */}
          <a
            href={account.number}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 rounded bg-white text-gray-900 text-sm hover:bg-gray-200"
            title="Buka di Google Maps"
          >
            Buka
          </a>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => copy(account.number)}
            className="px-4 py-2 bg-white text-gray-900 rounded"
            aria-pressed={copied}
          >
            {copied ? "Disalin ✓" : "Salin Alamat"}
          </button>
        </div>
      </div>
    </section>
  );
}
