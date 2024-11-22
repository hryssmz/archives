/// <reference types="vitest" />
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "react-swipeable-views",
        replacement: path.resolve(
          __dirname,
          "node_modules",
          "react-swipeable-views-react-18-fix"
        ),
      },
      {
        find: "react-swipeable-views-utils",
        replacement: path.resolve(
          __dirname,
          "node_modules",
          "react-swipeable-views-utils-react-18-fix"
        ),
      },
    ],
  },
  server: { host: "0.0.0.0", port: 13000 },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/__tests__/vitest.setup.ts"],
    include: [
      // "src/__tests__/index.spec.tsx",
      "src/__tests__/components/cypress-rwa/machines/*.spec.ts",
    ],
    coverage: {
      enabled: false,
      provider: "v8",
    },
  },
});
