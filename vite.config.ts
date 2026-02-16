import { defineConfig } from "vite";
import atomico from "@atomico/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    atomico(), 
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "JoseHDs",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // En Atomico, usualmente quieres que 'atomico' sea una dependencia externa 
      // para que no se duplique si el proyecto que lo usa también la tiene.
      external: ["atomico"],
      output: {
        globals: {
          atomico: "Atomico",
        },
      },
    },
  },
});