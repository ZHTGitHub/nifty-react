import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './components',
      name: 'nifty-react',
      formats: [],
    },

    rollupOptions: {

    }
  },
  server: {
    port: 1688,
  }
})
