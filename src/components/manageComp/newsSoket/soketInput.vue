<!--
 * @Author: your name
 * @Date: 2020-12-09 10:37:28
 * @LastEditTime: 2020-12-11 09:16:52
 * @LastEditors: Please set LastEditors
 * @Description: soket组件子组件命令输入框
 * @FilePath: \adminboker_master\src\components\manageComp\newsSoket\soketInput.vue
-->
<template>
  <a-input-search
      v-model:value="bootValue"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="runBoot"
  />
</template> 

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const runBootClass = reactive({
      bootValue: "",
      runBoot: () => {
        console.log(`运行命令${runBootClass.bootValue}`)
      }
    })
    return {...toRefs(runBootClass)}
  }
})
</script>
