<template>
  <div class="menuManageView">
     <formModel :form="formList"/>
  </div>
</template>

<script lang="ts">
import {defineComponent,toRefs,reactive} from 'vue'
import formModel from "@/components/manageComp/formModel/index.vue"
import formList from "@/views/managePage/childrenPage/menuManageView/formJson";

export default defineComponent({
  components:{
    formModel
  },
  setup(){
    const formModel = reactive({
        formList:[...formList]
    })
    return{
      ...toRefs(formModel)
    }
  }
})
</script>