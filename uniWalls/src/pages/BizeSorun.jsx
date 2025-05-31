import React from "react";
import gonder from "../son_pictures/gonder_logo.png";
import kisiIcon from "../son_pictures/kişi.png";


function BizeSorun() {
  return (
    <div className="font-serif min-h-screen flex flex-col px-24 py-8 text-[#222]">
      {/* Kullanıcı Bilgileri */}
      <section
        id="kullanici-bilgileri"
        className="flex items-center gap-6 mb-6"
      >
        <img
          src={kisiIcon}
          alt="Profil Fotoğrafı"
          className="w-20 h-20 object-cover"
        />
        <div className="abril text-left">
          <h2 className="text-2xl">Kullanıcı Adı</h2>
          <p className="text-xl">Ad Soyad</p>
          <h3 className="text-xl">Üniversite Adı</h3>
        </div>
      </section>

      {/* Form */}
      <section className="flex-grow mt-8">
        <div className="abril text-xl mb-4">Bize Sorun</div>

        <div className="mb-6">
          <label
            htmlFor="konu"
            className="block font-semibold text-[#333] mb-2"
          >
            Konu*:
          </label>
          <input
            type="text"
            id="konu"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="ilgili-hesaplar"
            className="block font-semibold text-[#333] mb-2"
          >
            İlgili Hesaplar (Opsiyonel):
          </label>
          <input
            type="text"
            id="ilgili-hesaplar"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız.."
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="detaylar"
            className="block font-semibold text-[#333] mb-2"
          >
            Detaylandırın*:
          </label>
          <textarea
            id="detaylar"
            rows={6}
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />
        </div>
      </section>

      {/* Gönder Butonu */}
      <div className="mb-6 text-center">
        <a href="#" className="inline-block">
          <img
            src={gonder}
            alt="Gönder"
            className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default BizeSorun;
