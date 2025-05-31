import React from "react";
import dosyaEkleIcon from "../son_pictures/dosyaEkle.png";
import kimlikIcon from "../son_pictures/kimlik.png";

function YorumYap({
  fileInputRef,
  setYaziYazAcik,
  comboGorunur,
  setComboGorunur,
  hesapGorunurluk,
  setHesapGorunurluk,
}) {
  return (
    <div
      className="fixed top-1/2 left-1/2 w-96 bg-[#ff7c5c] text-[#1b475d] p-5 rounded-lg shadow-lg
                 transform -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <label className="block mb-1 font-semibold">Başlık</label>
      <input
        type="text"
        placeholder="Yazınızın başlığı"
        className="w-[90%] p-2 rounded border border-gray-300 mb-4"
      />

      <label className="block mb-1 font-semibold">İçerik</label>
      <textarea
        placeholder="Buraya yazınızı yazabilirsiniz..."
        rows="5"
        className="w-[90%] p-2 rounded border border-gray-300"
      />

      <div className="flex items-center gap-2 mt-3">
        <img
          src={dosyaEkleIcon}
          alt="Dosya Ekle"
          className="w-7 h-7 cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        />
        <span className="text-xs text-[#1b475d]">
          *yazın herhangi bir kitleyi hedef almamalı ve küfür içermemeli, aksi halde
          wall’dan kaldırılacağını unutma!
        </span>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
              alert(`Seçilen dosya: ${selectedFile.name}`);
            }
          }}
        />
      </div>

      <div className="flex items-center gap-2 mt-3">
        <img
          src={kimlikIcon}
          alt="Hesap Ayarı"
          className="w-7 h-7 cursor-pointer"
          onClick={() => setComboGorunur(!comboGorunur)}
        />

        {comboGorunur && (
          <select
            value={hesapGorunurluk}
            onChange={(e) => {
              setHesapGorunurluk(e.target.value);
              setComboGorunur(false);
            }}
            className="p-1 rounded bg-white border border-gray-300"
          >
            <option value="açık">Hesap Adı Açık</option>
            <option value="gizli">Hesap Adı Gizli</option>
          </select>
        )}

        <p className="text-xs text-gray-700 m-0">
          Seçilen Görünürlük: {hesapGorunurluk === "açık" ? "Herkese açık" : "Gizli"}
        </p>
      </div>

      <div className="mt-5 flex">
        <button
          onClick={() => setYaziYazAcik(false)}
          className="mr-2 px-4 py-2 rounded bg-[#1b475d] text-white border-none cursor-pointer"
        >
          Paylaş
        </button>
        <button
          onClick={() => setYaziYazAcik(false)}
          className="px-4 py-2 rounded bg-gray-300 border-none cursor-pointer"
        >
          Kapat
        </button>
      </div>
    </div>
  );
}

export default YorumYap;
