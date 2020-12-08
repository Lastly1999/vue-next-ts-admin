<script lang="ts">
import {defineComponent, reactive, onMounted, toRefs} from 'vue'
import "./style/index.scss"
import loginFrom from "@/components/loginComp/loginFrom/loginFrom.vue"
import bannerComp from "@/components/loginComp/bannerComp/bannerComp.vue"
import {GetBannerImages} from "@/service/api/loginHttp/index" // service 文件

export default defineComponent({
  components: {
    bannerComp,
    loginFrom
  },
  name: "loginView",
  setup() {
    // 走马灯数据请求
    const bannerCompClass = reactive({
      bannerList: [],
      initBannerImages: async () => {
        await new GetBannerImages().httpPostRequest().then((res: any) => {
          bannerCompClass.bannerList = res.bannerList
        })
      }
    })
    // 初始化请求banner
    onMounted(() => {
      bannerCompClass.initBannerImages()
    })
    return {
      ...toRefs(bannerCompClass)
    }
  }
})
</script>
<!-- viewTyping -->
<template>
  <div class="loginView">
    <!-- 走马灯组件 -->
    <bannerComp :list="bannerList"></bannerComp>
    <!-- 登陆控件 -->
    <loginFrom></loginFrom>
  </div>
</template>
