<template>
  <a-row style="background: #fff;padding: 15px 0;margin-bottom: 15px;box-sizing: border-box">
    <a-col :span="2" style="text-align: center">
      <a-avatar :src="store.getters.getUserInfo[0].userAvatar" shape="square" :size="64">
        <template #icon>
          <UserOutlined/>
        </template>
      </a-avatar>
    </a-col>
    <a-col :span="22">
      <h3 style="font-weight: 800">{{store.getters.getUserInfo[0].userName}} 晚上好！你一定有些累了，喝杯咖啡提提神吧！</h3>
      <h5>迷茫又如何？人生路漫漫，在找不到方向的时候上下求索，总能找到自己的那盏指路明灯。</h5>
    </a-col>

  </a-row>

</template>

<script>
import {useStore} from "vuex";

export default {
  name: "index",
  setup() {
    const store = useStore()
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>