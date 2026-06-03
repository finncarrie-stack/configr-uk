// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Hosted on Vercel — served from the domain root (no base path).
  // Update `site` to https://configr.uk once the custom domain is connected.
  site: 'https://configr-uk.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});