import { defineConfig } from "vite";
import atomico from "@atomico/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    atomico(), 
    dts({ insertTypesEntry: true })
  ],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h } from 'atomico'`,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "JoseHDs",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [], 
      output: {
        globals: {},
      },
    },
  },
});