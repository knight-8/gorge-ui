<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2023-02-03 10:58:13
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-08 00:43:35
 * @FilePath: \com-ui-1\src\lib\Tabs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="gorge-tabs">
        <div class="gorge-tabs-nav" ref="container">
            <div class="gorge-tabs-nav-item" :class="{selected: t===selected}"
             v-for='(t, index) in titles' @click="select(t)" :key='index'
              :ref="el => {if (t === selected) selectedItem = el }">{{t}}</div>
             <div class="gorge-tabs-nav-indicator" ref="indicator"></div>
        </div>
        
        <div class="gorge-tabs-content">
            <component class="gorge-tabs-content-item" 
            :class="{ selected: c.props.title === selected }" 
            v-for="c in defaults" :is='c' />
        </div>
    </div>
</template>

<script lang='ts'> 
import Tab from './Tab.vue'
import {
    computed,
    ref,
    onMounted,
    onUpdated
} from 'vue'
export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        const defaults = context.slots.default();
        //const navItems = ref < HTMLDivELement[] >([])
        const selectedItem = ref<HTMLDivElement>(null)
        const indicator = ref < HTMLDivElement >(null)
        const container = ref < HTMLDivElement >(null)
        const x = () => {
            /* const divs = navItems.value
            const result = divs.filter(div => div.classList.
            contains('selected'))[0] */
            const {width} = selectedItem.value.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
            const {left:left1} = container.value.getBoundingClientRect()
            const {left:left2} = selectedItem.value.getBoundingClientRect()
            const left = left2 - left1
            indicator.value.style.left = left + 'px'
        }
        onMounted(() => {
            x()
        })
        onUpdated(() => {
            x()
        })

        defaults.forEach((tag) => {
            if(tag.type !== Tab){
                throw new Error('Tabs 子标签必须是 Tab')
            }
        })
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        const current = computed(() => {
            return defaults.find(tag => tag.props.title === props.selected)
        })
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return { 
            defaults,
            titles,
            select,
            current,
            indicator,
            container,
            selectedItem
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
        position: relative;

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

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;

        &-item {
            display: none;
            &.selected {
                display: block;
            }
        }
    }
}

</style>