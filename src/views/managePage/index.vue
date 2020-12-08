<script lang="ts">
import {defineComponent, toRefs, reactive, onMounted} from "vue"
import {GetTreeMenuList} from "@/service/api/homeHttp/index"
import {CoolOperatingPerson, MenuListPerson} from "@/typings/viewTyping/manageTyping/manageTyping"
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import headerNav from "@/components/manageComp/layout/header/headerNav.vue" // layout头部组件
import contentNav from "@/components/manageComp/layout/content/contentNav.vue" // layout内容组件
import siderNav from "@/components/manageComp/layout/sider/siderNav.vue" // layout左侧导航菜单组件
import treeMenu from "@/components/manageComp/treeMenu/index.vue"
import "./style/index.scss"
import {getParentId} from "@/utils/tool/toolMethod";


export default defineComponent({
  components: {
    headerNav,
    contentNav,
    siderNav,
    treeMenu
  },
  setup() {
    const store = useStore(); //实例化store
    const router = useRouter(); // 实例化路由

    // 操作展开收起左侧导航菜单
    const coolOperatingClass: CoolOperatingPerson = reactive<CoolOperatingPerson>({
      collFlag: false,
      openSider: () => {
        coolOperatingClass.collFlag = true;
      },
      closeSider: () => {
        coolOperatingClass.collFlag = !coolOperatingClass.collFlag
      }
    })

    // 请求左侧导航菜单列表
    const treeMenuListClass: MenuListPerson = reactive<MenuListPerson>({
      menuList: [],
      getTreeMenu: async () => {
        await new GetTreeMenuList().httpPostRequest().then((res: any) => {
          treeMenuListClass.menuList = res.menuList
        })
      }
    })

    // 导航菜单Key值跳转子路由
    const tolink = (keyobj: any) => {
      const menuName = getParentId(treeMenuListClass.menuList, keyobj.key).menuname
      store.commit("setChildrenTitle", menuName)
      router.push(keyobj.key)
    }

    onMounted(() => {
      treeMenuListClass.getTreeMenu()
    })
    return {...toRefs(coolOperatingClass), ...toRefs(treeMenuListClass), tolink, store}
  }
})
</script>
<!-- view -->
<template>
  <a-layout id="components-layout">
    <!-- sider导航菜单 -->
    <siderNav :collapsed="collFlag">
      <!-- 树形菜单 -->
      <treeMenu :list="menuList" @to="tolink"></treeMenu>
    </siderNav>
    <a-layout>
      <!-- header导航头部 -->
      <headerNav @open="openSider" @close="closeSider" :collapsed="collFlag"></headerNav>
      <!-- Main -->
      <contentNav>
        <router-view></router-view>
      </contentNav>
    </a-layout>
  </a-layout>
</template>
