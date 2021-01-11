<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, index) in routesList" :key="index">
      {{ item.meta.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    /**
     * 初始化面包屑routes栈列表
     */
    const getRoutesList = reactive({
      routesList: [] as any,
      initRoutes: () => {
        getRoutesList.routesList = route.matched.filter((item) => item.name);
      },
    });
    /*
     * 初始化
     */
    onMounted(() => {
      getRoutesList.initRoutes();
    });
    watch(
      () => {
        return route.matched;
      },
      (count: any, prevcount, onInvalidate) => {
        const arr = count.filter((item: any) => item.name);
        getRoutesList.routesList = arr;
        getRoutesList.routesList.map((item: any) => {
          if (item.name === arr.name) {
            console.log("13");
          }
        });
        onInvalidate(() => {
          console.log("清除");
        });
      }
    );
    return { router, ...toRefs(getRoutesList), route };
  },
});
</script>

<style scoped>
</style>