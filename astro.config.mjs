// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Hosted on Vercel at the custom domain configr.uk — served from the root.
  site: 'https://configr.uk',
  vite: {
    plugins: [tailwindcss()]
  }
});