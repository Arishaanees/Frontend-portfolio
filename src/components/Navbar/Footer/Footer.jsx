
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate EmailJS / Formspree / Netlify forms in production
    console.log("Form Submitted:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-200 dark:bg-[#465697] text-black dark:text-white p-8 md:p-16 gap-10 transition-colors duration-500">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold mb-2">{t("contactTitle")}</h1>
          <h3 className="text-sm md:text-2xl font-normal">{t("contactSubtitle")}</h3>
        </div>

        <ul className="text-sm md:text-xl space-y-4">
          <li className="flex items-center gap-3 justify-center md:justify-start">
            <a href="mailto:arishaanees6@gmail.com" className="hover:underline flex items-center gap-2">
              <SiGmail /> <span className="break-words">userarishaanees99@gmail.com</span>
            </a>
          </li>
          <li className="flex items-center gap-3 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/arisha-anees-795bab328/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
              <FaLinkedin /> linkedin.com/in/ArishaAbees
            </a>
          </li>
          <li className="flex items-center gap-3 justify-center md:justify-start">
            <a href="https://github.com/Arishaanees" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
              <FaGithub /> github.com/Arishaanees
            </a>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-[#2c3362] rounded-2xl shadow-lg p-8 transition-all duration-500" aria-label="Contact form">
        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#1f2445] text-black dark:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#465697]"
        />

        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#1f2445] text-black dark:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#465697]"
        />

        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          rows="4"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#1f2445] text-black dark:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#465697]"
        />

        <button type="submit" className="w-full py-3 bg-[#465697] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
          Send Message
        </button>

        {status === "success" && <p className="mt-3 text-green-600">Thank you! I will get back to you soon.</p>}
      </form>
    </section>
  );
};

export default Footer;
