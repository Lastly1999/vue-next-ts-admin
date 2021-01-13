<template>
  <div class="dataPanView">
    <a-row :gutter="[22, 22]">
      <a-col :span="12">
        <card :title="'仪表盘'">
          <Gauge></Gauge>
        </card>
      </a-col>
      <a-col :span="12">
        <card :title="'水波图'">
          <Liquid/>
        </card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import Gauge from "@/components/manageComp/g2plot/shape/index.vue"
import Liquid from "@/components/manageComp/g2plot/Liquid/index.vue"
import card from "@/components/manageComp/card/index.vue"

export default defineComponent({
  name: "dataPanView",
  components: {
    Gauge,
    card,
    Liquid
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>