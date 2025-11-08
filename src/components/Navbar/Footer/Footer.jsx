import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useTranslation } from "react-i18next"; // ✅ import translation hook

const Footer = () => {
  const { t, i18n } = useTranslation(); // ✅ translation hook

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section className="min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center transition-colors duration-500 relative">
      {/* 🌓 Theme + Language Switch */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-300 dark:bg-gray-700">
          {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>

        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`px-3 py-1 rounded-lg ${i18n.language === "en" ? "bg-yellow-400 text-black" : "bg-gray-300 dark:bg-gray-700"}`}
        >
          EN
        </button>

        <button
          onClick={() => i18n.changeLanguage("de")}
          className={`px-3 py-1 rounded-lg ${i18n.language === "de" ? "bg-yellow-400 text-black" : "bg-gray-300 dark:bg-gray-700"}`}
        >
          DE
        </button>
      </div>

      {/* 🗺️ Map Section */}
      <div className="w-full h-[400px] mb-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13393051.028681869!2d10.0!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl grayscale contrast-125 opacity-90"
        ></iframe>
      </div>

      {/* 💬 Contact Form */}
      <div className="w-full max-w-5xl px-6 md:px-12 pb-16">
        {/* ✅ Translated heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contactTitle")}
        </h2>
        <p className="text-center mb-8">{t("contactSubtitle")}</p>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-500"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-6"
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
            >
              <FaPaperPlane className="text-lg" />
              {t("contactBtn")}
            </button>
          </div>
          {status === "success" && (
            <p className="mt-4 text-green-600 dark:text-green-400">
              Thank you! I will get back to you soon.
            </p>
          )}
        </form>

        {/* 🌐 Social Icons */}
        <div className="flex justify-center gap-8 mt-10 text-gray-600 dark:text-gray-300">
          <a
            href="mailto:userarishaanees99@gmail.com"
            className="hover:text-yellow-500 transition-transform transform hover:scale-110"
          >
            <SiGmail size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/arisha-anees-795bab328/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://github.com/Arishaanees"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-transform transform hover:scale-110"
          >
            <FaGithub size={26} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
