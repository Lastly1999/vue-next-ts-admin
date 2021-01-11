<template>
  <div class="home">
    <homeTip/>
    <contentHeaderCard/>
    <a-row :gutter="[22, 22]">
      <a-col :span="24">
        <card :title="'直线统计图'">
          <lineCharts/>
        </card>
      </a-col>
      <a-col :span="12">
        <card :title="'饼图'">
          <PieChart/>
        </card>
      </a-col>
      <a-col :span="12">
        <card :title="'柱状图'">
          <colCharts/>
        </card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PieChart from "@/components/manageComp/g2plot/Pie/index.vue";
import card from "@/components/manageComp/card/index.vue";
import lineCharts from "@/components/manageComp/g2plot/index.vue";
import contentHeaderCard from "@/components/manageComp/echarCard/index.vue";
import homeTip from "@/components/manageComp/homeTip/index.vue"
import colCharts from "@/components/manageComp/g2plot/legendSize/index.vue"

export default defineComponent({
  name: "manageHome",
  components: {
    PieChart,
    card,
    contentHeaderCard,
    lineCharts,
    homeTip,
    colCharts
  },
});
</script>