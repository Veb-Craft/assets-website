import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Hero from "./components/Hero";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Images from "./pages/Images";
import Footer from "./components/Footer";

import { navbarData } from "./data";

export default function App() {
  return (
    <Router>
      <Hero />
      <Routes>
        <Route path={navbarData.HOME.url} element={<Home />} />
        <Route path={navbarData.VIDEOS.url} element={<Videos />} />
        <Route path={navbarData.IMAGES.url} element={<Images />} />
      </Routes>
      <Footer />
    </Router>
  );
}
