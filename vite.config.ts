import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: { 
    globals: true, 
    environment: "happy-dom",
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@bosons', replacement: path.resolve(__dirname, 'src/components/bosons')},
      { find: '@atoms', replacement: path.resolve(__dirname, 'src/components/atoms')},
      { find: '@molecules', replacement: path.resolve(__dirname, 'src/components/molecules')},
      { find: '@organisms', replacement: path.resolve(__dirname, 'src/components/organisms')},
      { find: '@templates', replacement: path.resolve(__dirname, 'src/components/templates')},
      { find: '@pages', replacement: path.resolve(__dirname, 'src/components/pages')},
      { find: '@core-adapters', replacement: path.resolve(__dirname, 'src/core/adapter')},
      { find: '@core-drivers', replacement: path.resolve(__dirname, 'src/core/drivers')},
      { find: '@core-entities', replacement: path.resolve(__dirname, 'src/core/entities')},
      { find: '@core-helper', replacement: path.resolve(__dirname, 'src/core/helper')},
      { find: '@core-useCases', replacement: path.resolve(__dirname, 'src/core/useCases')},
    ],
  },
})
