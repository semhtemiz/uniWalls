// pages/FirstSayfa.jsx
import React from "react";
import HeaderFirst from "../components/HeaderFirst";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent"; // veya başka bir içerik bileşeni

const FirstSayfa = ({ setGirisAcik, setKayitAcik }) => {
  return (
    <>
      <HeaderFirst setGirisAcik={setGirisAcik} setKayitAcik={setKayitAcik} />
      <div className="flex-grow flex p-4 gap-4">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <Footer />
    </>
  );
};

export default FirstSayfa;
