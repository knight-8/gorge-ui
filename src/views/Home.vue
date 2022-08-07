<template>
    <div>
        <TopNav/>
        <div class="topnav">
            <div class="logo">LOGO</div>
            <div class="menu">
                <ul>
                    <li>菜单1</li>
                    <li>菜单2</li>
                </ul>
            </div>
        </div>
        <div class="banner">
            <h1>HomeUI</h1>
            <h2>一个炫目的UI框架</h2>
            <p class="actions">
                <a href="">Github</a>
                <a href="">开始</a>
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
.topnav{
    background: pink;
    display: flex;
    padding: 16px;
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