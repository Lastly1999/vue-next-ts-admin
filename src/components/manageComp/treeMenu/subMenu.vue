<template>
  <a-sub-menu :key="menuInfo.menuPath" v-bind="$attrs">
    <template #title>
      <span>
        <icon-font :type="menuInfo.menuIcon" />
        <span>{{ menuInfo.menuName }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.menuId">
      <template v-if="!item.children">
        <a-menu-item :key="item.menuPath">
          <icon-font :type="item.menuIcon" />
          <span>{{ item.menuName }}</span>
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";

const IconFont: object = createFromIconfontCN({
  scriptUrl: process.env.VUE_APP_ICON_FONT,
});

export default defineComponent({
  name: "treeMenuChildren",
  components: {
    IconFont,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

