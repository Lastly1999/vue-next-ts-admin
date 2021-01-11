<template>
  <a-button type="primary" @click="add">
    <template #icon>
      <PlusCircleOutlined/>
    </template>
    添加
  </a-button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PlusCircleOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  name: "buttoGroup",
  components: {
    PlusCircleOutlined
  },
  setup(props, context) {
    const add = () => {
      context.emit("add")
    }
    return {add}
  }
})
</script>

<style scoped>

</style>