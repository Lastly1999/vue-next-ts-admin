<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name:"divider",
  props: {
    title: {
      type: String,
      default: () => "标题"
    }
  },
  setup() {
    return {}
  }
})
</script>
<template>
  <a-divider orientation="left" style="margin-top: 0">
    {{ title }}
  </a-divider>
</template>
