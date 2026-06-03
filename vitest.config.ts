import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    storybookTest({ configDir: resolve(__dirname, '.storybook') }),
  ],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'components'),
      '@tokens': resolve(__dirname, 'src/generated-tokens/tokens.js'),
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'atomico'`,
  },
  test: {
    name: 'storybook',
    globals: true,
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['components/**/*.{js,jsx}'],
      exclude: [
        '**/*.test.{js,ts}',
        '**/*.stories.{jsx,js}',
        '**/dist/**',
        '**/node_modules/**',
        '**/assets/**',
      ],
    },
  },
});
