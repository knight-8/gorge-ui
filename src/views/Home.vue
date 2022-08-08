<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-05 03:33:17
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-08 21:41:09
 * @FilePath: \com-ui-1\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <TopNav/>
        <div class="banner">
            <h1>GorgeUI</h1>
            <h2>一个炫目的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/knight-8/gorge-ui">Github</a>
                <router-link to="/Doc">开始</router-link>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
    components: {
        TopNav
    }
}
</script>
<style lang="scss" scoped>
.banner{
    padding: 100px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: lightgreen;
    > .actions{
        padding: 8px 0;
        a {
            margin: 0 8px;
            background: #fff;
            display: inline-block;
            $h: 28px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 8px;
        }
    }
}
</style>