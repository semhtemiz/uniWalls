import React, { useEffect, useState } from "react";
import kullanici from "../son_pictures/kişi.png";

function ProfilPage() {
  const [user, setUser] = useState(null);
  const [universiteler, setUniversiteler] = useState([]);
  const [form, setForm] = useState({ name: '', eposta: '', universite_id: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pwLoading, setPwLoading] = useState(false);
  const [pwError, setPwError] = useState(null);
  const [pwSuccess, setPwSuccess] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
          setForm({
            name: data.name || '',
            eposta: data.eposta || '',
            universite_id: data.universite_id || ''
          });
        }
      } catch {}
    };
    const fetchUniversiteler = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/universiteler");
        if (res.ok) {
          setUniversiteler(await res.json());
        }
      } catch {}
    };
    Promise.all([fetchProfile(), fetchUniversiteler()]).then(() => setLoading(false));
  }, []);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSuccess("Profil başarıyla güncellendi.");
      } else {
        const err = await res.json();
        setError(err.error || "Güncelleme başarısız");
      }
    } catch {
      setError("Sunucuya bağlanırken hata oluştu.");
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async () => {
    setPwLoading(true);
    setPwError(null);
    setPwSuccess(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      if (res.ok) {
        setPwSuccess("Şifre başarıyla değiştirildi.");
        setCurrentPassword("");
        setNewPassword("");
      } else {
        const err = await res.json();
        setPwError(err.error || "Şifre değiştirilemedi");
      }
    } catch {
      setPwError("Sunucuya bağlanırken hata oluştu.");
    } finally {
      setPwLoading(false);
    }
  };

  if (loading) return <div className="ml-24 mt-8">Yükleniyor...</div>;
  if (!user) return <div className="ml-24 mt-8 text-red-600">Kullanıcı bilgileri alınamadı.</div>;

  return (
    <div className="font-serif flex flex-col min-h-screen px-24 py-8 text-[#222]">
      {/* Kullanıcı Bilgileri */}
      <section
        id="kullanici-bilgileri"
        className="flex items-center gap-6 mb-6"
      >
        <img
          src={kullanici}
          alt="Profil Fotoğrafı"
          className="w-20 h-20 object-cover"
        />
        <div className="abril text-left">
          <h2 className="text-2xl">{form.name}</h2>
          <p className="text-xl">{form.eposta}</p>
          <h3 className="text-xl">{universiteler.find(u => u.id === Number(form.universite_id))?.ad || '-'}</h3>
        </div>
      </section>

      {/* Kişisel ve İletişim Bilgileri (sol) & Şifre ve Güvenlik (sağ) */}
      <section className="flex gap-12">
        {/* Sol Taraf */}
        <div className="flex flex-col gap-6 w-1/2">
          <div className="abril text-xl mb-4">Kişisel Bilgiler</div>

          <label htmlFor="kullanici-adi" className="block font-semibold">
            Kullanıcı Adı*:
          </label>
          <input
            type="text"
            id="kullanici-adi"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />

          <label htmlFor="universite-adi" className="block font-semibold">
            Üniversite Adı*:
          </label>
          <select
            id="universite-adi"
            name="universite_id"
            value={form.universite_id}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
          >
            <option value="">Üniversite Seçiniz</option>
            {universiteler.map(u => (
              <option key={u.id} value={u.id}>{u.ad}</option>
            ))}
          </select>

          <label htmlFor="email" className="block font-semibold">
            E-posta*:
          </label>
          <input
            type="email"
            id="email"
            name="eposta"
            value={form.eposta}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="yazınız..."
          />
        </div>

        {/* Sağ Taraf */}
        <div className="flex flex-col gap-6 w-1/2">
          <div className="abril text-xl mb-4">Şifre ve Güvenlik</div>
          <label htmlFor="currentPassword" className="block font-semibold">Mevcut Şifre:</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="Mevcut şifreniz"
          />
          <label htmlFor="newPassword" className="block font-semibold">Yeni Şifre:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="w-full p-2 bg-transparent border-b-2 border-gray-400 focus:border-[#ff7c5c] transition duration-300 text-lg text-gray-700"
            placeholder="Yeni şifreniz"
          />
          <button
            onClick={handlePasswordChange}
            className="w-full py-3 text-white bg-[#ff7c5c] rounded-lg hover:bg-[#e66a53] transition-colors mt-2"
            disabled={pwLoading}
          >
            {pwLoading ? "Kaydediliyor..." : "Şifreyi Değiştir"}
          </button>
          {pwError && <div className="text-red-600 mt-2">{pwError}</div>}
          {pwSuccess && <div className="text-green-600 mt-2">{pwSuccess}</div>}
        </div>
      </section>
      {error && <div className="text-red-600 mt-4">{error}</div>}
      {success && <div className="text-green-600 mt-4">{success}</div>}
      <button
        onClick={handleSave}
        className="w-64 py-3 text-white bg-[#ff7c5c] rounded-lg hover:bg-[#e66a53] transition-colors mt-6"
        disabled={saving}
      >
        {saving ? "Kaydediliyor..." : "Kaydet"}
      </button>
    </div>
  );
}

export default ProfilPage;
