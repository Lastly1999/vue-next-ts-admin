<template>
  <GaugeChart v-bind="config"/>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import {GaugeChart} from '@opd/g2plot-vue'

export default defineComponent({
  name: "shape",
  components: {
    GaugeChart
  },
  setup() {
    const color = ['#F4664A', '#FAAD14', '#30BF78'];
    const getColor = (percent: any) => {
      return percent < 0.4 ? color[0] : percent < 0.6 ? color[1] : color[2];
    };
    const config = reactive({
      percent: 0.2,
      range: {
        color: getColor(0.2),
      },
      indicator: {
        pointer: {
          style: {
            stroke: '#D0D0D0',
          },
        },
        pin: {
          style: {
            stroke: '#D0D0D0',
          },
        },
      },
      axis: {
        label: {
          formatter(v: any) {
            return Number(v) * 100;
          },
        },
        subTickLine: {
          count: 3,
        },
      },
      statistic: {
        content: {
          formatter: ({percent}: any) => `Rate: ${(percent * 100).toFixed(0)}%`,
        },
        style: {
          fontSize: 60,
        },
      },
      animation: false,
    })
    let data = 0.2;
    const interval = setInterval(() => {
      if (data >= 0.85) {
        clearInterval(interval);
      } else {
        data += 0.001;
        config.percent = data;
        config.range.color = getColor(data)
      }
    }, 100);
    return {config}

  }
})
</script>

