<!-- viewTyping -->
<template>
  <a-layout-content
      class="layout-content"
  >
    <slot></slot>
  </a-layout-content>
</template>

<script lant="ts">
import "./style/index.scss"
import {defineComponent} from "vue"

const contentNav = defineComponent({
  name: "layoutContent",
})
export default contentNav
</script>
<style scoped>
.layout-content {
  background: #f0f2f5;
  margin: 0px 10px 10px 10px;
  padding: 10px;
}
</style>