// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Hosted on Vercel — served from the domain root (no base path).
  // `site` is set to the production domain once confirmed.
  vite: {
    plugins: [tailwindcss()]
  }
});