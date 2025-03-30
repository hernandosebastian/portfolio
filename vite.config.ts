import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@configs": "/src/configs",
      "@hooks": "/src/hooks",
      "@features": "/src/features",
      "@utils": "/src/utils",
    },
  },
});
