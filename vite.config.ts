import { defineConfig } from "vite";
import atomico from "@atomico/vite";
import { resolve } from "path";

const components = [
  "button", "icon", "tag", "badge", "loading",
  "checkbox", "radio", "input", "textarea", "select",
  "accordions", "message", "pagination", "direct-access",
  "progress-bar", "menu-vertical", "modal",
  "card-headline", "card-details", "card-deal", "card-highlight",
  "file-uploader", "datepicker", "timepicker",
];

export default defineConfig({
  plugins: [atomico()],
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
      entry: {
        index: resolve(__dirname, "src/index.js"),
        ...Object.fromEntries(
          components.map((name) => [
            `components/${name}`,
            resolve(__dirname, `components/${name}/index.js`),
          ])
        ),
      },
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        // Chunks compartidos (atomico runtime, sub-componentes compartidos)
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
  },
});
