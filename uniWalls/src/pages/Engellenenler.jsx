import React from "react";
import kullaniciLogo from "../son_pictures/kullanici_logo.png";

const Engellenenler = () => {
  const engellenenKullanicilar = [
    "gizli kullanici",
    "mehmet_1907",
    "ayse_xx",
    "universiteli_kedi",
    "matrix_icerisinde"
  ];

  return (
    <div className="flex-grow px-8 py-6">
      <h2 className="text-2xl font-bold mb-4 border-b-4 border-[#ff7c5c] inline-block pb-1">
        Engellenenler
      </h2>

      <div className="space-y-4 mt-4">
        {engellenenKullanicilar.map((kullanici, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <img
              src={kullaniciLogo}
              alt="Kullanıcı"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-md font-medium text-gray-800">
              {kullanici}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engellenenler;
