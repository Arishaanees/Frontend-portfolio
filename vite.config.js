// import { defineConfig } from "vitest/config";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "react-i18next": path.resolve(__dirname, "src/__mocks__/react-i18next.js"),
//     },
//   },
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "./src/setupTests.js"
//   },
// });
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  resolve: {
    alias:
      command === "test"
        ? {
            "react-i18next": path.resolve(__dirname, "src/__mocks__/react-i18next.js"),
          }
        : {},
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
}));
