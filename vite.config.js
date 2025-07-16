import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/MyComponent.ce.vue'),
      name: 'MyComponent',
      formats: ['es'],
      fileName: 'my-component'
    }
  }
})

