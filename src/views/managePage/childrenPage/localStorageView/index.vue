<template>
  <div class="localStorageView">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="localStorage存储"> <localStorage /> </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import localStorage from "@/components/manageComp/localStorage/index.vue";
export default defineComponent({
  name: "local",
  components: {
    localStorage,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.localStorageView {
  background: #fff;
  padding: 30px;
  .ant-tabs-nav .ant-tabs-tab {
    height: auto !important;
  }
}
</style>