import { defineConfig } from "vite";
import atomico from "@atomico/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    atomico(), 
    // Genera los archivos de definición de tipos para que otros tengan autocompletado
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      // Asegúrate de que este archivo exista en tu carpeta src
      entry: resolve(__dirname, "src/index.js"),
      name: "JoseHDs",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Dejamos esto vacío para que Atomico se incluya dentro del bundle
      external: [], 
      output: {
        globals: {},
      },
    },
  },
});