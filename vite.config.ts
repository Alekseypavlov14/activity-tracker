import { defineConfig } from 'vite'
import { join } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "@features": join(__dirname, './src/features'),
      "@components": join(__dirname, './src/components'),
      "@assets": join(__dirname, './src/assets'),
      "@store": join(__dirname, './src/store/store'),
      "@utils": join(__dirname, './src/utils'),
      "@type": join(__dirname, './src/types'),
    }
  }
})
