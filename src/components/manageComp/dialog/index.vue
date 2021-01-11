<script lang="ts">
import {defineComponent} from 'vue'

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
        :destroyOnClose="true"
        @cancel="clear"
        :visible="visible"
        :title="dialogTitle"
        centered
        :footer="null"
        width="600"
    >
      <slot></slot>
    </a-modal>
  </div>
</template>
