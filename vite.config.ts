import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/google.ts',
      build: {
        fileName: 'google.user.js'
      },
      userscript: {
        name: 'mgstage',
        icon: 'https://www.google.com/s2/favicons?domain=https://www.google.com/',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://www.google.com/*'],
        author: 'Hokuto Kato'
      }
    })
  ]
})
