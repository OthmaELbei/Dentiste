import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("my-special-library")) {
            return "my-special-library";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // حد الحجم بالكيلوبايت
  },
});
