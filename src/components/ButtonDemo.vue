<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 22:52:10
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-13 17:23:43
 * @FilePath: \com-ui-1\src\components\ButtonDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 22:52:10
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-13 17:22:06
 * @FilePath: \com-ui-1\src\components\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h1>Button示例</h1>
        <Demo :component="Button1demo" />
        <Demo :component="Button2demo" />
        <Demo :component="Button3demo" />
        <Demo :component="Button4demo" />
        <Demo :component="Button5demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue"
import Button1demo from './Button1demo.vue'
import Button2demo from './Button2demo.vue'
import Button3demo from './Button3demo.vue'
import Button4demo from './Button4demo.vue'
import Button5demo from './Button5demo.vue'

export default({
    components: {Demo},
    setup(){
        return {
            Button1demo,
            Button2demo,
            Button3demo,
            Button4demo,
            Button5demo
        }
    }
})
</script>
