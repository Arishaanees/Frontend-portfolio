import React from "react";
import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiBootstrap, SiRedux } from "react-icons/si";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen p-10 md:p-16 bg-gray-100 dark:bg-[#1a1a2e] text-black dark:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6 border-b-2 border-[#465697] inline-block">
              {t("skillsTitle")}
            </h3>

            <div className="flex flex-wrap gap-4 mb-6 text-4xl">
              <FaHtml5 />
              <FaCss3Alt />
              <FaJs />
              <SiTypescript />
              <FaReact />
              <SiTailwindcss />
              <SiBootstrap />
              <SiRedux />
            </div>

            <div className="space-y-2 text-lg">
              <p><span className="font-semibold">{t("frameworks")}:</span> React, Vite, TypeScript</p>
              <p><span className="font-semibold">{t("stateManagement")}:</span> Redux Toolkit</p>
              <p><span className="font-semibold">{t("layout")}:</span> HTML5, CSS3, SCSS, Bootstrap, Tailwind CSS</p>
              <p><span className="font-semibold">{t("testing")}:</span> Vitest</p>
              <p><span className="font-semibold">{t("misc")}:</span> Git, Node.js, NPM, VS Code</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4 border-b-2 border-[#465697] inline-block">
              {t("educationTitle")}
            </h3>
            <p className="text-lg leading-relaxed">🎓 Virtual University of Pakistan — <span className="font-medium">BS Software Engineering (2024)</span></p>

            <h3 className="text-3xl font-bold mb-4 mt-6 border-b-2 border-[#465697] inline-block">
              {t("experienceTitle")}
            </h3>
            <p className="text-lg leading-relaxed">💻 Frontend Developer — <span className="font-medium">Codekernal (2024)</span></p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-300 dark:border-gray-600">
          <div>
            <h3 className="text-3xl font-bold mb-3 border-b-2 border-[#465697] inline-block">{t("languagesTitle")}</h3>
            <p className="text-lg">German (B2), Urdu, English</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-3 border-b-2 border-[#465697] inline-block">{t("interestsTitle")}</h3>
            <p className="text-lg">Coding, Gaming, Traveling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
