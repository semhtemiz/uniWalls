import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef } from "react";

import Header from "./components/Header";
import HeaderFirst from "./components/HeaderFirst";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";
import MessagePanel from "./pages/MessagePanel";

import FirstSayfa from "./pages/FirstSayfa";
import Engellenenler from "./pages/Engellenenler";
import ProfilPage from "./pages/ProfilPage";

import GizlilikPolitikamız from "./pages/PrivacyPolicy";
import KullanimKosullari from "./pages/KullanimKosullari";
import Kurallarimiz from "./pages/Kurallarimiz";
import Profil from "./pages/Profil";
import SSS from "./pages/SSS";
import Gelistiricilerimiz from "./pages/Gelistiricilerimiz";
import BizeSorun from "./pages/BizeSorun";

import GirisYap from "./components/GirisYap";
import KayitOl from "./components/KayitOl";
import AnaSayfa from "./pages/AnaSayfa";

import YorumYap from "./components/YorumYap";  // YorumYap bileşenini ekledik

import bizeUlasin from "./son_pictures/thumbnail_bize_ulasin_logo.png";

function App() {
  const [girisAcik, setGirisAcik] = useState(false);
  const [kayitAcik, setKayitAcik] = useState(false);

  // YorumYap modal için state
  const [yaziYazAcik, setYaziYazAcik] = useState(false);

  // YorumYap içinde kullanılan diğer state'ler
  const fileInputRef = useRef(null);
  const [comboGorunur, setComboGorunur] = useState(false);
  const [hesapGorunurluk, setHesapGorunurluk] = useState("açık");

  return (
    <Router>
      <div
        className="bg-[#f5fffa] min-h-screen flex flex-col"
        style={{
          backgroundImage: "url('src/son_pictures/arkaplan.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Routes>
  <Route
    path="/first"
    element={<FirstSayfa setGirisAcik={setGirisAcik} setKayitAcik={setKayitAcik} />}
  />

  <Route path="/" element={<Navigate to="/first" replace />} />
  <Route path="/profil" element={<><Header /><Profil /><Footer /></>} />
  <Route path="/gizlilik-politikamiz" element={<><Header /><GizlilikPolitikamız /><Footer /></>} />
  <Route path="/kullanim-kosullari" element={<><Header /><KullanimKosullari /><Footer /></>} />
  <Route path="/kurallarimiz" element={<><Header /><Kurallarimiz /><Footer /></>} />
  <Route path="/sss" element={<><Header /><SSS /><Footer /></>} />
  <Route path="/gelistiricilerimiz" element={<><Header /><Gelistiricilerimiz /><Footer /></>} />
  <Route path="/bizesorun" element={<><Header /><BizeSorun /><Footer /></>} />
  <Route path="/engellenenler" element={<><Header /><Engellenenler /><Footer /></>} />
  <Route path="/anasayfa" element={<AnaSayfa />} />
  <Route path="/mesajlasma" element={<><Header /><MessagePanel /><Footer /></>} />
   <Route path="/profilduzenle" element={<><Header /><ProfilPage /><Footer /></>} />
  
  
  <Route path="*" element={<Navigate to="/first" replace />} />
</Routes>

        {/* Modal Pencereleri */}
        {girisAcik && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <GirisYap setGirisAcik={setGirisAcik} />
            </div>
          </div>
        )}
        {kayitAcik && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
              <KayitOl setGirisAcik={setKayitAcik} />
            </div>
          </div>
        )}

        {/* YorumYap Modal */}
        {yaziYazAcik && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-auto">
              <YorumYap
                fileInputRef={fileInputRef}
                setYaziYazAcik={setYaziYazAcik}
                comboGorunur={comboGorunur}
                setComboGorunur={setComboGorunur}
                hesapGorunurluk={hesapGorunurluk}
                setHesapGorunurluk={setHesapGorunurluk}
              />
            </div>
          </div>
        )}

        {/* Sağ sidebar ve diğer component'ler varsa buraya eklenebilir */}
        {/* Örneğin, sağ sidebar'a setYaziYazAcik gönderelim */}
        {/* Eğer sağ sidebar global değilse, burada render etmeyebilirsin */}
        {/* Örnek kullanım: */}
        {/* <RightSidebar setYaziYazAcik={setYaziYazAcik} /> */}

        {/* Mail butonu */}
        <div className="fixed bottom-24 right-12 px-4 py-2 rounded-full cursor-pointer transition-colors">
          <a href="mailto:support.uw@gmail.com">
            <img src={bizeUlasin} alt="Bize Ulaşın" className="h-16 w-auto cursor-pointer" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
