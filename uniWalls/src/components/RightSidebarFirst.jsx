import React from "react";

const RightSidebarFirst = () => {
  return (
    <div className="w-1/4 p-6 font-['Inter']">
  <div className="flex flex-col items-start gap-3">
    {/* Başlık */}
    <p className="text-5xl font-extrabold text-[#1b475d] leading-tight drop-shadow-md transition-all duration-500 hover:tracking-wider">
      UniWalls<span className="text-[#ff7c5c]">!</span>
    </p>

    {/* Alt Başlık */}
    <p className="text-base italic text-[#1b475d] mb-3 tracking-wide">
      ‘a <span className="underline decoration-[#90beab] underline-offset-4">giriş yap</span>
    </p>

    {/* Hareketli Metinler */}
    <p className="text-2xl font-semibold text-[#90beab] transition-all duration-300 hover:translate-x-1">
      kampüs
    </p>
    <p className="text-2xl font-semibold text-[#1b475d] transition-all duration-300 hover:translate-x-1">
      hayatını
    </p>
    <p className="text-2xl font-bold text-white bg-[#ff7c5c] px-4 py-1 rounded-full shadow hover:scale-105 transition-all duration-300">
      dijitalde
    </p>
    <p className="text-2xl font-semibold text-[#90beab] transition-all duration-300 hover:translate-x-1">
      yaşa
    </p>
  </div>
</div>

  );
};

export default RightSidebarFirst;
