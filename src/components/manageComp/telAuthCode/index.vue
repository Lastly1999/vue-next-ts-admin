<template>
  <div class="telAuthCode">
    <a-input-search
      :style="{ width: `${width}px` }"
      v-model:value="tel"
      :placeholder="text"
      ><template #enterButton>
        <a-button :type="btnType" @click.passive="enterCode"><slot></slot></a-button>
      </template>
    </a-input-search>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "telAuthCode",
  props: {
    text: {
      type: String,
      default: () => "",
    },
    btnType: {
      type: String,
      default: () => "",
    },
    width: {
      type: Number,
      default: () => 200,
    },
  },
  setup(props, context) {
    const telAuthCodeClass = reactive({
      tel: "",
      enterCode: () => {
        console.log(telAuthCodeClass.tel)
        context.emit("telCheckClick", telAuthCodeClass.tel);
      },
    });
    return { ...toRefs(telAuthCodeClass) };
  },
});
</script>

<style>
</style>