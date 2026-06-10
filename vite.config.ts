import { defineConfig } from "vite";
import atomico from "@atomico/vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

const components = [
  "button", "icon", "tag", "badge", "loading",
  "checkbox", "radio", "input", "textarea", "select",
  "accordions", "message", "pagination", "direct-access",
  "menu-vertical", "modal",
  "card-details", "card-deal", "card-highlight",
  "file-uploader", "datepicker", "timepicker",
];

export default defineConfig({
  plugins: [
    atomico(),
    dts({
      include: ["src/**/*", "components/**/*"],
      tsconfigPath: "./tsconfig.app.json",
      compilerOptions: { allowJs: true },
    }),
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
    jsxInject: `import { h, Fragment } from 'atomico'`,
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
      external: ["atomico", "@atomico/hooks"],
      output: {
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
  },
});
