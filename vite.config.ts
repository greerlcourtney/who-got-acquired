import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/invest-o-clock/', // Ensure this matches your GitHub Pages repository name
  build: {
    outDir: 'dist'
  }
});