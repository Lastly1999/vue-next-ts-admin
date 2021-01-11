<!--
 * @Author: your name
 * @Date: 2020-12-08 08:59:09
 * @LastEditTime: 2020-12-11 09:17:08
 * @LastEditors: Please set LastEditors
 * @Description: 分页器组件
 * @FilePath: \adminboker_master\src\components\manageComp\pagination\index.vue
-->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "pagination",
  props: {
    limit: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const onChange = (page: number, pageSize: number) => {
      console.log(page);
    };
    return { onChange };
  },
});
</script> 
<!-- viewTyping -->
<template>
  <a-pagination
    show-quick-jumper
    v-model:current="limit.pageRange"
    :total="limit.listTotal"
    @change="onChange"
  />
</template>
