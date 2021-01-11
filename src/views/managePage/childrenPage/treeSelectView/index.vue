<!--
 * @Author: your name
 * @Date: 2020-12-01 19:57:24
 * @LastEditTime: 2020-12-03 23:29:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \adminboker_master\src\views\managePage\childrenPage\treeSelectView\index.vue
-->
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
<template>
  <treeSelect :treeData="treeList"></treeSelect>
</template>
