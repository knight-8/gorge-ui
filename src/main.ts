/*
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-04 13:07:20
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-10 02:26:06
 * @FilePath: \com-ui-1\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './lib/gorge.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)
