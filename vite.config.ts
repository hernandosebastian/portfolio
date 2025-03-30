import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
