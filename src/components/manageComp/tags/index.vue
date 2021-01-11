<template>
  <a-tabs
      :size="size"
      class="tags"
      style="paading: 0 10px"
      @change="callback"
      :animated="true"
      :hideAdd="true"
      type="editable-card"
      @edit="onEdit"
      v-model:activeKey="activeKey"
  >
    <a-tab-pane
        tabBarGutter="15"
        v-for="item in tabs"
        :closable="item.name == 'home' ? false : true"
        :key="item.path"
    >
      <template #tab>
        <span>
          <icon-font v-if="activeKey === item.path" type="icon-yuandian"/>
          <icon-font v-else type="icon-dian"/>
          {{ item.meta.title }}
        </span>
      </template>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs, watch} from "vue";
import {useRouter, useRoute} from "vue-router";
import {createFromIconfontCN} from "@ant-design/icons-vue";
import "./style/index.scss";

const IconFont: object = createFromIconfontCN({
  scriptUrl: process.env.VUE_APP_ICON_FONT,
});

export default defineComponent({
  name: "tags",
  components: {
    IconFont,
  },
  setup() {
    const router = useRouter(); // 实例化路由
    const route = useRoute(); // 实例化路由栈
    /**
     * tags操作类
     */
    const tagsSwitchClass = reactive({
      size: "small",
      tabs: [] as any,
      activeKey: "",
      initTabsList: () => {
        tagsSwitchClass.tabs.push(route.matched[1]);
        tagsSwitchClass.activeKey = route.matched[1].path;
      },
      callback: (path: string) => {
        router.push(path);
      },
      onEdit: (key: string) => {
        const dex = tagsSwitchClass.tabs.findIndex(
            (item: any) => item.path == key
        );
        tagsSwitchClass.tabs.splice(dex, 1);
        tagsSwitchClass.activeKey = tagsSwitchClass.tabs[dex - 1].path;
        router.push(tagsSwitchClass.activeKey);
      },
      setTags: (route: any) => {
        console.log(route);
        const isExit = tagsSwitchClass.tabs.some((item: any) => {
          return item.path === route[1].path;
        });
        if (!isExit) {
          tagsSwitchClass.tabs.push({
            path: route[1].path,
            meta: route[1].meta,
            name: route[1].name,
          });
        }
        tagsSwitchClass.activeKey = route[1].path;
      },
    });
    /**
     * 监听路由
     */
    watch(
        () => route.matched,
        (newValue: any, oldValue: any) => {
          tagsSwitchClass.setTags(newValue);
        }
    );
    onMounted(() => {
      tagsSwitchClass.initTabsList();
    });
    return {...toRefs(tagsSwitchClass)};
  },
});
</script>

<style>
</style>