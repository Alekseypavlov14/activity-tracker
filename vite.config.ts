import { defineConfig } from 'vite'
import { join } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@features": join(__dirname, './src/features'),
      "@components": join(__dirname, './src/components'),
      "@store": join(__dirname, './src/store/store'),
      "@type": join(__dirname, './src/types'),
    }
  }
})
