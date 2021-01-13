<template></template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { CookieHandle } from "@/utils/tool/cookie";
export default defineComponent({
  name: "setCookie",
  setup() {
    const cookieForm = reactive({
      key: "",
      value: "",
      addCookie: () => {
        const cookieHandle = new CookieHandle(); // 操作cookie实例
        cookieHandle.setCookies(cookieForm.key, cookieForm.value, 1);
      },
    });
    return { ...toRefs(cookieForm) };
  },
});
</script>

<style>
</style>