import React from 'react';
import { useNavigate } from "react-router-dom";

function GirisYap({ setGirisAcik }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div>
        <label>Kullanıcı Adı</label>
        <input type="text" placeholder="Kullanıcı Adı" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Şifre</label>
        <input type="password" placeholder="Şifre" className="w-full p-2 border rounded" />
      </div>
      <a href="#" className="text-blue-500 text-sm">Şifremi unuttum?</a>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => {
            setGirisAcik(false);
            navigate("/anasayfa");
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Giriş
        </button>
        <button
          onClick={() => setGirisAcik(false)}
          className="px-4 py-2 border rounded"
        >
          Kapat
        </button>
      </div>
    </div>
  );
}

export default GirisYap;
