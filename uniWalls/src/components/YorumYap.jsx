import React, { useState, useRef } from "react";
import dosyaEkleIcon from "../son_pictures/dosyaEkle.png";
import kimlikIcon from "../son_pictures/kimlik.png";

function YorumYap({ setYaziYazAcik, onYorumEklendi }) {
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [hesapGorunurluk, setHesapGorunurluk] = useState("açık");
  const [comboGorunur, setComboGorunur] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("Başlık ve içerik boş olamaz.");
      return;
    }

    setLoading(true);
    try {
      // 1- Küfür filtresi için yapay zeka kontrolü
      const deepseekResponse = await fetch("http://localhost:5000/api/deepseek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ prompt: content }),
      });

      if (!deepseekResponse.ok) {
        throw new Error("Yapay zeka cevabı alınamadı");
      }

      const deepseekData = await deepseekResponse.json();
      const aiResult = deepseekData.result.trim().toUpperCase();

      if (aiResult === "EVET") {
        setError("Yorumunuzda uygunsuz veya küfürlü içerik tespit edildi. Lütfen düzenleyin.");
        setLoading(false);
        return;
      }

      // 2- Yorum verisini formData ile backend'e gönder
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (file) formData.append("image", file);

      const response = await fetch("http://localhost:5000/api/yorumlar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (response.ok) {
        const yeniYorum = await response.json();
        alert("Yorum başarıyla eklendi!");
        setYaziYazAcik(false);
        if (onYorumEklendi) onYorumEklendi(yeniYorum);
      } else {
        const errData = await response.json();
        setError(errData.error || "Yorum eklenirken hata oluştu");
      }
    } catch (err) {
      setError(err.message || "Sunucu hatası");
    } finally {
      setLoading(false);
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
        disabled={loading}
      />

      <label className="block mb-1 font-semibold">İçerik</label>
      <textarea
        placeholder="Buraya yazınızı yazabilirsiniz..."
        rows="5"
        className="w-[90%] p-2 rounded border border-gray-300"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={loading}
      />

      <div className="flex items-center gap-2 mt-3">
        <img
          src={dosyaEkleIcon}
          alt="Dosya Ekle"
          className="w-7 h-7 cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        />
        <span className="text-xs text-[#1b475d]">
          *Yazın herhangi bir kitleyi hedef almamalı ve küfür içermemeli, aksi halde wall'dan kaldırılacaktır!
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
          disabled={loading}
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
            disabled={loading}
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

      <div className="mt-5 flex justify-end gap-2">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded bg-[#1b475d] text-white cursor-pointer disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Gönderiliyor..." : "Paylaş"}
        </button>
        <button
          onClick={() => setYaziYazAcik(false)}
          className="px-4 py-2 rounded bg-gray-300 cursor-pointer"
          disabled={loading}
        >
          Kapat
        </button>
      </div>
    </div>
  );
}

export default YorumYap;
