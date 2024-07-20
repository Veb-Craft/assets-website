import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Images from "./pages/Images";
import Footer from "./components/Footer";

import BasicNavbar from "./components/BasicNavbar";
import Terms_of_Service from "./pages/Terms_of_Service";
import Privacy_Policy from "./pages/Privacy_Policy";
import Disclaimer from "./pages/Disclaimer";

import { navbarData, ADDITIONAL_LINKS } from "./data";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  // Define routes that should not have the Hero component
  const routesWithoutHero = [
    ADDITIONAL_LINKS.Terms_of_Service,
    ADDITIONAL_LINKS.Privacy_Policy,
    ADDITIONAL_LINKS.Disclaimer,
  ];
  const routesWithoutFooter = [];

  return (
    <>
      <ScrollToTop />
      {!routesWithoutHero.includes(location.pathname) && <Navbar />}
      {!routesWithoutHero.includes(location.pathname) && <Hero />}
      {routesWithoutHero.includes(location.pathname) && <BasicNavbar />}
      <Routes>
        <Route path={navbarData.LINKS.HOME.link} element={<Home />} />
        <Route path={navbarData.LINKS.VIDEOS.link} element={<Videos />} />
        <Route path={navbarData.LINKS.IMAGES.link} element={<Images />} />
        <Route
          path={ADDITIONAL_LINKS.Terms_of_Service}
          element={<Terms_of_Service />}
        />
        <Route
          path={ADDITIONAL_LINKS.Privacy_Policy}
          element={<Privacy_Policy />}
        />
        <Route path={ADDITIONAL_LINKS.Disclaimer} element={<Disclaimer />} />
      </Routes>
      {!routesWithoutFooter.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
