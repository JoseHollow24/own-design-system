import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.mdx',
    '../src/**/*.mdx',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },

  docs: {
    autodocs: 'tag',
    defaultName: 'Documentación',
  },

  viteFinal: async (configVite) =>
    mergeConfig(configVite, {
      plugins: [
        ...(await import('@atomico/vite')).default({ storybook: ['src/**/**/*', 'components/**/**/*'] }),
      ],
      resolve: {
        alias: {
          '@components': resolve(__dirname, '../components'),
          '@tokens': resolve(__dirname, '../src/generated-tokens/tokens.js'),
        },
      },
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h, Fragment } from 'atomico'`,
      },
    }),
};

export default config;
