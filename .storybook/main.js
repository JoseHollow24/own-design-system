/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    // "../stories/components/**/*.stories.jsx",
    // "../stories/components/**/*.mdx",
    // "../stories/components/**/**/*.stories.jsx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.mdx"
  ],
  
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },

  docs: {
    autodocs: "tag", 
    defaultName: 'Documentación', 
  },
  
  core: {
    builder: "@storybook/builder-vite",
  }
};

export default config;