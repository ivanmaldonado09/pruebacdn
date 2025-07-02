import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import replace from '@rollup/plugin-replace'; 

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'MyComponent',
      fileName: format => `my-component.${format}.js`,
      formats: ['umd'],
    },
    rollupOptions: {
      plugins: [
        replace({
          preventAssignment: true,
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
      ],
      output: {
        globals: { vue: 'Vue' },
      },
    },
  },
});
