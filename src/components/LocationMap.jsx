import React from "react";

export default function LocationMap() {
  return (
    <section id="location" className="py-10 px-6" data-aos="fade-up">
      <h4 className="text-center text-3xl sm:text-4xl font-serif mb-6 tracking-wide">
        Lokasi Acara
      </h4>

      <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
        {/* MAP */}
        <div className="aspect-video">
          <iframe
            title="map"
            className="w-full h-full border-0"
            src="https://www.google.com/maps?q=M2GH+R87+SMP+Negeri+6+Pupuan+Satu+Atap,+Gg+Nakula,+Br.+Mekarsari+Pujungan+Unnamed+Road,+Pujungan,+Kec.+Pupuan,+Kabupaten+Tabanan,+Bali+82163&ftid=0x2dd1873730f6ed41:0x755e9e59e0f7039f&entry=gps&lucs=,94275415,94284505,94224825,94227247,94227248,94231188,94280568,47071704,94218641,94282134,94203019,94286869&g_ep=CAISEjI1LjQ3LjAuODMzNTQyOTMwMBgAIIgnKmwsOTQyNzU0MTUsOTQyODQ1MDUsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyMDMwMTksOTQyODY4NjlCAklE&skid=d36f0d80-aa68-40ae-8f55-d020dd0c71e0&g_st=ipc"
            allowFullScreen
          />
        </div>

        {/* TEXT & BUTTON */}
        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h5 className="font-semibold text-white text-lg">
              Gedung / Tempat Pernikahan
            </h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              Alamat lengkap, Kecamatan, Kota
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/hQFr2HZcTBx5M8M68?g_st=ipc"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-white text-gray-900 font-medium rounded-full shadow hover:bg-gray-200 transition flex items-center gap-2"
          >
            {/* New Location Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            Petunjuk ke lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
