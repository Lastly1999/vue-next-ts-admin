<script lang="ts">
import {defineComponent, ref} from 'vue'
import "./index.scss" // 样式文件

export default defineComponent({
  name: "bannerComp",
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },
  setup() {
    const serviceUrl: string = process.env.VUE_APP_URL // 图片服务器地址
    const autoplay = ref<boolean>(true) // 是否自动轮播
    return {
      serviceUrl,
      autoplay
    }
  }
})
</script>
<!-- viewTyping -->
<template>
  <a-carousel :autoplay="autoplay">
    <div v-for="item in list" :key="item.bannerimgid">
      <img :src="serviceUrl+item.bannerimgurl" id="imgBannerContainer">
    </div>
  </a-carousel>
</template>

