<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__bounceInLeft"
    leave-active-class="animate__animated animate__backOutRight"
  >
    <router-view />
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    let transitionName = ref("slide-left");
    watch(
      () => route,
      (to: any, from: any) => {
        alert("123");
        console.log(to);
        console.log(from);
        const fromDepth = to[1].path.split("/").length;
        const toDepth = from[1].path.split("/").length;
        console.log(fromDepth);
        console.log(toDepth);
        transitionName.value =
          toDepth < fromDepth ? "slide-right" : "slide-left";
        console.log(transitionName);
      }
    );
    onMounted(() => {
      console.log(route);
      console.log(router);
    });
    return { transitionName, watch };
  },
});
</script>

<style scoped>
</style>