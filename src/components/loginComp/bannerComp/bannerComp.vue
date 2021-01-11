<!--
 * @Author: your name
 * @Date: 2020-12-08 08:59:09
 * @LastEditTime: 2020-12-14 12:41:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \adminboker_master\src\components\loginComp\bannerComp\bannerComp.vue
-->
<script lang="ts">
import { defineComponent, ref } from "vue";
import "./index.scss"; // 样式文件

export default defineComponent({
  name: "bannerComp",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    // const serviceUrl: string = process.env.VUE_APP_URL // 图片服务器地址
    const autoplay = ref<boolean>(true); // 是否自动轮播
    return {
      autoplay,
    };
  },
});
</script>
<!-- viewTyping -->
<template>
  <a-carousel :autoplay="autoplay">
    <div v-for="item in list" :key="item.src">
      <img :src="item.src" id="imgBannerContainer" />
    </div>
  </a-carousel>
</template>

