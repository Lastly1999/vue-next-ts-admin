<template>
  <TinyAreaChart v-bind="config"/>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import {TinyAreaChart} from "@opd/g2plot-vue"

export default defineComponent({
  name: "tinyArea",
  components: {
    TinyAreaChart
  },
  setup() {
    const data = [
      264,
      417,
      438,
      887,
      309,
      397,
      550,
      575,
      563,
      430,
      525,
      592,
      492,
      467,
      513,
      546,
      983,
      340,
      539,
      243,
      226,
      192,
    ]
    const config = reactive({
      height: 70,
      data: data,
      smooth: true,
      tooltip: true,
      annotations: [
        {
          type: 'line',
          start: ['min', 'mean'],
          end: ['max', 'mean'],
          text: {
            content: '平均值',
            offsetY: -2,
            style: {
              textAlign: 'left',
              fontSize: 10,
              fill: 'rgba(44, 53, 66, 0.45)',
              textBaseline: 'bottom',
            },
          },
          style: {stroke: 'rgba(0, 0, 0, 0.25)'},
        },
        {
          type: 'line',
          start: ['min', 800],
          end: ['max', 800],
          text: {
            content: '目标值',
            offsetY: -2,
            style: {
              textAlign: 'left',
              fontSize: 10,
              fill: 'rgba(44, 53, 66, 0.45)',
              textBaseline: 'bottom',
            },
          },
          style: {stroke: 'rgba(0, 0, 0, 0.55)'},
        },
      ],
    })
    return {config}
  }
})
</script>

<style scoped>

</style>