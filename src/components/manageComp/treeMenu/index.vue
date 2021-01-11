<template>
  <div>
    <a-menu
        v-model:selectedKeys="activeKey"
        mode="inline"
        theme="dark"
        @click="clickMenu"
    >
      <template v-for="item in list" :key="item.menuId">
        <template v-if="!item.children">
          <a-menu-item :key="item.menuPath">
            <icon-font :type="item.menuIcon"/>
            <span>{{ item.menuName }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <subMenu :menu-info="item" :key="item.menuPath" :title="item.menuName"></subMenu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, watch} from 'vue'
import subMenu from "./subMenu.vue"
import {createFromIconfontCN} from '@ant-design/icons-vue';
import {useStore} from "vuex";
import {RouteLocationMatched, useRoute} from "vue-router";

const IconFont: any = createFromIconfontCN({
  scriptUrl: process.env.VUE_APP_ICON_FONT,
});

export default defineComponent({
  name: "treeMenu",
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
  },
  components: {
    subMenu,
    IconFont
  },
  setup(props, context) {
    const store = useStore();
    const route = useRoute();
    const clickMenu = (path: string) => {
      context.emit('to', path)
    }
    const activeKey: Array<string> = reactive([])
    onMounted(() => {
      store.commit("appendOptions", route.matched[1])
      store.commit("setOptionIndex", route.matched[1].path)
    })
    watch(() => route.matched, (nv: Array<RouteLocationMatched>, ov: Array<RouteLocationMatched>) => {
      activeKey[0] = nv[1].path
    })
    return {clickMenu, activeKey}
  }
});
</script>
