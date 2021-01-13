<template>
  <iframe
    class="iframeBorad"
    src="https://www.baidu.com"
    frameborder="0"
  ></iframe>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "board",
  setup() {
    return {};
  },
}); 
</script>

<style>
.iframeBorad {
  width: 100%;
  height: 100%;
}
</style> 