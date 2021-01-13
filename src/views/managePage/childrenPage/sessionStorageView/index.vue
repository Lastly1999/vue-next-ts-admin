<template>
  <div class="sessionStorage"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sessionStorage from "@/components/manageComp/sessionStorage/index.vue";
export default defineComponent({
  name: "sessionStorage",
  components: {
    sessionStorage,
  },
  setup() {
    return {};
  },
});
</script>

<style>
</style>