import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入 Element Plus 组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入路由
import router from './router'
// // 引入pinia实现全局组件通信，比如兄弟组件
// import { createPinia } from 'pinia'
// const pinia = createPinia()
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus).use(router).mount('#app')