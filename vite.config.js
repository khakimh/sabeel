import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Sabeel frontend — React + React Router + Tailwind, built for static
// hosting on Cloudflare Pages. base MUST be "/" (the default) — this is a
// client-routed SPA served via public/_redirects (`/* /index.html 200`), so
// a relative base would break asset resolution on nested routes.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
})
