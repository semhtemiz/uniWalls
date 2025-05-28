import React from 'react';
import { useNavigate } from 'react-router-dom';

function KayitOl({ setGirisAcik }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Kullanıcı Adı</label>
          <input type="text" placeholder="Kullanıcı Adı" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>E-posta</label>
          <input type="email" placeholder="E-posta" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Şifre</label>
          <input type="password" placeholder="Şifre" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Üniversite</label>
          <input type="text" placeholder="Üniversite" className="w-full p-2 border rounded" />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={() => {
            setGirisAcik(false);
            navigate("/anasayfa");
          }}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Kayıt Ol
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

export default KayitOl;
