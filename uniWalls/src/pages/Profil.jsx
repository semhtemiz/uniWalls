import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kullanici from "../son_pictures/kişi.png";

function Profil() {
  const [user, setUser] = useState(null);
  const [universiteler, setUniversiteler] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="ml-24 mt-8">Yükleniyor...</div>;
  if (!user) return <div className="ml-24 mt-8 text-red-600">Kullanıcı bilgileri alınamadı.</div>;

  const universite = universiteler.find(u => u.id === user.universite_id)?.ad || "-";

  return (
    <main className="flex-grow">
      {/* Kullanıcı Bilgileri */}
      <section
        id="kullanici-bilgileri"
        className="flex items-center gap-6 mb-6 mt-8 ml-24"
      >
        <img
          src={kullanici}
          alt="Profil Fotoğrafı"
          className="w-20 h-20 object-cover"
        />
        <div className="abril text-left text-[#222]">
          <h2 className="text-2xl">{user.name}</h2>
          <p className="text-xl">{user.eposta}</p>
          <h3 className="text-xl">{universite}</h3>
        </div>
      </section>

      {/* Beğeni ve Profili Düzenle */}
      <section id="istatistik" className="flex items-center gap-10 mb-6 ml-64">
        <div id="begeni" className="flex items-center gap-3 text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff7c5c"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="none"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12.001 4.529c2.349-4.37 10.68-.818 6.482 5.035-1.815 2.565-4.861 4.956-6.482 6.09-1.62-1.134-4.667-3.525-6.482-6.09C1.321 3.711 9.652.16 12.001 4.529z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-red-500 ml-2">564</span>
        </div>

        {/* Burada Link kullanıyoruz */}
        <Link
          to="/profilduzenle"
          className="text-black text-lg font-semibold no-underline hover:text-gray-700 transition-colors ml-12 bg-[#ff7c5c] px-3 py-1 rounded"
        >
          Profili Düzenle
        </Link>
      </section>

      {/* Yorumlar */}
      <section id="yorumlar" className="mt-4 ml-10">
        <article className="py-4 border-t border-gray-300">
          <h4 className="text-lg font-bold">üniversitelerdeki yürüyüşler</h4>
          <p className="italic">
            "micheal jackson taklidi yapayım diyen arkadaşıma yap dediğimde
            ölü taklidi yaptı o günden bu gündür görüşmüyorum."
          </p>
        </article>
        <article className="py-4 border-t border-gray-300">
          <h4 className="text-lg font-bold">kısmi zamanlı çalışma nasıl oluyor</h4>
          <p className="italic">
            "micheal jackson taklidi yapayım diyen arkadaşıma yap dediğimde
            ölü taklidi yaptı o günden bu gündür görüşmüyorum."
          </p>
        </article>
      </section>
    </main>
  );
}

export default Profil;
