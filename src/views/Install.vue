<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2023-02-10 01:57:53
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-10 03:23:13
 * @FilePath: \com-ui-1\src\views\Install.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <article class="markdown-body" v-html="install"></article>
</template>

<script lang="ts">
import install from '../../markdown/install.md'
export default{
  data(){
    return {install}
  }
}
</script>