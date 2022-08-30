<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-30 13:20:24
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-30 13:39:09
 * @FilePath: \com-ui-1\src\lib\Dialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
        <header>标题</header>
        <main>
            <p>第一行字</p>
            <p>第二行字</p>
        </main>
        <footer>
            <Button>OK</Button>
            <Button>Cancel</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
    components: {
        Button
    }
}
</script>