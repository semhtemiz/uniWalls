import React from "react";

 function Gelistiricilerimiz() {
  return (
    <div
      className="text-[#223344] font-sans min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('son_pictures/arkaplan.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Ana İçerik: Geliştirici Kartları */}
      <div className="max-w-5xl mx-auto py-12 px-6 flex-grow">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-[#ff6b6b]">Geliştirici</span>
          <span className="text-[#223344]">Ekibimiz</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Geliştirici Kartları */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Esra Özcan</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Zeynep Sude Güneş</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Rukiye Boğa</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Ahmet Can Yarba</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold">İbrahim Semih Temiz</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Samet Dönmez</h2>
          </div>
        </div>

        <p className="text-sm text-center mt-12 text-gray-500">
          Bu platform, emeği geçen geliştirici ekibin katkılarıyla hazırlanmıştır.
        </p>
      </div>

      
    </div>
  );
}

export default Gelistiricilerimiz;