<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-12 01:09:17
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-12 12:58:31
 * @FilePath: \com-ui-1\src\lib\Switch.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <button @click="toggle" :class="{checked: checked}"><span></span></button>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
        const checked = ref(false)
        const toggle= ()=> {
            checked.value = !checked.value
        }
        return {checked, toggle} 
    }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button{
    height: $h;
    width: $h*2;
    border:none;
    background: grey;
    border-radius: $h/2;
    position: relative;
}
span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h/2;
    transition: left 250ms;
}
button.checked{
    background: blue;
}
button.checked > span {
    left: calc(100% - #{$h2} - 2px); 
}

</style>
