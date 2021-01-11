<!--
 * @Author: your name
 * @Date: 2020-12-08 16:06:38
 * @LastEditTime: 2020-12-11 09:16:11
 * @LastEditors: Please set LastEditors
 * @Description: 消息队列命令行组件 状态
 * @FilePath: \adminboker_master\src\components\manageComp\newsSoket\index.vue
-->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
<!-- view -->
<template>
  <div class="soketContainer">
    <template v-for="item in list" :key="item.id">
      <p style="color: #fff">{{ item.info }}</p>
    </template>
    <slot></slot>
  </div>
</template>