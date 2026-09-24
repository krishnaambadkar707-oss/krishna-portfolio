import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites set VITE_BASE=/your-repo-name/ at build time.
// For Vercel, a user site (username.github.io) or a custom domain, leave it unset.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
