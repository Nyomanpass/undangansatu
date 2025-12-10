import React from "react";

export default function EventDetails() {
  return (
    <section className="py-12 px-6" data-aos="fade-up">
      <div className="flex flex-col items-center max-w-xl mx-auto text-center">

        {/* Judul */}
        <h4 className="text-4xl font-serif italic mb-6 text-white">
          Pawiwahan
        </h4>

        {/* Paragraf pembuka */}
        <p className="text-gray-300 leading-relaxed mb-10">
          Berkenaan dengan hal tersebut, tanpa mengurangi rasa hormat, 
          dengan ini kami ingin menyampaikan bahwa kami akan melangsungkan 
          acara tersebut pada:
        </p>

        {/* Hari & Tanggal */}
        <div className="mb-10">
          <h5 className="text-3xl font-serif italic text-white mb-3">
            Hari / Tanggal
          </h5>
          <p className="text-lg text-gray-300">
            Senin, 29 Desember 2025
          </p>
        </div>

        {/* Pukul */}
        <div className="mb-10">
          <h5 className="text-3xl font-serif italic text-white mb-3">
            Pukul :
          </h5>
          <p className="text-lg text-gray-300">
            14.00 WITA – Selesai
          </p>
        </div>

        {/* Alamat */}
        <div className="mb-8">
          <h5 className="text-3xl font-serif italic text-white mb-3">
            Alamat :
          </h5>
          <p className="text-lg text-gray-300">
            Br. Mekar Sari, Pujungan, Pupuan,Tabanan
          </p>
        </div>
      </div>
    </section>
  );
}
