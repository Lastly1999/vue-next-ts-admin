<template>
  <line-chart v-bind="config"/>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {LineChart} from '@opd/g2plot-vue'

export default defineComponent({
  name: "line",
  components: {
    LineChart
  },
  setup() {
    const data = [
      {year: '1991', value: 3},
      {year: '1992', value: 4},
      {year: '1993', value: 3.5},
      {year: '1994', value: 5},
      {year: '1995', value: 4.9},
      {year: '1996', value: 6},
      {year: '1997', value: 7},
      {year: '1998', value: 9},
      {year: '1999', value: 11},
    ]
    const config = reactive({
      height: 200,
      autoFit: true,
      data: data,
      xField: 'year',
      yField: 'value',
      smooth: true,
      meta: {
        value: {
          max: 15,
        },
      }
    })
    return {data, config}
  }
})

</script>

<style scoped>

</style>