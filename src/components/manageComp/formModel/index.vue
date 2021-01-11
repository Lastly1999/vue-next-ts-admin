<template>
  <a-divider orientation="left">
    信息登记{{ index }}
  </a-divider>
  <a-from :layout="layout" v-for="(item,index) in form" labelAlign="right">
    <a-form-item label="姓名">
      <a-input placeholder="请输入姓名" v-model:value="item.name"/>
    </a-form-item>
    <a-form-item label="身份证号码">
      <a-input placeholder="请输入身份证号码" v-model:value="item.cardId"/>
    </a-form-item>
    <a-form-item label="照片">
      <a-input placeholder="请上传照片" v-model:value="item.photo"/>
    </a-form-item>
    <a-form-item label="邮箱">
      <a-input placeholder="请输入邮箱" v-model:value="item.email"/>
    </a-form-item>
    <a-form-item label="住址">
      <a-input placeholder="请输入住址" v-model:value="item.address"/>
    </a-form-item>
    <a-form-item label="职位">
      <a-input placeholder="请输入职位" v-model:value="item.position"/>
    </a-form-item>
    <a-form-item label="工龄">
      <a-input placeholder="请输入工龄" v-model:value="item.workingYears"/>
    </a-form-item>
    <a-form-item placeholder="请选择入职日期" label="入职日期">
      <a-input placeholder="请输入工龄" v-model:value="item.dateoFntry"/>
    </a-form-item>
  </a-from>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: "fromModel",
  props: {
    form: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const layout = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    })
    return {...toRefs(layout)}
  }
})
</script>

<style scoped>

</style>