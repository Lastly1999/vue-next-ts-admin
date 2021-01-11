<template>
  <div class="treeMenuForm">
    <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="data"
        @finish="handleFinish"
        :rules="rules"
        @finishFailed="handleFinishFailed"
    >
<!--      <a-form-item v-if="typeof data.menuId != 'null'?true:false" required has-feedback label="菜单ID" name="menuId">-->
<!--        <a-input readonly v-model:value="data.menuId"/>-->
<!--      </a-form-item>-->
      <a-form-item required has-feedback label="菜单名称" name="menuName">
        <a-input v-model:value="data.menuName"/>
      </a-form-item>
      <a-form-item required has-feedback label="菜单图标" name="menuIcon">
        <a-input v-model:value="data.menuIcon"/>
      </a-form-item>
      <a-form-item required has-feedback label="菜单路径" name="menuPath">
        <a-input v-model:value="data.menuPath"/>
      </a-form-item>
      <a-form-item required has-feedback label="父菜单" name="menuParentName">
        <tree-select @selectTreeValue="selectValue" :tree-data="treeData" :default-value="data.menuParentName"/>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">提 交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue"
import TreeSelect from "@/components/manageComp/treeSelect/index.vue";

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
    treeData: {
      type: Array,
      default: () => []
    }
  },
  name: "treeMenuForm",
  components: {TreeSelect},
  setup(props, context) {
    const selectValue = (e: any) => {
      props.data.menuParentId = e.id
      props.data.menuParentName = e.value
    }
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
    return {...toRefs(releFromClass), selectValue};
  }
})
</script>

<style scoped>

</style>