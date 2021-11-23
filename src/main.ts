/*
 * @Author: your name
 * @Date: 2021-11-23 14:46:41
 * @LastEditTime: 2021-11-23 22:31:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \设计模式\design-pattern\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import navie from 'naive-ui'

// 生成app
const app = createApp(App)
// 启动&使用
app.use(router)
app.use(navie)
app.mount('#app')
