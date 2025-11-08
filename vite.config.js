import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],

  root: resolve(__dirname, 'src/renderer'), // 指定你的前端代码根目录
  build: {
    outDir: resolve(__dirname, 'dist') // 指定打包输出目录
  },

  server: {
    port: 5173,
    host: true
  }
})