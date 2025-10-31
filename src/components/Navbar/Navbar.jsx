
import React, { useState } from "react";
import { FaGithub, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Navbar = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 py-4 bg-[#f1f8fa] dark:bg-[#0c0e19] text-black dark:text-white transition-colors duration-500 relative shadow-md">
      {/* Logo */}
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
            {/* underline animation */}
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

      {/* ===== Mobile Header Buttons ===== */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={toggleDarkMode}
          className="text-xl hover:text-[#465697] transition-colors duration-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-2xl cursor-pointer" />
          )}
        </button>
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f1f8fa] dark:bg-[#0c0e19] flex flex-col items-center py-6 gap-6 md:hidden z-20">
          {[
            { to: "/", label: t("navHome") },
            { to: "/about", label: t("navAbout") },
            { to: "/skills", label: t("navSkills") },
            { to: "/projects", label: t("navProjects") },
            { to: "/contact", label: t("navContact") },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="relative group text-lg transition-all duration-300 hover:text-[#465697]"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#465697] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Language Switcher inside mobile menu */}
          <div className="flex items-center bg-gray-200 dark:bg-[#1e2a3a] rounded-full overflow-hidden mt-4">
            <button
              onClick={() => toggleLanguage("en")}
              className={`px-4 py-2 text-sm font-medium ${
                language === "en"
                  ? "bg-[#465697] text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => toggleLanguage("de")}
              className={`px-4 py-2 text-sm font-medium ${
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
