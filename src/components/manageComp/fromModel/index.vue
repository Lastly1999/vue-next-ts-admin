<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from "vue";

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    rules: {
      type: Object,
      default: () => {
      }
    },
  },
  setup(props, context) {
    const releFromClass = reactive({
      // 提交表单且数据验证成功后回调事件
      handleFinish: () => {
        context.emit("okSubmit", props.data);
      },
      // 提交表单且数据验证失败后回调事件
      handleFinishFailed: () => {
        console.log('请检查有问题');
      },
    });
    return {...toRefs(releFromClass)};
  },
});
</script>
<template>
  <a-form
      name="custom-validation"
      ref="ruleForm"
      :model="data"
      @finish="handleFinish"
      :rules="rules"
      @finishFailed="handleFinishFailed"
  >
    <a-form-item required has-feedback label="城市名" name="name">
      <a-input v-model:value="data.name"/>
    </a-form-item>
    <a-form-item required has-feedback label="城市代号" name="countrycode">
      <a-input v-model:value="data.countrycode"/>
    </a-form-item>
    <a-form-item required has-feedback label="行政区域" name="district">
      <a-input v-model:value="data.district"/>
    </a-form-item>
    <a-form-item has-feedback label="人口数量" name="population">
      <a-input-number v-model:value="data.population"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit"> 提交</a-button>
      <a-button style="margin-left: 10px"> 重置</a-button>
    </a-form-item>
  </a-form>
</template>
