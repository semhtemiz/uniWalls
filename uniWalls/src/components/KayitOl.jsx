import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function KayitOl({ setGirisAcik }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    eposta: '',
    password: '',
    school: ''
  });
  const [universiteler, setUniversiteler] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/universiteler')
      .then(res => res.json())
      .then(data => setUniversiteler(data))
      .catch(() => setUniversiteler([]));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = { ...formData, universite_id: formData.school };
      delete payload.school;
      const response = await fetch('http://localhost:5000/api/kayit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token);
        alert("Kayıt başarılı!");
        setGirisAcik(false);
        navigate("/anasayfa");
      } else {
        setError(result.error || (result.errors && result.errors[0]?.msg) || "Kayıt başarısız");
      }
    } catch (err) {
      setError("Sunucuya bağlanırken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-black">Kullanıcı Adı</label>
          <input type="text" name="name" onChange={handleChange} value={formData.name} className="w-full p-2 border rounded text-black bg-white" placeholder="Kullanıcı Adı" />
        </div>
        <div>
          <label className="text-black">E-posta</label>
          <input type="email" name="eposta" onChange={handleChange} value={formData.eposta} className="w-full p-2 border rounded text-black bg-white" placeholder="E-posta" />
        </div>
        <div>
          <label className="text-black">Şifre</label>
          <input type="password" name="password" onChange={handleChange} value={formData.password} className="w-full p-2 border rounded text-black bg-white" placeholder="Şifre" />
        </div>
        <div>
          <label className="text-black">Üniversite</label>
          <select
            name="school"
            onChange={e => setFormData(prev => ({ ...prev, school: e.target.value }))}
            value={formData.school}
            className="w-full p-2 border rounded text-black bg-white"
          >
            <option value="">Üniversite Seçiniz</option>
            {universiteler.map(u => (
              <option key={u.id} value={u.id}>{u.ad}</option>
            ))}
          </select>
        </div>
      </div>

      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
      <div className="flex justify-end gap-4">
        <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded" style={{ backgroundColor: '#ff7c5c'}} disabled={loading}>
          {loading ? 'Yükleniyor...' : 'Kayıt Ol'}
        </button>
        <button onClick={() => setGirisAcik(false)} className="px-4 py-2 border rounded" disabled={loading}>Kapat</button>
      </div>
    </div>
  );
}

export default KayitOl;
