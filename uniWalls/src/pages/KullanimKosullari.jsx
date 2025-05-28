import React from "react";

const KullanimKosullari = () => {
  return (
    <div
      className="text-[#223344] font-sans"
      style={{
        backgroundImage: "url('son_pictures/arkaplan.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-[#223344]">Kullanım </span>
          <span className="text-[#ff6b6b]">Koşulları</span>
        </h1>

        <div className="bg-white rounded-2xl shadow p-8 space-y-6 text-gray-700 leading-relaxed text-[17px]">
          <p>
            Bu kullanım koşulları, UniWalls platformunu kullanırken uymanız gereken kuralları ve şartları belirtir. Siteyi kullanarak bu şartları kabul etmiş sayılırsınız.
          </p>

          <h2 className="text-xl font-semibold text-[#223344] mt-6">1. Hesap Oluşturma</h2>
          <p>
            UniWalls'a üye olmak için geçerli bir e-posta adresi ile kayıt olmanız gerekmektedir. Hesap bilgilerinizi gizli tutmak sizin sorumluluğunuzdadır.
          </p>

          <h2 className="text-xl font-semibold text-[#223344] mt-6">2. İçerik Paylaşımı</h2>
          <p>
            Paylaştığınız içeriklerden tamamen siz sorumlusunuz. Yasa dışı, zararlı veya uygunsuz içerik paylaşımı yasaktır ve hesabınızın kapatılmasına neden olabilir.
          </p>

          <h2 className="text-xl font-semibold text-[#223344] mt-6">3. Fikri Mülkiyet</h2>
          <p>
            UniWalls üzerindeki tüm içerik, tasarım ve yazılımlar UniWalls'a aittir. İzinsiz kopyalanamaz veya dağıtılamaz.
          </p>

          <h2 className="text-xl font-semibold text-[#223344] mt-6">4. Hizmet Değişiklikleri</h2>
          <p>
            UniWalls, hizmet içeriğinde değişiklik yapma veya hizmeti durdurma hakkını saklı tutar. Bu durumda kullanıcılar bilgilendirilir.
          </p>

          <h2 className="text-xl font-semibold text-[#223344] mt-6">5. Sorumluluk Reddi</h2>
          <p>
            Kullanıcılar tarafından paylaşılan içeriklerden UniWalls sorumlu değildir. Her kullanıcı, kendi paylaşımlarından doğan yasal yükümlülükleri kabul eder.
          </p>
        </div>

        <p className="text-sm text-center mt-12 text-gray-500">
          Daha fazla bilgi için{" "}
          <a href="/bizesorun" className="text-[#88b7a5] font-medium hover:underline">
            bize sorun
          </a>.
        </p>
      </div>

     
    </div>
  );
};

export default KullanimKosullari;
