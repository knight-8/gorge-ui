import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import gorge from './components/gorge.vue'
import gorge2 from './components/gorge2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path: '/', component:gorge},  //当用户访问根路径，就访问gorge
        {path: '/gorge2', component:gorge2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
