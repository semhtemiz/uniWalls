import React from "react";

const RightSidebar = ({ setYaziYazAcik }) => {
  return (
    <div className="w-1/4 p-4">
      <div className="flex justify-start items-center" style={{ paddingRight: "1rem" }}>
        <button
          onClick={() => setYaziYazAcik(true)}
          className="text-white rounded hover:brightness-110"
          style={{ backgroundColor: "#1b475d", padding: "0.5rem 1rem" }}
        >
          Gönderi Ekle +
        </button>
      </div>
      <h2 className="text-xl font-bold mt-4" style={{ color: "#1b475d" }}>
        Popüler Başlıklar
      </h2>
      <ul className="space-y-1 text-sm mt-2">
        <li>Btu</li>
        <li>ITUYemekhanesi</li>
        <li>FenerMaçı</li>
        <li>Finalhaftası</li>
        <li>19Mayıs</li>
      </ul>
    </div>
  );
};

export default RightSidebar;
