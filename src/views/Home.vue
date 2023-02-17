<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-05 03:33:17
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-15 01:02:13
 * @FilePath: \com-ui-1\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="topnavAndBanner">
      <TopNav />
      <div class="banner">
        <h1>Gorge—UI</h1>
        <h2>一个炫目的 UI框架</h2>
        <p class="actions">
          <a href="https://github.com/knight-8/gorge-ui">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于Vue3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lights"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
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
  clip-path: ellipse(80% 60% at 50% 40%);
}
@media (min-width: 800px) {
  li {
      margin: 16px auto;
  }
}
.features {
  > svg {
    margin: 64px auto;
    width: 400px;
  }

  @media (min-width: 800px) {
    width: 800px;
    > li{
        margin: 16px auto;
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background: lightgreen;
  > .actions {
    padding: 18px 0;
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
</style>