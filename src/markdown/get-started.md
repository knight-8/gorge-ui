<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2023-02-10 03:23:27
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-15 02:24:02
 * @FilePath: \com-ui-1\src\markdown\get-started.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "king-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "king-ui"
export default {
  components: {Button}
}
</script>
```