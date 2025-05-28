import React from "react";

 function BizeSorun() {
  return (
    <div
      className="bg-[#f5fffa] font-serif min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('son_pictures/arkaplan.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      
      <section
        id="kullanici-bilgileri"
        className="flex items-center gap-6 mb-6 mt-8 ml-24"
      >
        <img
          src="son_pictures/kişi.png"
          alt="Profil Fotoğrafı"
          className="w-20 h-20 object-cover"
        />
        <div className="abril text-left text-[#222]">
          <h2 className="text-2xl">Kullanıcı Adı</h2>
          <p className="text-xl">Ad Soyad</p>
          <h3 className="text-xl">Üniversite Adı</h3>
        </div>
      </section>

      
      <section className="mx-24 mt-8 flex-grow">
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
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus-within:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
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
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus-within:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
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
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus-within:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />
        </div>
      </section>

     
      <div className="mb-6 text-center">
        <a href="#" className="inline-block">
          <img
            src="son_pictures/gonder_logo.png"
            alt="Gönder"
            className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
          />
        </a>
      </div>

      
      <div className="fixed bottom-24 right-12 px-4 py-2 rounded-full cursor-pointer transition-colors">
        <a href="mailto:support.uw@gmail.com">
          <img
            src="son_pictures/thumbnail_bize_ulasin_logo.png"
            alt="Bize Ulaşın"
            className="h-16 w-auto cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
export default BizeSorun;
