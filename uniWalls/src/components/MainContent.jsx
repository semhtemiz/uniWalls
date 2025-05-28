import React from "react";
import zamanLogo from "../son_pictures/thumbnail_zaman_logo.png";
import filtreLogo from "../son_pictures/thumbnail_filtre_logo.png";
import kullaniciLogo from "../son_pictures/kullanici_logo.png";

const MainContent = () => {
  return (
    <div className="flex-grow">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">üniversitelerdeki yürüyüşler</h2>
        <div className="flex gap-3 mr-24">
          <div className="relative group">
            <a href="#" className="cursor-pointer">
              <img src={zamanLogo} alt="Zaman" className="w-12 h-12" />
            </a>
            <div className="absolute left-0 hidden group-hover:block space-y-2 bg-white text-black rounded-lg shadow-lg w-48 border-4 border-[#ff7c5c]">
              <a href="#" className="block px-4 py-2">Son 24 Saat</a>
              <a href="#" className="block px-4 py-2">Son 1 hafta</a>
              <a href="#" className="block px-4 py-2">Son 1 Ay</a>
            </div>
          </div>

          <div className="relative group">
            <a href="#" className="cursor-pointer">
              <img src={filtreLogo} alt="Filtre" className="w-12 h-12" />
            </a>
            <div className="absolute left-0 hidden group-hover:block space-y-2 bg-white text-black rounded-lg shadow-lg w-48 border-4 border-[#ff7c5c]">
              <a href="#" className="block px-4 py-2">Varsayılan</a>
              <a href="#" className="block px-4 py-2">Beğeni Sayısı(fazla)</a>
              <a href="#" className="block px-4 py-2">Beğeni Sayısı(az)</a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm mt-1">
        "micheal jackson taklidi yapayım diyen arkadaşıma yap dediğimde ölü taklidi yaptı o gün bu gündür görüşmüyorum."
      </p>

      <div className="flex items-center text-xs mt-2 text-gray-600">
        <span className="flex items-center gap-2">
          <img src={kullaniciLogo} alt="Gizli Kullanıcı" className="w-8 h-8" />
          gizli kullanıcı
        </span>
        <span className="ml-2">24.03.2025</span>
      </div>
    </div>
  );
};

export default MainContent;
