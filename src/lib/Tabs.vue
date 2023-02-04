<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2023-02-03 10:58:13
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-04 13:23:01
 * @FilePath: \com-ui-1\src\lib\Tabs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="gorge-tabs">
        <div class="garge-tabs-nav">
            <div class="gorge-tabs-nav-item" v-for='(t, index) in titles' :key='index'>{{t}}</div>
        </div>
        <div class="gorge-tabs-content">
            <component v-for="(c, index) in defaults" :is='c' :key="index"/>
        </div>
    </div>
</template>

<script lang='ts'> 
import Tab from './Tab.vue'
export default {
    setup(props, context) {
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            if(tag.type !== Tab){
                throw new Error('Tabs 子标签必须是 Tab')
            }
        })
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        return { 
            defaults,
            titles
        }
    },
}
</script>

<style lang='scss'>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gorge-tabs {
    &-nav{
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: $blue; 
            }
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>