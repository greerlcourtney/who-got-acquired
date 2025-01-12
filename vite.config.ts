import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/', // Ensure this matches your GitHub Pages repository name
  build: {
    outDir: 'dist',
    rollupOptions: {
      input:'/index.html',
    }
  }
});