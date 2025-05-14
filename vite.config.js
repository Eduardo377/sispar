import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: '/',
  server: {
    headers: {
      'Content-Security-Policy': `script-src 'self' 'unsafe-inline' http://localhost:5173; font-src 'self' https://fonts.gstatic.com;`
    }
  }
})