import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // analyzer(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["react-router-dom"],
          "vendor-gsap": ["gsap"],
        },
      },
    },
  },
});
