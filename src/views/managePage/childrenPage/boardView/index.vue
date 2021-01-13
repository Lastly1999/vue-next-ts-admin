<template>
  <div class="dataView">
    <dataView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dataView from "@/components/manageComp/boardView/index.vue";
export default defineComponent({
  name: "data",
  components: {
    dataView,
  },
  setup() {
    return {};
  },
});
</script>

<style>
.dataView{
    height: 100%;
    background: #fff;
    padding: 30px;
}
</style>