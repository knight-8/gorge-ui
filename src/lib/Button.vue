import { computed } from 'vue'
<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-18 18:34:14
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-13 13:19:59
 * @FilePath: \com-ui-1\src\lib\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <button class="gorge-button"
    :class="classes"
    :disabled="disabled">
    <span v-if="loading" class="gorge-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      defalut: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`gorge-theme-${theme}`]: theme,
        [`gorge-size-${size}`]: size,
        [`gorge-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.gorge-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 259ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    border-color: $blue;
    background: darken(white, 5%);
    color: lighten($blue, 10%);
  }
  &.gorge-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
  }
  &.gorge-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.gorge-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gorge-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.gorge-theme-button {
    &.gorge-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gorge-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.gorge-theme-link {
    &.gorge-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gorge-theme-text {
    &.gorge-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gorge-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gorge-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gorge-theme-link,
  &.gorge-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .gorge-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: gorge-spin 1s infinite linear;
  }
  @keyframes gorge-spin {
      0%{transform: rotate(0deg)} 
      100%{transform: rotate(360deg)} 
  }
}
</style>