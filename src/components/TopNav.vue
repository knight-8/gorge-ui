<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-07 17:12:51
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-14 01:31:10
 * @FilePath: \com-ui-1\src\components\TopNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="topnav">
        <div class="logo">
            <router-link to="/">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jie-copy"></use>
                </svg>
            </router-link>    
        </div>
        <div v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu"></div>
        <div class="menu">
            <ul>
                <li>
                    <router-link to="/doc">文档</router-link>
                </li>
            </ul>  
            
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
    props: {
        toggleMenuButtonVisible:{
            type: Boolean,
            default: false
        }
    },
    setup(){
        const asideVisible = inject<Ref<boolean>>("asideVisible")
        const toggleMenu = ()=>{
            asideVisible.value = !asideVisible.value 
            console.log(asideVisible.value);
        }
        return {toggleMenu}
    }
}
</script>


<style lang="scss" scoped>
$color:#196e6a;
.topnav {
    background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
    box-shadow: gray 5px 5px 13px;
    color: $color;
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
    .icon {
       width: 2em; height: 2em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>