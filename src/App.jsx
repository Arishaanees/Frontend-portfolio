
import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer/Footer";
import "./i18n";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/Navbar/About/About"));
const Portfolio = lazy(() => import("./components/Navbar/portfolio/Portfolio"));
const Projects = lazy(() => import("./components/Navbar/Projects/Projects"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [pathname]);
  return null;
};

const PageTitleUpdater = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    const titles = {
      "/": "Home | Arisha Anees",
      "/about": "About | Arisha Anees",
      "/skills": "Skills | Arisha Anees",
      "/projects": "Projects | Arisha Anees",
      "/contact": "Contact | Arisha Anees",
    };
    document.title = titles[pathname] || "Arisha Anees | Portfolio";
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [language, setLanguage] = useState(i18n.language || "en");

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#171d32] text-black dark:text-white transition-colors duration-500">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((p) => !p)}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="pt-20"
        >
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Portfolio />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Footer />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <PageTitleUpdater />
      <ScrollToTop />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// // Example page components
// const Home = () => <div className="p-8 text-center text-lg">Welcome to the Home Page</div>;
// const About = () => <div className="p-8 text-center text-lg">About Me Section</div>;
// const Skills = () => <div className="p-8 text-center text-lg">My Skills Section</div>;
// const Projects = () => <div className="p-8 text-center text-lg">Projects Showcase</div>;
// const Contact = () => <div className="p-8 text-center text-lg">Contact Me Section</div>;

// function App() {
//   // 🌙 Dark Mode Toggle
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   // 🌐 Language Toggle
//   const [language, setLanguage] = useState("en");
//   const toggleLanguage = (lang) => setLanguage(lang);

//   return (
//     <Router>
//       <div className={darkMode ? "dark bg-[#0c0e19] text-white min-h-screen" : "bg-[#f1f8fa] text-black min-h-screen"}>
//         {/* ✅ Navbar */}
//         <Navbar
//           darkMode={darkMode}
//           toggleDarkMode={toggleDarkMode}
//           language={language}
//           toggleLanguage={toggleLanguage}
//         />

//         {/* ✅ Page Routes */}
//         <main className="pt-20 md:pt-24 pb-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
