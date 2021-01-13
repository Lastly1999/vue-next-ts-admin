<template>
  <LiquidChart v-bind="config"/>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import {LiquidChart} from "@opd/g2plot-vue"

export default defineComponent({
  name: "Liquid",
  components: {
    LiquidChart
  },
  setup() {
    const config = reactive({
      percent: 0.26,
      statistic: {
        title: {
          formatter: () => '盈利率',
          style: ({percent}: any) => ({
            fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
          }),
        },
        content: {
          style: ({percent}: any) => ({
            fontSize: 60,
            lineHeight: 1,
            fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
          }),
        },
      },
      liquidStyle: ({percent}: any) => {
        return {
          fill: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
          stroke: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
        };
      },
      color: () => '#5B8FF9',
    })
    let data = 0.25;
    const interval = setInterval(() => {
      data += Math.min(Math.random() * 0.1, 0.1);
      if (data < 0.75) {
        config.percent = data;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return {config}
  }
})
</script>

<style scoped>

</style>