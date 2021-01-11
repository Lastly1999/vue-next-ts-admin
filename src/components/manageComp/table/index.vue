<!--
 * @Author: your name
 * @Date: 2020-12-08 08:59:09
 * @LastEditTime: 2020-12-11 09:17:30
 * @LastEditors: Please set LastEditors
 * @Description: 公用表格组件
 * @FilePath: \adminboker_master\src\components\manageComp\table\index.vue
-->
<!-- viewTyping -->
<template>
  <a-table
    :columns="columnsSource"
    :data-source="dataSource"
    rowKey="id"
    :loading="tableLoading"
    size="middle"
    :scroll="{ y: 'calc(100% - 120px' }"
    bordered
  >
    <template #flag="{ text }">
      <a-tag v-if="text" color="success">
        <template #icon>
          <check-circle-outlined />
        </template>
        启用
      </a-tag>
      <a-tag v-else color="warning">停用</a-tag>
    </template>
    <template
      #action="{ record }">
      <icon-font
        style="font-size: 28px;margin-right:5px"
        type="icon-gai"
        @click="edit(record)"
      />
      <!-- <a-button type="primary" shape="round" size="small" @click="edit(record)">
        修改
      </a-button> -->
      <!-- <a-button
        type="danger"
        shape="round"
        size="small"
        style="margin-left: 10px"
        @click="remove(record)"
      >
        删除
      </a-button> -->
      <icon-font
        style="font-size: 28px"
        type="icon-huaban"
        @click="remove(record)"
      />
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  createFromIconfontCN,
  CheckCircleOutlined,
} from "@ant-design/icons-vue";

const IconFont: object = createFromIconfontCN({
  scriptUrl: process.env.VUE_APP_ICON_FONT,
});

export default defineComponent({
  name: "tableList",
  components: {
    CheckCircleOutlined,
    IconFont,
  },
  props: {
    /**
     * 数据源
     */
    dataSource: {
      type: Array,
      default: () => [],
    },
    /**
     * 表头数据源
     */
    columnsSource: {
      type: Array,
      default: () => [],
    },
    /**
     * 加载状态
     */
    tableLoading: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(props, context) {
    // 修改当前行
    const edit = (colData: object): void => {
      context.emit("edit", colData);
    };
    // 删除当前行
    const remove = (colData: object): void => {
      context.emit("remove", colData);
    };
    return { edit, remove };
  },
});
</script>

