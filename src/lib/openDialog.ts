/*
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-09-06 17:53:33
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-09-06 21:01:37
 * @FilePath: \com-ui-1\src\lib\openDialog.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD
 */
import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => {
    const {title, content, ok, cancel} = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render(){
            return h(Dialog, {visible: true,
            'onUpdate:visible':(newVisible)=>{
                if(newVisible === false){
                    close()
                }
            },
            ok, cancel
        },
            {
                title: title,
                content:content
            })
        }
    })
    app.mount(div)   
}