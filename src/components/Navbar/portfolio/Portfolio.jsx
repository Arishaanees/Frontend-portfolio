import React from "react";
import { FaBook } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 py-16 px-6 md:px-16 font-sans transition-colors duration-500">
      <div className="max-w-5xl mx-auto">

        {/* Education Section */}
        <div className="relative mb-16">
          {/* Icon */}
          <div className="flex items-center mb-10">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md mr-3 border border-gray-300 dark:border-gray-700">
              <FaBook className="text-[#465697] text-xl" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          {/* Vertical Line */}
          <div className="absolute left-5 top-20 bottom-0 border-l-2 border-gray-300 dark:border-gray-700"></div>

          {/* Timeline Items */}
          <div className="space-y-10 ml-10">
            {/* University */}
            <div className="relative">
              <span className="absolute -left-[22px] top-2 w-4 h-4 bg-[#465697] rounded-full border-4 border-gray-100 dark:border-[#0f172a]" />
              <h3 className="font-bold text-lg">
                Virtual University of Pakistan
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                2019 — 2023
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Completed Bachelor of Science in Software Engineering (BSSE) with a strong focus on software design, web technologies, and frontend development.
              </p>
            </div>

            {/* Internship */}
            <div className="relative">
              <span className="absolute -left-[22px] top-2 w-4 h-4 bg-[#465697] rounded-full border-4 border-gray-100 dark:border-[#0f172a]" />
              <h3 className="font-bold text-lg">CodeKernel</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                2024 — 2025 | Frontend Developer (Internship)
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Worked on responsive, user-friendly web interfaces using React, TailwindCSS, and TypeScript. Collaborated with developers and designers to improve UI/UX and performance optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">My Skills</h2>

          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-md space-y-5">
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Programming Languages:
              </span>{" "}
              JavaScript | TypeScript | C++ | HTML5 | CSS3
            </p>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Frontend Development:
              </span>{" "}
              React | Vite | TailwindCSS | Bootstrap | Responsive Design | UI/UX Implementation
            </p>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Tools & Version Control:
              </span>{" "}
              Git | GitHub | VS Code | Postman
            </p>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Key Expertise:
              </span>{" "}
              Frontend Development | Clean Code | Component-Based Architecture | API Integration (Axios) | Debugging
            </p>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Languages</h2>

          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-md">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>• English — Fluent</li>
              <li>• German — Basic</li>
            </ul>
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Interests</h2>

          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-md">
            <ul className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300">
              <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
                Frontend Development
              </li>
              <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
                Web Design
              </li>
              <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
                UI/UX Design
              </li>
              <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
                JavaScript Frameworks
              </li>
              <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
                Learning New Technologies
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
