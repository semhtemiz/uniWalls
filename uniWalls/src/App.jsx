import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import HeaderFirst from "./components/HeaderFirst";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";

import FirstSayfa from "./pages/FirstSayfa";
import Engellenenler from "./pages/Engellenenler";

import GizlilikPolitikamız from "./pages/PrivacyPolicy";
import KullanimKosullari from "./pages/KullanimKosullari";
import Kurallarimiz from "./pages/Kurallarimiz";
import Profil from "./pages/Profil";
import SSS from "./pages/SSS";
import Gelistiricilerimiz from "./pages/Gelistiricilerimiz";
import BizeSorun from "./pages/BizeSorun";

import GirisYap from "./components/GirisYap";
import KayitOl from "./components/KayitOl";

import bizeUlasin from "./son_pictures/thumbnail_bize_ulasin_logo.png";

function App() {
  const [girisAcik, setGirisAcik] = useState(false);
  const [kayitAcik, setKayitAcik] = useState(false);

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
            element={
              <>
                <HeaderFirst setGirisAcik={setGirisAcik} setKayitAcik={setKayitAcik} />
                <div className="flex-grow flex p-4 gap-4">
                  <LeftSidebar />
                  <MainContent />
                  <RightSidebar />
                </div>
                <Footer />
              </>
            }
          />

          <Route path="/" element={<Navigate to="/first" replace />} />

          {/* Diğer sayfalar */}
          <Route path="/profil" element={<><Header /><Profil /><Footer /></>} />
          <Route path="/gizlilik-politikamiz" element={<><Header /><GizlilikPolitikamız /><Footer /></>} />
          <Route path="/kullanim-kosullari" element={<><Header /><KullanimKosullari /><Footer /></>} />
          <Route path="/kurallarimiz" element={<><Header /><Kurallarimiz /><Footer /></>} />
          <Route path="/sss" element={<><Header /><SSS /><Footer /></>} />
          <Route path="/gelistiricilerimiz" element={<><Header /><Gelistiricilerimiz /><Footer /></>} />
          <Route path="/bizesorun" element={<><Header /><BizeSorun /><Footer /></>} />
          <Route path="/engellenenler" element={<><Header /><Engellenenler /><Footer /></>} />

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

        {/* Mail butonu */}
        <div className="fixed bottom-24 right-12 px-4 py-2 rounded-full cursor-pointer transition-colors">
          <a href="mailto:support.uw@gmail.com">
            <img src={bizeUlasin} alt="Bize Ulaşın" className="h-16 w-auto cursor-pointer" />
          </a>
        </div>

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test
        </p>

      </div>
    </Router>
  );
}

export default App;
