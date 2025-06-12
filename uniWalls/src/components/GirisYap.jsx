import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function GirisYap({ setGirisAcik }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ eposta: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/giris', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result.token);
        alert(result.message);
        setGirisAcik(false);
        navigate("/anasayfa");
      } else {
        const errData = await response.json();
        setError(errData.error || (errData.errors && errData.errors[0]?.msg) || "Giriş başarısız");
      }
    } catch (err) {
      setError("Sunucuya bağlanırken hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <div className="space-y-4 " >
      <div>
        <label>Kullanıcı Adı</label>
        <input
          type="email"
          name="eposta"
          placeholder="E-posta"
          className="w-full p-2 border rounded"
          value={formData.eposta}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Şifre</label>
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          className="w-full p-2 border rounded"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <a href="#" className="text-blue-500 text-sm">Şifremi unuttum?</a>
      <div className="flex justify-end gap-4">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          style={{ backgroundColor: '#ff7c5c'}}
          disabled={loading}
        >
          {loading ? 'Yükleniyor...' : 'Giriş'}
        </button>
        <button
          onClick={() => setGirisAcik(false)}
          className="px-4 py-2 border rounded"
          disabled={loading}
        >
          Kapat
        </button>
      </div>
    </div>
    </div>
  );
}

export default GirisYap;
