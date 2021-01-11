<template>
  <div class="soketView">
    <newsSoket class="soketContainer" :list="soketList">
      <soketInput class="soketInput"/>
    </newsSoket>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from 'vue'
import newsSoket from '@/components/manageComp/newsSoket/index.vue'
import soketInput from "@/components/manageComp/newsSoket/soketInput.vue"
import soketList from "@/components/manageComp/newsSoket/soket"
import "./style/index.scss"

export default defineComponent({
  components: {
    newsSoket,
    soketInput
  },
  setup() {
    const soketReadLoadClass = reactive({
      soketList: [...soketList],
      appendText: () => {
        setInterval(() => {
          let i = 1
          let textObj = {
            id: i++,
            info: `[Info] change time:'2020/12/08 ${new Date()} 心跳检测`
          }
          soketReadLoadClass.soketList.push(textObj)
        }, 3000)
      }
    })
    onMounted(() => {
      soketReadLoadClass.appendText()
    })
    return {...toRefs(soketReadLoadClass)}
  }
})
</script>