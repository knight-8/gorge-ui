<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-18 18:34:14
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-27 13:13:54
 * @FilePath: \com-ui-1\src\lib\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div>
    <button v-bind="rest">
        <slot />
    </button>
</div>
<button>哈哈哈</button>
</template>
<script lang="ts">

export default{
    inheritAttrs: false,
    setup(props, context) {
        const {size, ...rest} = context.attrs
        return {size, rest}
    },
}
</script>

<style scoped>
div{
    border:1px solid red;
}
</style>