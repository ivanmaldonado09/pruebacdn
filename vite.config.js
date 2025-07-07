import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'MyComponent',
      fileName: format => `my-component.${format}.js`,
      formats: ['umd'] // también podés incluir 'es', pero UMD es suficiente para CDN
    },
    rollupOptions: {
      external: [], // ❌ NO marcar 'vue' como external
    }
  }
})
