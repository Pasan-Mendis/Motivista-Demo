import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/Motivista",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // 'components': path.resolve(__dirname, './src/components'),
      // 'assets': path.resolve(__dirname, './src/assets'),
      // 'styles': path.resolve(__dirname, './src/styles'),
    },
  },
})
