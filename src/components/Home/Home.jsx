
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // ✅ import this

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // ✅ create navigate function

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-[#171d32] text-black dark:text-white transition-colors duration-500">
      <div className="text-center md:w-1/2 px-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("homeTitle")}</h1>
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-6">
          {t("homeDesc")}
        </p>

        <button
          onClick={() => navigate("/contact")} // ✅ navigate to Contact page
          className="text-white py-2 px-6 bg-[#465697] rounded-3xl hover:scale-105 transition-transform duration-300"
        >
          {t("contactBtn")}
        </button>
      </div>
    </div>
  );
};

export default Home;
