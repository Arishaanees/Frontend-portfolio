export const useTranslation = () => ({
  t: (key) => key, // just return the translation key for testing
  i18n: {
    changeLanguage: () => new Promise(() => {}),
  },
});

export const initReactI18next = {
  type: "3rdParty",
  init: () => {},
};
