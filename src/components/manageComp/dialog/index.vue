<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: "modal",
  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
    dialogTitle: {
      type: String,
      default: () => "modal标题"
    }
  },
  setup(props, context) {
    const clear = () => {
      context.emit('clear')
    }
    return {clear}
  }
})
</script>
<!-- viewTyping -->
<template>
  <div>
    <a-modal
        @cancel="clear"
        :visible="visible"
        :title="dialogTitle"
        centered
        :footer="null"
    >
      <slot></slot>
    </a-modal>
  </div>
</template>
