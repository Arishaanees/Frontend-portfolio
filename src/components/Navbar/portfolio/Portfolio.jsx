import React from "react";
import { FaBook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 py-16 px-6 md:px-16 font-sans transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* 🎓 Education Section */}
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md mr-3 border border-gray-300 dark:border-gray-700">
              <FaBook className="text-[#465697] text-xl" />
            </div>
            <h2 className="text-3xl font-bold">{t("educationTitle")}</h2>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-md space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                Virtual University of Pakistan
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2019 — 2023 | Bachelor of Science in Software Engineering (BSSE)
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Completed BSSE with a strong focus on software design, web
                technologies, and frontend development.
              </p>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
              <h3 className="text-xl font-semibold">CodeKernel</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2024 — 2025 | Frontend Developer (Internship)
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Worked on responsive, user-friendly web interfaces using React,
                TailwindCSS, and TypeScript. Collaborated with developers and
                designers to improve UI/UX and performance optimization.
              </p>
            </div>
          </div>
        </div>

        {/* 💼 Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">{t("skillsTitle")}</h2>
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-md space-y-6">
            <SkillLine
              title="Programming Languages"
              content="JavaScript | TypeScript | C++ | HTML5 | CSS3"
            />
            <SkillLine
              title="Frontend Development"
              content="React | Vite | TailwindCSS | Bootstrap | Responsive Design | UI/UX Implementation"
            />
            <SkillLine
              title="Tools & Version Control"
              content="Git | GitHub | VS Code | Postman"
            />
            <SkillLine
              title="Key Expertise"
              content="Frontend Development | Clean Code | Component-Based Architecture | API Integration (Axios) | Debugging"
            />
             <SkillLine
              title="Test"
              content="vitest"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* 🔹 Small Reusable Components */
const SkillLine = ({ title, content }) => (
  <div>
    <p className="text-lg font-semibold mb-1">{title}</p>
    <p className="text-gray-700 dark:text-gray-300">{content}</p>
  </div>
);

const InterestTag = ({ text }) => (
  <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-sm">
    {text}
  </span>
);

export default Portfolio;
