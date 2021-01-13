<template>
  <div id="qqMap" style="width: 100%;height: 600px"></div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from "vue"

export default defineComponent({
  name: "qqMap",
  setup() {
    // 地图初始化方法
    const initQqMap = () => {
      const myLatLng = new qq.maps.LatLng(39.90923, 116.397428) // 创建坐标点
      const mayOption = {
        zoom: 8, // 缩放比例
        center: myLatLng, // 坐标中心点
        mapTypeId: qq.maps.MapTypeId.ROADMAP // 地图类型id
      }
      const map = new qq.maps.map(document.getElementById("qqMap"), mayOption) // 构造腾讯地图实例 获取qqMap元素作为容器
    }
    onMounted(() => {
      initQqMap();
    })
    return {initQqMap}
  }
})
</script>