<script lang="ts">
import {defineComponent} from "vue"
import {
  CheckCircleOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  name: "tableList",
  components: {
    CheckCircleOutlined
  },
  props: {
    // 数据源
    dataSource: {
      type: Array,
      default: () => ([])
    },
    // 表头数据源
    columnsSource: {
      type: Array,
      default: () => ([])
    },
    // 表格加载状态
    tableLoading: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props, context) {
    // 修改当前行
    const edit = (colData: object): void => {
      context.emit('edit', colData)
    }
    // 删除当前行
    const remove = (colData: object): void => {
      context.emit('remove', colData)
    }
    return {edit, remove}
  }
})
</script>
<!-- viewTyping -->
<template>
  <a-table :columns="columnsSource" :data-source="dataSource" rowKey="id" :loading="tableLoading">
    <template #flag="{ text }">
      <a-tag v-if="text" color="success">
        <template #icon>
          <check-circle-outlined/>
        </template>
        {{ text == 'true' ? "启用" : text }}
      </a-tag>
      <a-tag v-else color="warning">{{ text == true ? "停用" : text }}</a-tag>
    </template>
    <template #action="{record}">
      <a-button type="primary" shape="round" size="small" @click="edit(record)">
        修改
      </a-button>
      <a-button type="danger" shape="round" size="small" style="margin-left: 10px" @click="remove(record)">
        删除
      </a-button>
    </template>
  </a-table>
</template>
