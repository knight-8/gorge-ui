<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2023-02-03 10:58:13
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2023-02-03 19:59:58
 * @FilePath: \com-ui-1\src\lib\Tabs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div v-for='(t, index) in titles' :key='index'>{{t}}</div>
        <component v-for="(c, index) in defaults" :is='c' :key="index"/>
        
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