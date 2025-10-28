import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import ghPages from 'vite-plugin-gh-pages';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM-compatible __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/Motivista-Demo/', // matches your GitHub repo name
  plugins: [
    react(),
    tailwindcss(),
    ghPages(), // adds deploy command support
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
