
import React from "react";
import { useTranslation } from "react-i18next";
import ProjectsCard from "./ProjectsCard";

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "E-Shop Control Panel",
      main: "E-commerce admin panel built with React and TypeScript.",
      demoLink: "https://my-react19-app-kohl.vercel.app/",
      codeLink: "https://github.com/Arishaanees/vite-typescript"
    },
    {
      title: "Hike App",
      main: "Modern React & Tailwind CSS app inspired by Nike’s website.",
      demoLink: "https://my-react18-cfpngv7im-arishas-projects-f4ed1b3d.vercel.app/",
      codeLink: "https://github.com/Arishaanees/Hike-shoe"
    },
    {
      title: "WeatherForecaster",
      main: "Real-time weather app built with React and Tailwind CSS.",
      demoLink: "https://weather-forecaste-nine.vercel.app/",
      codeLink: "https://github.com/Arishaanees/Weather-forecaste"
    }
  ];

  return (
    <section className="p-10 md:p-24 bg-gray-100 dark:bg-[#1a1a2e] text-black dark:text-white transition-colors duration-500">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">{t("projectTitle")}</h1>

      <div className="py-12 px-8 flex flex-wrap gap-6 justify-center">
        {projects.map((p) => (
          <ProjectsCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
