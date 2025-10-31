
import React from "react";
import { useTranslation } from "react-i18next";
import AboutImg from "../../../7450096.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="p-10 md:p-16 bg-gray-100 dark:bg-[#1a1a2e] text-black dark:text-white transition-colors duration-500">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">{t("aboutTitle")}</h2>
      <div className="md:flex items-center gap-8">
        <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
          {t("aboutDesc")}
        </div>
        <img
          className="md:h-80 w-full md:w-auto rounded-lg object-cover"
          src={AboutImg}
          alt="About Arisha"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
