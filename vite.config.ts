import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Tailwind is scoped to the Gengar mascot illustration only (see
  // src/mascot.css) — it does not replace or touch the existing
  // src/index.css design-token system the rest of the site relies on.
  plugins: [react(), tailwindcss()],
})
