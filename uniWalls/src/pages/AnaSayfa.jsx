// src/pages/AnaSayfa.jsx
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const AnaSayfa = () => {
  return (
    <>
      <Header />
      <div className="flex-grow flex p-4 gap-4">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <Footer />
    </>
  );
};

export default AnaSayfa;
