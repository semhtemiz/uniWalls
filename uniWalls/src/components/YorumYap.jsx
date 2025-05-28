import React from 'react';
import dosyaEkleIcon from './dosyaEkle.png';
import kimlikIcon from './kimlik.png';

function YorumYap({ fileInputRef, setYaziYazAcik, comboGorunur, setComboGorunur, hesapGorunurluk, setHesapGorunurluk }) {
  return (
    <div
      className="form-kutusu"
      style={{
        backgroundColor: "#ff7c5c",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "#1b475d"
      }}
    >
      <label>Başlık</label>
      <input
        type="text"
        placeholder="Yazınızın başlığı"
        style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <label>İçerik</label>
      <textarea
        placeholder="Buraya yazınızı yazabilirsiniz..."
        rows="5"
        style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={dosyaEkleIcon}
          alt="Dosya Ekle"
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          onClick={() => fileInputRef.current.click()}
        />
        <span style={{ fontSize: '10px', color: '#1b475d' }}>
          *yazın herhangi bir kitleyi hedef almamalı ve küfür içermemeli, aksi halde wall’dan kaldırılacağını unutma!
        </span>
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
              alert(`Seçilen dosya: ${selectedFile.name}`);
            }
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
        <img
          src={kimlikIcon}
          alt="Hesap Ayarı"
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          onClick={() => setComboGorunur(!comboGorunur)}
        />

        {comboGorunur && (
          <select
            value={hesapGorunurluk}
            onChange={(e) => {
              setHesapGorunurluk(e.target.value);
              setComboGorunur(false);
            }}
            style={{ padding: '4px', borderRadius: '4px', backgroundColor: '#fff', border: '1px solid #ccc' }}
          >
            <option value="açık">Hesap Adı Açık</option>
            <option value="gizli">Hesap Adı Gizli</option>
          </select>
        )}

        <p style={{ fontSize: "12px", color: "#444", margin: 0 }}>
          Seçilen Görünürlük: {hesapGorunurluk === "açık" ? "Herkese açık" : "Gizli"}
        </p>
      </div>

      <div className="buton-grubu">
        <button onClick={() => setYaziYazAcik(false)}>Paylaş</button>
        <button onClick={() => setYaziYazAcik(false)}>Kapat</button>
      </div>
    </div>
  );
}

export default YorumYap;