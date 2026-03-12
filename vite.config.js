import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Depending on your GitHub Pages repo, you might need a base path here. 
  // If it's a user repo like chris-dennis.github.io, base is '/'
  base: '/',
  build: {
    outDir: 'dist',
  }
});
