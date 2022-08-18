<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-10 20:45:08
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-18 14:50:09
 * @FilePath: \com-ui-1\src\components\SwitchDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
     <div>
    <Switch v-model:value="bool" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch  from '../lib/Switch.vue'

export default ({
    components: { Switch },
    
    setup(){
      const bool = ref(false)
      return {bool}
    }
})
</script>
