const fs = require("fs");
const path = require("path");

const viteConfigPath = path.resolve("../vite.config.ts");
const newViteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "TagaddodReact",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "es" : "cjs"}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "react.css";
          }
          return assetInfo.name;
        },
        preserveModules: false,
        entryFileNames: (chunkInfo) => {
          return `[name].[format].js`;
        }
      }
    },
    minify: false,
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@tagaddod/tokens/css/tokens.css": path.resolve(__dirname, "../tokens/dist/css/tokens.css"),
      "@tagaddod/tokens/css": path.resolve(__dirname, "../tokens/dist/css/tokens.css"),
      "@tagaddod/tokens/tagaddod": path.resolve(__dirname, "../tokens/dist/tagaddod/vars.css"),
      "@tagaddod/tokens/greenpan": path.resolve(__dirname, "../tokens/dist/greenpan/vars.css"),
      "@tagaddod/tokens": path.resolve(__dirname, "../tokens/dist")
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        modules: false
      }
