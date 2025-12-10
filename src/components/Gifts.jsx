import React, { useState } from "react";

export default function Gifts() {
  const [copied, setCopied] = useState(false);
  const account = {
    number: "https://maps.app.goo.gl/jx6ZwJvc9gp",
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

  return (
    <section id="gifts" className="py-8 px-6" data-aos="fade-up">
      <h4 className="text-center text-2xl sm:text-3xl font-serif mb-4">Link Alamat</h4>

      <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-6 text-center">

        <div className="bg-gray-900 p-4 rounded-md">

          <div className="text-lg mt-2">{account.number}</div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => copy(account.number)}
            className="px-4 py-2 bg-white text-gray-900 rounded"
          >
            {copied ? "Disalin ✓" : "Salin Alamat"}
          </button>
        </div>

      </div>
    </section>
  );
}
