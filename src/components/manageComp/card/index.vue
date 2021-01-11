<template>
  <a-card :title="title" :bordered="false" style="width: 100%;display: inline-block">
    <slot></slot>
  </a-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: () => "CardTitle"
    }
  }
})
</script>

<style scoped>

</style>