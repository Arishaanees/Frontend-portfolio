// import React from "react";
// import {
//   FaBook,
//   FaReact,
//   FaCss3Alt,
//   FaHtml5,
//   FaJsSquare,
//   FaGitAlt,
//   FaGithub,
//   FaBootstrap,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiVite,
//   SiTailwindcss,
//   SiPostman,
//   SiCplusplus,
//   SiRedux,
//   SiNextdotjs,
//   SiTestinglibrary,
//   SiFirebase,
//   SiYarn,
//   SiNpm,
//   SiXcode,
//   SiWebstorm,
// } from "react-icons/si";
// import { useTranslation } from "react-i18next";

// const Portfolio = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="min-h-screen bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 py-16 px-6 md:px-16 font-sans transition-colors duration-500">
//       <div className="max-w-6xl mx-auto space-y-20">

//         {/* 🎓 Education Section */}
//         <div>
//           <div className="flex items-center mb-10">
//             <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md mr-3 border border-gray-300 dark:border-gray-700">
//               <FaBook className="text-[#465697] text-xl" />
//             </div>
//             <h2 className="text-3xl font-bold">{t("educationTitle")}</h2>
//           </div>

//           <div className="space-y-8">
//             <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-md">
//               <h3 className="text-xl font-semibold">Virtual University of Pakistan</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Bachelor of Science in Software Engineering, 2019 — 2023 — Pakistan
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* 💼 Experience Section */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6">{t("experienceTitle")}</h2>

//           <div className="space-y-8">
//             <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-md">
//               <h3 className="text-xl font-semibold">Code Kernel</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Frontend Developer Intern — 2024 – 2025
//               </p>
//               <p className="mt-2 text-gray-700 dark:text-gray-300">
//                 Worked as a Frontend Developer Intern focusing on React, Next.js, and Tailwind CSS to build responsive and modern web applications.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ⚙️ Skills Section */}
//         <div>
//           <h2 className="text-3xl font-bold mb-10">{t("skillsTitle")}</h2>

//           {/* 🧠 Programming Languages */}
//           <SkillGroup
//             title="Programming Languages"
//             skills={[
//               { icon: <SiCplusplus className="text-blue-600" />, name: "C++" },
//               { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
//               { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
//             ]}
//           />

//           {/* ⚛️ Frameworks */}
//           <SkillGroup
//             title={t("frameworks")}
//             skills={[
//               { icon: <FaReact className="text-cyan-400" />, name: "React" },
//               { icon: <SiVite className="text-purple-500" />, name: "Vite" },
//             ]}
//           />

//           {/* 🧩 State Management */}
//           <SkillGroup
//             title={t("stateManagement")}
//             skills={[
//               { icon: <SiRedux className="text-purple-500" />, name: "Redux Toolkit" },
//               { icon: <FaReact className="text-cyan-400" />, name: "Context API" },
//               { icon: <SiNextdotjs className="text-gray-900 dark:text-white" />, name: "Zustand" },
//             ]}
//           />

//           {/* 🎨 UI Frameworks */}
//           <SkillGroup
//             title="UI Frameworks"
//             skills={[
//               { icon: <SiTailwindcss className="text-sky-400" />, name: "Shadcn/UI" },
//             ]}
//           />

//           {/* 🧱 Layout */}
//           <SkillGroup
//             title={t("layout")}
//             skills={[
//               { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
//               { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
//               { icon: <SiVite className="text-purple-500" />, name: "SCSS" },
//               { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
//               { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
//             ]}
//           />

//           {/* 🧪 Testing */}
//           <SkillGroup
//             title={t("testing")}
//             skills={[
//               { icon: <SiTestinglibrary className="text-red-400" />, name: "Vitest" },
//             ]}
//           />

//           {/* 🗄️ Databases */}
//           <SkillGroup
//             title="Databases"
//             skills={[
//               { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
//             ]}
//           />

//           {/* 🛠️ Miscellaneous */}
//           <SkillGroup
//             title={t("misc")}
//             skills={[
//               { icon: <SiYarn className="text-blue-400" />, name: "Yarn" },
//               { icon: <SiNpm className="text-red-500" />, name: "NPM" },
//               { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
//               { icon: <FaGithub className="text-gray-900 dark:text-white" />, name: "GitHub" },
//               { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
//               { icon: <SiXcode className="text-blue-500" />, name: "Xcode" },
//               { icon: <SiWebstorm className="text-blue-600" />, name: "WebStorm" },
//             ]}
//           />
//         </div>

//         {/* 🌍 Languages */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6">{t("languagesTitle")}</h2>

//           <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-md">
//             <ul className="space-y-3 text-gray-700 dark:text-gray-300">
//               <li>🇩🇪 German — B2 (Learning)</li>
//               <li>🇬🇧 English — Fluent</li>
//               <li>🇵🇰 Urdu — Native</li>
//             </ul>
//           </div>
//         </div>

//         {/* 🎯 Interests */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6">{t("interestsTitle")}</h2>
//           <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-md">
//             <ul className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300">
//               <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
//                 UI/UX Design
//               </li>
//               <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
//                 Frontend Performance Optimization
//               </li>
//               <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
//                 Learning New Frameworks
//               </li>
//               <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
//                 Open Source Contribution
//               </li>
//               <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600">
//                 Creative Web Animations
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* 🔹 Reusable Skill Group Component */
// const SkillGroup = ({ title, skills }) => (
//   <div className="mb-10">
//     <h3 className="text-2xl font-semibold mb-4">{title}</h3>
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//       {skills.map((skill, i) => (
//         <div
//           key={i}
//           className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform"
//         >
//           <div className="text-4xl">{skill.icon}</div>
//           <p className="text-sm font-medium text-center">{skill.name}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Portfolio;
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

        {/* 🌍 Languages Section */}
        {/* <div>
          <h2 className="text-3xl font-bold mb-6">{t("languagesTitle")}</h2>
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-md">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>🇬🇧 English — Fluent</li>
              <li>🇩🇪 German — Basic (Learning)</li>
              <li>🇵🇰 Urdu — Native</li>
            </ul>
          </div>
        </div> */}

        {/* 🎯 Interests Section */}
        {/* <div>
          <h2 className="text-3xl font-bold mb-6">{t("interestsTitle")}</h2>
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-md">
            <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300">
              <InterestTag text="Frontend Development" />
              <InterestTag text="Web Design" />
              <InterestTag text="UI/UX Design" />
              <InterestTag text="JavaScript Frameworks" />
              <InterestTag text="Learning New Technologies" />
            </div>
          </div> */}
        {/* </div> */}
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
