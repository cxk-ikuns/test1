import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置@路径
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  //解决跨境问题，即后端给的接口，转为前端接口来使用
 server: {
  proxy: {
    '/api': {
      target: 'https://326529b4.r18.vip.cpolar.cn',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
})
