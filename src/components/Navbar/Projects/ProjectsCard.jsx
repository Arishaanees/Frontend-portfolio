
import React from "react";
import PropTypes from "prop-types";

const ProjectsCard = ({ title, main, demoLink, codeLink }) => {
  return (
    <article
      className="p-4 md:p-6 flex flex-col w-80 bg-white dark:bg-[#0c0e19] text-black dark:text-white shadow-lg rounded-2xl transform hover:-translate-y-2 hover:shadow-indigo-500/30 transition-all duration-300"
      aria-label={title}
    >
      <h3 className="px-2 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-2 text-sm md:text-md leading-tight py-3 flex-1">{main}</p>
      <div className="mt-2 flex gap-4 justify-center">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 rounded-3xl bg-[#465697] hover:scale-105 transition-transform duration-200"
        >
          Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 rounded-3xl bg-[#465697] hover:scale-105 transition-transform duration-200"
        >
          Source
        </a>
      </div>
    </article>
  );
};

ProjectsCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  codeLink: PropTypes.string,
};

export default ProjectsCard;
