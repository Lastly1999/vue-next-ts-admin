<template>
    <PieChart v-bind="PieOptions"/>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import {PieChart} from '@opd/g2plot-vue'

export default defineComponent({
  name: "pie",
  components: {
    PieChart
  },
  setup() {
    const data = [
      {type: '分类一', value: 27},
      {type: '分类二', value: 25},
      {type: '分类三', value: 18},
      {type: '分类四', value: 15},
      {type: '分类五', value: 10},
      {type: '其他', value: 5},
    ];

    const PieOptions = reactive({
      height: 250,
      data: data,
      autoFit: true,
      angleField: 'value',
      colorField: 'type',
      radius: 0.75,
      label: {
        fields: "percent",
      }
    })
    return {PieOptions, data}
  }
})

</script>

<style scoped>

</style>