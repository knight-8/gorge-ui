<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-05 03:33:11
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-12 00:52:38
 * @FilePath: \com-ui-1\src\views\Doc.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout">
    <TopNav class="nav"/>
    <div class="content">
        <aside v-if="asideVisible">
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
        <main>
            <router-view/>
        </main>
    </div>
  </div>
    
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import TopNav from '../components/TopNav.vue'

export default {
    components: {
        TopNav
    },
    setup(){
        const asideVisible = inject<Ref<boolean>>("asideVisible")
        console.log("Docaside获取的asideVisible为",asideVisible.value)
        return {asideVisible}
    }
}
</script>
<style lang="scss" scoped>
.layout{
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
        flex-shrink: 0;
    }
    > .content {
        flex-grow: 1;
        @media (max-width:500px){
            padding-left: 0; 
        }
    }
}
.content {
    display:flex;
    > aside {
        flex-shrink: 0;
    }
    > main{
        flex-grow: 1;
        padding : 16px;
        background: white;
    }
}
aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    @media (max-width: 500px) {
    position : fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
}
    > h2 {
        margin-bottom: 4px;
    }
    > ol {
      > li{
          padding: 4px 0;
      }
    }
    .main{
        overflow: auto;
    }
}

</style>