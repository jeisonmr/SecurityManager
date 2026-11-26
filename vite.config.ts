import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.resolve(projectRoot, 'src')
const publicDir = path.resolve(projectRoot, 'public')
const utilsDir = path.resolve(srcDir, 'utils')

// https://vite.dev/config/
export default defineConfig({
  devtools: {
    // Remove this `apply` property to enable devtools for build as well
    apply: 'serve',
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': projectRoot,
      '@src': srcDir,
      '@public': publicDir,
      '@assets': path.resolve(srcDir, 'assets'),
      '@components': path.resolve(srcDir, 'components'),
      '@core': path.resolve(srcDir, 'core'),
      '@router': path.resolve(srcDir, 'router'),
      '@views': path.resolve(srcDir, 'views'),
      '@utils': utilsDir,
      '@data': path.resolve(utilsDir, 'data'),
      '@const': path.resolve(utilsDir, 'const'),
      '@hooks': path.resolve(utilsDir, 'hooks'),
      '@layout': path.resolve(srcDir, 'layout'),
      '@scripts': path.resolve(srcDir, 'scripts'),
      '@styles': path.resolve(srcDir, 'styles'),
    },
  },
})
