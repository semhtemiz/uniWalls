import React, { useState, useEffect } from "react";
import zamanLogo from "../son_pictures/thumbnail_zaman_logo.png";
import filtreLogo from "../son_pictures/thumbnail_filtre_logo.png";
import kullaniciLogo from "../son_pictures/kullanici_logo.png";

const MainContent = () => {
  const [yorumlar, setYorumlar] = useState([]);
  const [zamanFiltre, setZamanFiltre] = useState("varsayilan"); // varsayilan, 24saat, 1hafta

  useEffect(() => {
    fetch("http://localhost:5000/api/yorumlar")
      .then((res) => res.json())
      .then((data) => setYorumlar(data))
      .catch((err) => console.error(err));
  }, []);

  // Yorumları zaman filtresine göre filtrele
  const filtrelenmisYorumlar = yorumlar.filter((yorum) => {
    if (zamanFiltre === "varsayilan") return true;

    const yorumTarihi = new Date(yorum.created_at);
    const simdi = new Date();

    if (zamanFiltre === "24saat") {
      const birGunOnce = new Date(simdi.getTime() - 24 * 60 * 60 * 1000);
      return yorumTarihi >= birGunOnce;
    }

    if (zamanFiltre === "1hafta") {
      const birHaftaOnce = new Date(simdi.getTime() - 7 * 24 * 60 * 60 * 1000);
      return yorumTarihi >= birHaftaOnce;
    }

    return true;
  });

  return (
    <div className="flex-grow" style={{ height: "80vh", overflowY: "auto" }}>
      {/* Başlık ve Filtreleme */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3 mr-24">
          <div className="relative group">
            <a href="#" className="cursor-pointer">
              <img src={zamanLogo} alt="Zaman" className="w-12 h-12" />
            </a>
            <div className="absolute left-0 hidden group-hover:block space-y-2 bg-white text-black rounded-lg shadow-lg w-48 border-4 border-[#ff7c5c]">
              <a
                href="#"
                className="block px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setZamanFiltre("varsayilan");
                }}
                style={{
                  backgroundColor: zamanFiltre === "varsayilan" ? "#ff7c5c" : "",
                  color: zamanFiltre === "varsayilan" ? "white" : "",
                }}
              >
                Varsayılan
              </a>
              <a
                href="#"
                className="block px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setZamanFiltre("24saat");
                }}
                style={{
                  backgroundColor: zamanFiltre === "24saat" ? "#ff7c5c" : "",
                  color: zamanFiltre === "24saat" ? "white" : "",
                }}
              >
                Son 24 Saat
              </a>
              <a
                href="#"
                className="block px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setZamanFiltre("1hafta");
                }}
                style={{
                  backgroundColor: zamanFiltre === "1hafta" ? "#ff7c5c" : "",
                  color: zamanFiltre === "1hafta" ? "white" : "",
                }}
              >
                Son 1 Hafta
              </a>
            </div>
          </div>

          {/* Diğer filtreler buraya */}
          <div className="relative group">
            <a href="#" className="cursor-pointer">
              <img src={filtreLogo} alt="Filtre" className="w-12 h-12" />
            </a>
            <div className="absolute left-0 hidden group-hover:block space-y-2 bg-white text-black rounded-lg shadow-lg w-48 border-4 border-[#ff7c5c]">
              <a href="#" className="block px-4 py-2">
                Varsayılan
              </a>
              <a href="#" className="block px-4 py-2">
                Beğeni Sayısı(fazla)
              </a>
              <a href="#" className="block px-4 py-2">
                Beğeni Sayısı(az)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Yorumlar */}
      {filtrelenmisYorumlar.map((yorum) => (
        <div key={yorum.id} className="border p-4 mb-4 rounded shadow">
          <h4 className="font-semibold text-lg mb-2">{yorum.title || "Başlıksız Yorum"}</h4>
          <p>{yorum.content}</p>
          {yorum.image_url && (
            <img
              src={`http://localhost:5000/${yorum.image_url}`}
              alt="Yorum resmi"
              className="w-full max-w-xs mt-2"
            />
          )}
          <div className="flex items-center text-xs mt-2 text-gray-600">
            <span className="flex items-center gap-2">
              <img src={kullaniciLogo} alt="Kullanıcı" className="w-8 h-8" />
              {yorum.user_name || "Bilinmeyen Kullanıcı"}
            </span>
            <span className="ml-2">{new Date(yorum.created_at).toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
