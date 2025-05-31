// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef } from "react";

import Header from "./components/Header";
import HeaderFirst from "./components/HeaderFirst";
import Footer from "./components/Footer";
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
import YorumYap from "./components/YorumYap";

import bizeUlasin from "./son_pictures/thumbnail_bize_ulasin_logo.png";
import arkaplan from "./son_pictures/arkaplan.jpg";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [girisAcik, setGirisAcik] = useState(false);
  const [kayitAcik, setKayitAcik] = useState(false);
  const [yaziYazAcik, setYaziYazAcik] = useState(false);

  const fileInputRef = useRef(null);
  const [comboGorunur, setComboGorunur] = useState(false);
  const [hesapGorunurluk, setHesapGorunurluk] = useState("açık");

  return (
    <Router>
      <ScrollToTop />
      <div
        className="bg-[#f5fffa] min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${arkaplan})`,
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
          <Route
            path="/anasayfa"
            element={<AnaSayfa setYaziYazAcik={setYaziYazAcik} />}
          />
          <Route path="/mesajlasma" element={<><Header /><MessagePanel /><Footer /></>} />
          <Route path="/profilduzenle" element={<><Header /><ProfilPage /><Footer /></>} />
          <Route path="*" element={<Navigate to="/first" replace />} />
        </Routes>

        {/* Modal: Giriş Yap */}
        {girisAcik && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <GirisYap setGirisAcik={setGirisAcik} />
            </div>
          </div>
        )}

        {/* Modal: Kayıt Ol */}
        {kayitAcik && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
              <KayitOl setGirisAcik={setKayitAcik} />
            </div>
          </div>
        )}

        {/* Modal: Yorum Yap */}
        {yaziYazAcik && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-transparent p-0 max-w-full w-auto max-h-auto overflow-visible">
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
