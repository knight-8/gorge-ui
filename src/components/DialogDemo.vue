<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 22:52:15
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-30 13:20:54
 * @FilePath: \com-ui-1\src\components\DialogDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>这是Dialog页面</div>
    <h1>示例1</h1>
    <Dialog><Dialog/>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
export default {
    components: {
        Dialog
    }
}
</script>