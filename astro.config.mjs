// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://finncarrie-stack.github.io',
  base: '/configr-uk',
  vite: {
    plugins: [tailwindcss()]
  }
});