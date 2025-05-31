import React from "react";
import kullanici from "../son_pictures/kişi.png";

function ProfilPage() {
  return (
    <div className="font-serif flex flex-col min-h-screen px-24 py-8 text-[#222]">
      {/* Kullanıcı Bilgileri */}
      <section
        id="kullanici-bilgileri"
        className="flex items-center gap-6 mb-6"
      >
        <img
          src={kullanici}
          alt="Profil Fotoğrafı"
          className="w-20 h-20 object-cover"
        />
        <div className="abril text-left">
          <h2 className="text-2xl">Kullanıcı Adı</h2>
          <p className="text-xl">Ad Soyad</p>
          <h3 className="text-xl">Üniversite Adı</h3>
        </div>
      </section>

      {/* Kişisel ve İletişim Bilgileri (sol) & Şifre ve Güvenlik (sağ) */}
      <section className="flex gap-12">
        {/* Sol Taraf */}
        <div className="flex flex-col gap-6 w-1/2">
          <div className="abril text-xl mb-4">Kişisel Bilgiler</div>

          <label htmlFor="kullanici-adi" className="block font-semibold">
            Kullanıcı Adı*:
          </label>
          <input
            type="text"
            id="kullanici-adi"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />

          <label htmlFor="ad-soyad" className="block font-semibold">
            Ad Soyad*:
          </label>
          <input
            type="text"
            id="ad-soyad"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />

          <label htmlFor="dogum-tarihi" className="block font-semibold">
            Doğum Tarihi*:
          </label>
          <input
            type="date"
            id="dogum-tarihi"
            className="w-full p-3 rounded-lg border border-gray-300 mt-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c5c] focus:border-[#ff7c5c]"
          />

          <label htmlFor="universite-adi" className="block font-semibold">
            Üniversite Adı*:
          </label>
          <input
            type="text"
            id="universite-adi"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />

          <label htmlFor="bolum-adi" className="block font-semibold">
            Bölüm Adı*:
          </label>
          <input
            type="text"
            id="bolum-adi"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />

          <div className="abril text-xl mt-8 mb-4">İletişim Bilgileri</div>

          <label htmlFor="email" className="block font-semibold">
            E-posta*:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />

          <label htmlFor="telefon-no" className="block font-semibold">
            Telefon No*:
          </label>
          <input
            type="tel"
            id="telefon-no"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />
        </div>

        {/* Sağ Taraf */}
        <div className="flex flex-col gap-6 w-1/2">
          <div className="abril text-xl mb-4">Şifre ve Güvenlik</div>

          <label htmlFor="sifre" className="block font-semibold">
            Şifre*:
          </label>
          <input
            type="password"
            id="sifre"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />

          <label htmlFor="kurtarma-email" className="block font-semibold">
            Kurtarma E-postası*:
          </label>
          <input
            type="email"
            id="kurtarma-email"
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />

          <div>
            <button className="w-full py-3 text-white bg-[#ff7c5c] rounded-lg hover:bg-[#e66a53] transition-colors mt-6">
              Şifremi Değiştir
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilPage;
