<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-11 22:52:10
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-29 15:36:57
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
        <div>
            <Button size="big">大大</Button>
            <Button>普通</Button>
            <Button size="small">小小</Button>  
        </div> 
        <div>
            <Button theme="link" size="big">大大</Button>
            <Button theme="link">普通</Button>
            <Button theme="link" size="small">小小</Button>  
        </div>
        <div>
            <Button size="big" theme="text">大大</Button>
            <Button theme="text">普通</Button>
            <Button size="small" theme="text">小小</Button>  
        </div>
        <h2>示例3</h2>
        <div>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>  
        </div> 
        <div>
            <Button theme="link" level="main">主要链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button theme="link" level="danger">危险链接按钮</Button>  
        </div>
        <div>
            <Button size="big" level="main">主要文字按钮</Button>
            <Button theme="text">普通文字按钮</Button>
            <Button size="small" level="danger">危险文字按钮</Button>  
        </div>
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
