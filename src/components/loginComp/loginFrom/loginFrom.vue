<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue"
import {LoginFromConfigPerson, LoginFromClassPerson} from "./interface" // 接口文件
import {LoginAction} from "@/service/api/loginHttp/index"
import {AntdNotice} from "@/utils/antd/antdNotice"
import {useRouter} from "vue-router"
import "./index.scss" // 样式文件
import {
  UserOutlined
} from '@ant-design/icons-vue';

const loginFrom = defineComponent({
  name: "loginFrom",
  components: {
    UserOutlined
  },
  setup() {
    // 路由实例
    const router = useRouter()

    // 表单配置
    const loginFromConfigClass: LoginFromConfigPerson = reactive<LoginFromConfigPerson>({
      wrapperCol: {span: 24}, // 表单内col属性 栅格布局
      savePws: true, // 保存密码勾选
      autoLogin: false // 自动登录勾选
    })
    // 表单数据
    const loginFromClass: LoginFromClassPerson = reactive<LoginFromClassPerson>({
      loginFrom: {
        userName: localStorage.getItem("userName") || "",
        passWord: localStorage.getItem("passWord") || ""
      },
      // 判断是否保存账号密码
      judgeSave: () => {
        if (loginFromConfigClass.savePws) {
          localStorage.setItem("userName", loginFromClass.loginFrom.userName)
          localStorage.setItem("passWord", loginFromClass.loginFrom.passWord)
        } else {
          localStorage.removeItem("passWord")
        }
      },
      loginAction: async () => {
        await new LoginAction(loginFromClass.loginFrom).httpPostRequest().then((res: any) => {
          if (res.code == 200) {
            new AntdNotice("success", res.msg, "").showNotice()
            loginFromClass.judgeSave()
            router.push('/manage')
          } else {
            new AntdNotice("error", res.msg, "").showNotice()
          }
        })
      }
    })
    return {...toRefs(loginFromClass), ...toRefs(loginFromConfigClass)}
  }
})

export default loginFrom
</script>
<!-- viewTyping -->
<template>
  <div class="loginFrom">
    <a-form layout="horizontal" :model="loginFrom" @submit="loginAction" :wrapper-col="wrapperCol">
      <h1 id="loginFromTitle">登录</h1>
      <div id="loginFromInput">
        <a-form-item>
          <a-input v-model:value="loginFrom.userName" placeholder="Username">
            <template #prefix>
              <UserOutlined style="color:rgba(0,0,0,.25)"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="loginFrom.passWord" type="password" placeholder="Password">
            <template #prefix>
              <UserOutlined style="color:rgba(0,0,0,.25)"/>
            </template>
          </a-input>
        </a-form-item>
      </div>
      <a-form-item>
        <a-checkbox v-model:checked="savePws">
          保存密码
        </a-checkbox>
        <a-checkbox v-model:checked="autoLogin">
          自动登录
        </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button
            type="primary"
            html-type="submit"
            :disabled="loginFrom.userName === '' || loginFrom.passWord === ''"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
