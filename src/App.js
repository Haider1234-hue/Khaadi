import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; 
import Announcement from "./components/layout/Announcement"; 
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
      {/* Ye teeno cheezain Routes se bahar hain, isliye har page par nazar aayengi */}
      <Announcement />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-in" element={<Shop />} />
        {/* Baaki routes yahan ayenge */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;