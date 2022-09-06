<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 22:52:15
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-09-06 17:16:57
 * @FilePath: \com-ui-1\src\components\DialogDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>这是Dialog页面</div>
    <h1>示例1</h1>
    <Button @click="toggle">对话框</Button>
    <Dialog v-model:visible="x"
        :ok="f1" :cancel="f2" >
        <template v-slot:content>
            <div>你好</div>
            <div>hi</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
    components: {
        Dialog, Button
    },
    setup() {
        const x = ref(false)
        const toggle = ()=> {
            x.value = !x.value
        }
        const f1 = () => {

        }
        const f2 = () => {
            return false  
        }
        return {x, toggle, f1, f2}
    }
}
</script>