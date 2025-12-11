import React, { useState } from "react";

export default function Gifts() {
  const [copied, setCopied] = useState(false);

  const account = {
    bank: "BCA",
    number: "1234 5678 9012",
  };

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="gifts" className="py-10 px-6" data-aos="fade-up">
      <h4 className="text-center text-2xl sm:text-3xl font-serif mb-6">
        Hadiah & Amplop
      </h4>

      {/* Card Wrapper */}
      <div className="max-w-md mx-auto bg-black/30 border border-white/10 rounded-xl p-6 text-center text-white">

        {/* Bank Info Box */}
        <div className="bg-gray-800/70 rounded-lg p-6">
          <p className="text-xl font-semibold">{account.bank}</p>
          <p className="text-2xl font-bold mt-3 tracking-wider">{account.number}</p>
        </div>

        {/* Copy Button */}
        <button
          onClick={() => copy(account.number)}
          className="mt-6 px-7 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          {copied ? "Disalin ✓" : "Salin Nomor"}
        </button>

       
      </div>
    </section>
  );
}
