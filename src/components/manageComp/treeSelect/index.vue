<template>
  <a-tree-select
      :replaceFields="{children: 'children', title: 'menuName', key: 'menuId', value: 'menuName'}"
      v-model:value="selectValue"
      style="width: 400px"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :tree-data="treeData"
      placeholder="Please select"
      tree-default-expand-all
      @select="changeTreeInput"
  >
    <template #title="{ key, value }">
      <span style="color: #08c" v-if="key === '0'"> {{ value }} </span>
    </template>
  </a-tree-select>
</template>

<script lang="ts">
import {defineComponent, toRefs, reactive} from "vue"

export default defineComponent({
  name: "treeSelect",
  props: {
    treeData: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: String,
      default: () => '首页'
    }
  },
  setup(props, context) {
    const treeSelectClass = reactive({
      selectValue: props.defaultValue,
      changeTreeInput: (value: string, node: any) => {
        treeSelectClass.selectValue = value
        const selectObj = {id: node.dataRef.menuId, value: treeSelectClass.selectValue}
        context.emit("selectTreeValue", selectObj)
      }
    })
    return {...toRefs(treeSelectClass)}
  }
})
</script>
