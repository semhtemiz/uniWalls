import React from "react";
import kisi from "../son_pictures/kişi.png";
import ucak from "../son_pictures/ucak.png";

const MessagePanel = () => {
  return (
    <div className="flex h-[calc(100vh-100px)] p-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
      {/* Sol Kullanıcı Listesi */}
      <div className="w-[22%] border-r-4 border-black pr-4 flex flex-col gap-2">
        {[
          "Semih Temiz",
          "Esra Özcan",
          "Rukiye Boğa",
          "Ahmet Can Yarba",
          "Samet Dönmez",
          "Zeynep Sude Güneş",
        ].map((name, idx) => (
          <div key={idx} className={`flex items-center rounded-full px-4 py-2 cursor-pointer ${idx === 0 ? "bg-[#c2e3cd]" : ""}`}>
            <img src={kisi} alt={name} className="w-9 h-9 mr-2" />
            {name}
          </div>
        ))}
      </div>

      {/* Mesajlaşma Alanı */}
      <div className="w-[78%] flex flex-col pl-5">
        <div className="text-xl font-bold border-b-4 border-black mb-2 pb-1">Semih Temiz</div>
        <div className="flex-1 overflow-y-auto flex flex-col gap-2 pr-2">
          <div className="bg-[#90cba0] px-4 py-2 rounded-2xl max-w-[60%] self-start">merhaba</div>
          <div className="bg-[#90cba0] px-4 py-2 rounded-2xl max-w-[60%] self-end">merhaba</div>
          <div className="bg-[#90cba0] px-4 py-2 rounded-2xl max-w-[60%] self-start">merhaba</div>
          <div className="bg-[#90cba0] px-4 py-2 rounded-2xl max-w-[60%] self-end">merhaba</div>
        </div>

        {/* Mesaj Yazma Alanı */}
        <div className="flex items-center border-2 border-black rounded-full px-4 py-2 mt-2">
          <input
            type="text"
            placeholder="Mesaj yaz..."
            className="flex-1 bg-transparent focus:outline-none text-lg"
          />
          <button>
            <img src={ucak} alt="Gönder" className="w-6 h-6" />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default MessagePanel;
