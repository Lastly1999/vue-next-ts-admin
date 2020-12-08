<script>
import {defineComponent} from "vue"
import echarts from "@/components/manageComp/echarts/index.vue"

export default defineComponent({
  components: {
    'vcharts': echarts
  },
  name: "manageHome"
})
</script>
<!-- viewTyping -->
<template>
  <vcharts style="height: 100%;"></vcharts>
</template>

