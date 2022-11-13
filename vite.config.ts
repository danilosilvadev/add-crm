import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@main": "/src/features/main",
      "@common": "/src/features/common",
      "@auth": "/src/features/auth",
      "@config": "/src/config",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: false,
    cors: true,
  },
});
