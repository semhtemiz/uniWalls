import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../son_pictures/logo.png";
import bildirim from "../son_pictures/bildirim_logo.png";
import kullanici from "../son_pictures/kullanici_logo.png";
import mesaj from "../son_pictures/mesajkutusu_logo.png";
import ucNokta from "../son_pictures/uc_nokta_logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/first");
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 border-b p-4 flex items-center justify-between bg-white bg-opacity-40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Link to="/anasayfa">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-x-1"
            />
          </Link>
          <span className="text-sm italic"></span>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Ara..."
            className="px-3 py-1 rounded-full border border-gray-400 w-96"
          />
        </div>

        <div className="flex items-center gap-4 text-2xl">
          <span>
            <a href="#">
              <img src={bildirim} alt="Bildirim" className="h-16 w-auto" />
            </a>
          </span>

          <div className="relative group">
            <Link>
              <img
                src={kullanici}
                alt="Kullanıcı"
                className="h-16 w-auto cursor-pointer"
              />
            </Link>

            <div className="absolute right-0 hidden group-hover:block space-y-2 bg-white rounded-lg shadow-lg w-48 border-4 border-[#ff7c5c] z-10 text-black">
              <Link
                to="/profil"
                className="block px-4 py-2 hover:bg-gray-200 hover:text-black text-black"
              >
                Profilim
              </Link>
              <Link
                to="/engellenenler"
                className="block px-4 py-2 hover:bg-gray-200 hover:text-black text-black"
              >
                Engellenenler
              </Link>
            </div>
          </div>

          <span>
            <a href="/mesajlasma">
              <img src={mesaj} alt="Mesaj" className="h-16 w-auto" />
            </a>
          </span>

          <div className="relative group">
            <button
              className="cursor-pointer bg-transparent border-none p-0"
              type="button"
            >
              <img src={ucNokta} alt="Üç Nokta" className="h-12 w-auto" />
            </button>
            <div className="absolute right-0 hidden group-hover:block space-y-2 bg-white text-black rounded-lg shadow-lg w-48 border-4 border-[#ff7c5c]">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                type="button"
              >
                Çıkış yap
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sabit header'ın altındaki içeriğin üstü header tarafından kapanmasın diye boşluk bırakıyoruz */}
      <div className="h-20" />
    </>
  );
};

export default Header;
