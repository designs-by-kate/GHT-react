import { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./assets/styles/globals.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const validRoutes = [
  "/GHTourtle/",
  "/about",
  "/skills",
  "/gallery",
  "/projects",
  "/contact",
];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // Add logic to redirect to home page if the path is not recognized
  if (!validRoutes.includes(pathname)) {
    return <Navigate to="/GHTourtle/" replace />;
  }

  return null; // This component doesn't render anything
};

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/GHTourtle/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
