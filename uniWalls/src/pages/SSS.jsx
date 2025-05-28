import React from "react";
import { Link } from 'react-router-dom'

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
          <span className="text-[#ff6b6b]">Sıkça</span>
          <span className="text-[#223344]">Sorulan</span>{" "}
          <span className="text-[#ff6b6b]">Sorular</span>
        </h1>

        <div className="space-y-6">
          <details className="bg-white rounded-2xl shadow p-6">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
              UniWalls üyeliği ücretli mi?
            </summary>
            <p className="mt-3 text-gray-600">
              Hayır, UniWalls’a katılmak tamamen ücretsizdir. Sadece kayıt olmanız
              yeterlidir.
            </p>
          </details>

          <details className="bg-white rounded-2xl shadow p-6">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
              Giriş yaparken sorun yaşarsam ne yapmalıyım?
            </summary>
            <p className="mt-3 text-gray-600">
              Şifrenizi unuttuysanız giriş ekranındaki “Şifremi unuttum”
              bağlantısını kullanabilirsiniz.
            </p>
          </details>

          <details className="bg-white rounded-2xl shadow p-6">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
              UniWalls destek ekibine nasıl ulaşabilirim?
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

          <details className="bg-white rounded-2xl shadow p-6">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
              Kampüs içeriğini kimler görebilir?
            </summary>
            <p className="mt-3 text-gray-600">
              UniWalls! , kampüsle ilgili paylaşımları platforma kaydolan herkese
              ulaşılabilir yapmıştır.
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
