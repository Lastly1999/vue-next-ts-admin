<!-- viewTyping -->
<template>
  <div class="loginView">
    <!-- 背景 -->
    <a-row align="middle" style="height: 100%;width: 100%">
      <a-col class="loginContainer" :span="18" :offset="6">
        <div class="loginFormContainer">
          <!-- 登陆控件 -->
          <loginFrom/>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import "./style/index.scss"
import loginFrom from "@/components/loginComp/loginFrom/loginFrom.vue" // 表单组件

export default defineComponent({
  components: {
    loginFrom
  },
  name: "loginView",
  setup() {
    return {}
  }
})
</script>
