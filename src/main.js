import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import base from './base'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import './assets/main.css' 按需引入ant-design后不需要

const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
//   }
app.use(createPinia())
app.use(router)
app.use(base)

app.mount('#app')


