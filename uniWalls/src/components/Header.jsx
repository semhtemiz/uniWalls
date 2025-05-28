import React from "react";
import { Link } from "react-router-dom";
import logo from "../son_pictures/logo.png";
import bildirim from "../son_pictures/bildirim_logo.png";
import kullanici from "../son_pictures/kullanici_logo.png";
import mesaj from "../son_pictures/mesajkutusu_logo.png";
import ucNokta from "../son_pictures/uc_nokta_logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
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
        <span>
          {/* Burada <a> yerine <Link> kullandık */}
          <Link to="/profil">
            <img src={kullanici} alt="Kullanıcı" className="h-16 w-auto" />
          </Link>
        </span>
        <span>
          <a href="#">
            <img src={mesaj} alt="Mesaj" className="h-16 w-auto" />
          </a>
        </span>
        <div className="relative group">
          <a href="#" className="cursor-pointer">
            <img src={ucNokta} alt="Üç Nokta" className="h-12 w-auto" />
          </a>
          <div className="absolute right-0 hidden group-hover:block space-y-2 bg-white text-black rounded-lg shadow-lg w-48 border-4 border-[#ff7c5c]">
            <a href="#" className="block px-4 py-2">
              çıkış yap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
