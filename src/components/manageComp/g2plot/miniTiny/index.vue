<template>
  <TinyColumnChart v-bind="config"/>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import {TinyColumnChart} from "@opd/g2plot-vue"

export default defineComponent({
  name: "miniTiny",
  components: {
    TinyColumnChart
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const config = reactive({
      height: 70,
      data: props.data,
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
      ],
    })
    return {config}
  }
})
</script>