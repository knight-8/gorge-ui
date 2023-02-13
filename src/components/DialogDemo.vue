<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 22:52:15
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-09-12 11:27:14
 * @FilePath: \com-ui-1\src\components\DialogDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h1>Dialog 示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Dialog1Demo from './Dialog1demo.vue'
import Dialog2Demo from './Dialog2demo.vue'

export default {
    components: {
        Demo
    },
    setup() {
        return {
            Dialog1Demo,
            Dialog2Demo
        }
    }
}
</script>