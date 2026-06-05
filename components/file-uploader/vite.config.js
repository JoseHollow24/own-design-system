import { defineConfig } from 'vite';
import atomico from '@atomico/vite';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '../..');

export default defineConfig({
  root: projectRoot,
  plugins: [atomico()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'atomico'`,
  },
  resolve: {
    alias: {
      '@tokens': resolve(__dirname, '../../src/generated-tokens/tokens.js'),
      '@components': resolve(__dirname, '../../components'),
    },
  },
  server: {
    open: '/components/file-uploader/index.html',
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'DshFileUploader',
      fileName: (format) => `dsh-file-uploader.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['atomico', '@atomico/hooks'],
      output: {
        globals: {
          atomico: 'atomico',
          '@atomico/hooks': '@atomico/hooks',
        },
      },
    },
  },
});
