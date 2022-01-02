import "./App.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Landing from "./components/main/Landing";
import Members from "./components/main/Members";
import Gallery from "./components/main/Gallery";
import Events from "./components/main/Events";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/members" element={<Members />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
