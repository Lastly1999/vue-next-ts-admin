<template>
  <a-input-search
      v-model:value="keywords"
      placeholder="请输入关键字搜索"
      style="width: 200px"
      enter-button
      @search="inputSearch"
  />
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue"

export default defineComponent({
  name: "searchInput",
  setup(props, context) {
    const searchInputClass = reactive({
      keywords: "",
      inputSearch: (val: string) => {
        context.emit('searchInput', val)
      }
    })

    return {...toRefs(searchInputClass)}
  }
})
</script>
