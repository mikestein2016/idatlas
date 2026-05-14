// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// `site` and `base` are set for the temporary GitHub Pages preview at
// https://mikestein2016.github.io/idatlas/. When we move to Cloudflare Pages
// at the real idatlas.org apex domain, drop `base` and update `site`.
export default defineConfig({
  site: 'https://mikestein2016.github.io',
  base: '/idatlas',

  integrations: [mdx(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});