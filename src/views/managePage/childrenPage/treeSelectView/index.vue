<template>
  <div class="treeSelect">
    <treeSelect :treeData="treeList"></treeSelect>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from "vue"
import treeSelect from "@/components/manageComp/treeSelect/index.vue"
import {getTreeMenuList} from '@/service/api/homeHttp'

interface HttpTreePerson {
  treeList: Array<string | number>;
  GetTreeMenuList: () => object;
}

export default defineComponent({
  components: {
    treeSelect
  },
  setup() {
    // 树形选择器数据类
    const httpTreeClass: HttpTreePerson = reactive<HttpTreePerson>({
      treeList: [],
      GetTreeMenuList: async () => {
        const {code, data}: any = await getTreeMenuList();
        if (code === 200) {
          httpTreeClass.treeList = data
        }
      }
    })
    onMounted(() => {
      httpTreeClass.GetTreeMenuList() // 初始化树形选择器数据
    })
    return {...toRefs(httpTreeClass)}

  }
})
</script>
<style>
.treeSelect{
  background: #fff;
  padding: 30px;
}
</style>