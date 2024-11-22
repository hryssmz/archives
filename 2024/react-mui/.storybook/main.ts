import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    ...[
      // // mui-data-display
      // "avatar",
      // "badge",
      // "chip",
      // "divider",
      // "icon",
      // "list",
      // "table",
      // "tooltip",
      // "typography",
    ].map(segment => `mui-data-display/${segment}`),
    ...[
      // // mui-templates
      // "dashboard",
    ].map(segment => `mui-templates/${segment}`),
    ...[
      // // mui-feedback
      // "alert",
      // "backdrop",
      // "dialog",
      // "progress",
      // "skeleton",
      // "snackbar",
    ].map(segment => `mui-feedback/${segment}`),
    ...[
      // // mui-inputs
      // "autocomplete",
      // "button",
      // "button-group",
      // "checkbox",
      // "fab",
      // "radio-group",
      // "rating",
      // "select",
      // "slider",
      // "switch",
      // "text-field",
      // "toggle-button",
      // "transfer-list",
    ].map(segment => `mui-inputs/${segment}`),
    ...[
      // // mui-layout
      // "container",
      // "grid",
      // "grid2",
      "image-list",
      // "stack",
    ].map(segment => `mui-layout/${segment}`),
    // ...[
    //   // // mui-navigation
    //   "bottom-nav",
    //   "breadcrumb",
    //   "drawer",
    //   "link",
    //   "menu",
    //   "pagination",
    //   "speed-dial",
    //   "stepper",
    //   "tabs",
    // ].map(segment => `mui-navigation/${segment}`),
    // ...[
    //   // // mui-surface
    //   "accordion",
    //   "app-bar",
    //   "card",
    //   "paper",
    // ].map(segment => `mui-surface/${segment}`),
    // ...[
    //   // // mui-system
    //   "box",
    //   "sx-prop",
    // ].map(segment => `mui-system/${segment}`),
    // ...[
    //   // // mui-x-date
    //   "date-calendar",
    // ].map(segment => `mui-x-date/${segment}`),
  ].map(segment => `../src/stories/${segment}/*.stories.tsx`),
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
