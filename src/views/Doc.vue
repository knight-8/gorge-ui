<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-05 03:33:11
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-08 21:43:26
 * @FilePath: \com-ui-1\src\views\Doc.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <TopNav/>
    <div class="content">
        <aside>
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">Switch组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs组件</router-link>
                </li>
            </ol>
        </aside>
        <main>主内容</main>
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