/*
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-04 13:07:20
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-07 17:47:03
 * @FilePath: \com-ui-1\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './Views/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path: '/', component:Home},  //当用户访问根路径，就访问gorge
        {path: '/Doc', component:Doc}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
