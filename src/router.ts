/*
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 21:41:45
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-15 02:07:46
 * @FilePath: \com-ui-1\src\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 21:41:45
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-09 22:42:01
 * @FilePath: \com-ui-1\src\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 21:41:45
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-09 22:41:01
 * @FilePath: \com-ui-1\src\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './Views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import intro from './markdown/intro.md'
import getStarted  from './markdown/get-started.md'
import install from './markdown/install.md'

import Markdown from './components/Markdown.vue'
import {h} from 'vue'
const md = string => h(Markdown, { content: string, key: string })

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path: '/', component:Home},  //当用户访问根路径，就访问gorge
        {path: '/Doc',
         component:Doc ,
         children:[
            {path: '', redirect: '/doc/intro'},
            {path: 'intro', component: md(intro)},
            {path: 'get-started', component: md(getStarted)},
            {path: 'install', component: md(install)},
            {path: 'switch', component: SwitchDemo},
            {path: 'button', component: ButtonDemo},
            {path: 'dialog', component: DialogDemo},
            {path: 'tabs', component: TabsDemo}
        ]}
    ]
});
router.afterEach(() => {
});