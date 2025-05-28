import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";
import GizlilikPolitikamız from "./pages/PrivacyPolicy"; 
import KullanimKosullari from "./pages/KullanimKosullari";
import Kurallarimiz from "./pages/Kurallarimiz";
import Profil from "./pages/Profil";
import SSS from "./pages/SSS";
import Gelistiricilerimiz from "./pages/Gelistiricilerimiz";
import bizeUlasin from "./son_pictures/thumbnail_bize_ulasin_logo.png";

function App() {
  return (
    <Router>
      <div
        className="bg-[#f5fffa] min-h-screen flex flex-col"
        style={{
          backgroundImage: "url('src/son_pictures/arkaplan.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={
            <div className="flex-grow flex p-4 gap-4">
              <LeftSidebar />
              <MainContent />
              <RightSidebar />
            </div>
          } />
          <Route path="/gizlilik-politikamiz" element={<GizlilikPolitikamız />} />
           <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
           <Route path="/kurallarimiz" element={<Kurallarimiz />} />
           <Route path="/sss" element={<SSS />} />
           <Route path="/profil" element={<Profil />} />
           <Route path="/gelistiricilerimiz" element={<Gelistiricilerimiz />} />
        </Routes>

        

        <Footer />

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
