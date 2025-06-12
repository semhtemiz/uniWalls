import React, { useState } from "react";
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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    const formData = new FormData();
    formData.append("content", content);
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await fetch("http://localhost:5000/api/yorumlar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Yorum başarıyla eklendi!");
        setYaziYazAcik(false);
      } else {
        const errData = await response.json();
        setError(errData.error || "Yorum eklenirken bir hata oluştu");
      }
    } catch (err) {
      setError("Sunucuya bağlanırken hata oluştu");
    }
  };

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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="block mb-1 font-semibold">İçerik</label>
      <textarea
        placeholder="Buraya yazınızı yazabilirsiniz..."
        rows="5"
        className="w-[90%] p-2 rounded border border-gray-300"
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
          wall'dan kaldırılacağını unutma!
        </span>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
              setFile(selectedFile);
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

      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

      <div className="mt-5 flex">
        <button
          onClick={handleSubmit}
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
