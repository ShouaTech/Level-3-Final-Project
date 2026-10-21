import path from "node:path";
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    // Import alias: "@/x" means "src/x". Must match "paths" in tsconfig.app.json.
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
