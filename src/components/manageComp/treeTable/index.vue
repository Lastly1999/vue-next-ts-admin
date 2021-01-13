<template>
  <a-table
      rowKey="menuId"
      :columns="columns"
      :data-source="data"
      size="middle"
      bordered
  >
    <template #action="{ record }">
      <!-- 修改 -->
      <icon-font style="font-size: 28px;margin-right:5px" type="icon-gai" @click="edit(record)"/>
      <!-- 删除 -->
      <a-popconfirm
          title="Are you sure delete this task?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="remove"
          @cancel="cancel"
      >
        <icon-font
            style="font-size: 28px"
            type="icon-huaban"
            @click="remove(record)"
        />
      </a-popconfirm>

    </template>
  </a-table>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {createFromIconfontCN} from "@ant-design/icons-vue";

const IconFont: object = createFromIconfontCN({
  scriptUrl: process.env.VUE_APP_ICON_FONT,
});

export default defineComponent({
  name: "treeTable",
  components: {
    IconFont,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    let editingKey = ref("");
    const edit = (record: number) => {
      context.emit("edit", record);
    };
    const remove = (record: object) => {
      context.emit("remove", record);
    };
    const cancel = () => {
      console.log('err')
    }
    return {cancel, edit, remove, editingKey};
  },
});
</script>
