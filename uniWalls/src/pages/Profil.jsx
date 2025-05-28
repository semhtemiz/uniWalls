import React from "react";
import { Link } from "react-router-dom";  // Link'i import et
import kullanici from "../son_pictures/kullanici_logo.png";

function Profil() {
  return (
    <main className="flex-grow">
      {/* Kullanıcı Bilgileri */}
      <section
        id="kullanici-bilgileri"
        className="flex items-center gap-6 mb-6 mt-8 ml-24"
      >
        <img
          src={kullanici}
          alt="Profil Fotoğrafı"
          className="w-20 h-20 object-cover"
        />
        <div className="abril text-left text-[#222]">
          <h2 className="text-2xl">Kullanıcı Adı</h2>
          <p className="text-xl">Ad Soyad</p>
          <h3 className="text-xl">Üniversite Adı</h3>
        </div>
      </section>

      {/* Beğeni ve Profili Düzenle */}
      <section id="istatistik" className="flex items-center gap-10 mb-6 ml-64">
        <div id="begeni" className="flex items-center gap-3 text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff7c5c"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="none"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12.001 4.529c2.349-4.37 10.68-.818 6.482 5.035-1.815 2.565-4.861 4.956-6.482 6.09-1.62-1.134-4.667-3.525-6.482-6.09C1.321 3.711 9.652.16 12.001 4.529z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-red-500 ml-2">564</span>
        </div>

        {/* Burada Link kullanıyoruz */}
        <Link
          to="/profilduzenle"
          className="text-black text-lg font-semibold no-underline hover:text-gray-700 transition-colors ml-12"
        >
          Profili Düzenle
        </Link>
      </section>

      {/* Yorumlar */}
      <section id="yorumlar" className="mt-4 ml-10">
        <article className="py-4 border-t border-gray-300">
          <h4 className="text-lg font-bold">üniversitelerdeki yürüyüşler</h4>
          <p className="italic">
            "micheal jackson taklidi yapayım diyen arkadaşıma yap dediğimde
            ölü taklidi yaptı o günden bu gündür görüşmüyorum."
          </p>
        </article>
        <article className="py-4 border-t border-gray-300">
          <h4 className="text-lg font-bold">kısmi zamanlı çalışma nasıl oluyor</h4>
          <p className="italic">
            "micheal jackson taklidi yapayım diyen arkadaşıma yap dediğimde
            ölü taklidi yaptı o günden bu gündür görüşmüyorum."
          </p>
        </article>
      </section>
    </main>
  );
}

export default Profil;
