<!-- 树形选择器组件 -->
<script lang="ts">
import {defineComponent, ref} from "vue"

export default defineComponent({
  name: "treeSelect",
  props: {
    treeData: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const treeInputValue = ref("")
    const treeNodeOption = ref({children: 'children', title: 'menuname', key: 'menuid', value: 'menupath'})
    return {treeInputValue, treeNodeOption}
  }
})
</script>
<!-- viewTyping -->
<template>
  <a-tree-select
      :replaceFields="treeNodeOption"
      v-model:value="treeInputValue"
      style="width: 400px"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :tree-data="treeData"
      placeholder="Please select"
      tree-default-expand-all
  >
    <template #title="{ key, value }">
      <span style="color: #08c" v-if="key === '0'"> {{ value }} </span>
    </template>
  </a-tree-select>
</template>
