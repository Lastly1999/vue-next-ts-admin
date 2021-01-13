<template>
  <ColumnChart v-bind="colConfig"></ColumnChart>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import {ColumnChart} from '@opd/g2plot-vue'

export default defineComponent({
  name: "charts",
  components: {
    ColumnChart
  },
  setup() {
    const data = [
      {type: '未知', value: 654, percent: 0.02},
      {type: '17 岁以下', value: 654, percent: 0.02},
      {type: '18-24 岁', value: 4400, percent: 0.2},
      {type: '25-29 岁', value: 5300, percent: 0.24},
      {type: '30-39 岁', value: 6200, percent: 0.28},
      {type: '40-49 岁', value: 3300, percent: 0.14},
      {type: '50 岁以上', value: 1500, percent: 0.06},
    ];
    const colConfig = reactive({
      data: data,
      height: 250,
      autoFit: true,
      xField: 'type',
      yField: 'value',
      label: {
        fields: "percent",
      }
    })
    // document.documentElement("cardId")
    return {colConfig, data}
  }
})
</script>

<style scoped>

</style>