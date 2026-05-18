import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Production builds run under https://<user>.github.io/prisma/.
  // Dev keeps base at root so localhost works normally.
  base: command === 'build' ? '/prisma/' : '/',
  plugins: [react()],
}))
