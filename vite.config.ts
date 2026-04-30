import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    react(
      {
        babel: {
        plugins: ['babel-plugin-react-compiler'],}
      },
    ), 
    tailwindcss(), 
    tsConfigPaths(), 
    tanstackRouter()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/Netflix-Clone-Project"
})


