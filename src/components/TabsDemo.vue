<template>
    <Demo :component="Tabs1demo" />
</template>

<script lang='ts'>
import Tabs1demo from './Tabs1demo.vue'
import Demo from './Demo.vue'

export default {
    components: {
        Demo
    },
    setup() {
        return {
            Tabs1demo
        }
    }
}
</script>