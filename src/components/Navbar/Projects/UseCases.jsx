import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const useCases = [
  {
    title: "E-Shop Control Panel",
    description:
      "A modern e-commerce admin dashboard built with React and TypeScript, allowing users to manage products, orders, and analytics efficiently.",
    highlights: [
      "Dynamic CRUD operations with React hooks",
      "Responsive layout using Tailwind CSS",
      "TypeScript type safety for cleaner, scalable code",
    ],
    github: "https://github.com/Arishaanees/vite-typescript",
    live: "https://my-react19-5a1r4pey9-arishas-projects-f4ed1b3d.vercel.app/",
  },
  {
    title: "Hike App",
    description:
      "A visually rich React and Tailwind CSS app inspired by Nike’s website, designed to showcase product pages and user experience transitions.",
    highlights: [
      "Framer Motion animations for smooth transitions",
      "Modern landing page structure",
      "Fully mobile responsive",
    ],
    github: "https://github.com/Arishaanees/Hike-shoe",
    live: "https://my-react18-re3h3t9ff-arishas-projects-f4ed1b3d.vercel.app/",
  },
  {
    title: "Weather Forecaster",
    description:
      "A weather forecasting web app using React and Tailwind CSS that displays real-time weather conditions through live API data.",
    highlights: [
      "Integrated OpenWeather API for real-time updates",
      "Search by city with instant results",
      "Simple, minimal, and dark-mode ready design",
    ],
    github: "https://github.com/Arishaanees/Weather-forecaste",
    live: "https://weather-forecaste-nine.vercel.app/",
  },
];

const UseCases = () => {
  return (
    <section className="p-10 md:p-20 bg-gray-100 dark:bg-[#0c0e19] text-black dark:text-white transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Project Use Cases
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {useCases.map((uc, index) => (
          <article
            key={index}
            className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-lg hover:shadow-indigo-500/30 p-8 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#465697]">
              {uc.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {uc.description}
            </p>

            <ul className="space-y-2 mb-6">
              {uc.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#465697] font-semibold">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-4">
              <a
                href={uc.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={uc.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#465697] text-white hover:opacity-90 transition"
              >
                <TbWorld /> Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
