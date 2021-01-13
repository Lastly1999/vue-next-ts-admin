<!-- view -->
<template>
  <div>
    <a-layout id="components-layout">
      <!-- sider导航菜单 -->
      <siderNav :collapsed="collFlag">
        <!-- 树形菜单 -->
        <treeMenu :list="menuList" @to="tolink"></treeMenu>
      </siderNav>
      <a-layout>
        <!-- header导航头部 -->
        <headerNav
            @open="openSider"
            @close="closeSider"
            :collapsed="collFlag"
        >
          <headerTools :photo="store.getters.getUserInfo[0].userAvatar"/>
        </headerNav>
        <!-- Main -->
        <tags/>
        <contentNav>
          <switchRouter/>
        </contentNav>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, reactive, onMounted, watch} from "vue";
import {useRouter, RouteLocationMatched, useRoute} from "vue-router";
import {useStore} from "vuex";
import {getTreeMenuList} from "@/service/api/homeHttp";
import {
  CoolOperatingPerson,
  MenuListPerson,
} from "@/typings/viewTyping/manageTyping/manageTyping";
import headerNav from "@/components/manageComp/layout/header/headerNav.vue"; // layout头部组件
import contentNav from "@/components/manageComp/layout/content/contentNav.vue"; // layout内容组件
import siderNav from "@/components/manageComp/layout/sider/siderNav.vue"; // layout左侧导航菜单组件
import treeMenu from "@/components/manageComp/treeMenu/index.vue";
import tags from "@/components/manageComp/tags/index.vue";
import "./style/index.scss";
import {getParentId} from "@/utils/tool/toolMethod";
import switchRouter from "@/components/manageComp/switchRouter/index.vue";
import headerTools from "@/components/manageComp/headerTools/index.vue";

export default defineComponent({
  components: {
    headerNav,
    contentNav,
    siderNav,
    treeMenu,
    tags,
    switchRouter,
    headerTools,
  },
  setup() {
    const store = useStore(); //实例化store
    const router = useRouter(); // 实例化路由
    const route = useRoute(); // 实例化路由栈
    // 操作展开收起左侧导航菜单
    const coolOperatingClass: CoolOperatingPerson = reactive<CoolOperatingPerson>(
        {
          collFlag: false,
          openSider: () => {
            coolOperatingClass.collFlag = true;
          },
          closeSider: () => {
            coolOperatingClass.collFlag = !coolOperatingClass.collFlag;
          },
        }
    );

    // 请求左侧导航菜单列表
    const treeMenuListClass: MenuListPerson = reactive<MenuListPerson>({
      menuList: [],
      getTreeMenu: async () => {
        const {code, data}: any = await getTreeMenuList();
        if (code === 200) {
          treeMenuListClass.menuList = data;
        }
      },
    });
    // 导航菜单Key值跳转子路由
    const tolink = (keyobj: any) => {
      console.log(route.matched);
      const menuName = getParentId(treeMenuListClass.menuList, keyobj.key).menuName;
      store.commit("setChildrenTitle", menuName);
      router.push(keyobj.key);
    };
    // 请求面包屑上方tabs导航栏
    const tabsListClass = reactive({
      tabs: [] as any,
      activeKey: "/home",
      // 初始化tabs列表
      initTabsList: () => {
        tabsListClass.tabs = route.matched.filter(
            (item: RouteLocationMatched) => item.name
        );
        tabsListClass.activeKey = tabsListClass.tabs[0].path;
      },
      // 关闭tabs方法
      onEdit: (e: string) => {
        console.log(e);
        for (const index in tabsListClass.tabs) {
          const idx = tabsListClass.tabs.findIndex(
              (i: RouteLocationMatched) => i.path == e
          );
          if (idx > 0) {
            tabsListClass.tabs.splice(idx, 1);
          }
        }
        tabsListClass.activeKey = tabsListClass.tabs[tabsListClass.tabs.length - 1].path;
        router.push(tabsListClass.activeKey);
      },
    });
    // 点击tabs的回调
    const callback = (activeKey: any) => {
      tabsListClass.activeKey = activeKey;
      router.push(activeKey);
    };
    // 监听路由栈变化
    watch(
        () => reactive(route.matched),
        (nv: any, ov: any) => {
          eachList(nv);
        }
    );
    // 判断面包屑数组内是否已经存在该栈信息
    const eachList = (nv: any) => {
      tabsListClass.activeKey =
          tabsListClass.tabs[tabsListClass.tabs.length - 1].path;
      for (const item in tabsListClass.tabs) {
        const idx = tabsListClass.tabs.findIndex(
            (i: RouteLocationMatched) => i.name == nv[1].name
        );
        idx < 0
            ? tabsListClass.tabs.push(nv[1])
            : tabsListClass.tabs.splice(idx, 1, nv[1]);
      }
      tabsListClass.activeKey = nv[1].path;
    };
    onMounted(() => {
      treeMenuListClass.getTreeMenu();
      tabsListClass.initTabsList();
    });
    return {
      ...toRefs(coolOperatingClass),
      ...toRefs(treeMenuListClass),
      tolink,
      store,
    };
  },
});
</script>

<style>
.ant-table-body {
  overflow-y: auto !important;
}

.ant-pagination-prev a,
.ant-pagination-next a {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>
