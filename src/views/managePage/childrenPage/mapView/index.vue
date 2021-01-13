<script lang="ts">
import {defineComponent} from 'vue'
import gaodeMap from "@/components/manageComp/map/gaode/index.vue"

export default defineComponent({
  name: "mapView",
  components: {
    gaodeMap,
    // baiduMap,
    // qqMap
  },
  setup() {
    const callback = () => {
      console.log("e")
    }
    return {
      callback
    }
  }
})
</script>
<template>
  <div class="mapTabs">
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="高德地图">
        <gaodeMap/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss">
.mapTabs {
  background: #fff;
  padding: 30px;
  .ant-tabs-nav .ant-tabs-tab {
    height: auto !important;
  }
}
</style>