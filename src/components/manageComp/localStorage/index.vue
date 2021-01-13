<template>
  <div class="localStorage">
    <div class="cookieGroup">
      <a-input
        class="inputKey"
        v-model:value="key"
        placeholder="此处输入localStorage-key值"
      />
      <a-input
        class="inputValue"
        v-model:value="value"
        placeholder="此处输入localStorage-value值"
      />
      <a-button class="appendBtn" @click="addLocalStorage">添 加</a-button>
      <a-button type="primary" @click="getLocalStorage">读 取</a-button>
    </div>
    <a-textarea
      :rows="25"
      v-model:value="textVal"
      placeholder="Autosize height based on content lines"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { LocalStorage } from "@/utils/tool/localStorage";
import { AntdNotice } from "@/utils/antd/antdNotice";
export default {
  name: "localStorage",
  setup() {
    const localStore = new LocalStorage();
    const notice = new AntdNotice();
    const localStorageClass = reactive({
      key: "",
      value: "",
      textVal: "",
      addLocalStorage: () => {},
      getLocalStorage: () => {
        localStorageClass.textVal = JSON.stringify(localStore.getStorage());
        notice.showNotice("success", "查询localStorage成功", "");
      },
    });
    return { ...toRefs(localStorageClass) };
  },
};
</script>

<style>
</style>