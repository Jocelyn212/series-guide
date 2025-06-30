// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Enable server-side rendering for API routes and dynamic content
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),

  // Enable React to support React JSX components.
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});