module.exports = {
  stories: ["../src/**/*.stories.(js|mdx|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-docs",
      options: { configureJSX: true },
    },
  ],
};
