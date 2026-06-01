import { defineConfig } from "vite";
import atomico from "@atomico/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    atomico(),
    dts({ insertTypesEntry: true })
  ],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "components"),
      "@tokens": resolve(__dirname, "src/generated-tokens/tokens.js"),
    },
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h } from 'atomico'`,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "DSH",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["atomico", "@atomico/hooks", "lit"],
      output: {
        globals: {
          atomico: "atomico",
          "@atomico/hooks": "@atomico/hooks",
          lit: "lit",
        },
      },
    },
  },
});
