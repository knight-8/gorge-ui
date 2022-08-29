import { computed } from 'vue'
<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-18 18:34:14
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-08-29 13:59:56
 * @FilePath: \com-ui-1\src\lib\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>

    <button class="gorge-button"
            :class="classes">
        <slot />
    </button>


</template>
<script lang="ts">
import { computed } from '@vue/runtime-core';

export default{
    props: {
        theme: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'normal'
        }
    },
     setup(props) {
            const { theme, size } = props;
            const classes = computed(() => {
                return {
                    [`gorge-theme-${theme}`]: theme,
                    [`gorge-size-${size}`]: size
                }
            });
            return{ classes }
        }
}
</script>

<style lang="scss">
$h: 32px;
$border-color:#d9d9d9;
$color:#333;
$blue:#40a9ff;
$radius:4px;
.gorge-button{
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
    
    &::-moz-focus-inner{
        border: 0;
    }
    &.gorge-theme-button{
        &.gorge-size-big{
            font-size:24px;
            height: 48px;
            padding: 0 16px;
        }
        &.gorge-size-small{
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }
    }
}
</style>