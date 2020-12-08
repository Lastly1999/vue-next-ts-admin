<template>
  <div id="map">
  </div>
</template>

<script>
import BMap from 'BMap'

export default {
  name: 'Map',
  data() {
    return {
      map:[]
    }
  },
  methods: {
    createMap() {
      // 创建Map实例
       this.map = new BMap.Map("map")
      // 初始化地图,设置中心点坐标和地图级别
      this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
      //添加地图类型控件
      this.map.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
      }))
      // 设置地图显示的城市 此项是必须设置的
      this.map.setCurrentCity("厦门")
      //开启鼠标滚轮缩放
      this.map.enableScrollWheelZoom(true)
      /* eslint-enable */
    }
  },
  mounted() {
    this.createMap()
  }
}
</script>
<style scoped>
#map {
  height: 500px
}
</style>