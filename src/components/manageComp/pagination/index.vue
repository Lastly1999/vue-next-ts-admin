<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name:"pagination",
  props: {
    limit: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const onChange = (page: number, pageSize: number) => {
      console.log(page)
    }
    return {onChange}
  }
})
</script>
<!-- viewTyping -->
<template>
  <a-pagination show-quick-jumper v-model:current="limit.pageRange" :total="limit.listTotal" @change="onChange"/>
</template>
