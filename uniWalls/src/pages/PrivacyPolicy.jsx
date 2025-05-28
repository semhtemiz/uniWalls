import React from "react";

function PrivacyPolicy() {
  return (
    <div className="text-[#223344] font-sans min-h-screen" style={{
      backgroundImage: "url('src/son_pictures/arkaplan.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundColor: "#f2f9f6"
    }}>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-[#223344]">Gizlilik</span>
          <span className="text-[#ff6b6b]">Politikamız</span>
        </h1>

        <div className="bg-white rounded-2xl shadow p-8 space-y-6 text-gray-700 leading-relaxed text-[17px]">
          <p>
            UniWalls olarak kullanıcı gizliliğine büyük önem veriyoruz...
          </p>
          <h2 className="text-xl font-semibold text-[#223344] mt-6">1. Toplanan Bilgiler</h2>
          <p>Kayıt işlemi sırasında adınız, e-posta adresiniz gibi temel kişisel bilgileri toplarız...</p>
          <h2 className="text-xl font-semibold text-[#223344] mt-6">2. Bilgilerin Kullanımı</h2>
          <p>Toplanan veriler hesabınızı yönetmek ve deneyiminizi iyileştirmek için kullanılır...</p>
          <h2 className="text-xl font-semibold text-[#223344] mt-6">3. Çerezler</h2>
          <p>Web sitemiz çerezlerden faydalanır...</p>
          <h2 className="text-xl font-semibold text-[#223344] mt-6">4. Veri Güvenliği</h2>
          <p>Verileriniz güvenli sunucularda saklanmaktadır...</p>
          <h2 className="text-xl font-semibold text-[#223344] mt-6">5. Değişiklikler</h2>
          <p>Gizlilik politikamız zaman zaman güncellenebilir...</p>
        </div>

        <p className="text-sm text-center mt-12 text-gray-500">
          Daha fazla bilgi için{" "}
          <a href="/bizesorun" className="text-[#88b7a5] font-medium hover:underline">bize sorun.</a>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
