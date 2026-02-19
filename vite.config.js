import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- ЭТОТ ИМПОРТ НУЖЕН ДЛЯ TAILWIND V4

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- И ЭТОТ ПЛАГИН ТОЖЕ
  ],
  base: '/portfolio/',
})