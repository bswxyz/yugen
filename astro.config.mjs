import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://bswxyz.github.io/yugen/
// Built output goes to ./docs so Pages can serve straight from main + /docs.
export default defineConfig({
  site: 'https://bswxyz.github.io',
  base: '/yugen',
  outDir: './docs',
});
