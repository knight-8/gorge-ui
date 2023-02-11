<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-10 20:45:08
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-12 01:58:10
 * @FilePath: \com-ui-1\src\components\SwitchDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-10 20:45:08
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-11 04:21:18
 * @FilePath: \com-ui-1\src\components\SwitchDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div>
  <h1>Switch 组件示例 </h1>
  <div class="demo">
    <h2>常规用法</h2> 
    <div class="demo-component">
      <component :is="Switch1Demo" />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{Switch1Demo.__sourceCode}}</pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持 disabled </h2> 
    <div class="demo-component">
      <component :is="Switch2Demo" />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{Switch2Demo.__sourceCode}}</pre>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch  from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import Switch1Demo from './Switch1demo.vue'
import Switch2Demo from './Switch2demo.vue'


export default {
  components: {
    Switch,
    Button
  },
  setup() {
    const bool = ref(false)
    return {
      bool,
      Switch1Demo,
      Switch2Demo
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>