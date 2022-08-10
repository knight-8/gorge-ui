<template>
    <div class="topnav">
        <div class="logo" @click="toggleMenu">LOGO</div>
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
    background: pink;
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
}
</style>