<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-07 17:12:51
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-08 22:47:09
 * @FilePath: \com-ui-1\src\components\TopNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="topnav">
        <div class="logo">LOGO</div>
        <div class="toggleAside" @click="toggleMenu"></div>
        <div class="menu">
            <ul>
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>  
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
    setup(){
        const asideVisible = inject<Ref<boolean>>("asideVisible")
        console.log("topnav获取的asideVisible为", asideVisible.value )
        const toggleMenu = ()=>{
            asideVisible.value = !asideVisible.value 
            console.log(asideVisible.value);
            
        }
        return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
.topnav {
    //background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
    > .toggleAside{
        width: 24px;
        height: 24px;
        background: lightcoral;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }
    @media (max-width:500px) {
        > .menu{display: none;}
        > .logo{margin: 0 auto;}
        > .toggleAside{display: inline-block;}
    }
}
</style>