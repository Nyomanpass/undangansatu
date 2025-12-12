import React from "react";
import imgPria from "../assets/images/Mempelai_Pria_1.webp";
import imgWanita from "../assets/images/Mempelai_Wanita_1.webp";

export default function Mempelai() {
  return (
    <section className="py-12 px-6 mb-10">

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center space-y-5">

        {/* Pria */}
        <div className="text-center">
          <img
            src={imgPria}
            alt="Mempelai Pria"
            className="object-cover mx-auto rounded-full w-[350px] h-[350px] brightness-95"
          />
          <h3 className="text-4xl font-abuget text-white mt-4">
            I Kadek Suka Usada
          </h3>
          <p className="text-sm text-gray-300 mt-2 max-w-xs mx-auto">
            Putra kedua dari pasangan Bapak I Wayan Kama Mahardika dengan Ibu Ni Made Sutarji.
          </p>
        </div>

        {/* "&" tengah */}
        <h1 className="text-7xl font-abuget text-white">&</h1>

        {/* Wanita */}
        <div className="text-center">
          <img
            src={imgWanita}
            alt="Mempelai Wanita"
            className="object-cover mx-auto rounded-full w-[350px] h-[350px] brightness-95"
          />
          <h3 className="text-4xl font-abuget text-white mt-4">
            Ni Luh Gede Nia Amanda Putri
          </h3>
          <p className="text-sm text-gray-300 mt-2 max-w-xs mx-auto">
            Putri pertama dari pasangan Bapak I Nyoman Mester dengan Ibu Ni Nyoman Reniati.
          </p>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:grid grid-cols-3 gap-10 max-w-5xl mx-auto items-center">

        {/* Pria */}
        <div className="text-center">
          <img
            src={imgPria}
            alt="Mempelai Pria"
            className="object-cover mx-auto rounded-full w-[300px] h-[300px] lg:w-[340px] lg:h-[340px]"
          />
          <h3 className="text-5xl font-abuget text-white mt-6">
            I Kadek Suka Usada
          </h3>
          <p className="text-sm text-gray-300 mt-2 max-w-xs mx-auto">
            Putra kedua dari pasangan Bapak I Wayan Kama Mahardika dengan Ibu Ni Made Sutarji.
          </p>
        </div>

        {/* & */}
        <div className="flex justify-center">
          <h1 className="text-[80px] lg:text-[110px] font-abuget text-white">&</h1>
        </div>

        {/* Wanita */}
        <div className="text-center">
          <img
            src={imgWanita}
            alt="Mempelai Wanita"
            className="object-cover mx-auto rounded-full w-[300px] h-[300px] lg:w-[340px] lg:h-[340px]"
          />
          <h3 className="text-5xl font-abuget text-white mt-6">
            Ni Luh Gede Nia Amanda Putri
          </h3>
          <p className="text-sm text-gray-300 mt-2 max-w-xs mx-auto">
            Putri pertama dari pasangan Bapak I Nyoman Mester dengan Ibu Ni Nyoman Reniat.
          </p>
        </div>

      </div>
    </section>
  );
}
