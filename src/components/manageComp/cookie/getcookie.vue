<template>
  <div class="cookieGroup">
    <a-input
      class="inputKey"
      v-model:value="key"
      placeholder="此处输入cookie-key值"
    />
    <a-input
      class="inputValue"
      v-model:value="value"
      placeholder="此处输入cookie-value值"
    />
    <a-input-number
      class="inputNumber"
      v-model:value="days"
      :min="1"
      :max="99"
    />
    <a-button class="appendBtn" @click="addCookie">添 加</a-button>
    <a-button type="primary" @click="getCookie">读 取</a-button>
  </div>
  <a-textarea
    v-model:value="textVal"
    placeholder="Autosize height based on content lines"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { CookieHandle } from "@/utils/tool/cookie";
import { GetCookiesPerson } from "@/typings/viewTyping/manageTyping/childrenTyping/cookieView/cookieViewTyping";
import { AntdNotice } from "@/utils/antd/antdNotice";
export default defineComponent({
  name: "getCookie",
  setup() {
    const notice = new AntdNotice(); // 提示实例
    const cookieHandle = new CookieHandle(); // 操作cookie实例
    /**
     * cookie操作
     */
    const getCookies: GetCookiesPerson = reactive({
      key: "",
      value: "",
      days: 1,
      textVal: "",
      getCookie: () => {
        getCookies.textVal = JSON.stringify(cookieHandle.getCookies());
        notice.showNotice("success", "获取cookie成功", "");
        console.log(getCookies.textVal);
      },
      addCookie: () => {
        cookieHandle.setCookies(
          getCookies.key,
          getCookies.value,
          getCookies.days
        );
        notice.showNotice("success", "添加cookie成功", "");
      },
    });
    return { ...toRefs(getCookies) };
  },
});
</script>

<style lang="scss">
.cookieGroup {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  .inputKey,
  .inputValue,
  .inputNumber {
    width: 200px;
    margin-right: 5px;
  }
  .appendBtn {
    margin: 0 10px;
  }
}
</style>