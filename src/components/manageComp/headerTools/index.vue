<template>
  <div id="headerBar">
    <!-- 搜索 -->
    <a-tooltip placement="topLeft">
      <template #title>
        <span>搜索</span>
      </template>
      <SearchOutlined id="searchIcon" />
    </a-tooltip>
    <!-- 全屏 -->
    <a-tooltip placement="topLeft">
      <template #title>
        <span>全屏</span>
      </template>
      <FullscreenOutlined @click="fullScreen" id="FullscreenIcon" />
    </a-tooltip>
    <!-- 头像 -->
    <a-tooltip placement="topLeft">
      <template #title>
        <span>头像</span>
      </template>
      <a-avatar :src="photo" shape="square" :size="40"> </a-avatar>
    </a-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { FullscreenOutlined, SearchOutlined } from "@ant-design/icons-vue";
import "./style/index.scss";
import screenfull from "screenfull";

export default defineComponent({
  name: "headerTools",
  props: {
    photo: {
      type: String,
      default: () => "",
    },
  },
  components: {
    FullscreenOutlined,
    SearchOutlined,
  },
  setup() {
    const FullScreen = reactive({
      isFullScreen: false,
      fullScreen: () => {
        if (!screenfull.isEnabled) {
          return false;
        }
        screenfull.toggle();
      },
    });
    return { ...toRefs(FullScreen) };
  },
});
</script>

<style>
</style>