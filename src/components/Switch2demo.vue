<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2023-02-11 04:26:29
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-11 17:10:37
 * @FilePath: \com-ui-1\src\components\Switch2demo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>