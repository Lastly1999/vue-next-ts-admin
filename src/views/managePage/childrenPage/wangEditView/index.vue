<template>
  <div class="wangEditView">
    <h1 class="wangeditTitle">找了很多款基于vue3.0开发的富文本编辑器,最后还是选择了wangeditor这一款编辑器常用,虽然它不是由大型团队开发,但是简单易用体积很小</h1>
    <wangeditor></wangeditor>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import wangeditor from '@/components/manageComp/wangedit/index.vue'

export default defineComponent({
  name: "wangEditView",
  components: {
    wangeditor
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.wangeditTitle{
  text-align: center;
  background: #eef1f6;
  padding: 10px;
}
</style>