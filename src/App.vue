<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-04 13:07:20
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-09 03:17:40
 * @FilePath: \com-ui-1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
-->
<template>
  <router-view/>
</template>

<script lang="ts">
import { provide, ref } from 'vue'

export default {
  name: 'App',
  setup(){
    const asideVisible = ref(false)
    provide('asideVisible', asideVisible)
  },
  mounted(){
    console.log('重新编译了');
    
  },
  components: {
    
  }
}
</script>

<style scoped>

</style>