/*
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 21:41:45
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-11 21:49:14
 * @FilePath: \com-ui-1\src\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './Views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'


const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path: '/', component:Home},  //当用户访问根路径，就访问gorge
        {path: '/Doc',
         component:Doc ,
         children:[
            {path: 'switch', component: SwitchDemo}
        ]}
    ]
})
