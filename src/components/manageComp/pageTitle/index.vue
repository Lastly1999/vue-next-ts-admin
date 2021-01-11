<template>
  <div class="pageTitle">
    <span class="titleBox"></span>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: () => "首页"
    }
  },
})
</script>

<style scoped>
.titleBox {
  display: inline-block;
  width: 10px;
  height: 40px;
  background: #1890ff;
}

.pageTitle {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.title {
  margin-bottom: 0 !important;
  margin-left: 5px;
}
</style>