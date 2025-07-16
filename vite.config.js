import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ['vue']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/MyComponent.vue'),
      name: 'MyComponent',
      formats: ['umd'], // Cambia a 'umd' o 'iife'
      fileName: 'my-component'
    },
    rollupOptions: {
      // NO pongas 'vue' en external
      external: [],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
