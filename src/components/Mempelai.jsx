import React from "react";
import imgPria from "../assets/images/pria.png";
import imgWanita from "../assets/images/wanita.png";

export default function Mempelai() {
  return (
    <section className="py-12 px-6">
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mempelai Pria */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="relative rounded-lg overflow-hidden shadow-lg text-center group">
            <img
              src={imgPria}
              alt="Mempelai Pria"
              className="object-cover border border-white mx-auto rounded-full w-[300px] h-[300px] brightness-95 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-all duration-500 group-hover:bg-black/30" />
          
          </div>
            <div className="bottom-0 left-0 text-center right-0 bg-linear-to-t from-black/70 via-black/30 to-transparent px-7 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">I Made Aris</h3>
            </div>
          <p className="text-sm text-center text-gray-300 px-1 md:px-0">
            Putra kedua dari pasangan Bapak Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <h1 className="text-center text-5xl">&</h1>

        {/* Mempelai Wanita */}
       <div data-aos="fade-up" data-aos-delay="100">
          <div className="relative rounded-lg overflow-hidden shadow-lg text-center group">
            <img
              src={imgWanita}
              alt="Mempelai Pria"
              className="object-cover border border-white mx-auto rounded-full w-[300px] h-[300px] brightness-95 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-all duration-500 group-hover:bg-black/30" />
          
          </div>
            <div className="bottom-0 left-0 text-center right-0 bg-linear-to-t from-black/70 via-black/30 to-transparent px-7 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">Ni Komang Putri</h3>
            </div>
          <p className="text-sm text-center text-gray-300 px-1 md:px-0">
            Putri kedua dari pasangan Bapak Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
