<script lang="ts">
import {defineComponent} from "vue"
import {createFromIconfontCN} from '@ant-design/icons-vue';

const IconFont: any = createFromIconfontCN({
  scriptUrl: process.env.VUE_APP_ICON_FONT,
});

export default defineComponent({
  name:"treeMenuChildren",
  components: {
    IconFont
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
})
</script>
<!-- viewTyping -->
<template>
  <a-sub-menu :key="menuInfo.menuid" v-bind="$attrs" >
    <template #title>
        <span>
          <icon-font :type="menuInfo.menuicon"/>
         <span>{{ menuInfo.menuname }}</span>
        </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.menuid">
      <template v-if="!item.children">
        <a-menu-item :key="item.menupath">
          <icon-font :type="item.menuicon"/>
          <span>{{ item.menuname }}</span>
        </a-menu-item>
      </template>
<!--      <template v-else>-->
<!--&lt;!&ndash;        <subMenu :menu-info="item" :key="item.menupath" />&ndash;&gt;-->
<!--      </template>-->
    </template>
  </a-sub-menu>
</template>
