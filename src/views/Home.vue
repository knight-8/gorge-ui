<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-05 03:33:17
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-09 13:10:24
 * @FilePath: \com-ui-1\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="topnavAndBanner">
      <TopNav />
      <div class="banner">
        <h1>GorgeUI</h1>
        <h2>一个炫目的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/knight-8/gorge-ui">Github</a>
          <router-link to="/Doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-Vue"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-ts"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-lights"></use>
  </svg>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 24px;
$color: #196e6a;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%)
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  //background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
    }

    &:hover {
      text-decoration: none;
    }
  }
}
.icon {
       width: 3em; height: 3em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>