import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function KayitOl({ setGirisAcik }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    eposta: '',
    password: '',
    school: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/kayit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert("Kayıt başarılı!");
        setGirisAcik(false);
        navigate("/anasayfa");
      } else {
        alert("Hata: " + result.error);
      }
    } catch (err) {
      console.error("Sunucu hatası:", err);
      alert("Sunucuya bağlanırken bir hata oluştu.");
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Kullanıcı Adı</label>
          <input type="text" name="name" onChange={handleChange} value={formData.name} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>E-posta</label>
          <input type="email" name="eposta" onChange={handleChange} value={formData.eposta} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Şifre</label>
          <input type="password" name="password" onChange={handleChange} value={formData.password} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Üniversite</label>
          <input type="text" name="school" onChange={handleChange} value={formData.school} className="w-full p-2 border rounded" />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded" style={{ backgroundColor: '#ff7c5c'}}>Kayıt Ol</button>
        <button onClick={() => setGirisAcik(false)} className="px-4 py-2 border rounded">Kapat</button>
      </div>
    </div>
  );
}

export default KayitOl;
