<script lang="ts">
import {defineComponent} from 'vue'
import subMenu from "./subMenu.vue"
import {createFromIconfontCN} from '@ant-design/icons-vue';


const IconFont: any = createFromIconfontCN({
  scriptUrl: process.env.VUE_APP_ICON_FONT,
});

export default defineComponent({
  name:"treeMenu",
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
    const clickMenu = (path: any) => {
      context.emit('to', path)
    }
    return {clickMenu}
  }
});
</script>
<template>
  <div>
    <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['2']"
        mode="inline"
        theme="dark"
        @click="clickMenu"
    >
      <template v-for="item in list" :key="item.menuid">
        <template v-if="!item.children">
          <a-menu-item :key="item.menupath">
            <icon-font :type="item.menuicon"/>
            <span>{{ item.menuname }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <subMenu :menu-info="item" :key="item.menupath" :title="item.menuname"></subMenu>
        </template>
      </template>
    </a-menu>
  </div>
</template>
