<demo>
支持 disabled
</demo>

<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import disabled from "../lib/Button.vue"
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>