module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
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
