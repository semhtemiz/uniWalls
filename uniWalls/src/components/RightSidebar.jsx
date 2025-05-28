import React from "react";

const RightSidebar = () => {
  return (
    <div className="w-1/4">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="yaz..."
          className="border-b-2 border-[#1b475d] bg-transparent w-3/4 focus:outline-none"
        />
        <button className="text-3xl text-[#1b475d] mr-16">+</button>
      </div>
      <h2 className="text-xl font-bold mt-4" style={{ color: "#1b475d" }}>
        Popüler Başlıklar
      </h2>
      <ul className="space-y-1 text-sm mt-2">
        <li>#Btu</li>
        <li>#ITUYemekhanesi</li>
        <li>#FenerMaçı</li>
        <li>#Finalhaftası</li>
        <li>#19Mayıs</li>
      </ul>
    </div>
  );
}

export default RightSidebar;
