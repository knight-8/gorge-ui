<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 22:52:10
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-29 14:01:35
 * @FilePath: \com-ui-1\src\components\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>这是Button页面</div>
    <h1>示例1</h1>
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
     <h2>示例2</h2>
        <Button size="big">大大</Button>
        <Button>普通</Button>
        <Button size="small">小小</Button>   
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default({
    components: {Button},
    setup(){
        const onClick = ()=>{
            console.log('你好'); 
        }
        return {onClick}
    }
})
</script>
