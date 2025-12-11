import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import heroImg from "src/assets/images/hero.jpg";
import logoImg from "src/assets/images/logoundangan.jpg";

export default function Footer({
  image = heroImg,
  logo = logoImg,
  couple = "Toing & Nia",
  creditTitle = "Visual",
  creditName = "Paras Visual",
  wa = "628123456789",
  email = "email@example.com",
  ig = "parasvisual",
}) {
  return (
    <footer className="bg-gray-900 text-white font-sans">
      <div className=" mx-auto">

        {/* Hero Footer Image */}
        <div
          className="relative w-full h-[55vh] sm:h-[70vh] bg-cover bg-center flex items-end justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="relative z-10 pb-10 px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-abuget text-white tracking-wide drop-shadow-lg">
              {couple.replace("&", " & ")}
            </h1>
          </div>
        </div>

        {/* Dark Section */}
        <div className="bg-gray-900 pt-10 pb-14 px-6 text-center">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-white shadow flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          {/* Credits */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-gray-300">
              {creditTitle}
            </p>
            <p className="text-base font-semibold mt-1 text-white">
              {creditName}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-3 text-sm">

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${wa}`}
              target="_blank"
              className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition"
            >
              <FaWhatsapp size={18} /> {wa}
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition"
            >
              <MdEmail size={18} /> {email}
            </a>

            {/* Instagram */}
            <a
              href={`https://instagram.com/${ig}`}
              target="_blank"
              className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition"
            >
              <FaInstagram size={18} /> @{ig}
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-10 text-xs text-gray-400 tracking-wide">
            © {new Date().getFullYear()} {couple.replace("&", " & ")} • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
