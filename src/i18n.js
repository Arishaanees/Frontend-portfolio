import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // ==== Home ====
      homeTitle: "Hi, I'm a React Frontend Developer",
      homeDesc: "passionate about building fast, responsive, and modern web applications using React and Vite.",
      contactBtn: "Contact Me",

      // ==== About ====
      aboutTitle: "About Me",
      aboutDesc: `I’m a passionate Frontend Developer skilled in HTML5, SCSS, JavaScript, TypeScript, React, and Vite.
I specialize in building modern, responsive, and visually engaging user interfaces.
Recently, I’ve started learning React Native to broaden my development expertise.
I’m also confident in creating projects using React + Vite + Tailwind CSS and React + Vite + TypeScript.
If I find a project online built with these technologies, I can recreate it using React and Vite and efficiently customize it according to my needs or desired design.`,

      // ==== Portfolio (Skills) ====
      skillsTitle: "Skills",
      educationTitle: "Education",
      experienceTitle: "Experience",
      languagesTitle: "Languages",
      interestsTitle: "Interests",

      frameworks: "Frameworks",
      stateManagement: "State Management",
      layout: "Layout",
      testing: "Testing",
      misc: "Miscellaneous",

      // ==== Projects ====
      projectTitle: "Projects",

      // ==== Contact / Footer ====
      contactTitle: "Contact",
      contactSubtitle: "Feel free to reach out anytime!",

      // ==== Navbar ====
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navContact: "Contact",
    },
  },

  de: {
    translation: {
      // ==== Home ====
      homeTitle: "Hallo, ich bin ein Frontend-Entwickler",
      homeDesc:
        "Willkommen in meinem Portfolio! Entdecken Sie meine Arbeit und Erfahrung.",
      contactBtn: "Kontaktiere mich",

      // ==== About ====
      aboutTitle: "Über mich",
      aboutDesc:
        "Ich bin ein leidenschaftlicher Frontend-Entwickler, der moderne, reaktionsfähige und ansprechende Benutzeroberflächen erstellt.",

      // ==== Portfolio (Skills) ====
      skillsTitle: "Fähigkeiten",
      educationTitle: "Ausbildung",
      experienceTitle: "Erfahrung",
      languagesTitle: "Sprachen",
      interestsTitle: "Interessen",

      frameworks: "Frameworks",
      stateManagement: "Zustandsverwaltung",
      layout: "Layout",
      testing: "Testen",
      misc: "Verschiedenes",

      // ==== Projects ====
      projectTitle: "Projekte",

      // ==== Contact / Footer ====
      contactTitle: "Kontakt",
      contactSubtitle: "Fühlen Sie sich frei, mich jederzeit zu kontaktieren!",

      // ==== Navbar ====
      navHome: "Startseite",
      navAbout: "Über mich",
      navSkills: "Fähigkeiten",
      navProjects: "Projekte",
      navContact: "Kontakt",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
