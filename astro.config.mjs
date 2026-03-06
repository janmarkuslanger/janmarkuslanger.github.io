import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://janmarkuslanger.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: false,
    },
  },
});
