import React, { useState } from "react";

export default function GenerateLink() {
  const [text, setText] = useState("");
  const [format, setFormat] = useState("hindu");
  const [showFormat, setShowFormat] = useState(false);
  const [previewMessage, setPreviewMessage] = useState(null);

  const BASE_URL = "https://parasvisual.com/wedding/toing&nia/";

  const daftarNama = text
    .split("\n")
    .map((n) => n.trim())
    .filter((n) => n.length > 0);

  const generateLink = (nama) => `${BASE_URL}?to=${encodeURIComponent(nama)}`;

  const messageTemplate = (nama, link) => {
    switch (format) {
      case "hindu":
        return `Kepada Yth.
${nama}

Om Swastiastu

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.

Berikut link undangan kami untuk info lengkap:

${link}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Om Shanti, Shanti, Shanti, Om.`;

      case "islam":
        return `Kepada Yth.
${nama}

Assalamu'alaikum Warahmatullahi Wabarakatuh

Dengan memohon rahmat Allah SWT, izinkan kami mengundang Bapak/Ibu/Saudara/i menghadiri acara pernikahan kami.

Berikut link undangan:

${link}

Semoga Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.

Wassalamu'alaikum Warahmatullahi Wabarakatuh`;

      case "nasrani":
        return `Kepada Yth.
${nama}

Salam sejahtera dalam kasih Tuhan Yesus Kristus.

Dengan sukacita kami mengundang Bapak/Ibu/Saudara/i menghadiri pemberkatan pernikahan kami.

Link undangan:

${link}

Merupakan sukacita bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberkati kami.`;

      case "formal":
        return `Kepada Yth.
${nama}

Dengan hormat,

Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.

Informasi lengkap pada link berikut:

${link}

Merupakan kehormatan bagi kami apabila berkenan hadir.`;

      default:
        return "";
    }
  };

  const copyMessage = (msg) => {
    navigator.clipboard.writeText(msg);
    alert("Pesan berhasil disalin!");
  };

  const sendWA = (msg) => {
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-10 px-6 max-w-3xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">
        Generate Pesan Undangan
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg border">

        {/* INPUT NAMA */}
        <label className="font-medium mb-2 block">
          Masukkan daftar nama (Enter per baris):
        </label>

        <textarea
          className="w-full p-3 border rounded-lg h-40 mb-4"
          placeholder="Nama Tamu"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={() => setShowFormat(true)}
          className="bg-black text-white px-5 py-3 rounded-lg w-full"
        >
          Pilih Format dan Generate
        </button>
      </div>

      {/* TABLE HASIL */}
      {daftarNama.length > 0 && (
        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border">
          <h3 className="font-bold text-lg mb-4">Daftar Nama</h3>

          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Nama</th>
                <th className="p-3 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {daftarNama.map((nama, i) => {
                const link = generateLink(nama);
                const msg = messageTemplate(nama, link);

                return (
                  <tr key={i} className="border">
                    <td className="p-3">{nama}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => setPreviewMessage(msg)}
                        className="px-3 py-1 bg-gray-700 text-white rounded"
                      >
                        Lihat
                      </button>

                      <button
                        onClick={() => copyMessage(msg)}
                        className="px-3 py-1 bg-blue-600 text-white rounded"
                      >
                        Copy
                      </button>

                      <button
                        onClick={() => sendWA(msg)}
                        className="px-3 py-1 bg-green-600 text-white rounded"
                      >
                        WhatsApp
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* MODAL PILIH FORMAT */}
      {showFormat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
            <h3 className="font-bold text-xl mb-4">Pilih Format Pesan</h3>

            <select
              className="w-full p-3 border rounded-lg mb-6"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value="hindu">Hindu</option>
              <option value="islam">Islam</option>
              <option value="nasrani">Nasrani</option>
              <option value="formal">Formal / Umum</option>
            </select>

            <button
              onClick={() => setShowFormat(false)}
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Terapkan
            </button>
          </div>
        </div>
      )}

      {/* MODAL PREVIEW PESAN */}
      {previewMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-xl">
            <h3 className="font-bold text-xl mb-4">Preview Pesan</h3>

            <textarea
              readOnly
              className="w-full h-64 p-3 border rounded-lg mb-4 text-sm"
              value={previewMessage}
            />

            <button
              onClick={() => setPreviewMessage(null)}
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
