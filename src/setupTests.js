import "@testing-library/jest-dom";
import { vi } from "vitest";

// ✅ Mock scrollTo to avoid JSDOM errors
window.scrollTo = vi.fn();

// ✅ Full mock for react-i18next (includes initReactI18next)
vi.mock("react-i18next", async (importOriginal) => {
  const actual = await importOriginal();

  return {
    ...actual,
    useTranslation: () => ({
      t: (key) => key,
      i18n: {
        changeLanguage: vi.fn(),
      },
    }),
    initReactI18next: {
      type: "3rdParty",
      init: vi.fn(),
    },
  };
});
