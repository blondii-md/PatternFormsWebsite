import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://pattern-forms-website.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [react(), sitemap(), mdx()],
});
