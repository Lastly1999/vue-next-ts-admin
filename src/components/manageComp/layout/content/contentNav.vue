<script lant="ts">
import "./style/index.scss"
import {defineComponent} from "vue"
import divider from "@/components/manageComp/divider/index.vue"
import {useStore} from "vuex"

const contentNav = defineComponent({
  name:"layoutContent",
  components: {
    divider
  },
  setup() {
    const store = useStore()

    return {
      store
    }
  }
})
export default contentNav
</script>
<!-- viewTyping -->
<template>
  <a-layout-content
      :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px',height:'100%',borderRadius: '10px'}"
  >
    <divider :title="store.getters.getChildrenTitle"></divider>
    <slot></slot>
  </a-layout-content>
</template>
