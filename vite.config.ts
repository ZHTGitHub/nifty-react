import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: './components',
      name: 'nifty-react',
    },

    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        }
      }
    },

    outDir: './dist'
  },

  server: {
    port: 1688,
  }
})
