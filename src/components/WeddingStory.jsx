import React from "react";
import headerBawah from "../assets/images/headerbaawah.jpg"; // Import gambar

const steps = [
  { title: "Pertemuan", text: "Kami bertemu pertama kali di sebuah acara keluarga." },
  { title: "Pendekatan", text: "Mulai sering bertemu dan saling mengenal lebih dalam." },
  { title: "Lamaran", text: "Memohon restu keluarga dan melangsungkan lamaran." },
];

export default function WeddingStory() {
  return (
    <header
      className="relative md:h-[60vh] h-[30vh] bg-cover bg-center flex items-end justify-center"
      style={{ backgroundImage: `url(${headerBawah})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
    </header>
  );
}
