<script lang="ts">
import "./index.scss"
import {defineComponent} from "vue"

const siderNav = defineComponent({
  name:"layouSider",
  props: {
    collapsed: {
      type: Boolean,
      default: () => false
    },
  },
})
export default siderNav
</script>
<!-- viewTyping -->
<template>
  <div class="siderNav">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible theme="dark" mode="inline"
                    style="height: 100%">
      <div class="logo"/>
      <slot></slot>
    </a-layout-sider>
  </div>
</template>
