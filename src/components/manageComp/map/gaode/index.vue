<template>
  <div id="gaodeMap" style="width: 100%;height: 600px"></div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import AMapLoader from '@amap/amap-jsapi-loader';

export default defineComponent({
  name: "gaodeMap",
  setup() {
    // 高德地图加载配置
    AMapLoader.load({
      "key": "4b33595ddb620f908c00f3fbf2a57b21",          // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      "plugins": [],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      "AMapUI": {                                         // 是否加载 AMapUI，缺省不加载
        "version": '1.1',                                 // AMapUI 缺省 1.1
        "plugins": [],                                    // 需要加载的 AMapUI ui插件
      },
      "Loca": {                                           // 是否加载 Loca， 缺省不加载
        "version": '1.3.2'                                // Loca 版本，缺省 1.3.2
      },
    }).then((AMap) => {
      const map = new AMap.Map('gaodeMap', {
        zoom: 11,                                         //级别
        center: [116.397428, 39.90923],                   //中心点坐标
        viewMode: '3D',       //使用3D视图
        mapStyle: 'amap://styles/drakblue', //设置地图的显示样式
      });
    }).catch(e => {
      console.log(e);
    })
    return {}
  }
})
</script>

<style scoped>

</style>