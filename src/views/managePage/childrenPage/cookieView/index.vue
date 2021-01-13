<template>
  <div class="cookieView">
    <div class="cookieView" style="background: #fff; padding: 30px">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="读取cookie"> <getCookie /> </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getCookie from "@/components/manageComp/cookie/getcookie.vue";

export default defineComponent({
  name: "cookie",
  components: {
    getCookie,
  },
});
</script>

<style lang="scss">
.cookieView {
  .ant-tabs-tab {
    height: auto !important;
  }
}
</style>