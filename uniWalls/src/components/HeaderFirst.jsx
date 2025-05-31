import React from "react";
import { Link } from "react-router-dom";
import logo from "../son_pictures/logo.png";

const HeaderFirst = ({ setGirisAcik, setKayitAcik }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 border-b p-4 flex items-center justify-between bg-white bg-opacity-40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Link to="/first">
  <img
    src={logo}
    alt="Logo"
    className="h-16 w-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-x-1"
  />
</Link>

        </div>

        <div className="flex flex-grow justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Ara..."
            className="px-3 py-1 rounded-full border border-gray-400 w-96"
          />

          <button
            onClick={() => setGirisAcik(true)}
            className="px-4 py-2 border border-[#ff7c5c] text-[#ff7c5c] rounded-full hover:bg-[#ff7c5c] hover:text-white transition"
          >
            Giriş Yap
          </button>
          <button
            onClick={() => setKayitAcik(true)}
            className="px-4 py-2 bg-[#ff7c5c] text-white rounded-full hover:bg-[#e3644f] transition"
          >
            Kayıt Ol
          </button>
        </div>
      </div>
      {/* Sabit header'ın altındaki içeriğin üstü header tarafından kapanmasın diye boşluk bırakıyoruz */}
      <div className="h-20" />
    </>
  );
};

export default HeaderFirst;
