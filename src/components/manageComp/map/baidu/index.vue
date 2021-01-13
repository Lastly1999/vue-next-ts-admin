<template>
  <div id="baiduMap" style="width:100%;height: 600px"></div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from "vue"

export default defineComponent({
  name: "baiduMap",
  setup() {
    const initBaiduMap = () => {
      /* eslint no-undef: "BMap" */
      let map = new BMap.Map("baiduMap")
      let point = new BMap.Point(116.404, 39.915)
      map.centerAndZoom(point, 15)
      map.enableScrollWheelZoom(true)
    }
    onMounted(() => {
      initBaiduMap();
    })
    return {initBaiduMap}
  }
})
</script>
