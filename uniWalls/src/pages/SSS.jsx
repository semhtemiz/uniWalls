import React from "react";
import { Link } from "react-router-dom";

function SSS() {
  return (
    <div
      className="text-[#223344] font-sans"
      style={{
        backgroundImage: "url('son_pictures/arkaplan.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* SSS İçerik */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-[#ff6b6b]">Sıkça</span>{" "}
          <span className="text-[#223344]">Sorulan</span>{" "}
          <span className="text-[#ff6b6b]">Sorular</span>
        </h1>

        <div className="space-y-6">
          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              UniWalls üyeliği ücretli mi?
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">+</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Hayır, UniWalls’a katılmak tamamen ücretsizdir. Sadece kayıt olmanız yeterlidir.
            </p>
          </details>

          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              Giriş yaparken sorun yaşarsam ne yapmalıyım?
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">+</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Şifrenizi unuttuysanız giriş ekranındaki “Şifremi unuttum” bağlantısını kullanabilirsiniz.
            </p>
          </details>

          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              UniWalls destek ekibine nasıl ulaşabilirim?
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">+</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Bize{" "}
              <a
                className="text-[#ff6b6b] underline"
                href="mailto:destek@uniwalls.com"
              >
                support.uw@gmail.com
              </a>{" "}
              adresinden ulaşabilirsiniz.
            </p>
          </details>

          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              Kampüs içeriğini kimler görebilir?
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">+</span>
            </summary>
            <p className="mt-3 text-gray-600">
              UniWalls! , kampüsle ilgili paylaşımları platforma kaydolan herkese ulaşılabilir yapmıştır.
            </p>
          </details>
        </div>

        <p className="text-sm text-center mt-12 text-gray-500">
          Sorunuzun cevabını bulamadınız mı?{" "}
          <Link to="/bizesorun" className="text-[#88b7a5] font-medium hover:underline">
            Bize sorun
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SSS;
