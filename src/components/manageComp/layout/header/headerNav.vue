<template>
  <div class="headerNav">
    <a-layout-header style="background: #fff; padding: 0">
      <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="closeSider"
      />
      <menu-fold-outlined v-else class="trigger" @click="openSider"/>
      <slot/>
    </a-layout-header>
  </div>
</template>

<script lang="ts">
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons-vue";
import {defineComponent, reactive, toRefs} from "vue";
import {Layout} from "ant-design-vue"
import "./style/index.scss";

const headerNav = defineComponent({
  name: "layouHeader",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ALayoutHeader: Layout.Header
  },
  props: {
    collapsed: {
      type: Boolean,
      default: () => true,
    },
  },
  setup(props, context) {
    const outLinedOUnfoldClass = reactive({
      closeSider: () => {
        context.emit("close");
      },
      openSider: () => {
        context.emit("open");
      },
    });
    return {
      ...toRefs(outLinedOUnfoldClass),
    };
  },
});
export default headerNav;
</script>