// import React from "react";
// import {
//   FaGithub,
//   FaMoon,
//   FaSun,
// } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
//   const { t } = useTranslation();
//   const location = useLocation();

//   const navLinks = [
//     { to: "/", label: t("navHome") },
//     { to: "/about", label: t("navAbout") },
//     { to: "/skills", label: t("navSkills") },
//     { to: "/projects", label: t("navProjects") },
//     { to: "/contact", label: t("navContact") },
//   ];

//   return (
//     <nav
//       className="
//         w-full flex justify-between items-center 
//         px-6 md:px-10 py-4 
//         bg-[#f1f8fa] dark:bg-[#0c0e19] text-black dark:text-white 
//         transition-colors duration-500 shadow-md 
//         fixed md:static bottom-0 md:top-0 z-50
//       "
//     >
//       {/* ===== Desktop Logo (Hidden on Mobile) ===== */}
//       <h1 className="hidden md:block text-2xl font-bold tracking-wide text-gray-800 dark:text-white">
//         Arisha
//       </h1>

//       {/* ===== Menu Links (Same on Desktop & Mobile) ===== */}
//       <ul
//         className="
//           flex justify-center items-center gap-6 md:gap-8 text-sm md:text-lg font-medium 
//           flex-wrap
//         "
//       >
//         {navLinks.map((item, i) => {
//           const isActive = location.pathname === item.to;
//           return (
//             <li key={i} className="relative group">
//               <Link
//                 to={item.to}
//                 className={`transition-all duration-300 ${
//                   isActive
//                     ? "text-[#465697]"
//                     : "hover:text-[#465697]"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] bg-[#465697] transition-all duration-300 ${
//                   isActive ? "w-full" : "w-0 group-hover:w-full"
//                 }`}
//               ></span>
//             </li>
//           );
//         })}
//       </ul>

//       {/* ===== Right Side (GitHub, Dark Mode, Language) ===== */}
//       <div className="flex items-center gap-4 md:gap-5">
//         <a
//           href="https://github.com/Arishaanees"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub className="text-xl md:text-2xl hover:text-[#465697] cursor-pointer transition-colors duration-300" />
//         </a>

//         <button
//           onClick={toggleDarkMode}
//           className="text-xl md:text-2xl hover:text-[#465697] cursor-pointer transition-colors duration-300"
//         >
//           {darkMode ? <FaSun /> : <FaMoon />}
//         </button>

//         <div className="flex items-center bg-gray-200 dark:bg-[#1e2a3a] rounded-full overflow-hidden">
//           <button
//             onClick={() => toggleLanguage("en")}
//             className={`px-2 md:px-3 py-[2px] md:py-1 text-xs md:text-sm font-medium ${
//               language === "en"
//                 ? "bg-[#465697] text-white"
//                 : "text-gray-700 dark:text-gray-300"
//             }`}
//           >
//             EN
//           </button>
//           <button
//             onClick={() => toggleLanguage("de")}
//             className={`px-2 md:px-3 py-[2px] md:py-1 text-xs md:text-sm font-medium ${
//               language === "de"
//                 ? "bg-[#465697] text-white"
//                 : "text-gray-700 dark:text-gray-300"
//             }`}
//           >
//             DE
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import {
//   FaGithub,
//   FaMoon,
//   FaSun,
//   FaHome,
//   FaUserAlt,
//   FaBrain,
//   FaBriefcase,
//   FaEnvelope,
// } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
//   const { t } = useTranslation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <nav
//       className="
//         w-full flex justify-between items-center px-6 md:px-10 py-4 
//         bg-[#f1f8fa] dark:bg-[#0c0e19] text-black dark:text-white 
//         transition-colors duration-500 shadow-md 
//         fixed bottom-0 md:static z-50
//       "
//     >
//       {/* ===== Desktop Logo ===== */}
//       <h1 className="hidden md:block text-2xl font-bold tracking-wide text-gray-800 dark:text-white">
//         Arisha
//       </h1>

//       {/* ===== Desktop Menu ===== */}
//       <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
//         {[
//           { to: "/", label: t("navHome") },
//           { to: "/about", label: t("navAbout") },
//           { to: "/skills", label: t("navSkills") },
//           { to: "/projects", label: t("navProjects") },
//           { to: "/contact", label: t("navContact") },
//         ].map((item, i) => (
//           <li key={i} className="relative group">
//             <Link
//               to={item.to}
//               className="transition-all duration-300 hover:text-[#465697]"
//             >
//               {item.label}
//             </Link>
//             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#465697] transition-all duration-300 group-hover:w-full"></span>
//           </li>
//         ))}
//       </ul>

//       {/* ===== Right Side (Desktop) ===== */}
//       <div className="hidden md:flex items-center gap-5">
//         <a
//           href="https://github.com/Arishaanees"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub className="text-2xl hover:text-[#465697] cursor-pointer transition-colors duration-300" />
//         </a>
//         <button
//           onClick={toggleDarkMode}
//           className="text-2xl hover:text-[#465697] cursor-pointer transition-colors duration-300"
//         >
//           {darkMode ? <FaSun /> : <FaMoon />}
//         </button>
//         <div className="flex items-center bg-gray-200 dark:bg-[#1e2a3a] rounded-full overflow-hidden">
//           <button
//             onClick={() => toggleLanguage("en")}
//             className={`px-3 py-1 text-sm font-medium ${
//               language === "en"
//                 ? "bg-[#465697] text-white"
//                 : "text-gray-700 dark:text-gray-300"
//             }`}
//           >
//             EN
//           </button>
//           <button
//             onClick={() => toggleLanguage("de")}
//             className={`px-3 py-1 text-sm font-medium ${
//               language === "de"
//                 ? "bg-[#465697] text-white"
//                 : "text-gray-700 dark:text-gray-300"
//             }`}
//           >
//             DE
//           </button>
//         </div>
//       </div>

//       {/* ===== Mobile Bottom Nav (Icons + Text) ===== */}
//       <div className="md:hidden flex justify-around items-center w-full">
//         {[
//           { to: "/", label: "Home", icon: <FaHome /> },
//           { to: "/about", label: "About", icon: <FaUserAlt /> },
//           { to: "/skills", label: "Portfolio", icon: <FaBrain /> },
//           { to: "/projects", label: "Projects", icon: <FaBriefcase /> },
//           { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
//         ].map((item, i) => {
//           const isActive = location.pathname === item.to;
//           return (
//             <Link
//               key={i}
//               to={item.to}
//               className={`flex flex-col items-center text-sm transition-all duration-300 ${
//                 isActive ? "text-[#465697]" : "text-gray-600 dark:text-gray-300"
//               }`}
//             >
//               <div className="text-xl">{item.icon}</div>
//               <span className="mt-1 text-xs">{item.label}</span>
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// };

// export default Navbar; 
import React, { useState } from "react";
import {
  FaGithub,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className="
        w-full flex justify-between items-center px-6 md:px-10 py-4 
        bg-[#f1f8fa] dark:bg-[#0c0e19] text-black dark:text-white 
        transition-colors duration-500 shadow-md 
        fixed top-0 z-50
      "
    >
      {/* ===== Logo ===== */}
      <h1 className="text-2xl font-bold tracking-wide text-gray-800 dark:text-white">
        Arisha
      </h1>

      {/* ===== Desktop Menu ===== */}
      <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
        {[
          { to: "/", label: t("navHome") },
          { to: "/about", label: t("navAbout") },
          { to: "/skills", label: t("navSkills") },
          { to: "/projects", label: t("navProjects") },
          { to: "/contact", label: t("navContact") },
        ].map((item, i) => (
          <li key={i} className="relative group">
            <Link
              to={item.to}
              className="transition-all duration-300 hover:text-[#465697]"
            >
              {item.label}
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#465697] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* ===== Right Side (Desktop) ===== */}
      <div className="hidden md:flex items-center gap-5">
        <a
          href="https://github.com/Arishaanees"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-[#465697] cursor-pointer transition-colors duration-300" />
        </a>
        <button
          onClick={toggleDarkMode}
          className="text-2xl hover:text-[#465697] cursor-pointer transition-colors duration-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <div className="flex items-center bg-gray-200 dark:bg-[#1e2a3a] rounded-full overflow-hidden">
          <button
            onClick={() => toggleLanguage("en")}
            className={`px-3 py-1 text-sm font-medium ${
              language === "en"
                ? "bg-[#465697] text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => toggleLanguage("de")}
            className={`px-3 py-1 text-sm font-medium ${
              language === "de"
                ? "bg-[#465697] text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            DE
          </button>
        </div>
      </div>

      {/* ===== Hamburger Menu Icon (Mobile) ===== */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div
          className="
            absolute top-full left-0 w-full bg-[#f1f8fa] dark:bg-[#0c0e19] 
            flex flex-col items-center gap-4 py-4 shadow-md md:hidden
          "
        >
          {[
            { to: "/", label: t("navHome") },
            { to: "/about", label: t("navAbout") },
            { to: "/skills", label: t("navSkills") },
            { to: "/projects", label: t("navProjects") },
            { to: "/contact", label: t("navContact") },
          ].map((item, i) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={i}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`text-lg ${
                  isActive ? "text-[#465697]" : "text-gray-700 dark:text-gray-300"
                } hover:text-[#465697] transition-colors`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* ===== Mobile Icons ===== */}
          <div className="flex items-center gap-4 mt-3">
            <a
              href="https://github.com/Arishaanees"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-[#465697] cursor-pointer transition-colors duration-300" />
            </a>
            <button
              onClick={toggleDarkMode}
              className="text-2xl hover:text-[#465697] cursor-pointer transition-colors duration-300"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* ===== Mobile Language Switch ===== */}
          <div className="flex items-center bg-gray-200 dark:bg-[#1e2a3a] rounded-full overflow-hidden mt-3">
            <button
              onClick={() => toggleLanguage("en")}
              className={`px-3 py-1 text-sm font-medium ${
                language === "en"
                  ? "bg-[#465697] text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => toggleLanguage("de")}
              className={`px-3 py-1 text-sm font-medium ${
                language === "de"
                  ? "bg-[#465697] text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              DE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
