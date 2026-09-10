import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed to GitHub Pages as a project site at https://luyenle.github.io/qa-portfolio/
// so the production base path must be '/qa-portfolio/'. Local dev (`vite`) still
// serves from '/'. If the repository is ever renamed or moved to a custom domain,
// update `base` accordingly.
export default defineConfig({
  base: '/qa-portfolio/',
  plugins: [react()],
});
