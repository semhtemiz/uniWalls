import { Link } from "react-router-dom";
import copyright from "../son_pictures/copyright_logo.png";

const Footer = () =>  {
  return (
    <footer className="p-4 text-gray-600 border-t mt-4 w-full">
      <div className="flex justify-between w-full">
        <Link to="/gizlilik-politikamiz" className="w-auto text-center">gizlilik politikamız</Link>
        <Link to="/kullanim-kosullari" className="w-auto text-center">kullanım koşulları</Link>
        <Link to="/sss" className="w-auto text-center">sss</Link>
        <Link to="/kurallarimiz" className="w-auto text-center">kurallarımız</Link>
        <Link to="/gelistiricilerimiz" className="w-auto text-center">geliştiricilerimiz</Link>
        <div className="flex items-center w-auto text-center gap-1">
          <img src={copyright} alt="copyright" className="h-8 w-auto" />
          <span>copyright</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
